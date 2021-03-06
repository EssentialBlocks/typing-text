/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
	PanelBody,
	Button,
	BaseControl,
	ToggleControl,
	RangeControl,
	TextControl,
	TabPanel,
} = wp.components;
const { InspectorControls } = wp.blockEditor;
const { useEffect } = wp.element;
const { select } = wp.data;
/**
 * Internal dependencies
 */

import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import SortableText from "./sortable-text";
import TypographyDropdown from "../util/typography-control-v2";
import ColorControl from "../util/color-control";
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
import {
	mimmikCssForResBtns,
	mimmikCssOnPreviewBtnClickWhileBlockSelected,
} from "../util/helpers";

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
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
	useEffect(() => {
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for mimmiking css for all the eb blocks on resOption changing
	useEffect(() => {
		mimmikCssForResBtns({
			domObj: document,
			resOption,
		});
	}, [resOption]);

	// this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	useEffect(() => {
		const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
			domObj: document,
			select,
			setAttributes,
		});
		return () => {
			cleanUp();
		};
	}, []);

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
	};

	return (
		<InspectorControls key="controls">
			<div className="eb-panel-control">
				<TabPanel
					className="eb-parent-tab-panel"
					activeClass="active-tab"
					// onSelect={onSelect}
					tabs={[
						{
							name: "general",
							title: "General",
							className: "eb-tab general",
						},
						{
							name: "styles",
							title: "Styles",
							className: "eb-tab styles",
						},
					]}
				>
					{(tab) => (
						<div className={"eb-tab-controls" + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody title={__("Content Settings")}>
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
												<span className="eb-typed-add-button">
													Add Typed Text
												</span>
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
											onChange={() =>
												setAttributes({ showCursor: !showCursor })
											}
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
												onChange={(fadeOutDelay) =>
													setAttributes({ fadeOutDelay })
												}
												min={0}
												max={5000}
											/>
										)}
									</PanelBody>
								</>
							)}
							{tab.name === "styles" && (
								<>
									<PanelBody title={__("Typing Text Box","typing-text")} initialOpen={false}>
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
										<BaseControl>
											<h3 className="eb-control-title">
												{__("Border & Shadow", "typing-text")}
											</h3>
										</BaseControl>
										<BorderShadowControl
											controlName={WrpBdShadow}
											resRequiredProps={resRequiredProps}
										/>
										<BaseControl>
											<h3 className="eb-control-title">
												{__("Background", "typing-text")}
											</h3>
										</BaseControl>
										<BackgroundControl
											controlName={backgroundWrapper}
											resRequiredProps={resRequiredProps}
											noOverlay={true}
											noMainBgi={true}
										/>
									</PanelBody>
									{prefix && (
										<PanelBody title={__("Prefix")} initialOpen={false}>
											<ColorControl
												label={__("Prefix Color")}
												color={prefixColor}
												onChange={(prefixColor) =>
													setAttributes({ prefixColor })
												}
											/>

											<TypographyDropdown
												baseLabel={__("Typography", "typing-text")}
												typographyPrefixConstant={typoPrefix_prefixText}
												resRequiredProps={resRequiredProps}
											/>
										</PanelBody>
									)}

									{typedText.length && (
										<PanelBody
											title={__("Typed Text","typing-text")}
											initialOpen={false}
										>
											<ColorControl
												label={__("Typed Text Color","typing-text")}
												color={typedTextColor}
												onChange={(typedTextColor) =>
													setAttributes({ typedTextColor })
												}
											/>

											<TypographyDropdown
												baseLabel={__("Typography", "typing-text")}
												typographyPrefixConstant={typoPrefix_typedText}
												resRequiredProps={resRequiredProps}
											/>
										</PanelBody>
									)}

									{suffix && (
										<PanelBody title={__("Suffix","typing-text")} initialOpen={false}>
											<ColorControl
												label={__("Suffix Color","typing-text")}
												color={suffixTextColor}
												onChange={(suffixTextColor) =>
													setAttributes({ suffixTextColor })
												}
											/>

											<TypographyDropdown
												baseLabel={__("Typography", "typing-text")}
												typographyPrefixConstant={typoPrefix_suffixText}
												resRequiredProps={resRequiredProps}
											/>
										</PanelBody>
									)}
								</>
							)}
						</div>
					)}
				</TabPanel>
			</div>
		</InspectorControls>
	);
};

export default Inspector;
