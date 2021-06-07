/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	Button,
	BaseControl,
	ToggleControl,
	RangeControl,
	TextControl,
} from "@wordpress/components";
import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";

/**
 * Internal dependencies
 */

import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import SortableText from "./sortable-text";
import TypographyDropdown from "../util/typography-control-v2";
import ColorControl from "../util/color-control";
import ResetControl from "../util/reset-control";
import BorderShadowControl from "../util/border-shadow-control";
import BackgroundControl from "../util/background-control";
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

const Inspector = ({ attributes, setAttributes }) => {
	console.log(attributes);
	const {
		// responsive control attributes ⬇
		resOption,
		prefix,
		typedText,
		suffix,
		prefixColor,
		typedTextColor,
		suffixTextColor,
		typeSpeed,
		startDelay,
		smartBackspace,
		backSpeed,
		backDelay,
		fadeOut,
		fadeOutDelay,
		loop,
		showCursor,
		backgroundColor,
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
	useEffect(() => {
		const bodyClasses = document.body.className;

		if (!/eb\-res\-option\-/i.test(bodyClasses)) {
			document.body.classList.add("eb-res-option-desktop");
			setAttributes({
				resOption: "desktop",
			});
		} else {
			const resOption = bodyClasses
				.match(/eb-res-option-[^\s]+/g)[0]
				.split("-")[3];
			setAttributes({ resOption });
		}
	}, []);

	// this useEffect is for mimmiking css for all the eb blocks on resOption changing
	useEffect(() => {
		const allEbBlocksWrapper = document.querySelectorAll(
			".eb-guten-block-main-parent-wrapper:not(.is-selected) > style"
		);
		if (allEbBlocksWrapper.length < 1) return;
		allEbBlocksWrapper.forEach((styleTag) => {
			const cssStrings = styleTag.textContent;
			const minCss = cssStrings.replace(/\s+/g, " ");
			const regexCssMimmikSpace =
				/(?<=mimmikcssStart\s\*\/).+(?=\/\*\smimmikcssEnd)/i;
			let newCssStrings = " ";
			if (resOption === "tab") {
				const tabCssStrings = (minCss.match(
					/(?<=tabcssStart\s\*\/).+(?=\/\*\stabcssEnd)/i
				) || [" "])[0];
				newCssStrings = minCss.replace(regexCssMimmikSpace, tabCssStrings);
			} else if (resOption === "mobile") {
				const tabCssStrings = (minCss.match(
					/(?<=tabcssStart\s\*\/).+(?=\/\*\stabcssEnd)/i
				) || [" "])[0];

				const mobCssStrings = (minCss.match(
					/(?<=mobcssStart\s\*\/).+(?=\/\*\smobcssEnd)/i
				) || [" "])[0];

				newCssStrings = minCss.replace(
					regexCssMimmikSpace,
					`${tabCssStrings} ${mobCssStrings}`
				);
			} else {
				newCssStrings = minCss.replace(regexCssMimmikSpace, " ");
			}
			styleTag.textContent = newCssStrings;
		});
	}, [resOption]);

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
	};

	return (
		<InspectorControls key="controls">
			<span className="eb-panel-control">
				<PanelBody title={__("General Settings")}>
					<ResponsiveDimensionsControl
						resRequiredProps={resRequiredProps}
						className="forWrapperMargin"
						controlName={dimensionsMargin}
						baseLabel="Margin"
					/>
					<ResponsiveDimensionsControl
						resRequiredProps={resRequiredProps}
						className="forWrapperPadding"
						controlName={dimensionsPadding}
						baseLabel="Padding"
					/>
					<PanelBody title={__("Border & Shadow")} initialOpen={false}>
						<BorderShadowControl
							controlName={WrpBdShadow}
							resRequiredProps={resRequiredProps}
						/>
					</PanelBody>
					<PanelBody title={__("Background")} initialOpen={false}>
						<BackgroundControl
							controlName={backgroundWrapper}
							resRequiredProps={resRequiredProps}
						/>
					</PanelBody>
				</PanelBody>
				<PanelBody title={__("Content Settings")} initialOpen={false}>
					<TextControl
						label={__("Prefix Text")}
						placeholder={__("Add prefix text")}
						value={prefix}
						onChange={(prefix) => setAttributes({ prefix })}
					/>

					<BaseControl label={__("Typed Text")}>
						{typedText.length !== 0 && (
							<SortableText
								typedText={typedText}
								setAttributes={setAttributes}
							/>
						)}
						<Button
							className="is-default eb-typed-add-wrapper"
							label={__("Add Typed Item")}
							icon="plus-alt"
							onClick={() => {
								let updatedText = [
									...typedText,
									{
										text: `Typed text ${typedText.length + 1}`,
									},
								];

								setAttributes({ typedText: updatedText });
							}}
						>
							<span className="eb-typed-add-button">Add Typed Text</span>
						</Button>
					</BaseControl>

					<TextControl
						label={__("Suffix Text")}
						placeholder={__("Add suffix text")}
						value={suffix}
						onChange={(suffix) => setAttributes({ suffix })}
					/>

					<ToggleControl
						label={__("Loop")}
						checked={loop}
						onChange={() => setAttributes({ loop: !loop })}
					/>

					{!fadeOut && (
						<ToggleControl
							label={__("Smart Backspace")}
							checked={smartBackspace}
							onChange={() =>
								setAttributes({ smartBackspace: !smartBackspace })
							}
						/>
					)}

					<ToggleControl
						label={__("Show Cursor")}
						checked={showCursor}
						onChange={() => setAttributes({ showCursor: !showCursor })}
					/>

					<ToggleControl
						label={__("Fade Out")}
						checked={fadeOut}
						onChange={() => setAttributes({ fadeOut: !fadeOut })}
					/>

					<RangeControl
						label={__("Type Speed")}
						value={typeSpeed}
						onChange={(typeSpeed) => setAttributes({ typeSpeed })}
						min={0}
						max={5000}
					/>

					<RangeControl
						label={__("Start Delay")}
						value={startDelay}
						onChange={(startDelay) => setAttributes({ startDelay })}
						min={0}
						max={1000}
					/>

					{!fadeOut && (
						<RangeControl
							label={__("Back Speed")}
							value={backSpeed}
							onChange={(backSpeed) => setAttributes({ backSpeed })}
							min={0}
							max={5000}
						/>
					)}

					{!fadeOut && (
						<RangeControl
							label={__("Back Delay")}
							value={backDelay}
							onChange={(backDelay) => setAttributes({ backDelay })}
							min={0}
							max={10000}
						/>
					)}

					{fadeOut && (
						<RangeControl
							label={__("Fade Delay")}
							value={fadeOutDelay}
							onChange={(fadeOutDelay) => setAttributes({ fadeOutDelay })}
							min={0}
							max={5000}
						/>
					)}
				</PanelBody>

				{prefix && (
					<PanelBody title={__("Prefix Style")} initialOpen={false}>
						<ColorControl
							label={__("Prefix Color")}
							color={prefixColor}
							onChange={(prefixColor) => setAttributes({ prefixColor })}
						/>

						<TypographyDropdown
							baseLabel={__("Typography", "typing-text")}
							typographyPrefixConstant={typoPrefix_prefixText}
							resRequiredProps={resRequiredProps}
						/>
					</PanelBody>
				)}

				{typedText.length && (
					<PanelBody title={__("Typed Text Style")} initialOpen={false}>
						<ColorControl
							label={__("Typed Text Color")}
							color={typedTextColor}
							onChange={(typedTextColor) => setAttributes({ typedTextColor })}
						/>

						<TypographyDropdown
							baseLabel={__("Typography", "typing-text")}
							typographyPrefixConstant={typoPrefix_typedText}
							resRequiredProps={resRequiredProps}
						/>
					</PanelBody>
				)}

				{suffix && (
					<PanelBody title={__("Suffix Style")} initialOpen={false}>
						<ColorControl
							label={__("Suffix Color")}
							color={suffixTextColor}
							onChange={(suffixTextColor) => setAttributes({ suffixTextColor })}
						/>

						<TypographyDropdown
							baseLabel={__("Typography", "typing-text")}
							typographyPrefixConstant={typoPrefix_suffixText}
							resRequiredProps={resRequiredProps}
						/>
					</PanelBody>
				)}
			</span>
		</InspectorControls>
	);
};

export default Inspector;
