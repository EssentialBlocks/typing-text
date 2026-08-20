/**
 * Namespaced stand-ins for the globals the shared `controls` bundle reads.
 *
 * `controls/src` refers to `EssentialBlocksLocalize`, `eb_conditional_localize`
 * and `EssentialBlocksProLocalize` as free variables — 42 references across 20
 * files. Every plugin in the Essential Blocks family emits those names with
 * `wp_localize_script()`, which produces a plain global `var`, so the last
 * script printed on the page silently replaced everyone else's data. The
 * bundles read the object lazily, at React render time, long after all the
 * `-js-extra` blocks have executed, which is why the damage was not confined to
 * whichever plugin loaded last.
 *
 * `controls` is a git submodule shared with the sibling plugins, so those
 * references cannot be edited here. Instead `config/modules.webpack.config.js`
 * registers a webpack ProvidePlugin that resolves each free variable to the
 * matching export below, so every consumer inside this plugin's
 * `dist/modules.js` reads Typing Text's own data and nothing else — while other
 * plugins' bundles keep reading theirs.
 *
 * The names emitted from PHP live in `includes/helpers.php`
 * (`Typing_Text_Helper::enqueues()`). This file is their only reader.
 */

/**
 * Read a global object, or undefined when it is absent or not an object.
 *
 * @param {string} name Global variable name.
 * @return {Object|undefined} The object, if there is one.
 */
function readGlobalObject( name ) {
	if ( typeof window === "undefined" ) {
		return undefined;
	}

	const value = window[ name ];

	return value && typeof value === "object" ? value : undefined;
}

/**
 * Editor data. Emitted as `TypingTextLocalize`.
 *
 * Falls back to an empty object because `controls/src/helpers/index.js`
 * destructures this without an optional chain, and `supportPanel.js` indexes
 * `all_blocks_default` directly — both throw on undefined.
 */
export const EssentialBlocksLocalize = readGlobalObject( "TypingTextLocalize" ) || {};

/**
 * Which editor is running. Emitted as `TypingTextConditionalLocalize`.
 *
 * Only localized on the post and site editor screens; the responsive controls
 * already treat a missing `editor_type` as `edit-post`.
 */
export const eb_conditional_localize =
	readGlobalObject( "TypingTextConditionalLocalize" ) || {};

/**
 * Essential Blocks Pro's data, if Pro happens to be installed.
 *
 * Deliberately *not* namespaced and deliberately not defaulted: this plugin
 * never emits it, and `dynamic-field/components/InputController.js` tests the
 * bare identifier (`if ( didMount && EssentialBlocksProLocalize )`), which
 * throws a ReferenceError when no script has declared the global. Resolving it
 * to `undefined` keeps that test falsy, which is the intended branch.
 */
export const EssentialBlocksProLocalize = readGlobalObject( "EssentialBlocksProLocalize" );
