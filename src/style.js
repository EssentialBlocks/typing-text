const {
    softMinifyCssStrings,
    generateTypographyStyles,
    generateDimensionsControlStyles,
    generateBorderShadowStyles,
    generateBackgroundControlStyles,
    StyleComponent,
} = window.EBTypingTextControls;

import {
    dimensionsMargin,
    dimensionsPadding,
} from "./constants/dimensionsNames";
import {
    typoPrefix_prefixText,
    typoPrefix_suffixText,
    typoPrefix_typedText,
} from "./constants/typographyPrefixConstants";
import { WrpBdShadow } from "./constants/borderShadowConstants";
import { backgroundWrapper } from "./constants/backgroundsConstants";

export default function Style(props) {
    const { attributes, setAttributes, name } = props;

    const {
        blockId,
        prefixColor,
        typedTextColor,
        suffixTextColor,
        textAlign,
    } = attributes;

    const {
        dimensionStylesDesktop: wrapperMarginStylesDesktop,
        dimensionStylesTab: wrapperMarginStylesTab,
        dimensionStylesMobile: wrapperMarginStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: dimensionsMargin,
        styleFor: "margin",
        attributes,
    });

    const {
        dimensionStylesDesktop: wrapperPaddingStylesDesktop,
        dimensionStylesTab: wrapperPaddingStylesTab,
        dimensionStylesMobile: wrapperPaddingStylesMobile,
    } = generateDimensionsControlStyles({
        controlName: dimensionsPadding,
        styleFor: "padding",
        attributes,
    });

    // Prefix typography
    const {
        typoStylesDesktop: prefixTextTypoStylesDesktop,
        typoStylesTab: prefixTextTypoStylesTab,
        typoStylesMobile: prefixTextTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        defaultFontSize: 22,
        prefixConstant: typoPrefix_prefixText,
    });

    // suffix typoghraphy
    const {
        typoStylesDesktop: suffixTextTypoStylesDesktop,
        typoStylesTab: suffixTextTypoStylesTab,
        typoStylesMobile: suffixTextTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        defaultFontSize: 22,
        prefixConstant: typoPrefix_suffixText,
    });

    // typed text typoghrapy
    const {
        typoStylesDesktop: typedTextTypoStylesDesktop,
        typoStylesTab: typedTextTypoStylesTab,
        typoStylesMobile: typedTextTypoStylesMobile,
    } = generateTypographyStyles({
        attributes,
        defaultFontSize: 22,
        prefixConstant: typoPrefix_typedText,
    });

    // wrapper border & shadow settings
    const {
        styesDesktop: bdShadowStyesDesktop,
        styesTab: bdShadowStyesTab,
        styesMobile: bdShadowStyesMobile,
        stylesHoverDesktop: bdShadowStylesHoverDesktop,
        stylesHoverTab: bdShadowStylesHoverTab,
        stylesHoverMobile: bdShadowStylesHoverMobile,
        transitionStyle: bdShadowTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: WrpBdShadow,
        attributes,
    });

    // wrapper background controller
    const {
        backgroundStylesDesktop: wrpBackgroundStylesDesktop,
        hoverBackgroundStylesDesktop: wrpHoverBackgroundStylesDesktop,
        bgTransitionStyle: wrpBgTransitionStyle,
    } = generateBackgroundControlStyles({
        attributes,
        controlName: backgroundWrapper,
        noOverlay: true,
        noMainBgi: true,
    });

    // Fallback colour. Must match the attribute defaults in attributes.js —
    // hardcoding #fff here made a cleared colour render white-on-white.
    const defaultColor = "var(--eb-global-primary-color)";

    // AlignmentToolbar clears to `undefined`, which would emit the literal
    // `text-align: undefined`. Only emit the declaration when it is set.
    const textAlignStyle = textAlign ? `text-align: ${textAlign};` : "";

    // A missing transition string would produce `transition: , ;`, which is
    // invalid and makes the browser drop the whole declaration.
    const transitionStyle = [wrpBgTransitionStyle, bdShadowTransitionStyle]
        .filter(Boolean)
        .join(", ");

    // wrapper styles css in strings ⬇
    const wrapperStylesDesktop = `

	 .eb-typed-wrapper.${blockId} {
		 ${wrapperMarginStylesDesktop}
		 ${wrapperPaddingStylesDesktop}
		 ${bdShadowStyesDesktop}
		 ${wrpBackgroundStylesDesktop}
		 ${textAlignStyle}
		 ${transitionStyle ? `transition: ${transitionStyle};` : ""}
	 }

	 .eb-typed-wrapper.${blockId}:hover {
		 ${wrpHoverBackgroundStylesDesktop}
		 ${bdShadowStylesHoverDesktop}
	 }

	 .eb-typed-wrapper.${blockId}:before {
		 z-index: -11;
	 }
	 `;

    const wrapperStylesTab = `
	 .eb-typed-wrapper.${blockId}{
		 ${wrapperMarginStylesTab}
		 ${wrapperPaddingStylesTab}
		 ${bdShadowStyesTab}
	 }

	 .eb-typed-wrapper.${blockId}:hover {
		 ${bdShadowStylesHoverTab}
	 }
	 `;

    const wrapperStylesMobile = `
	 .eb-typed-wrapper.${blockId}{
		 ${wrapperMarginStylesMobile}
		 ${wrapperPaddingStylesMobile}
		 ${bdShadowStyesMobile}
	 }

	 .eb-typed-wrapper.${blockId}:hover {
		 ${bdShadowStylesHoverMobile}
	 }
	 `;

    // prefix text styles css in strings ⬇
    const prefixTypoStylesDesktop = `
	 .${blockId} .eb-typed-prefix{
		 ${prefixTextTypoStylesDesktop}
		 color: ${prefixColor || defaultColor};
	 }
	 `;

    const prefixTypoStylesTab = `
	 .${blockId} .eb-typed-prefix{
		 ${prefixTextTypoStylesTab}
	 }
	 `;

    const prefixTypoStylesMobile = `
	 .${blockId} .eb-typed-prefix{
		 ${prefixTextTypoStylesMobile}
	 }
	 `;

    // suffix text styles css in strings ⬇
    const suffixTypoStylesDesktop = `
	 .${blockId} .eb-typed-suffix{
		 ${suffixTextTypoStylesDesktop}
		 color: ${suffixTextColor || defaultColor};
	 }
	 `;

    const suffixTypoStylesTab = `
	 .${blockId} .eb-typed-suffix{
		 ${suffixTextTypoStylesTab}
	 }
	 `;

    const suffixTypoStylesMobile = `
	 .${blockId} .eb-typed-suffix{
		 ${suffixTextTypoStylesMobile}
	 }
	 `;

    // typed text styles css in strings ⬇
    const typedTypoStylesDesktop = `
	 .${blockId} .eb-typed-text,.${blockId} .eb-typed-view,.${blockId} .typed-cursor{
		 ${typedTextTypoStylesDesktop}
		 color: ${typedTextColor || defaultColor};
	 }
	 `;

    const typedTypoStylesTab = `
	 .${blockId} .eb-typed-text,.${blockId} .eb-typed-view, .${blockId} .typed-cursor{
		 ${typedTextTypoStylesTab}
	 }
	 `;

    const typedTypoStylesMobile = `
	 .${blockId} .eb-typed-text,.${blockId} .eb-typed-view, .${blockId} .typed-cursor{
		 ${typedTextTypoStylesMobile}
	 }
	 `;

    // all css styles for large screen width (desktop/laptop) in strings ⬇
    const desktopAllStyles = softMinifyCssStrings(`
		 ${wrapperStylesDesktop}
		 ${prefixTypoStylesDesktop}
		 ${suffixTypoStylesDesktop}
		 ${typedTypoStylesDesktop}
	 `);

    // all css styles for Tab in strings ⬇
    const tabAllStyles = softMinifyCssStrings(`
		 ${wrapperStylesTab}
		 ${prefixTypoStylesTab}
		 ${suffixTypoStylesTab}
		 ${typedTypoStylesTab}
	 `);

    // all css styles for Mobile in strings ⬇
    const mobileAllStyles = softMinifyCssStrings(`
		 ${wrapperStylesMobile}
		 ${prefixTypoStylesMobile}
		 ${suffixTypoStylesMobile}
		 ${typedTypoStylesMobile}
	`);

    // `blockId` is assigned by BlockProps.Edit in a post-paint mount effect, so
    // on a freshly inserted block the first render would otherwise emit every
    // rule selected by `.undefined`, which matches nothing: the block paints
    // unstyled and then snaps to its real typography once the id lands.
    // Rendering nothing until the id exists removes that intermediate paint, and
    // keeps `.undefined` CSS out of the `blockMeta` attribute that the PHP style
    // handler writes to the generated frontend stylesheet. Every style rule is
    // generated exactly as before once `blockId` is set.
    if (!blockId) return null;

    return (
        <>
            <StyleComponent
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyles={desktopAllStyles}
                tabAllStyles={tabAllStyles}
                mobileAllStyles={mobileAllStyles}
                blockName={name}
            />
        </>
    );
}
