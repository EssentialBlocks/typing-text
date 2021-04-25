/**
 * WordPress dependencies
 */
import { useEffect, useRef } from "@wordpress/element";
import {
	BlockControls,
	AlignmentToolbar,
	useBlockProps,
} from "@wordpress/block-editor";
import {
	typoPrefix_prefixText,
	typoPrefix_suffixText,
	typoPrefix_typedText,
} from "./typographyPrefixConstants";
import {
	softMinifyCssStrings,
	isCssExists,
	generateTypographyStyles,
} from "./helpers";
import "./editor.scss";
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
	const block = useRef(null);
	let typed;

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
		typed = new Typed(block.current, options);
	}, []);

	useEffect(() => {
		return () => {
			// Destroy Typed instance
			typed.destroy();
		};
	}, []);

	const {
		blockId,
		blockMeta,
		// responsive control attribute ⬇
		resOption,
		prefix,
		typedText,
		suffix,
		prefixColor,
		typedTextColor,
		suffixTextColor,
		marginTop,
		marginRight,
		marginBottom,
		marginLeft,
		marginUnit,
		paddingTop,
		paddingRight,
		paddingBottom,
		paddingLeft,
		paddingUnit,
		TABmarginUnit,
		TABmarginTop,
		TABmarginRight,
		TABmarginBottom,
		TABmarginLeft,
		TABpaddingUnit,
		TABpaddingTop,
		TABpaddingRight,
		TABpaddingBottom,
		TABpaddingLeft,
		MOBmarginUnit,
		MOBmarginTop,
		MOBmarginRight,
		MOBmarginBottom,
		MOBmarginLeft,
		MOBpaddingUnit,
		MOBpaddingTop,
		MOBpaddingRight,
		MOBpaddingBottom,
		MOBpaddingLeft,
		shadowColor,
		hOffset,
		vOffset,
		blur,
		spread,
		borderWidth,
		borderColor,
		borderStyle,
		backgroundColor,
		textAlign,
	} = attributes;

	// this useEffect is for creating an unique id for each block's unique className by a random unique number
	useEffect(() => {
		const BLOCK_PREFIX = "eb-typing-text";
		const unique_id =
			BLOCK_PREFIX + "-" + Math.random().toString(36).substr(2, 7);

		/**
		 * Define and Generate Unique Block ID
		 */
		if (!blockId) {
			setAttributes({ blockId: unique_id });
		}

		/**
		 * Assign New Unique ID when duplicate BlockId found
		 * Mostly happens when User Duplicate a Block
		 */
		const all_blocks = wp.data.select("core/block-editor").getBlocks();

		let duplicateFound = false;
		const fixDuplicateBlockId = (blocks) => {
			if (duplicateFound) return;
			for (const item of blocks) {
				const { innerBlocks } = item;
				if (item.attributes.blockId === blockId) {
					if (item.clientId !== clientId) {
						setAttributes({ blockId: unique_id });
						duplicateFound = true;
						return;
					} else if (innerBlocks.length > 0) {
						fixDuplicateBlockId(innerBlocks);
					}
				} else if (innerBlocks.length > 0) {
					fixDuplicateBlockId(innerBlocks);
				}
			}
		};

		fixDuplicateBlockId(all_blocks);
	}, []);

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});

	// Return if there is no typed text
	if (!typedText) return <div />;
	// wrapper styles css in strings ⬇
	const wrapperStylesDesktop = `
	.${blockId}{
		${marginTop ? `margin-top: ${parseFloat(marginTop)}${marginUnit};` : " "}
		${marginRight ? `margin-right: ${parseFloat(marginRight)}${marginUnit};` : " "}
		${marginLeft ? `margin-left: ${parseFloat(marginLeft)}${marginUnit};` : " "}
		${
			marginBottom
				? `margin-bottom: ${parseFloat(marginBottom)}${marginUnit};`
				: " "
		}
		padding: 
			${paddingTop || 0}${paddingUnit} 
			${paddingRight || 0}${paddingUnit} 
			${paddingBottom || 0}${paddingUnit} 
			${paddingLeft || 0}${paddingUnit};

		border: ${borderWidth || 0}px ${borderStyle} ${borderColor || "gray"};
		boxShadow: ${hOffset || 0}px ${vOffset || 0}px ${blur || 0}px ${
		spread || 0
	}px ${shadowColor || "gray"};
		background-color: ${backgroundColor || "transparent"};
		text-align: ${textAlign};
	}
	`;

	const wrapperStylesTab = `
	.${blockId}{
		${
			TABmarginTop
				? `margin-top: ${parseFloat(TABmarginTop)}${TABmarginUnit};`
				: " "
		}
		${
			TABmarginRight
				? `margin-right: ${parseFloat(TABmarginRight)}${TABmarginUnit};`
				: " "
		}
		${
			TABmarginLeft
				? `margin-left: ${parseFloat(TABmarginLeft)}${TABmarginUnit};`
				: " "
		}
		${
			TABmarginBottom
				? `margin-bottom: ${parseFloat(TABmarginBottom)}${TABmarginUnit};`
				: " "
		}
		${
			TABpaddingTop
				? `padding-top: ${parseFloat(TABpaddingTop)}${TABpaddingUnit};`
				: " "
		}
		${
			TABpaddingRight
				? `padding-right: ${parseFloat(TABpaddingRight)}${TABpaddingUnit};`
				: " "
		}
		${
			TABpaddingLeft
				? `padding-left: ${parseFloat(TABpaddingLeft)}${TABpaddingUnit};`
				: " "
		}
		${
			TABpaddingBottom
				? `padding-bottom: ${parseFloat(TABpaddingBottom)}${TABpaddingUnit};`
				: " "
		}
	}
	`;

	const wrapperStylesMobile = `
	.${blockId}{
		${
			MOBmarginTop
				? `margin-top: ${parseFloat(MOBmarginTop)}${MOBmarginUnit};`
				: " "
		}
		${
			MOBmarginRight
				? `margin-right: ${parseFloat(MOBmarginRight)}${MOBmarginUnit};`
				: " "
		}
		${
			MOBmarginLeft
				? `margin-left: ${parseFloat(MOBmarginLeft)}${MOBmarginUnit};`
				: " "
		}
		${
			MOBmarginBottom
				? `margin-bottom: ${parseFloat(MOBmarginBottom)}${MOBmarginUnit};`
				: " "
		}
		${
			MOBpaddingTop
				? `padding-top: ${parseFloat(MOBpaddingTop)}${MOBpaddingUnit};`
				: " "
		}
		${
			MOBpaddingRight
				? `padding-right: ${parseFloat(MOBpaddingRight)}${MOBpaddingUnit};`
				: " "
		}
		${
			MOBpaddingLeft
				? `padding-left: ${parseFloat(MOBpaddingLeft)}${MOBpaddingUnit};`
				: " "
		}
		${
			MOBpaddingBottom
				? `padding-bottom: ${parseFloat(MOBpaddingBottom)}${MOBpaddingUnit};`
				: " "
		}	
	}
	`;

	const {
		typoStylesDesktop: prefixTextTypoStylesDesktop,
		typoStylesTab: prefixTextTypoStylesTab,
		typoStylesMobile: prefixTextTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_prefixText,
	});

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

	const {
		typoStylesDesktop: suffixTextTypoStylesDesktop,
		typoStylesTab: suffixTextTypoStylesTab,
		typoStylesMobile: suffixTextTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_suffixText,
	});

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

	const {
		typoStylesDesktop: typedTextTypoStylesDesktop,
		typoStylesTab: typedTextTypoStylesTab,
		typoStylesMobile: typedTextTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: typoPrefix_typedText,
	});

	// typed text styles css in strings ⬇
	const typedTypoStylesDesktop = `
	.${blockId} .eb-typed-typed{
		${typedTextTypoStylesDesktop}		
		color: ${typedTextColor || "#fff"};
	}
	`;

	const typedTypoStylesTab = `
	.${blockId} .eb-typed-typed{
		${typedTextTypoStylesTab}
	}
	`;

	const typedTypoStylesMobile = `
	.${blockId} .eb-typed-typed{
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

	// Destroy previous Typed instance & Update
	if (typed) {
		typed.destroy();
		let options = generateOptions();
		typed = new Typed(block.current, options);
	}

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

				${resOption === "tab" ? tabAllStyles : " "}
				${resOption === "mobile" ? tabAllStyles + mobileAllStyles : " "}

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
