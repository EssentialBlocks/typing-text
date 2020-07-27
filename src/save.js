const Save = ({ attributes }) => {
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
    textAlign
  } = attributes;

  const wrapperStyle = {
    marginTop:
      typeof marginTop !== "undefined"
        ? `${marginTop}${marginUnit}`
        : undefined,
    marginRight:
      typeof marginRight !== "undefined"
        ? `${marginRight}${marginUnit}`
        : undefined,
    marginBottom:
      typeof marginBottom !== "undefined"
        ? `${marginBottom}${marginUnit}`
        : undefined,
    marginLeft:
      typeof marginLeft !== "undefined"
        ? `${marginLeft}${marginUnit}`
        : undefined,
    paddingTop:
      typeof paddingTop !== "undefined"
        ? `${paddingTop}${paddingUnit}`
        : undefined,
    paddingRight:
      typeof paddingRight !== "undefined"
        ? `${paddingRight}${paddingUnit}`
        : undefined,
    paddingBottom:
      typeof paddingBottom !== "undefined"
        ? `${paddingBottom}${paddingUnit}`
        : undefined,
    paddingLeft:
      typeof paddingLeft !== "undefined"
        ? `${paddingLeft}${paddingUnit}`
        : undefined,
    border: `${borderWidth || 0}px ${borderStyle} ${borderColor || "gray"}`,
    boxShadow: `${hOffset || 0}px ${vOffset || 0}px ${blur || 0}px ${spread ||
      0}px ${shadowColor || "gray"}`,
    backgroundColor: backgroundColor || "transparent",
    textAlign: textAlign
  };

  const prefixStyle = {
    color: prefixColor || undefined,
    fontFamily: prefixFontFamily || undefined,
    fontSize: prefixFontSize ? `${prefixFontSize}${prefixFontUnit}` : undefined,
    fontWeight: prefixFontWeight || undefined,
    textTransform: prefixTransfrom,
    textDecoration: prefixDecoration,
    letterSpacing: prefixLetterSpacing || undefined
  };

  const suffixStyle = {
    color: suffixTextColor || undefined,
    fontFamily: suffixFontFamily || undefined,
    fontSize: suffixFontSize ? `${suffixFontSize}${suffixFontUnit}` : undefined,
    fontWeight: suffixFontWeight || undefined,
    textTransform: suffixTransform,
    textDecoration: suffixDecoration,
    letterSpacing: suffixLetterSpacing || undefined
  };

  const typedStyle = {
    color: typedTextColor || undefined,
    fontFamily: typedFontFamily || undefined,
    fontSize: typedFontSize ? `${typedFontSize}${typedFontUnit}` : undefined,
    fontWeight: typedFontWeight || undefined,
    textTransform: typedTransform,
    textDecoration: typedDecoration,
    letterSpacing: typedLetterSpacing || undefined
  };

  return (
    <div
      className="eb-typed-wrapper"
      style={wrapperStyle}
      data-type-speed={typeSpeed}
      data-start-delay={startDelay}
      data-smart-backspace={smartBackspace}
      data-back-speed={backSpeed}
      data-back-delay={backDelay}
      data-fade={fadeOut}
      data-fade-delay={fadeOutDelay}
      data-loop={loop}
      data-cursor={showCursor}
      // data-gradient={gradient}
    >
      <span className="eb-typed-prefix" style={prefixStyle}>
        {prefix}&nbsp;
      </span>
      <span className="eb-typed-text-wrapper is-hidden">
        {typedText.map(item => (
          <span className="eb-typed-text">{item.text}</span>
        ))}
      </span>
      <span className="eb-typed-view" style={typedStyle} />
      <span className="eb-typed-suffix" style={suffixStyle}>
        &nbsp;{suffix}
      </span>
    </div>
  );
};

export default Save;
