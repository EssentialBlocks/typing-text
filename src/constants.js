const { __ } = wp.i18n;

export const UNIT_TYPES = [
  { label: "px", value: "px" },
  { label: "%", value: "%" },
  { label: "em", value: "em" }
];

export const BORDER_STYLES = [
  { label: __("Solid"), value: "solid" },
  { label: __("Dashed"), value: "dashed" },
  { label: __("Dotted"), value: "dotted" },
  { label: __("Double"), value: "double" },
  { label: __("Groove"), value: "groove" },
  { label: __("Inset"), value: "inset" },
  { label: __("Outset"), value: "outset" },
  { label: __("Ridge"), value: "ridge" }
];

export const TEXT_DECORATION = [
  { label: __("Initial"), value: "initial" },
  { label: __("Overline"), value: "overline" },
  { label: __("Line Through"), value: "line-through" },
  { label: __("Underline"), value: "underline" },
  { label: __("Underline Oveline"), value: "underline overline" }
];

export const TEXT_TRANSFORM = [
  { label: __("None"), value: "none" },
  { label: __("Capitalize"), value: "capitalize" },
  { label: __("Uppercase"), value: "uppercase" },
  { label: __("Lowercase"), value: "lowercase" }
];

export const FONT_WEIGHTS = [
  { label: __("Normal"), value: "normal" },
  { label: __("Bold"), value: "bold" },
  { label: __("Lighter"), value: "lighter" },
  { label: __("Bolder"), value: "bolder" }
];
