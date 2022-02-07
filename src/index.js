/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";
import { TypingTextIcon } from "./icon";
import example from "./example";
import metadata from "../block.json";
import attributes from "./attributes";
import "./style.scss";
const { ebConditionalRegisterBlockType } = EBTypingTextControls;

ebConditionalRegisterBlockType(metadata, {
	icon: TypingTextIcon,
	keywords: [
		__("Typing Text", "typing-text"),
		__("animated Text", "typing-text"),
		__("eb typing", "typing-text"),
	],
	attributes,
	edit: Edit,
	save: Save,
	example,
});
