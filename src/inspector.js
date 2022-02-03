/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	Button,
	BaseControl,
	ToggleControl,
	RangeControl,
	TextControl,
	TabPanel,
} from "@wordpress/components";
import { select } from "@wordpress/data";
/**
 * Internal dependencies
 */
import SortableText from "./sortable-text";
import objAttributes from "./attributes";

const {
	ResponsiveDimensionsControl,
	TypographyDropdown,
	ColorControl,
	BorderShadowControl,
	BackgroundControl,
} = window.EBTypingTextControls;

const editorStoreForGettingPreivew =
	eb_style_handler.editor_type === "edit-site"
		? "core/edit-site"
		: "core/edit-post";

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
			resOption: select(
				editorStoreForGettingPreivew
			).__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// // this useEffect is for mimmiking css for all the eb blocks on resOption changing
	// useEffect(() => {
	// 	mimmikCssForResBtns({
	// 		domObj: document,
	// 		resOption,
	// 	});
	// }, [resOption]);

	// // this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	// useEffect(() => {
	// 	const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
	// 		domObj: document,
	// 		select,
	// 		setAttributes,
	// 	});
	// 	return () => {
	// 		cleanUp();
	// 	};
	// }, []);

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
		objAttributes,
	};

	return (
		<InspectorControls key="controls">
			<div className="eb-panel-control">
				<TabPanel
					className="eb-parent-tab-panel"
					activeClass="active-tab"
					tabs={[
						{
							name: "general",
							title: __("General", "essential-blocks"),
							className: "eb-tab general",
						},
						{
							name: "styles",
							title: __("Style", "essential-blocks"),
							className: "eb-tab styles",
						},
					]}
				>
					{(tab) => (
						<div className={"eb-tab-controls" + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody title={__("Content Settings", "essential-blocks")}>
										<TextControl
											label={__("Prefix Text", "essential-blocks")}
											placeholder={__("Add prefix text", "essential-blocks")}
											value={prefix}
											onChange={(prefix) => setAttributes({ prefix })}
										/>

										<BaseControl label={__("Typed Text", "essential-blocks")}>
											{typedText.length !== 0 && (
												<SortableText
													typedText={typedText}
													setAttributes={setAttributes}
												/>
											)}
											<Button
												className="is-default eb-typed-add-wrapper"
												label={__("Add Typed Item", "essential-blocks")}
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
											label={__("Suffix Text", "essential-blocks")}
											placeholder={__("Add suffix text", "essential-blocks")}
											value={suffix}
											onChange={(suffix) => setAttributes({ suffix })}
										/>

										<ToggleControl
											label={__("Loop", "essential-blocks")}
											checked={loop}
											onChange={() => setAttributes({ loop: !loop })}
										/>

										{!fadeOut && (
											<ToggleControl
												label={__("Smart Backspace", "essential-blocks")}
												checked={smartBackspace}
												onChange={() =>
													setAttributes({ smartBackspace: !smartBackspace })
												}
											/>
										)}

										<ToggleControl
											label={__("Show Cursor", "essential-blocks")}
											checked={showCursor}
											onChange={() =>
												setAttributes({ showCursor: !showCursor })
											}
										/>

										<ToggleControl
											label={__("Fade Out", "essential-blocks")}
											checked={fadeOut}
											onChange={() => setAttributes({ fadeOut: !fadeOut })}
										/>

										<RangeControl
											label={__("Type Speed", "essential-blocks")}
											value={typeSpeed}
											onChange={(typeSpeed) => setAttributes({ typeSpeed })}
											min={0}
											max={5000}
										/>

										<RangeControl
											label={__("Start Delay", "essential-blocks")}
											value={startDelay}
											onChange={(startDelay) => setAttributes({ startDelay })}
											min={0}
											max={1000}
										/>

										{!fadeOut && (
											<RangeControl
												label={__("Back Speed", "essential-blocks")}
												value={backSpeed}
												onChange={(backSpeed) => setAttributes({ backSpeed })}
												min={0}
												max={5000}
											/>
										)}

										{!fadeOut && (
											<RangeControl
												label={__("Back Delay", "essential-blocks")}
												value={backDelay}
												onChange={(backDelay) => setAttributes({ backDelay })}
												min={0}
												max={10000}
											/>
										)}

										{fadeOut && (
											<RangeControl
												label={__("Fade Delay", "essential-blocks")}
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
									<PanelBody
										title={__("Typing Text Box", "essential-blocks")}
										initialOpen={false}
									>
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
												{__("Background", "essential-blocks")}
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
										<PanelBody
											title={__("Prefix", "essential-blocks")}
											initialOpen={false}
										>
											<ColorControl
												label={__("Prefix Color", "essential-blocks")}
												color={prefixColor}
												onChange={(prefixColor) =>
													setAttributes({ prefixColor })
												}
											/>

											<TypographyDropdown
												baseLabel={__("Typography", "essential-blocks")}
												typographyPrefixConstant={typoPrefix_prefixText}
												resRequiredProps={resRequiredProps}
											/>
										</PanelBody>
									)}

									{typedText.length && (
										<PanelBody
											title={__("Typed Text", "essential-blocks")}
											initialOpen={false}
										>
											<ColorControl
												label={__("Typed Text Color", "essential-blocks")}
												color={typedTextColor}
												onChange={(typedTextColor) =>
													setAttributes({ typedTextColor })
												}
											/>

											<TypographyDropdown
												baseLabel={__("Typography", "essential-blocks")}
												typographyPrefixConstant={typoPrefix_typedText}
												resRequiredProps={resRequiredProps}
											/>
										</PanelBody>
									)}

									{suffix && (
										<PanelBody
											title={__("Suffix", "essential-blocks")}
											initialOpen={false}
										>
											<ColorControl
												label={__("Suffix Color", "essential-blocks")}
												color={suffixTextColor}
												onChange={(suffixTextColor) =>
													setAttributes({ suffixTextColor })
												}
											/>

											<TypographyDropdown
												baseLabel={__("Typography", "essential-blocks")}
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
