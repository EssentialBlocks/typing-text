const attributes = {
	prefix: {
		type: "string",
		source: "text",
		selector: ".eb-typed-prefix",
	},
	typedText: {
		type: "array",
		source: "query",
		selector: ".eb-typed-text",
		query: {
			text: {
				type: "string",
				source: "text",
			},
		},
		default: [
			{
				text: "First Done",
			},
			{
				text: "Second on the way",
			},
		],
	},
	suffix: {
		type: "string",
		source: "text",
		selector: ".eb-typed-suffix",
	},
	prefixColor: {
		type: "string",
	},
	prefixFontFamily: {
		type: "string",
	},
	prefixFontSize: {
		type: "number",
	},
	prefixFontUnit: {
		type: "string",
		default: "px",
	},
	prefixFontWeight: {
		type: "string",
	},
	prefixTransform: {
		type: "string",
		default: "none",
	},
	prefixDecoration: {
		type: "string",
		default: "none",
	},
	prefixLetterSpacing: {
		type: "number",
	},
	typedTextColor: {
		type: "string",
	},
	typedFontFamily: {
		type: "string",
	},
	typedFontUnit: {
		type: "string",
		default: "px",
	},
	typedFontSize: {
		type: "number",
	},
	typedFontWeight: {
		type: "string",
	},
	typedTransform: {
		type: "string",
		default: "none",
	},
	typedDecoration: {
		type: "string",
		default: "none",
	},
	typedLetterSpacing: {
		type: "number",
	},
	suffixTextColor: {
		type: "string",
	},
	suffixFontFamily: {
		type: "string",
	},
	suffixFontUnit: {
		type: "string",
		default: "px",
	},
	suffixFontSize: {
		type: "number",
	},
	suffixFontWeight: {
		type: "string",
	},
	suffixTransform: {
		type: "string",
		default: "none",
	},
	suffixDecoration: {
		type: "string",
		default: "none",
	},
	suffixLetterSpacing: {
		type: "number",
	},
	typeSpeed: {
		type: "number",
		default: 50,
	},
	startDelay: {
		type: "number",
		default: 0,
	},
	smartBackspace: {
		type: "boolean",
		default: true,
	},
	backSpeed: {
		type: "number",
		default: 40,
	},
	backDelay: {
		type: "number",
		default: 700,
	},
	fadeOut: {
		type: "boolean",
		default: false,
	},
	fadeOutDelay: {
		type: "number",
		default: 500,
	},
	loop: {
		type: "boolean",
		default: false,
	},
	showCursor: {
		type: "boolean",
		default: true,
	},
	marginTop: {
		type: "number",
	},
	marginRight: {
		type: "number",
	},
	marginBottom: {
		type: "number",
	},
	marginLeft: {
		type: "number",
	},
	marginUnit: {
		type: "string",
		default: "px",
	},
	paddingTop: {
		type: "number",
	},
	paddingRight: {
		type: "number",
	},
	paddingBottom: {
		type: "number",
	},
	paddingLeft: {
		type: "number",
	},
	paddingUnit: {
		type: "string",
		default: "px",
	},
	shadowColor: {
		type: "string",
	},
	hOffset: {
		type: "number",
	},
	vOffset: {
		type: "number",
	},
	blur: {
		type: "number",
	},
	spread: {
		type: "number",
	},
	borderWidth: {
		type: "number",
	},
	borderColor: {
		type: "string",
	},
	borderStyle: {
		type: "string",
		default: "solid",
	},
	backgroundColor: {
		type: "string",
	},
	textAlign: {
		type: "string",
		default: "left",
	},
};

export default attributes;
