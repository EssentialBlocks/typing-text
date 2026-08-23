/**
 * Build config for `dist/modules.js` — this plugin's copy of the shared
 * `controls` bundle.
 *
 * Extends `controls/webpack.config.js` rather than replacing it, so entry
 * points, output paths and the `EBTypingTextControls` library name keep coming
 * from the submodule. The only addition is the ProvidePlugin that rebinds the
 * Essential Blocks globals the submodule reads onto Typing Text's own names —
 * see `config/localize.js` for why.
 *
 * Build with, from the plugin root:
 *
 *     npm run build:controls
 */
const path = require( "path" );

const controlsDir = path.resolve( __dirname, "..", "controls" );

// The build runs out of `controls/`, so webpack lives in `controls/node_modules`.
// Resolving from this file's own directory would miss it.
const webpack = require( require.resolve( "webpack", { paths: [ controlsDir ] } ) );

const baseConfig = require( path.join( controlsDir, "webpack.config.js" ) );

const localizeModule = path.resolve( __dirname, "localize.js" );

module.exports = {
	...baseConfig,
	plugins: [
		...baseConfig.plugins,
		new webpack.ProvidePlugin( {
			EssentialBlocksLocalize: [ localizeModule, "EssentialBlocksLocalize" ],
			eb_conditional_localize: [ localizeModule, "eb_conditional_localize" ],
			EssentialBlocksProLocalize: [ localizeModule, "EssentialBlocksProLocalize" ],
		} ),
	],
};
