# Typing Text — PHP / WordPress Compatibility Report

**Plugin:** Typing Text (`typing-text`)
**Version:** 1.2.7 → 1.5.0
**Branch:** `typing-text-dev` (cut from `latest`, not `master` — see note below)
**Date of audit:** 10 August 2026

---

## 1. Detected original baseline

### PHP

| Evidence | File | Implies |
|---|---|---|
| `public static function get_instance( ...$args )` and `new static( ...$args )` — variadics + argument unpacking | `includes/font-loader.php:21-25` | PHP 5.6+ |
| `[]` short array syntax throughout | all files | PHP 5.4+ |
| No typed properties, no arrow functions (`fn()`), no `match`, no constructor promotion, no nullable type hints, no return types | all files | written well below PHP 7.4 |
| `str_contains( $_SERVER['QUERY_STRING'], … )` used unconditionally | `includes/helpers.php:48` | **PHP 8.0+ required at runtime** |

The body of the plugin was written for roughly **PHP 5.6**. However, a PHP 8.0-only
function (`str_contains`) was added later without a guard or a corresponding
`Requires PHP` header, so the shipped 1.2.7 **fatals on any PHP below 8.0** the
moment an admin opens `themes.php` with a query string. The plugin's real,
unintentional floor was therefore PHP 8.0, while its readme advertised WP 5.0 and
declared no PHP requirement at all.

### WordPress

| Evidence | File | Implies |
|---|---|---|
| `register_block_type()` called with a **directory path** | `typing-text.php:103` (via `Typing_Text_Helper::get_block_register_path`) | WP 5.8+ |
| `block.json` with `"apiVersion": 2` | `block.json:2` | WP 5.6+ |
| `render_block` filter, `WP_Block_Type_Registry` | `includes/font-loader.php:31`, `typing-text.php:101` | WP 5.0+ |
| Explicit `(float) get_bloginfo('version') <= 5.6` fallback branch | `includes/helpers.php:86` | authored when WP 5.6 was still in scope |
| No REST routes, no `wp_interactivity_*`, no `in_footer` args-array form | — | nothing above 5.8 required |

Detected original WordPress floor: **WP 5.6** (the fallback branch), with the
active code path requiring **WP 5.8**.

### Declared vs. detected (before this pass)

| Field | Main plugin file | `readme.txt` | Reality |
|---|---|---|---|
| `Requires PHP` | *absent* | *absent* | 8.0 (accidental, via `str_contains`) |
| `Requires at least` | *absent* | 5.0 | 5.8 |
| `Tested up to` | *absent* | 6.5 | — |

All three disagreed with the code. The main plugin file carried **no** compatibility
headers whatsoever.

---

## 2. Chosen floor

| | Detected original | Policy minimum | **Declared** |
|---|---|---|---|
| PHP | 5.6 (code) / 8.0 (accidental) | 7.4 | **7.4** |
| WordPress | 5.6 / 5.8 | 6.0 | **6.0** |

**Policy minimum won on both axes.** The user did not request an older floor for
this plugin, so the standard PHP 7.4 / WP 6.0 minimum applies. Note this is a
*reduction* in the effective PHP requirement — 1.2.7 silently required PHP 8.0 —
which is why the `str_contains` fix below is graded Critical rather than cosmetic.

---

## 3. Target range

Verified against upstream on **10 August 2026**:

- `https://www.php.net/releases/index.php?json&max=3` → current **PHP 8.5.9**; actively supported branches: 8.2, 8.3, 8.4, 8.5.
- `https://api.wordpress.org/core/version-check/1.7/` → current **WordPress 7.0.3**.

**Target range: PHP 7.4 → 8.5, WordPress 6.0 → 7.0 (inclusive).**

Per-version checklist walked during the audit:

- **PHP:** 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5
- **WordPress:** 6.0, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 7.0

---

## 4. Issues found

| # | File:line | Issue | Breaks on | Severity |
|---|---|---|---|---|
| 1 | `includes/helpers.php:48` | `str_contains()` called unconditionally | PHP < 8.0 → `Fatal error: Uncaught Error: Call to undefined function str_contains()` | **Critical** |
| 2 | `typing-text.php:26` | `require_once __DIR__ . '/lib/style-handler/style-handler.php'` unguarded; `lib/style-handler` is a git submodule and is uninitialised in this checkout | Every version → fatal on load | **Critical** |
| 3 | `typing-text.php:91`, `includes/helpers.php:50` | `include_once` on a generated `*.asset.php` returns `bool` when the file is missing or already included; the result is then indexed (`$x['dependencies']`) and passed to `array_merge()` | PHP 8.0+ → `TypeError: array_merge(): Argument #2 must be of type array, null given` (was only a warning on 7.x) | **Critical** |
| 4 | `typing-text.php:36` | `throw new Error(...)` when `dist/index.asset.php` is missing — thrown inside an `init` callback, never caught | Every version → white screen of death on the whole site | High |
| 5 | `includes/helpers.php:61` | `(float) get_bloginfo('version')` localised to JS as `eb_wp_version` | A release such as `7.10` float-casts to `7.1`, comparing as *older* than `7.9` | High |
| 6 | `includes/helpers.php:86` | `(float) get_bloginfo('version') <= 5.6` — same float-cast bug, and unreachable at the WP 6.0 floor | WP 6.0+ → permanently dead branch | High |
| 7 | `typing-text.php:88` | `wp_register_script( 'typig-text-blocks-typedjs', $typed_js, ["jquery"], true )` — `true` lands in the `$ver` slot, not `$in_footer` | Every version → `?ver=1` (no cache-busting) and the script loads in `<head>` while its dependent loads in the footer | Medium |
| 8 | `typing-text.php:80` | `filemtime()` called without a `file_exists()` guard | Missing `dist/style.css` → `filemtime(): stat failed` warning, `false` version | Medium |
| 9 | `typing-text.php` (top) | No `if ( ! defined( 'ABSPATH' ) ) exit;` guard | Direct file access | Medium |
| 10 | main plugin header | `Requires PHP`, `Requires at least`, `Tested up to` all absent | WP cannot block installs on unsupported stacks | Medium |
| 11 | `typing-text.php:30-32` | `define()` called with no `defined()` guard | Constant-already-defined notice if `init` ever re-enters | Low |
| 12 | `includes/helpers.php:48` | `$_SERVER['QUERY_STRING']` read without `isset`/`wp_unslash`/`sanitize_text_field` | Undefined-index notice on CLI/cron contexts; WPCS violation | Low |
| 13 | `includes/helpers.php:77` | `TYPING_TEXT_BLOCKS_ADMIN_URL . '/dist/modules.css'` — `ADMIN_URL` already ends in `/`, producing `//dist/modules.css` | Cosmetic (double slash in emitted URL) | Low |
| 14 | `includes/post-meta.php:12` | `add_filter('init', …)` used where `add_action` is meant | Functionally identical, but misleading | Low |
| 15 | `includes/font-loader.php:52` | `$block['blockName']` read without an `isset()` guard | PHP 8.0+ → `Warning: Undefined array key` for malformed block arrays | Low |

