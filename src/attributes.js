import * as prefixObjs from "./typographyPrefixConstants";
import { generateTypographyAttributes } from "./helpers";

const attributes = {
	// responsive control attributes ⬇
	resOption: {
		type: "string",
		default: "desktop",
	},
	// uniqueIdNumber attribute for making unique className
	uniqueIdNumber: {
		type: "number",
	},
	blockId: {
		type: "string",
	},
	blockRoot: {
		type: "string",
		default: "essential_block",
	},
	blockMeta: {
		type: "object",
	},
	// typography attributes ⬇
	...generateTypographyAttributes(Object.values(prefixObjs)),
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
		default: "#000000"
	},
	typedTextColor: {
		type: "string",
	},
	suffixTextColor: {
		type: "string",
		default: "#000000"
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
		type: "string",
	},
	marginRight: {
		type: "string",
	},
	marginBottom: {
		type: "string",
	},
	marginLeft: {
		type: "string",
	},
	marginUnit: {
		type: "string",
		default: "px",
	},
	paddingTop: {
		type: "string",
	},
	paddingRight: {
		type: "string",
	},
	paddingBottom: {
		type: "string",
	},
	paddingLeft: {
		type: "string",
	},
	paddingUnit: {
		type: "string",
		default: "px",
	},
	TABmarginUnit: {
		type: "string",
		default: "px",
	},
	TABmarginTop: {
		type: "string",
	},
	TABmarginRight: {
		type: "string",
	},
	TABmarginBottom: {
		type: "string",
	},
	TABmarginLeft: {
		type: "string",
	},
	TABpaddingUnit: {
		type: "string",
		default: "px",
	},
	TABpaddingTop: {
		type: "string",
	},
	TABpaddingRight: {
		type: "string",
	},
	TABpaddingBottom: {
		type: "string",
	},
	TABpaddingLeft: {
		type: "string",
	},
	MOBmarginUnit: {
		type: "string",
		default: "px",
	},
	MOBmarginTop: {
		type: "string",
	},
	MOBmarginRight: {
		type: "string",
	},
	MOBmarginBottom: {
		type: "string",
	},
	MOBmarginLeft: {
		type: "string",
	},
	MOBpaddingUnit: {
		type: "string",
		default: "px",
	},
	MOBpaddingTop: {
		type: "string",
	},
	MOBpaddingRight: {
		type: "string",
	},
	MOBpaddingBottom: {
		type: "string",
	},
	MOBpaddingLeft: {
		type: "string",
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
