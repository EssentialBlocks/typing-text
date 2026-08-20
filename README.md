# Typing Text

Make your website interactive with typing text animation — a Gutenberg block by [WPDeveloper](https://wpdeveloper.com).

[![WordPress](https://img.shields.io/badge/WordPress-6.0%20–%207.0-blue.svg)](https://wordpress.org/plugins/typing-text/)
[![PHP](https://img.shields.io/badge/PHP-7.4%20–%208.5-777bb4.svg)](https://www.php.net/)
[![License](https://img.shields.io/badge/license-GPL--3.0--or--later-green.svg)](https://www.gnu.org/licenses/gpl-3.0.html)

## About

Typing Text adds an animated typewriter effect to the WordPress block editor. Set a prefix, a rotating list of typed phrases, and a suffix, then control speed, delay, looping, cursor and fade behaviour — all from the block sidebar.

The animation is powered by [typed.js](https://github.com/mattboldt/typed.js/) on the front end.

## Requirements

| | Minimum | Tested up to |
|---|---|---|
| WordPress | 6.0 | 7.0 |
| PHP | 7.4 | 8.5 |

## Installation

**From the block editor**

1. Open the WordPress block/Gutenberg editor.
2. Search for "Typing Text".
3. Install in one click.

**Manually**

1. Upload the `typing-text` folder to `/wp-content/plugins/`.
2. Activate the plugin through the *Plugins* menu.
3. See the [documentation](https://essential-blocks.com/docs/).

## Development

This repository uses two git submodules. **Clone with them, or the build and the plugin will both be incomplete:**

```bash
git clone --recurse-submodules git@github.com:EssentialBlocks/typing-text.git
# already cloned?
git submodule update --init --recursive
```

| Submodule | Path | Purpose |
|---|---|---|
| `controls` | `controls/` | Shared Essential Blocks inspector controls |
| `style-handler` | `lib/style-handler/` | Front-end CSS generation |

Install dependencies and build:

```bash
pnpm install
pnpm run build     # production build
pnpm run start     # watch mode
```

### A note on `dist/modules.js`

`webpack.config.js` builds only two entries — `dist/index.js` (editor) and `dist/frontend/index.js` (front end) — plus `dist/style.css`.

It does **not** build `dist/modules.js`. That bundle exposes the `EBTypingTextControls` global that every file in `src/` depends on, and it is produced by the central Essential Blocks pipeline from `config/entries.js` and committed here as a vendored artifact. `pnpm run build` leaves it untouched, which works only because `CleanWebpackPlugin` is filtered out of the config. Deleting `dist/` will remove it with no way to regenerate it from this repository.

### Packaging a release

Zips are produced with [`wp dist-archive`](https://github.com/wp-cli/dist-archive-command), which honours `.distignore`:

```bash
wp package install wp-cli/dist-archive-command   # once
wp dist-archive . ../typing-text.zip
```

`.distignore` uses `zip --exclude` patterns of the form `*/<line>`. Do **not** anchor entries with a leading slash — `/controls/` becomes `*//controls/*`, which matches nothing.

## Contributing

Issues and pull requests are welcome at [EssentialBlocks/typing-text](https://github.com/EssentialBlocks/typing-text/).

Branches:

- `master` — stable
- `latest` — active release line
- `dev` — in-progress work

## Contributors

- [@RahatSheikhLeon](https://github.com/RahatSheikhLeon)

Plus everyone credited in the [plugin directory listing](https://wordpress.org/plugins/typing-text/): `wpdevteam`, `re_enter_rupok`, `Asif2BD`, `rahat89`, `fencermonir`.

## Support

- [Documentation](https://essential-blocks.com/docs/)
- [Support forum](https://wordpress.org/support/plugin/typing-text/)
- [Report an issue](https://github.com/EssentialBlocks/typing-text/issues)

## License

GPL-3.0-or-later. See [the licence text](https://www.gnu.org/licenses/gpl-3.0.html).