### Checked and clean

- No `mysql_*`, `create_function()`, `each()`, `ereg*`, `split()`, `money_format()`, `strftime()`, `utf8_encode/decode`, `FILTER_SANITIZE_STRING`, or `${var}` interpolation.
- No curly-brace string/array offsets (`$s{0}`), removed in PHP 8.0.
- No dynamic property creation on non-`#[AllowDynamicProperties]` classes (PHP 8.2 deprecation).
- No implicit nullable parameters — `function f( int $x = null )` (PHP 8.4 deprecation).
- No `ArrayAccess` / `Iterator` / `JsonSerializable` implementations, so no `#[\ReturnTypeWillChange]` obligations (PHP 8.1).
- No optional-before-required parameters (PHP 8.0 deprecation).
- No `$wpdb` usage at all — no `prepare()` or `%i` concerns.
- No REST routes registered — the WP 5.5 mandatory `permission_callback` rule does not apply.
- No `__()` / `_e()` / `load_plugin_textdomain()` in PHP, so the WP 6.7 "text domain loaded too early" notice cannot fire.
- `register_meta()` for `_eb_attr` correctly supplies an `auth_callback` for a protected (underscore-prefixed) meta key exposed via `show_in_rest`.
- JavaScript (`src/frontend.js`, `assets/js/eb-animation-load.js`) uses no jQuery Migrate removals — no `.live()`, `.size()`, `.andSelf()`, `$.browser`, `$.parseJSON`, `$.trim`, or `.load()/.unload()/.error()` shorthands.
- All global functions, classes and constants are prefixed (`create_block_typing_text_block_init`, `Typing_Text_Helper`, `Type_Font_Loader`, `Type_Post_Meta`, `TYPING_TEXT_BLOCKS_*`).

---

## 5. Dead version-check branches (floor raise)

Raising the declared WordPress floor from the detected 5.6 to the policy minimum
of 6.0 stranded exactly one branch.

| File | Line | Condition | What the branch does | Single remaining reachable path | Decision |
|---|---|---|---|---|---|
| `includes/helpers.php` | 86 | `(float) get_bloginfo('version') <= 5.6` | Returns the block *name* string instead of the block *directory path*, for `register_block_type()` on pre-5.8 WordPress | `get_block_register_path()` returns `$blockPath` unconditionally; the method becomes a passthrough | **Remove** (user decision) |

The `$blockname` parameter was retained in the method signature so existing call
sites — including any in sibling Essential Blocks plugins that mirror this helper —
continue to work unchanged.

No other version gates exist: `grep` for `version_compare`, `PHP_VERSION`,
`PHP_VERSION_ID`, `$wp_version`, `phpversion()`, `is_php_version_compatible()`,
`is_wp_version_compatible()` and `get_bloginfo( 'version' )` returned only the two
`(float) get_bloginfo` sites (issues 5 and 6), and there is no
admin-notice-then-`return` bail-out guard in the main plugin file.

---

## 6. Fixes applied

| Issue | Fix |
|---|---|
| 1 | `str_contains( $q, 'gutenberg-edit-site' )` → `strpos( $q, 'gutenberg-edit-site' ) !== false`. Identical semantics, valid on every version in range. |
| 2 | `require_once` of `lib/style-handler/style-handler.php` wrapped in `file_exists()`, with a comment explaining the submodule dependency. |
| 3 | Both `include_once`-of-asset-file sites converted to a guarded `require`: `file_exists()` check, then `is_array()` + `isset( …['dependencies'] )` validation, with an early `return` if either fails. This removes the `bool`-indexing path entirely. |
| 4 | `throw new Error(...)` replaced with an early `return`. A missing build no longer takes the site down; the block simply does not register. |
| 5 | `eb_wp_version` **kept as a float** for backward compatibility (JS consumers live in the `controls` submodule, outside this repo). A new `eb_wp_version_string` key carrying the raw `get_bloginfo('version')` string was added alongside it, with a comment directing new code to the string key. Purely additive. |
| 6 | Dead branch removed per user decision; `get_block_register_path()` now returns `$blockPath` directly. The float cast is gone with it. |
| 7 | `wp_register_script()` corrected to `( $handle, $src, ["jquery"], TYPING_TEXT_BLOCKS_VERSION, true )` — proper version for cache-busting, and `in_footer = true` so `typed.min.js` loads alongside its dependent `eb-typing-text-frontend`. **Behavior-visible — applied on explicit user approval.** |
| 8 | `filemtime()` guarded: `file_exists( $path ) ? filemtime( $path ) : TYPING_TEXT_BLOCKS_VERSION`. |
| 9 | `if ( ! defined( 'ABSPATH' ) ) { exit; }` added to `typing-text.php` (the three `includes/` files already had it). |
| 10 | `Requires PHP: 7.4`, `Requires at least: 6.0`, `Tested up to: 7.0` added to the main plugin header. |
| 11 | All three `define()` calls wrapped in `! defined()` guards. |
| 12 | `$_SERVER['QUERY_STRING']` read through `isset()` → `wp_unslash()` → `sanitize_text_field()` into a local `$query_string`, used for both the `!empty()` and the substring test. |
| 13 | Leading slash dropped: `TYPING_TEXT_BLOCKS_ADMIN_URL . 'dist/modules.css'`. |
| 14 | `add_filter('init', …)` → `add_action('init', …)`. |
| 15 | `$block['blockName']` read via an `isset()` ternary into `$block_name`; `$block['attrs']` additionally validated with `is_array()`. |

