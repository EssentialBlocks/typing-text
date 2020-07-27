/**
 * WordPress dependencies
 */
import { Component, createRef } from "@wordpress/element";
import { BlockControls, AlignmentToolbar } from "@wordpress/block-editor";

/**
 * External dependencies
 */
import Typed from "typed.js";

/**
 * Internal dependencies
 */
import Inspector from "./inspector";

class Edit extends Component {
	constructor(props) {
		super(props);
		this.block = createRef();
	}

	componentDidMount() {
		const options = this.generateOptions();
		this.typed = new Typed(this.block.current, options);
	}

	componentWillUnmount() {
		// Destroy Typed instance
		this.typed.destroy();
	}

	generateOptions = () => {
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
		} = this.props.attributes;
		let strings = this.getStrings(typedText);

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

	getStrings = (typedText) => {
		let strings = [];
		typedText.map((item) => strings.push(item.text));
		return strings;
	};

	render() {
		const { attributes, setAttributes, isSelected } = this.props;
		const {
			prefix,
			typedText,
			suffix,
			prefixColor,
			prefixFontFamily,
			prefixFontSize,
			prefixFontUnit,
			prefixFontWeight,
			prefixTransfrom,
			prefixDecoration,
			prefixLetterSpacing,
			typedTextColor,
			typedFontFamily,
			typedFontUnit,
			typedFontSize,
			typedFontWeight,
			typedTransform,
			typedDecoration,
			typedLetterSpacing,
			suffixTextColor,
			suffixFontFamily,
			suffixFontUnit,
			suffixFontSize,
			suffixFontWeight,
			suffixTransform,
			suffixDecoration,
			suffixLetterSpacing,
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

		// Return if there is no typed text
		if (!typedText) return <div />;

		const wrapperStyle = {
			marginTop:
				typeof marginTop !== "undefined"
					? `${marginTop}${marginUnit}`
					: undefined,
			marginRight:
				typeof marginRight !== "undefined"
					? `${marginRight}${marginUnit}`
					: undefined,
			marginBottom:
				typeof marginBottom !== "undefined"
					? `${marginBottom}${marginUnit}`
					: undefined,
			marginLeft:
				typeof marginLeft !== "undefined"
					? `${marginLeft}${marginUnit}`
					: undefined,
			paddingTop:
				typeof paddingTop !== "undefined"
					? `${paddingTop}${paddingUnit}`
					: undefined,
			paddingRight:
				typeof paddingRight !== "undefined"
					? `${paddingRight}${paddingUnit}`
					: undefined,
			paddingBottom:
				typeof paddingBottom !== "undefined"
					? `${paddingBottom}${paddingUnit}`
					: undefined,
			paddingLeft:
				typeof paddingLeft !== "undefined"
					? `${paddingLeft}${paddingUnit}`
					: undefined,
			border: `${borderWidth || 0}px ${borderStyle} ${borderColor || "gray"}`,
			boxShadow: `${hOffset || 0}px ${vOffset || 0}px ${blur || 0}px ${
				spread || 0
			}px ${shadowColor || "gray"}`,
			backgroundColor: backgroundColor || "transparent",
			textAlign: textAlign,
		};

		const prefixStyle = {
			color: prefixColor || undefined,
			fontFamily: prefixFontFamily || undefined,
			fontSize: prefixFontSize
				? `${prefixFontSize}${prefixFontUnit}`
				: undefined,
			fontWeight: prefixFontWeight || undefined,
			textTransform: prefixTransfrom,
			textDecoration: prefixDecoration,
			letterSpacing: prefixLetterSpacing || undefined,
		};

		const suffixStyle = {
			color: suffixTextColor || undefined,
			fontFamily: suffixFontFamily || undefined,
			fontSize: suffixFontSize
				? `${suffixFontSize}${suffixFontUnit}`
				: undefined,
			fontWeight: suffixFontWeight || undefined,
			textTransform: suffixTransform,
			textDecoration: suffixDecoration,
			letterSpacing: suffixLetterSpacing || undefined,
		};

		const typedStyle = {
			color: typedTextColor || undefined,
			fontFamily: typedFontFamily || undefined,
			fontSize: typedFontSize ? `${typedFontSize}${typedFontUnit}` : undefined,
			fontWeight: typedFontWeight || undefined,
			textTransform: typedTransform,
			textDecoration: typedDecoration,
			letterSpacing: typedLetterSpacing || undefined,
		};

		// Destroy previous Typed instance & Update
		if (this.typed) {
			this.typed.destroy();
			let options = this.generateOptions();
			this.typed = new Typed(this.block.current, options);
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
			<div className="eb-typed-wrapper" style={wrapperStyle}>
				<span className="eb-typed-prefix" style={prefixStyle}>
					{prefix}&nbsp;
				</span>
				<span className="eb-typed-text" ref={this.block} style={typedStyle} />
				<span className="eb-typed-suffix" style={suffixStyle}>
					&nbsp;{suffix}
				</span>
			</div>,
		];
	}
}

export default Edit;
