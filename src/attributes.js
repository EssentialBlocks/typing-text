import * as prefixObjs from "./typographyPrefixConstants";
import {
	dimensionsMargin,
	dimensionsPadding,
} from "./dimensionsNames";
import {
	generateTypographyAttributes,
	generateDimensionsAttributes,
} from "./helpers";

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
	// margin padding attributes ⬇
	...generateDimensionsAttributes(dimensionsMargin),
	...generateDimensionsAttributes(dimensionsPadding, {
		top: 65,
		bottom: 65,
		right: 60,
		left: 60,
	}),
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
				text: "First Typed text",
			},
			{
				text: "Second Typed text",
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
		default: "#000000"
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