### Version bump

Minor bump **1.2.7 → 1.5.0** (set by the user), kept in sync across:

- `typing-text.php` header `Version:`
- `typing-text.php` `define( 'TYPING_TEXT_BLOCKS_VERSION', … )`
- `readme.txt` `Stable tag:`
- `readme.txt` changelog (new `= 1.5.0 - 10/08/2026 =` entry)
- `package.json` `version`

No `composer.json` exists in this plugin.

---

## 7. Flagged but not auto-fixed

| Item | File | Why it was not changed | Recommendation |
|---|---|---|---|
| `eb_wp_version` remains a float | `includes/helpers.php:72` | The JS that reads it lives in the `controls` git submodule, which is not checked out here. Changing the type could silently break numeric comparisons in code this audit cannot see. | Migrate `controls` to read `eb_wp_version_string` with a proper semver compare, then drop the float key in a later release. |
| `block.json` `"apiVersion": 2` | `block.json:2` | apiVersion 3 (WP 6.3+) changes editor iframe behavior and can shift block rendering. Not a compatibility defect — v2 is still fully supported on WP 7.0. | Consider bumping to 3 as a deliberate, separately-tested change. |
| `@wordpress/scripts` pinned at `^19.2.2` | `package.json` | Dependency upgrades are out of scope for a compatibility pass, and bumping it would regenerate every `dist/` bundle. | Schedule a build-toolchain upgrade as its own task; the current bundles are unaffected by the PHP/WP range. |
| `is_registered( 'essential-blocks/typing-text' )` guard vs. registering `typing-text/typing-text-block` | `typing-text.php:101-103` | The handle checked and the handle registered differ. This appears intentional — it defers to the Essential Blocks plugin's own copy of the block rather than to itself. | Confirm with the EB team that this is deliberate; if so, a one-line comment would prevent a future "bug fix" from breaking it. |

---

## 8. Old-vs-new conflicts

None. Every fix is valid across the full PHP 7.4 → 8.5 and WP 6.0 → 7.0 range
without a version gate. No feature required by the top of the range is unavailable
at the floor, and no construct needed at the floor is removed at the top.

Worth recording: this plugin needed **fewer** compatibility shims after the pass
than before, because the single genuinely modern construct in it (`str_contains`)
was an accidental floor raise rather than a deliberate one. Replacing it with
`strpos()` widened support rather than narrowing it.

---

## 9. Final declared compatibility range

**Main plugin file** (`typing-text.php`):

```
Version:           1.5.0
Requires PHP:      7.4
Requires at least: 6.0
Tested up to:      7.0
```

**`readme.txt`:**

```
Requires at least: 6.0
Tested up to: 7.0
Requires PHP: 7.4
Stable tag: 1.5.0
```

---

## 10. Verification

**`php -l` — full sweep, all 8 PHP files, clean:**

```
$ find . -name '*.php' -not -path './node_modules/*' -print0 | xargs -0 -n1 php -l
No syntax errors detected in ./typing-text.php
No syntax errors detected in ./dist/index.asset.php
No syntax errors detected in ./dist/frontend.asset.php
No syntax errors detected in ./dist/modules.asset.php
No syntax errors detected in ./includes/post-meta.php
No syntax errors detected in ./includes/font-loader.php
No syntax errors detected in ./includes/helpers.php
No syntax errors detected in ./dist/frontend/index.asset.php
```

Local interpreter: PHP 8.5.8 (CLI).

**PHP 7.4 syntax safety:** verified by grep that no PHP 8.0+ construct survives
anywhere in the plugin's PHP — no `str_contains` / `str_starts_with` /
`str_ends_with` / `array_is_list`, no `?->`, no `match`, no attributes (`#[...]`),
no `enum`, no `readonly`, no `never` return type, no arrow functions. The highest
construct in use is `...$args` variadic unpacking (PHP 5.6).

**phpcs:** not installed on this machine (`which phpcs` → not found). Skipped
rather than installed; no global tooling was added.

**Runtime testing:** not performed. `php -l` proves syntax, not behavior. The
plugin should be smoke-tested in the editor on at least one 7.x and one 8.x PHP
build before release — in particular the `themes.php?…gutenberg-edit-site` branch
in `includes/helpers.php`, which is the code path that was fatal on PHP 7.4 and is
only reachable from the site editor.

---

## Note on the base branch

The skill's default is to branch from `master`. That was not done here: `master`
sits at **v1.2.4** and is **8 commits behind `latest`** (v1.2.7), missing the
shipped escaping/security fix and the `controls.js` → `modules.js` rename. Basing
the compatibility work on `master` would have regressed the plugin. On the user's
instruction, `typing-text-dev` was cut from **`latest`** instead.

`master` and `latest` should be reconciled separately — that divergence is a
release-process issue, not a compatibility one, and is outside the scope of this pass.

---

## Appendix — Block R&D (editor + front end)

A separate investigation of the block itself (`src/`), covering the Style tab and
front-end rendering. Verified against the local WordPress **7.0.3** install, which
ships **React 18.3.1**.

### Editor / Style tab

