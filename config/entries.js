import { hasFilter } from "@wordpress/hooks";

//Export All Controls
import "../controls/src/backend.scss";

//Export All Controls
export { default as ResponsiveDimensionsControl } from "../controls/src/controls/dimensions-control-v2";
export { default as TypographyDropdown } from "../controls/src/controls/typography-control-v2";
export { default as ColorControl } from "../controls/src/controls/color-control";
export { default as BorderShadowControl } from "../controls/src/controls/border-shadow-control";
export { default as BackgroundControl } from "../controls/src/controls/background-control";

/*
 * `controls/src/group-controls` registers two editor filters as an import side
 * effect, both under the namespace "essential-blocks/global":
 *
 *     addFilter( "blocks.registerBlockType", "essential-blocks/global", addAttributes );
 *     addFilter( "editor.BlockEdit",        "essential-blocks/global", withAdvancedControls );
 *
 * @wordpress/hooks does not deduplicate by namespace — it appends. Every plugin
 * carrying a copy of this bundle therefore added another `withAdvancedControls`
 * wrapper on top of every block with `blockRoot: "essential_block"`, producing a
 * duplicate Advanced panel, a duplicate SupportPanel and a duplicate injected
 * <style> element per extra plugin.
 *
 * Typing Text genuinely needs these filters — `classHook` comes from
 * `addAttributes` and is consumed in src/edit.js, src/save.js and
 * src/deprecated.js — so the import cannot simply be dropped. Registering only
 * when nobody else has claimed the namespace keeps exactly one copy active.
 *
 * This fixes the case where another Essential Blocks family bundle loads first.
 * The reverse ordering still doubles up, because the other bundles carry no such
 * guard; the complete fix is a per-bundle namespace in the shared `controls`
 * repository.
 */
if ( ! hasFilter( "editor.BlockEdit", "essential-blocks/global" ) ) {
	require( "../controls/src/group-controls" );
}
export { default as AdvancedControls } from "../controls/src/group-controls/components/advanced-controls";
export { BlockProps } from "../controls/src/components/BlockComponents/EBBlockProps";

//Export Helper Functions
export {
	softMinifyCssStrings,
	generateTypographyStyles,
	generateDimensionsControlStyles,
	generateBorderShadowStyles,
	generateBackgroundControlStyles,
	duplicateBlockIdFix,
	generateTypographyAttributes,
	generateDimensionsAttributes,
	generateBackgroundAttributes,
	generateBorderShadowAttributes,
	ebConditionalRegisterBlockType,
	StyleComponent
} from "../controls/src/helpers";
