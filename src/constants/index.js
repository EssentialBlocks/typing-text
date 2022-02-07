import { __ } from "@wordpress/i18n";

export const UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
	{ label: "em", value: "em" },
];

export const BORDER_STYLES = [
	{ label: __("Solid", "typing-text"), value: "solid" },
	{ label: __("Dashed", "typing-text"), value: "dashed" },
	{ label: __("Dotted", "typing-text"), value: "dotted" },
	{ label: __("Double", "typing-text"), value: "double" },
	{ label: __("Groove", "typing-text"), value: "groove" },
	{ label: __("Inset", "typing-text"), value: "inset" },
	{ label: __("Outset", "typing-text"), value: "outset" },
	{ label: __("Ridge", "typing-text"), value: "ridge" },
];

export const TEXT_DECORATION = [
	{ label: __("Initial", "typing-text"), value: "initial" },
	{ label: __("Overline", "typing-text"), value: "overline" },
	{ label: __("Line Through", "typing-text"), value: "line-through" },
	{ label: __("Underline", "typing-text"), value: "underline" },
	{ label: __("Underline Oveline", "typing-text"), value: "underline overline" },
];

export const TEXT_TRANSFORM = [
	{ label: __("None", "typing-text"), value: "none" },
	{ label: __("Capitalize", "typing-text"), value: "capitalize" },
	{ label: __("Uppercase", "typing-text"), value: "uppercase" },
	{ label: __("Lowercase", "typing-text"), value: "lowercase" },
];

export const FONT_WEIGHTS = [
	{ label: __("Normal", "typing-text"), value: "normal" },
	{ label: __("Bold", "typing-text"), value: "bold" },
	{ label: __("Lighter", "typing-text"), value: "lighter" },
	{ label: __("Bolder", "typing-text"), value: "bolder" },
];