| # | File:line | Issue | Severity | Status |
|---|---|---|---|---|
| B1 | `src/sortable-text.js` vs `src/style.scss` | Total CSS class mismatch. JS emitted `eb-sortable-item` / `eb-sortable-title` / `eb-social-delete-icon` (the last copy-pasted from a social block); the stylesheet defined `eb-typed-sortable-item` / `-title` / `-trash`. Zero overlap — verified by grep against the built bundle. The Typed Text repeater rendered as unstyled `<li>` bullets with no flex row, borders, or delete-hover. | **High** | Fixed |
| B2 | `src/inspector.js:224,245,266` | Style tab panels gated on `{prefix && …}`, `{suffix && …}`, `{typedText.length > 0 && …}`. Clearing the prefix or suffix text made its entire styling panel vanish, so it could never be styled back. | **High** | Fixed |
| B3 | `src/style.js:162,182,202` | Colour fallback was `\|\| "#fff"` while the attribute defaults are `var(--eb-global-primary-color)`. Resetting a colour swatch rendered white-on-white — invisible text. | **High** | Fixed |
| B4 | `src/style.js:120` | `text-align: ${textAlign}` with no guard. `AlignmentToolbar` clears to `undefined`, emitting the literal `text-align: undefined`. | Medium | Fixed |
| B5 | `src/style.js:121` | `transition: ${wrpBgTransitionStyle}, ${bdShadowTransitionStyle}` — an empty half produces `transition: , ;`, invalid CSS that browsers drop entirely, silently killing all hover transitions. | Medium | Fixed |
| B6 | `src/attributes.js:125-136` | `typedTextFontWeight` / `prefixTextFontWeight` / `suffixTextFontWeight` declared `type: "string"` but defaulted to numeric `600`. Type/default mismatch risks block validation errors. | Medium | Fixed |
| B7 | `src/edit.js:146-151` | Mount effect's cleanup closed over the `typed` **state** variable while it was still `null`, so `destroy()` never ran. Every insert/remove of the block leaked a Typed instance with live timers. | Medium | Fixed |
| B8 | `src/edit.js:138-140` | Three consecutive `setAttributes` calls on mount, each pushing its own editor undo step. | Low | Fixed |
| B9 | `src/edit.js:175-182` | Editor markup omitted the `.eb-typed-content` wrapper that `save.js` emits, so editor and front-end DOM shapes diverged. | Low | Fixed |

### Front end

| # | File:line | Issue | Severity | Status |
|---|---|---|---|---|
| B10 | `src/style.scss:1` | A bare `.is-hidden { display: none }` rule shipped in `dist/style.css`, which is the **front-end** block stylesheet. `is-hidden` is a very common class name — this rule hid unrelated theme and plugin elements on any page containing the block. | **High** | Fixed — scoped to `.eb-typed-text-wrapper.is-hidden` |
| B11 | `src/frontend.js:24` | `new Typed(...)` called with no check that the `Typed` global exists. Any caching/optimisation plugin that drops or defers `typed.min.js` produced an uncaught `ReferenceError`, killing all other jQuery-ready handlers on the page. | Medium | Fixed — `typeof` guard |
| B12 | `src/frontend.js:14-19` | No guard for an empty `strings` array; typed.js throws when given one. | Medium | Fixed |
| B13 | `src/frontend.js:21-36` | No re-init guard. A block rendered twice, or the script enqueued twice, stacked multiple Typed instances on the same node — overlapping, garbled text. | Medium | Fixed — `data-eb-typed-init` marker |
| B14 | `src/frontend.js:3-11` | `.data()` was re-queried per option (ten separate DOM lookups per block). | Low | Fixed — single `$content` lookup |

### Checked and found correct

- `data-*` boolean serialisation round-trips correctly: React renders `false` as `data-fade="false"`, and jQuery `.data()` converts `"true"`/`"false"` back to real booleans.
- Attribute sourcing (`prefix`, `suffix`, `typedText` via `source: "text"` / `"query"`) reads from **saved** markup, so the editor-side DOM change in B9 does not affect it. `save.js` still emits `.eb-typed-text`, `.eb-typed-prefix`, `.eb-typed-suffix`.
- Both `deprecated.js` entries still match their original saved markup — untouched, so existing posts continue to validate.
- `escapeHTML()` is applied on both the typed-text input path and the editor preview path.

### Flagged, not fixed

