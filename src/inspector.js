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

/**
 * Internal dependencies
 */
import {
	UNIT_TYPES,
	BORDER_STYLES,
	FONT_WEIGHTS,
	TEXT_TRANSFORM,
	TEXT_DECORATION,
} from "./constants";
import DimensionsControl from "../util/dimensions-control";
import UnitControl from "../util/unit-control";
import SortableText from "./sortable-text";
import FontPicker from "../util/typography-control/FontPicker";
import ColorControl from "../util/color-control";

const Inspector = ({ attributes, setAttributes }) => {
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

	const PREFIX_STEP = prefixFontUnit === "em" ? 0.1 : 1;
	const PREFIX_MAX = prefixFontUnit === "em" ? 10 : 100;

	const TYPED_STEP = typedFontUnit === "em" ? 0.1 : 1;
	const TYPED_MAX = typedFontUnit === "em" ? 10 : 100;

	const SUFFIX_STEP = suffixFontUnit === "em" ? 0.1 : 1;
	const SUFFIX_MAX = suffixFontUnit === "em" ? 10 : 100;

	return (
		<InspectorControls key="controls">
			<PanelBody title={__("Typed Text Settings")}>
				<TextControl
					label={__("Prefix Text")}
					placeholder={__("Add prefix text")}
					value={prefix}
					onChange={(prefix) => setAttributes({ prefix })}
				/>

				<BaseControl label={__("Typed Text")}>
					{typedText.length !== 0 && (
						<SortableText typedText={typedText} setAttributes={setAttributes} />
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
						onChange={() => setAttributes({ smartBackspace: !smartBackspace })}
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

					<BaseControl label={__("Typography")} className="eb-typography-base">
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classname"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									isSmall
									onClick={onToggle}
									aria-expanded={isOpen}
									icon="edit"
								></Button>
							)}
							renderContent={() => (
								<div style={{ padding: "1rem" }}>
									<FontPicker
										label={__("Font Family")}
										value={prefixFontFamily || null}
										onChange={(prefixFontFamily) =>
											setAttributes({ prefixFontFamily })
										}
									/>

									<UnitControl
										selectedUnit={prefixFontUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "%", value: "%" },
											{ label: "em", value: "em" },
										]}
										onClick={(prefixFontUnit) =>
											setAttributes({ prefixFontUnit })
										}
									/>

									<RangeControl
										label={__("Font Size")}
										value={prefixFontSize}
										onChange={(prefixFontSize) =>
											setAttributes({ prefixFontSize })
										}
										step={PREFIX_STEP}
										min={0}
										max={PREFIX_MAX}
									/>

									<SelectControl
										label={__("Font Weight")}
										value={prefixFontWeight}
										options={FONT_WEIGHTS}
										onChange={(prefixFontWeight) =>
											setAttributes({ prefixFontWeight })
										}
									/>

									<SelectControl
										label={__("Text Transform")}
										value={prefixTransfrom}
										options={TEXT_TRANSFORM}
										onChange={(prefixTransfrom) =>
											setAttributes({ prefixTransfrom })
										}
									/>

									<SelectControl
										label={__("Text Decoration")}
										value={prefixDecoration}
										options={TEXT_DECORATION}
										onChange={(prefixDecoration) =>
											setAttributes({ prefixDecoration })
										}
									/>

									<RangeControl
										label={__("Letter Spacing")}
										value={prefixLetterSpacing}
										onChange={(prefixLetterSpacing) =>
											setAttributes({ prefixLetterSpacing })
										}
										min={0}
										max={100}
									/>
								</div>
							)}
						/>
					</BaseControl>
				</PanelBody>
			)}

			{typedText.length && (
				<PanelBody title={__("Typed Text Style")} initialOpen={false}>
					<ColorControl
						label={__("Typed Text Color")}
						color={typedTextColor}
						onChange={(typedTextColor) => setAttributes({ typedTextColor })}
					/>

					<BaseControl label={__("Typography")} className="eb-typography-base">
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classname"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									isSmall
									onClick={onToggle}
									aria-expanded={isOpen}
									icon="edit"
								></Button>
							)}
							renderContent={() => (
								<div style={{ padding: "1rem" }}>
									<FontPicker
										label={__("Font Family")}
										value={typedFontFamily || null}
										onChange={(typedFontFamily) =>
											setAttributes({ typedFontFamily })
										}
									/>

									<UnitControl
										selectedUnit={typedFontUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "%", value: "%" },
											{ label: "em", value: "em" },
										]}
										onClick={(typedFontUnit) =>
											setAttributes({ typedFontUnit })
										}
									/>

									<RangeControl
										label={__("Font Size")}
										value={typedFontSize}
										onChange={(typedFontSize) =>
											setAttributes({ typedFontSize })
										}
										step={TYPED_STEP}
										min={0}
										max={TYPED_MAX}
									/>

									<SelectControl
										label={__("Font Weight")}
										value={typedFontWeight}
										options={FONT_WEIGHTS}
										onChange={(typedFontWeight) =>
											setAttributes({ typedFontWeight })
										}
									/>

									<SelectControl
										label={__("Text Transform")}
										value={typedTransform}
										options={TEXT_TRANSFORM}
										onChange={(typedTransform) =>
											setAttributes({ typedTransform })
										}
									/>

									<SelectControl
										label={__("Text Decoration")}
										value={typedDecoration}
										options={TEXT_DECORATION}
										onChange={(typedDecoration) =>
											setAttributes({ typedDecoration })
										}
									/>

									<RangeControl
										label={__("Letter Spacing")}
										value={typedLetterSpacing}
										onChange={(typedLetterSpacing) =>
											setAttributes({ typedLetterSpacing })
										}
										min={0}
										max={100}
									/>
								</div>
							)}
						/>
					</BaseControl>
				</PanelBody>
			)}

			{suffix && (
				<PanelBody title={__("Suffix Style")} initialOpen={false}>
					<ColorControl
						label={__("Suffix Color")}
						color={suffixTextColor}
						onChange={(suffixTextColor) => setAttributes({ suffixTextColor })}
					/>

					<BaseControl label={__("Typography")} className="eb-typography-base">
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classname"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									isSmall
									onClick={onToggle}
									aria-expanded={isOpen}
									icon="edit"
								></Button>
							)}
							renderContent={() => (
								<div style={{ padding: "1rem" }}>
									<FontPicker
										label={__("Font Family")}
										value={suffixFontFamily || null}
										onChange={(suffixFontFamily) =>
											setAttributes({ suffixFontFamily })
										}
									/>

									<UnitControl
										selectedUnit={suffixFontUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "%", value: "%" },
											{ label: "em", value: "em" },
										]}
										onClick={(suffixFontUnit) =>
											setAttributes({ suffixFontUnit })
										}
									/>

									<RangeControl
										label={__("Font Size")}
										value={suffixFontSize}
										onChange={(suffixFontSize) =>
											setAttributes({ suffixFontSize })
										}
										step={SUFFIX_STEP}
										min={0}
										max={SUFFIX_MAX}
									/>

									<SelectControl
										label={__("Font Weight")}
										value={suffixFontWeight}
										options={FONT_WEIGHTS}
										onChange={(suffixFontWeight) =>
											setAttributes({ suffixFontWeight })
										}
									/>

									<SelectControl
										label={__("Text Transform")}
										value={suffixTransform}
										options={TEXT_TRANSFORM}
										onChange={(suffixTransform) =>
											setAttributes({ suffixTransform })
										}
									/>

									<SelectControl
										label={__("Text Decoration")}
										value={suffixDecoration}
										options={TEXT_DECORATION}
										onChange={(suffixDecoration) =>
											setAttributes({ suffixDecoration })
										}
									/>

									<RangeControl
										label={__("Letter Spacing")}
										value={suffixLetterSpacing}
										onChange={(suffixLetterSpacing) =>
											setAttributes({ suffixLetterSpacing })
										}
										min={0}
										max={100}
									/>
								</div>
							)}
						/>
					</BaseControl>
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
				<UnitControl
					selectedUnit={marginUnit}
					unitTypes={UNIT_TYPES}
					onClick={(marginUnit) => setAttributes({ marginUnit })}
				/>

				<DimensionsControl
					label={__("Margin")}
					top={marginTop}
					right={marginRight}
					bottom={marginBottom}
					left={marginLeft}
					onChange={({ top, right, bottom, left }) =>
						setAttributes({
							marginTop: top,
							marginRight: right,
							marginBottom: bottom,
							marginLeft: left,
						})
					}
				/>

				<UnitControl
					selectedUnit={paddingUnit}
					unitTypes={UNIT_TYPES}
					onClick={(paddingUnit) => setAttributes({ paddingUnit })}
				/>

				<DimensionsControl
					label={__("Padding")}
					top={paddingTop}
					right={paddingRight}
					bottom={paddingBottom}
					left={paddingLeft}
					onChange={({ top, right, bottom, left }) =>
						setAttributes({
							paddingTop: top,
							paddingRight: right,
							paddingBottom: bottom,
							paddingLeft: left,
						})
					}
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
		</InspectorControls>
	);
};

export default Inspector;
