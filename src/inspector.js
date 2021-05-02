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
	SelectControl,
	TextControl,
	Dropdown,
} from "@wordpress/components";
import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";

/**
 * Internal dependencies
 */
import {
	UNIT_TYPES,
	BORDER_STYLES,
} from "./constants";
import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import UnitControl from "../util/unit-control";
import SortableText from "./sortable-text";
import TypographyDropdown from "../util/typography-control-v2";
import ColorControl from "../util/color-control";
import ResPanelBody from "./ResPanelBody";
import { dimensionsMargin, dimensionsPadding } from "./dimensionsNames";
import { typoPrefix_prefixText, typoPrefix_suffixText, typoPrefix_typedText } from "./typographyPrefixConstants";

const Inspector = ({ attributes, setAttributes }) => {
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
			const regexCssMimmikSpace = /(?<=mimmikcssStart\s\*\/).+(?=\/\*\smimmikcssEnd)/i;
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

	const typoRequiredProps = {
		attributes,
		setAttributes,
		resOption,
	};

	return (
		<InspectorControls key="controls">
			<span className="eb-panel-control">
				<PanelBody title={__("Typed Text Settings")}>
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
										text: `Typed text ${Math.floor(Math.random() * 100 + 1)}`,
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
							typoRequiredProps={typoRequiredProps}
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
							typoRequiredProps={typoRequiredProps}
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
							typoRequiredProps={typoRequiredProps}
						/>
					</PanelBody>
				)}

				<PanelColorSettings
					title={__("Background Color")}
					initialOpen={false}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: (backgroundColor) => setAttributes({ backgroundColor }),
							label: "",
						},
					]}
				/>

				<PanelBody title={__("Margin & Padding")} initialOpen={false}>
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
				</PanelBody>

				<PanelBody title={__("Border")} initialOpen={false}>
					<RangeControl
						label={__("Border Width")}
						value={borderWidth || 0}
						allowReset
						onChange={(borderWidth) => setAttributes({ borderWidth })}
						min={0}
						max={20}
					/>

					<ColorControl
						label={__("Border Color")}
						color={borderColor}
						onChange={(borderColor) => setAttributes({ borderColor })}
					/>

					<SelectControl
						label={__("Border Style")}
						value={borderStyle}
						options={BORDER_STYLES}
						onChange={(borderStyle) => setAttributes({ borderStyle })}
					/>
				</PanelBody>

				<PanelBody title={__("Box Shadow")} initialOpen={false}>
					<ColorControl
						label={__("Shadow Color")}
						color={shadowColor}
						onChange={(shadowColor) => setAttributes({ shadowColor })}
					/>

					<RangeControl
						label={__("Horizontal Offset")}
						value={hOffset || 0}
						onChange={(hOffset) => setAttributes({ hOffset })}
						allowReset
						min={0}
						max={20}
					/>

					<RangeControl
						label={__("Vertical Offset")}
						value={vOffset || 0}
						onChange={(vOffset) => setAttributes({ vOffset })}
						allowReset
						min={0}
						max={20}
					/>

					<RangeControl
						label={__("Blur")}
						value={blur || 0}
						onChange={(blur) => setAttributes({ blur })}
						allowReset
						min={0}
						max={20}
					/>

					<RangeControl
						label={__("Spread")}
						value={spread || 0}
						onChange={(spread) => setAttributes({ spread })}
						allowReset
						min={0}
						max={20}
					/>
				</PanelBody>
			</span>
		</InspectorControls>
	);
};

export default Inspector;