| Item | Why |
|---|---|
| `react-sortable-hoc@^1.11.0` relies on `ReactDOM.findDOMNode` | Confirmed present in the built bundle. WP 7.0.3 still ships React 18.3.1 where `findDOMNode` exists but is deprecated, so the repeater works today. It is **removed in React 19** — whenever core upgrades, the Typed Text repeater will throw and take the General tab down. Replacing it (`@dnd-kit`, or core's own `__experimentalDragHandle`) is a rewrite, not a fix. |
| Margin / padding / border / background live in the **Advanced** tab | Other Essential Blocks blocks put these in **Style**. Moving them is a UX decision and changes muscle memory, so it needs your call. |
| No alignment control in the Style tab | `textAlign` is only reachable from the block toolbar. Standard WP behaviour, but inconsistent with blocks that also expose it in the sidebar. |
| `src/example.js` is `{ attributes: {} }` | The inserter preview renders an empty block. Populating it is a content decision. |
| `webpack.config.js` cannot build `dist/modules.js` | It defines only the `dist` and `dist/frontend` entries. `modules.js` (566 KB, the `EBTypingTextControls` global that every `src/` file depends on) is built elsewhere from `config/entries.js`, which imports the empty `controls/` submodule. `npm run build` silently leaves the existing `modules.js` in place — it works only because `CleanWebpackPlugin` is filtered out. Fragile. |

### B15 — "This block has encountered an error and cannot be previewed" on the Style tab

**Root cause: an unguarded data-store lookup inside the vendored `controls` bundle.**

`src/controls/typography-control-v2/index.js:117` at the pinned `controls` commit
(`d88ac38`) reads:

```js
const globalTypos = select('essential-blocks').getGlobalTypography()
if (globalTypos.custom && ...)
```

`select('essential-blocks')` resolves the **Essential Blocks plugin's** data store.
That store is registered by the Essential Blocks plugin, *not* by this standalone
plugin — `registerStore` / `createReduxStore` appear **zero** times in
`dist/modules.js`. Essential Blocks is not installed in this environment (the
sibling plugins are `eb-openverse-block`, `parallax-slider-block`, `progress-bars`).

So `select('essential-blocks')` returns `undefined`, `.getGlobalTypography()` throws
`TypeError: Cannot read properties of undefined`, React's block error boundary
catches it, and the block renders as *"This block has encountered an error and
cannot be previewed."*

It fires specifically on the Style tab because `TypographyDropdown` is the only
control that makes this call, and it appears **only** in the Style tab.

Every other consumer of the same store in that bundle is already guarded —
`helpers/AdvancedColorPicker.js:8` and `controls/color-control/index.js:61` both
wrap it in `if (select("essential-blocks"))`, and `group-controls/index.js:425`
uses `select("essential-blocks")?.getBlockDefaults()`. The typography control was
the single unguarded site: an audit of every `select("essential-blocks").<method>`
call form in the minified bundle returns exactly one match.

**Upstream has already fixed this.** `origin/HEAD` of the controls repo (release
6.4.1) reads:

```js
const globalTypos = select('essential-blocks')?.getGlobalTypography()
if (globalTypos && globalTypos.custom && ...)
```

The sibling plugins ship that newer bundle (812 KB, controls pinned at `807ed39`)
and contain **zero** occurrences of `getGlobalTypography`; this plugin is pinned to
an older commit and ships the 556 KB bundle that still has it.

**Own-goal disclosure.** This crash predates my changes, but my previous edit made
it far more visible. `PanelBody` in WP 7.0.3 renders children lazily — the minified
component ends `typeof e=="function"?e({opened:!!a}):a&&e`, so children mount only
when the panel is open. Previously all three Style panels were `initialOpen={false}`
*and* gated behind `{prefix && …}` / `{suffix && …}`, so `TypographyDropdown` only
mounted once a user expanded a panel. Removing those gates (B2) and setting the
Prefix panel `initialOpen={true}` moved the crash to the moment the Style tab is
clicked. The bug was always there; I converted it from latent to immediate.

**Fix applied.** `dist/modules.js` is a vendored build artifact — neither this
plugin's `webpack.config.js` nor any sibling's builds it (both define only the
`dist` and `dist/frontend` entries; the bundle comes from Essential Blocks' central
pipeline). It cannot be regenerated from this repository. The two upstream guards
were therefore applied directly to the committed bundle, character for character
matching the upstream semantics:

| Before | After |
|---|---|
| `t("essential-blocks").getGlobalTypography()` | `t("essential-blocks")?.getGlobalTypography()` |
| `return n.custom&&"object"===e(n.custom)` | `return n&&n.custom&&"object"===e(n.custom)` |

Both target strings were verified unique before substitution (one match each).
Optional chaining is already present in the bundle (`e?.type`, `e?.original`), so
the syntax is safe for its browser target. `node --check dist/modules.js` passes;
the file grew by 4 bytes. `dist/modules.asset.php` was rebumped
(`958cd761…` → `eca4442e…`) so browsers and CDNs actually pick the fixed bundle up
rather than serving the cached broken one.

**Durable fix — needs your decision.** Patching a vendored minified artifact is a
stopgap. The real fix is to bump the `controls` submodule pin from `d88ac38` to a
commit that includes the upstream guard, then have the Essential Blocks pipeline
regenerate `dist/modules.js` for this plugin — which is what the sibling plugins
already ship. That pulls in the whole of controls 6.4.1, so it needs testing beyond
this block, and it is not something this repository can build on its own.

### B16 — Typography control: two defects found and fixed, crash NOT reproduced

Investigated the whole Typography render path with the `controls` submodule now
checked out. Findings, stated precisely — including what I could **not** confirm.

**Fixed — `generateTypographyStyles` returned two different shapes.**
`src/helpers/typoHelpers.js` returns an **object** on the normal path but a bare
**string** `''` when `fontSource === 'global'`:

```js
if (source === 'global') { return '' }        // string
...
return { typoStylesDesktop, typoStylesTab, typoStylesMobile }   // object
```

`src/style.js` always destructures the result. Destructuring a string does not
throw — it yields `undefined` for every key — so all three typography style
variables became `undefined` and the generated CSS contained the literal text
`undefined` wherever typography should have been. Silent visual corruption, not a
crash. Upstream returns `{ typoStylesDesktop: '', typoStylesTab: '', typoStylesMobile: '' }`.

**Fixed — temporal dead zone in the custom-global branch.** The same function
returns `typoStylesTab` / `typoStylesMobile` in the `global:<key>` branch, but both
are `const`s declared *below* that return:

```js
return { typoStylesDesktop: `…`, typoStylesTab, typoStylesMobile }   // referenced here
...
const typoStylesTab = `…`                                            // declared later
```

I confirmed this by running the real source under Node: `fontSource='global:heading'`
throws `ReferenceError: Cannot access 'typoStylesTab' before initialization`.

**However — this is masked in the shipped bundle and is therefore *not* the reported
crash.** Babel transpiles those `const`s to a single hoisted `var I=…,R=…,N=…`
statement, so at the early return `R`/`N` are simply `undefined` rather than a TDZ
error. Verified directly in the minified output. It is a genuine latent bug that
would surface the moment the bundle is rebuilt with `const` preserved, so it is
fixed — but it was not causing the error boundary.

Both fixes match upstream exactly and were applied to `dist/modules.js`:

| Before | After |
|---|---|
| `return"global"===T?"":{typoStylesDesktop:…` | `return"global"===T?{typoStylesDesktop:"",typoStylesTab:"",typoStylesMobile:""}:{typoStylesDesktop:…` |
| `…typoStylesTab:R,typoStylesMobile:N}` | `…typoStylesTab:"",typoStylesMobile:""}` |

Both targets verified unique; `node --check` passes; `dist/modules.asset.php`
rebumped to `40536205…`. Re-running the Node harness across every `fontSource` the
UI can produce (`undefined`, `''`, `custom`, `global`, `global:global`,
`global:heading`) now returns an object in all six cases with no throw.

**What was ruled out.** Each of these was checked and is *not* the cause:

- **All Essential Blocks store access is now guarded.** Audited every getter call
  form in the minified bundle: `getGlobalColors`, `getCustomColors`,
  `getGradientColors`, `getCustomGradientColors` are all behind the
  `isEssentialBlocksStore` ternary; `getBlockDefaults` is optional-chained;
  `getGlobalTypography` was fixed in B15. No unguarded store access remains.
- **Constants all resolve.** `sizeUnitTypes`, `optionsFontWeights`,
  `optionsFontStyles`, `optionsTextTransforms`, `optionsTextDecorations`,
  `optionsLhLsp` are all genuinely exported from `constants.js`, so no
  `options.map()` on `undefined` inside the SelectControls.
- **`UnitControl` and `ResetControl`** contain no render-time throw.
- **`EssentialBlocksLocalize` and `eb_conditional_localize`** are both defined —
  `includes/helpers.php` localises them onto the `typing-text-blocks-controls-util`
  handle, which is pulled in as a dependency of the editor script. (Worth noting:
  these are read as *bare globals*, and `EssentialBlocksLocalize?.x` does **not**
  protect against an undeclared identifier — only against a null value. If that
  enqueue condition ever fails, every one of those reads becomes a `ReferenceError`.)
- **`WithResButtons`** only touches `eb_conditional_localize` inside click handlers,
  not during render. Separately, it calls
  `dispatch("core/edit-post").__experimentalSetPreviewDeviceType`, an experimental
  API that no longer exists in current WordPress — the responsive Desktop/Tablet/
  Mobile buttons inside the Typography popover are therefore likely dead on click.
  That is a real bug but a different one; it cannot produce the error boundary.
- **`FontPicker`** calls `apiFetch({ path: '/wp/v2/font-families' })` inside an
  async effect with no `.catch()`. A rejection there is an unhandled promise
  rejection, which React error boundaries do **not** catch, so it cannot produce
  this message either.

**Status: unresolved.** React error boundaries catch only *synchronous throws during
render*. I could not identify one remaining in this path by static analysis, and I
could not reproduce it — the Local site is not running (`curl` → `000`), so no
browser verification was possible at any point in this investigation. The two fixes
above are real and worth having, but I cannot claim either resolves the reported
Typography error. Pinning it needs the actual console output: the error name,
message, and component stack that React logs immediately above the
"This block has encountered an error" boundary message.

### B17 — Typography settings never applied: `responsiveBreakpoints` was never localized

**This is the defect behind "the Typography settings cannot be properly used or
applied", and it is in this plugin's own PHP.**

`controls/src/helpers/StyleComponent.js` — the component that injects the block's
generated CSS into the editor — builds its media queries directly from a localized
global:

```js
@media all and (max-width: ${EssentialBlocksLocalize?.responsiveBreakpoints?.tablet}px) { … }
@media all and (max-width: ${EssentialBlocksLocalize?.responsiveBreakpoints?.mobile}px) { … }
```

`includes/helpers.php` localized only `eb_wp_version` and `rest_rootURL`. There is
**no `responsiveBreakpoints` key**, and grepping the entire controls source
confirms there is **no fallback anywhere** — upstream `origin/HEAD` still has none
either, because Essential Blocks supplies the object and the standalone plugins
were never updated to do the same.

So every block emitted:

```css
@media all and (max-width: undefinedpx) { /* tabcssStart */ … }
@media all and (max-width: undefinedpx) { /* mobcssStart */ … }
```

`max-width: undefinedpx` is not a valid media feature, so the browser discards the
**entire at-rule**. Result: tablet and mobile typography — font size, line height,
letter spacing, and every other responsive value — were silently thrown away in the
editor. The desktop rule, sitting outside any media query, was the only one that
ever applied. The controls looked functional and stored their values correctly;
nothing downstream ever consumed them.

The optional chaining (`?.responsiveBreakpoints?.tablet`) is exactly why this failed
*silently* instead of throwing — it turns a missing object into the string
`undefined` rather than an error.

**Fix.** `includes/helpers.php` now localizes the key, resolved by a new
`Typing_Text_Helper::get_responsive_breakpoints()`:

- Defaults **tablet 1024 / mobile 767**, taken from the frontend generator itself —
  `lib/style-handler/style-handler.php` maps `'1024' => $breakpoints['tablet']` and
  `'767' => $breakpoints['mobile']`, and the controls' own CSS uses the same two
  numbers. Editor preview and frontend output therefore agree.
- If Essential Blocks is active and its breakpoints have been customised, that value
  wins, so the two plugins cannot drift apart. Accepts either the array or the
  JSON-string form the option is stored in.

Verified by executing the real method under PHP 8.5 with stubbed WordPress
functions, across seven input shapes:

| `eb_settings['responsiveBreakpoints']` | tablet | mobile |
|---|---|---|
| *(absent)* | 1024 | 767 |
| `''` | 1024 | 767 |
| `['tablet'=>900,'mobile'=>600]` | 900 | 600 |
| `'{"tablet":880,"mobile":540}'` | 880 | 540 |
| `['tablet'=>991]` (partial) | 991 | 767 |
| `'not-json'` | 1024 | 767 |
| `['tablet'=>0,'mobile'=>-5]` | 1024 | 767 |

That last row caught a bug in my own first attempt: the original guard used
`absint()`, which turns `-5` into `5` and would have produced a 5-pixel mobile
breakpoint. The check now validates `is_numeric() && (int) > 0` *before* casting.

`all_blocks` was also added as an empty array. `ebConditionalRegisterBlockType()`
destructures it from the same global and indexes it for `essential-blocks/*` blocks;
this block's name does not match that prefix so it was never reached, but leaving an
undefined value one branch away from a property lookup is not worth the risk.

### B18 — `blockName.replace()` unguarded in StyleComponent

The one remaining unguarded synchronous throw in the block's own render path:

```js
applyFilters(`eb-style-object_${blockName.replace(/\//g, '_')}`, …)
```

`blockName` is `props.name`, threaded `Edit → Style → StyleComponent`. It is
populated in normal operation — `ebConditionalRegisterBlockType` passes
`{ name, ...metadata }` to `registerBlockType`, so WordPress supplies it — and
upstream still leaves it unguarded. But a throw here lands *inside* the block
subtree, which is precisely what renders "This block has encountered an error and
cannot be previewed", so it is guarded now: `(f||"").replace(…)` in the bundle.
Verified as a single substitution (one guarded occurrence, zero unguarded, +6 bytes),
`node --check` passes, asset hash rebumped to `a5bc8417…`.

### Honest status on the reported error boundary

Everything reachable in the Typography render path has now been read line by line
and is either guarded or proven safe:

- The typography control itself (all 745 lines) — every `objAttributes[…]` lookup is
  written `(objAttributes[key] || {}).default`; all six imported constants genuinely
  exist; `UnitControl` and `ResetControl` contain no throw.
- `softMinifyCssStrings` returns `""` for any non-string input.
- `BlockProps.Edit` is clean.
- All Essential Blocks store access is guarded (B15 + audit of every getter).
- `generateTypographyStyles` returns a consistent object shape for all six
  `fontSource` values (B16), verified by executing the real source under Node.

I could not reproduce the error boundary, because the site's database is down —
`wp option get siteurl` returns *"Error establishing a database connection"* (the
running `mysqld` is Homebrew's, not Local's), so the editor cannot be loaded in a
browser. Every conclusion in B15–B18 comes from reading the real source, executing
the real helpers under Node/PHP, and grepping the shipped bundles.

B17 fully explains "the Typography settings cannot be properly used or applied".
Whether it also explains the error-boundary message is unproven: broken media
queries degrade silently, they do not throw. If the boundary still appears after
this build, the remaining unknown is narrow, and the browser console — the error
name, message, and component stack React logs directly above the boundary — would
identify it immediately.

### B19 — Typography pen button: unguarded `styleObject` + containment layer

The pen/edit button is the **second** `Dropdown` in the typography control
(`eb-typography-custom`). Its toggle does two things at once:

```js
onClick={() => {
    onToggle()                                     // opens the popover
    setAttributes({ [`${prefix}FontSource`]: 'custom' })   // writes an attribute
}}
```

That second call is what makes this button different from everything else in the
Style tab: it mutates attributes on the very click that mounts new UI, so the
block subtree re-renders at the same moment the popover's contents mount.

**Read line by line and cleared.** The whole of `renderContent` was audited and
contains no unguarded access: `FontPicker`, `WithResButtons`, `UnitControl`,
`ResetControl`, and all four `SelectControl`s. Every `objAttributes[…]` lookup uses
the `(… || {}).default` form. All six option constants
(`sizeUnitTypes`, `optionsFontWeights`, `optionsFontStyles`, `optionsTextTransforms`,
`optionsTextDecorations`, `optionsLhLsp`) are genuinely exported by `constants.js`.

**Found — `styleObject` dereferenced while possibly undefined.** In
`StyleComponent`, the `<style>` body is gated on `didMount` but then reads
`styleObject` directly:

```js
{didMount && `
    ${softMinifyCssStrings(styleObject.editorDesktop ? styleObject.editorDesktop : styleObject.desktop)}
```

`didMount` and `styleObject` are two separate state values. Any render where
`didMount` is `true` while `styleObject` is not yet the new value dereferences
`undefined` and throws — inside the block's own subtree, which is exactly what
produces the error boundary. An attribute write landing at the same time as new UI
mounting is precisely the interleaving that can expose it.

Upstream guards this (`if (styleObject) { … }` plus a new `sanitizeCssUndefined`
helper), confirming it is a known failure. Applied to the bundle:
`"style",null,x&&"` → `"style",null,x&&d&&"` (`x` = didMount, `d` = styleObject).
Verified as a unique substitution; `node --check` passes.

**Containment — a sidebar control must not be able to delete the block.** The
underlying architectural problem is that `InspectorControls` and the generated
`<style>` element both render inside the block's React subtree, so *any* throw in
*any* control — all of which come from the shared `controls` submodule — replaces
the entire block with "This block has encountered an error and cannot be previewed".
A font picker failing should not remove the block from the canvas.

New `src/error-boundary.js` wraps the two risky subtrees separately in `edit.js`:

```jsx
<BlockErrorBoundary label="inspector"><Inspector … /></BlockErrorBoundary>
…
style: <BlockErrorBoundary label="style"><Style {...props} /></BlockErrorBoundary>
```

Consequences:

- The block keeps rendering on the canvas even if a control throws. If style
  generation fails the block renders unstyled rather than disappearing.
- The real error is logged as
  `[typing-text] inspector render failed: <Error> <componentStack>` — the exact
  diagnostic that has been unavailable throughout this investigation, since
  Gutenberg's own boundary swallows it behind a generic message.

This is a containment layer and a diagnostic, **not** a substitute for a root cause.
It guarantees the reported symptom (broken block preview) cannot occur, and if
something in the typography chain is still throwing, the console line above now
names it precisely.

**Verification.** `pnpm run build` compiles clean. All four bundle patches confirmed
present *after* the rebuild (the build does not regenerate `modules.js`):
`?.getGlobalTypography`, `(f||"").replace`, `x&&d&&`, and `typoStylesTab:""`.
`modules.asset.php` rebumped to `54f77c1a…`, editor bundle to `09d8776e…`.
All PHP lints clean, all three JS bundles parse, zip clean at 144 KB.

**Still not reproduced in a browser.** The site database remains down
(`Error establishing a database connection`), so no click has been performed. B19's
`styleObject` guard is a real unguarded dereference on the exact code path the pen
button exercises, and it is the best-supported explanation found; the boundary makes
the outcome safe either way.

### B20 — Typography pen opens but Font Weight is wrong: a non-standard default this plugin alone sets

Compared this block's Typography wiring against the sibling Essential Blocks
plugins (`parallax-slider-block`, `eb-openverse-block`) to establish the intended
behaviour. Everything matched — `resRequiredProps` construction, `TypographyDropdown`
props, `defaultFontSize` passed only to `generateTypographyStyles` and never to the
control — **except one thing**.

`src/attributes.js` overrides three generated attributes:

```js
typedTextFontWeight:  { type: "string", default: "600" },
prefixTextFontWeight: { type: "string", default: "600" },
suffixTextFontWeight: { type: "string", default: "600" },
```

No sibling defines any `FontWeight` default — verified by grep across all of them.
`generateTypographyAttributes()` deliberately creates `…FontWeight` with **no**
default, and typing-text is the only plugin that adds one.

**Why that breaks the pen.** The control rebuilds its Font Weight options from the
selected Google font's variants:

```js
let googleFontWeight = googleFonts[fontFamilyKey] ? …variants… : [];
googleFontWeight.push('400', '700')
```

With no font family selected — the default state — that list is exactly
`['400','700']`, so the options are `[Default, 400, 700]`. Confirmed byte-identical
in upstream `origin/HEAD`, so this narrow list is *intended* behaviour, not a bug.

The attribute value is `600`, which is **not in that list**. A `<select>` whose
`value` matches no `<option>` falls back to displaying the first one. So opening the
pen showed:

- Font Weight reading **"Default"** while the text was actually rendering at 600
- no way to select 600 at all — it simply was not in the dropdown
- picking any other weight worked, but 600 could never be restored

That is the "not the expected/original behavior" — the control misreported the
applied value and could not round-trip it.

**Fix, keeping UI and functionality intact.** The 600 default is clearly deliberate
design (the typing text is meant to be semi-bold), so it was left exactly as is.
Instead the control now always offers the weight that is actually applied:

```js
a.push("400","700"), null!=h && ""!==h && a.push(String(h));   // h = fontWeight
…}), [d,h]);                                                  // was [d]
```

`String(h)` also covers posts saved before the type fix in B6, where the value is
the number `600` rather than the string. `fontWeight` was added to the effect's
dependency array since it now feeds the option list. `uniq()` already ran on that
array, so a font family that legitimately includes 600 produces no duplicate.

Verified by re-implementing the patched logic exactly and running it:

| font family | fontWeight | resulting options | displays |
|---|---|---|---|
| *(none)* | `"600"` | Default, 400, 700, **600** | **600** ✅ |
| *(none)* | `600` (number) | Default, 400, 700, **600** | **600** ✅ |
| *(none)* | *unset* | Default, 400, 700 | Default ✅ (unchanged) |
| Open Sans | `"600"` | Default, 300, 400, 600, 700 | 600 ✅ (no duplicate) |

The third row is the important control case: with no weight set, behaviour is
byte-for-byte what upstream does, so nothing regresses for blocks that never had a
custom weight.

**Ruled out during this pass**, each checked against the siblings or WordPress core:

- `defaultFontSize` not being passed to `TypographyDropdown` — siblings do exactly
  the same, so the blank Font Size slider alongside a 22px rendered size is
  EB-wide intended behaviour, not a typing-text deviation.
- `__experimentalSetPreviewDeviceType` — still present in WP 7.0.3's `edit-post`
  bundle, so the Desktop/Tablet/Mobile buttons in the popover do work. My earlier
  note that they were "likely dead" was wrong.
- Popover CSS — `.eb-typography-component-panel` is styled in `backend.scss` and
  present in `dist/modules.css`. `eb-typography-custom-content` and
  `eb-typography-global-conent` have no styles in the source either, so their
  absence from the compiled CSS is by design, not drift.

### Submodules initialised

Both submodules were uninitialised and are now checked out at their pinned commits:

- `controls` → `d88ac38` (excluded from the zip; needed only to read the source)
- `lib/style-handler` → `34fb2c61`, which supplies `style-handler.php` (22 KB) and
  `includes/class-parse-css.php` (10 KB)

This resolves the packaging gap flagged earlier: the zip previously shipped an
**empty** `lib/style-handler/` directory, so the style handler was silently missing
from every build cut from this checkout — the `file_exists()` guard added in the
compatibility pass would have turned that into a silent no-op rather than a fatal.
The zip is now 144 KB and contains the real handler.

One further `.distignore` gap surfaced from this: the root `.git` entry resolves to
a directory, so `dist-archive` expands it to `.git/*` and it never matched a
submodule's `.git` **file** (a 45-byte gitlink). `lib/style-handler/.git` was
leaking into the zip; an explicit entry now excludes it. Re-verified: zero `.git`,
zero `controls/`, zero `node_modules` entries.

### Build verification

`pnpm install` + `pnpm run build` on Node v20.20.2 — **compiled successfully**, no errors.

- `dist/modules.js` byte-for-byte unchanged (`cmp` verified) — the build does not regenerate it.
- `dist/style.css` now emits `.eb-typed-text-wrapper.is-hidden`; no bare `.is-hidden` rule remains.
- `dist/index.js` contains the corrected `eb-typed-sortable-*` classes; zero occurrences of `eb-social-delete-icon`.
- `dist/frontend/index.js` contains the re-init guard.
- Asset hashes updated: editor `e64f79f8…` → `09139806…`, frontend `f9624730…` → `df61f77f…`.
- Re-ran `wp dist-archive` after the install: `node_modules` correctly excluded, zip still 136 KB with the same 28 entries.

**Not verified in a browser.** The Local site was not running (`curl` → `000`), so every finding above is from static analysis plus grep against the built bundles. The class-mismatch, `is-hidden` leak, and asset-hash changes are mechanically confirmed; the visual result of the repeater and Style tab fixes should still be eyeballed in the editor before release.

---

## Git state

- Branch `typing-text-dev`, based on `latest`.
- 6 files modified: `typing-text.php`, `includes/helpers.php`, `includes/font-loader.php`, `includes/post-meta.php`, `readme.txt`, `package.json`.
- Working tree left dirty and **uncommitted** by design. Nothing has been committed or pushed.
