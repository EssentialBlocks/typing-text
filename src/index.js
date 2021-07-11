const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import "./style.scss";
import Edit from "./edit";
import save from "./save";
import icon from "./icon";
import attributes from "./attributes";

registerBlockType("typing-text/typing-text-block", {
	title: __("Typing Text", "typing-text"),
	description: __(
		"Make Your Website Interactive With Typing Text Animation",
		"typing-text"
	),
	category: "widgets",
	keywords: [
		__("EB typing text", "essential-blocks"),
		__("typing", "essential-blocks"),
		__("typing text", "essential-blocks"),
	],
	icon,
	attributes,
	edit: Edit,
	save,
});
