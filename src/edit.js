/**
 * WordPress dependencies
 */
const { useEffect, useRef, useState } = wp.element;
const {
	BlockControls,
	AlignmentToolbar,
	useBlockProps,
} = wp.blockEditor;

const { select } = wp.data;

import "./editor.scss";

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
import {
	softMinifyCssStrings,
	isCssExists,
	generateTypographyStyles,
	generateDimensionsControlStyles,
	generateBorderShadowStyles,
	generateBackgroundControlStyles,
	mimmikCssForPreviewBtnClick,
	duplicateBlockIdFix,
} from "../util/helpers";

/**
 * External dependencies
 */
import Typed from "typed.js";
/**
 * Internal dependencies
 */
import Inspector from "./inspector";

export default function Edit(props) {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const {
		blockId,
		blockMeta,
		// responsive control attribute ⬇
		resOption,
		prefix,
		typedText,
		typeSpeed,
		startDelay,
		smartBackspace,
		backSpeed,
		backDelay,
		fadeOut,
		fadeOutDelay,
		loop,
		showCursor,
		suffix,
		prefixColor,
		typedTextColor,
		suffixTextColor,
		textAlign,
	} = attributes;
	const block = useRef(null);
	const [typed, setTyped] = useState(null);

	const generateOptions = () => {
		// Generate options for Typed instance
		const {
			typedText,
			typeSpeed,
			startDelay,
			smartBackspace,
			backSpeed,
			backDelay,
			fadeOut,
			fadeOutDelay,
			loop,
			showCursor,
		} = attributes;
		let strings = getStrings(typedText);

		return {
			strings,
			typeSpeed,
			startDelay,
			smartBackspace,
			backSpeed,
			backDelay,
			fadeOut,
			fadeOutDelay,
			loop,
			showCursor,
		};
	};

	const getStrings = (typedText) => {
		let strings = [];
		typedText.map((item) => strings.push(item.text));
		return strings;
	};

	useEffect(() => {
		const options = generateOptions();
		const new_typed = new Typed(block.current, options);
		setTyped(new_typed);
		return () => {
			// Destroy Typed instance
			typed.destroy();
		};
	}, []);

	useEffect(() => {
		if (typed) {
			typed.destroy();
			setTyped(new Typed(block.current, generateOptions()));
		}
	}, [
		typedText,
		typeSpeed,
		startDelay,
		smartBackspace,
		backSpeed,
		backDelay,
		fadeOut,
		fadeOutDelay,
		loop,
		showCursor,
	]);

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for creating an unique id for each block's unique className by a random unique number
	useEffect(() => {
		const BLOCK_PREFIX = "eb-typing-text";
		duplicateBlockIdFix({
			BLOCK_PREFIX,
			blockId,
			setAttributes,
			select,
			clientId,
		});
	}, []);

	// this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button
	useEffect(() => {
		mimmikCssForPreviewBtnClick({
			domObj: document,
			select,
		});
	}, []);

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});

	// Return if there is no typed text
	if (!typedText) return <div />;
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
		prefixConstant: typoPrefix_prefixText,
	});

	// suffix typoghraphy
	const {
		typoStylesDesktop: suffixTextTypoStylesDesktop,
		typoStylesTab: suffixTextTypoStylesTab,
		typoStylesMobile: suffixTextTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_suffixText,
	});

	// typed text typoghrapy
	const {
		typoStylesDesktop: typedTextTypoStylesDesktop,
		typoStylesTab: typedTextTypoStylesTab,
		typoStylesMobile: typedTextTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
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
	} = generateBorderShadowStyles({
		controlName: WrpBdShadow,
		attributes,
	});

	// wrapper background controller
	const {
		backgroundStylesDesktop: wrpBackgroundStylesDesktop,
		hoverBackgroundStylesDesktop: wrpHoverBackgroundStylesDesktop,
		backgroundStylesTab: wrpBackgroundStylesTab,
		hoverBackgroundStylesTab: wrpHoverBackgroundStylesTab,
		backgroundStylesMobile: wrpBackgroundStylesMobile,
		hoverBackgroundStylesMobile: wrpHoverBackgroundStylesMobile,
		overlayStylesDesktop: wrpOverlayStylesDesktop,
		hoverOverlayStylesDesktop: wrpHoverOverlayStylesDesktop,
		overlayStylesTab: wrpOverlayStylesTab,
		hoverOverlayStylesTab: wrpHoverOverlayStylesTab,
		overlayStylesMobile: wrpOverlayStylesMobile,
		hoverOverlayStylesMobile: wrpHoverOverlayStylesMobile,
	} = generateBackgroundControlStyles({
		attributes,
		controlName: backgroundWrapper,
	});

	// wrapper styles css in strings ⬇
	const wrapperStylesDesktop = `

	.eb-typed-wrapper.${blockId} {
		${wrapperMarginStylesDesktop}
		${wrapperPaddingStylesDesktop}
		${bdShadowStyesDesktop}
		${wrpBackgroundStylesDesktop}
		text-align: ${textAlign};
	}

	.eb-typed-wrapper.${blockId}:hover {
		${wrpHoverBackgroundStylesDesktop}
		${bdShadowStylesHoverDesktop}
	}

	.eb-typed-wrapper.${blockId}:before {
		${wrpOverlayStylesDesktop}
	}

	.eb-typed-wrapper.${blockId}:before {
		z-index: -11;
	}
	
	.eb-typed-wrapper.${blockId}:hover:before {
		${wrpHoverOverlayStylesDesktop}
	}
	`;

	const wrapperStylesTab = `
	.eb-typed-wrapper.${blockId}{
		${wrapperMarginStylesTab}
		${wrapperPaddingStylesTab}
		${bdShadowStyesTab}
		${wrpBackgroundStylesTab}
	}

	.eb-typed-wrapper.${blockId}:hover {
		${wrpHoverBackgroundStylesTab}
		${bdShadowStylesHoverTab}
	}

	.eb-typed-wrapper.${blockId}:before {
		${wrpOverlayStylesTab}
	}
	
	.eb-typed-wrapper.${blockId}:hover:before {
		${wrpHoverOverlayStylesTab}
	}
	`;

	const wrapperStylesMobile = `
	.eb-typed-wrapper.${blockId}{
		${wrapperMarginStylesMobile}
		${wrapperPaddingStylesMobile}
		${bdShadowStyesMobile}
		${wrpBackgroundStylesMobile}
	}

	.eb-typed-wrapper.${blockId}:hover {
		${wrpHoverBackgroundStylesMobile}
		${bdShadowStylesHoverMobile}
	}

	.eb-typed-wrapper.${blockId}:before {
		${wrpOverlayStylesMobile}
	}
	
	.eb-typed-wrapper.${blockId}:hover:before {
		${wrpHoverOverlayStylesMobile}
	}
	`;

	// prefix text styles css in strings ⬇
	const prefixTypoStylesDesktop = `
	.${blockId} .eb-typed-prefix{
		${prefixTextTypoStylesDesktop}		
		color: ${prefixColor || "#fff"};
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
		color: ${suffixTextColor || "#fff"};
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
	.${blockId} .eb-typed-text,.${blockId} .eb-typed-view{
		${typedTextTypoStylesDesktop}		
		color: ${typedTextColor || "#fff"};
	}
	`;

	const typedTypoStylesTab = `
	.${blockId} .eb-typed-text,.${blockId} .eb-typed-view{
		${typedTextTypoStylesTab}
	}
	`;

	const typedTypoStylesMobile = `
	.${blockId} .eb-typed-text,.${blockId} .eb-typed-view{
		${typedTextTypoStylesMobile}
	}
	`;

	// all css styles for large screen width (desktop/laptop) in strings ⬇
	const desktopAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesDesktop) ? wrapperStylesDesktop : " "}
		${isCssExists(prefixTypoStylesDesktop) ? prefixTypoStylesDesktop : " "}
		${isCssExists(suffixTypoStylesDesktop) ? suffixTypoStylesDesktop : " "}
		${isCssExists(typedTypoStylesDesktop) ? typedTypoStylesDesktop : " "}
	`);

	// all css styles for Tab in strings ⬇
	const tabAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesTab) ? wrapperStylesTab : " "}
		${isCssExists(prefixTypoStylesTab) ? prefixTypoStylesTab : " "}
		${isCssExists(suffixTypoStylesTab) ? suffixTypoStylesTab : " "}
		${isCssExists(typedTypoStylesTab) ? typedTypoStylesTab : " "}
	`);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesMobile) ? wrapperStylesMobile : " "}
		${isCssExists(prefixTypoStylesMobile) ? prefixTypoStylesMobile : " "}
		${isCssExists(suffixTypoStylesMobile) ? suffixTypoStylesMobile : " "}
		${isCssExists(typedTypoStylesMobile) ? typedTypoStylesMobile : " "}
	`);
	// Set All Style in "blockMeta" Attribute
	useEffect(() => {
		const styleObject = {
			desktop: desktopAllStyles,
			tab: tabAllStyles,
			mobile: mobileAllStyles,
		};
		if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
			setAttributes({ blockMeta: styleObject });
		}
	}, [attributes]);

	return [
		<BlockControls>
			<AlignmentToolbar
				value={textAlign}
				onChange={(textAlign) => setAttributes({ textAlign })}
			/>
		</BlockControls>,
		isSelected && (
			<Inspector attributes={attributes} setAttributes={setAttributes} />
		),
		<div {...blockProps}>
			<style>
				{`
				${desktopAllStyles}

				/* mimmikcssStart */

				${resOption === "Tablet" ? tabAllStyles : " "}
				${resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " "}

				/* mimmikcssEnd */

				@media all and (max-width: 1024px) {	

					/* tabcssStart */			
					${softMinifyCssStrings(tabAllStyles)}
					/* tabcssEnd */			
				
				}
				
				@media all and (max-width: 767px) {
					
					/* mobcssStart */			
					${softMinifyCssStrings(mobileAllStyles)}
					/* mobcssEnd */			
				
				}
				`}
			</style>
			<div className={`eb-typed-wrapper ${blockId}`} data-id={blockId}>
				<span className="eb-typed-prefix">{prefix}</span>
				<span className="eb-typed-text" ref={block} />
				<span className="eb-typed-suffix">{suffix}</span>
			</div>
		</div>,
	];
}
