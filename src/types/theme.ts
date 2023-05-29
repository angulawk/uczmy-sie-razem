import tailwindConfig from "@app/../tailwind.config";

const theme = tailwindConfig.theme;

type TBackgroundOpacityValues = keyof typeof theme.extend.backgroundOpacity;
type TBorderRadiusValues = keyof typeof theme.borderRadius;
type TBorderWidthValues = keyof typeof theme.borderWidth;
type TBoxShadowValues = keyof typeof theme.boxShadow;
type TBackgroundValues = keyof typeof theme.extend.backgroundImage;
type TColorValues = keyof typeof theme.colors;
type TFontFamilyValues = keyof typeof theme.fontFamily;
type TFontSizeValues = keyof typeof theme.fontSize;
type TFontWeightValues = keyof typeof theme.fontWeight;
type TLineHeightValues = keyof typeof theme.lineHeight;
type TScreensValues = keyof typeof theme.screens;
type TSpacingValues = keyof typeof theme.spacing;
type TTransitionDurationValues = keyof typeof theme.transitionDuration;
type TZIndexValues = keyof typeof theme.zIndex;
type TLetterSpacingValues = keyof typeof theme.letterSpacing;
type TTextShadowValues = keyof typeof theme.extend.textShadow;

type TUtility<
  TPrefix extends string,
  TSuffix,
  TSign extends string = "-"
> = `${TPrefix}${TSign}${TSuffix extends string | number ? TSuffix : never}`;

type TUtilityWithArbitraryValues<
  TPrefix extends string,
  TSuffix,
  TSign extends string = "-"
> =
  | TUtility<TPrefix, TSuffix, TSign>
  | `${TPrefix}${TSign}[${string | number}]`;

type TBgColor = TUtilityWithArbitraryValues<
  "bg",
  | TColorValues
  | `${TColorValues}/${number}`
  | `${TColorValues}/[.${number}]`
  | `[${string}]`
  | `gradient-to-${string}`
>;

type TBg = TUtility<"bg", TBackgroundValues>;
type TBgSize = TUtility<"bg", "cover">;
type TBgPosition = TUtilityWithArbitraryValues<
  "bg",
  | "center"
  | "left"
  | "left-bottom"
  | "left-top"
  | "right"
  | "right-bottom"
  | "right-top"
  | "top"
>;

type TFill = TUtility<"fill", TColorValues>;

type TTextColor = TUtility<"text", TColorValues>;
type TTextFontSize = TUtilityWithArbitraryValues<"text", TFontSizeValues>;
type TTextFontFamily = TUtility<"font", TFontFamilyValues>;
type TTextFontWeight = TUtility<"font", TFontWeightValues>;
type TTextAlign =
  | "text-left"
  | "text-center"
  | "text-right"
  | "text-justify"
  | "text-start"
  | "text-end";
type TTextTransform = "uppercase" | "lowercase" | "capitalize" | "normal-case";
type TTextOverflow = TUtility<"text", "ellipsis" | "clip">;

type TWhitespace = TUtility<
  "whitespace",
  "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap"
>;

type TLeading = TUtilityWithArbitraryValues<"leading", TLineHeightValues>;

type TMarginBottom = TUtilityWithArbitraryValues<"mb", TSpacingValues>;
type TMarginLeft = TUtilityWithArbitraryValues<"ml", TSpacingValues>;
type TMarginRight = TUtilityWithArbitraryValues<"mr", TSpacingValues>;
type TMarginTop = TUtilityWithArbitraryValues<"mt", TSpacingValues>;
type TMarginX = TUtilityWithArbitraryValues<"mx", TSpacingValues | "auto">;
type TMarginY = TUtilityWithArbitraryValues<"my", TSpacingValues>;

type TPaddingBottom = TUtilityWithArbitraryValues<"pb", TSpacingValues>;
type TPaddingLeft = TUtilityWithArbitraryValues<"pl", TSpacingValues>;
type TPaddingRight = TUtilityWithArbitraryValues<"pr", TSpacingValues>;
type TPaddingTop = TUtilityWithArbitraryValues<"pt", TSpacingValues>;
type TPaddingX = TUtilityWithArbitraryValues<"px", TSpacingValues>;
type TPaddingY = TUtilityWithArbitraryValues<"py", TSpacingValues>;

type TPadding = TUtilityWithArbitraryValues<"p", TSpacingValues>;

type TBottom = TUtilityWithArbitraryValues<"bottom", TSpacingValues>;
type TLeft = TUtilityWithArbitraryValues<"left", TSpacingValues>;
type TRight = TUtilityWithArbitraryValues<"right", TSpacingValues>;
type TTop = TUtilityWithArbitraryValues<"top", TSpacingValues>;

type THeight = TUtilityWithArbitraryValues<"h", TSpacingValues | "full">;
type TMinHeight = TUtilityWithArbitraryValues<"min-h", TSpacingValues>;
type TMaxHeight = TUtilityWithArbitraryValues<"max-h", TSpacingValues>;
type TWidth = TUtilityWithArbitraryValues<"w", TSpacingValues | "full">;
type TMaxWidth = TUtilityWithArbitraryValues<"max-w", TSpacingValues>;

type TBorderRadius = TUtilityWithArbitraryValues<
  "rounded",
  TBorderRadiusValues
>;

type TBorderColor = TUtilityWithArbitraryValues<"border", TColorValues>;

type TBorderStyle = TUtility<
  "border",
  "solid" | "dashed" | "dotted" | "double" | "none"
>;

type TBorderWidth = TUtilityWithArbitraryValues<
  "border" | "border-l" | "border-r" | "border-t" | "border-b",
  TBorderWidthValues
>;

type TZIndex = TUtilityWithArbitraryValues<"z", TZIndexValues>;

type TDisplay =
  | "block"
  | "inline-block"
  | "inline"
  | "flex"
  | "inline-flex"
  | "table"
  | "inline-table"
  | "flow-root"
  | "contents"
  | "list-item"
  | "hidden";

type TFlex =
  | `flex-[${number}_${number}_${number}%]`
  | `flex-[${number}_${number}_${number}rem]`
  | `flex-[${number}_${number}_${number}px]`
  | `flex-[${number}_${number}_${string}]`;

type TAlignItems = TUtility<
  "items",
  "start" | "end" | "center" | "stretch" | "baseline"
>;

type TAlignSelf = TUtility<
  "self",
  "auto" | "start" | "end" | "center" | "stretch"
>;

type TJustifyContent = TUtility<
  "justify",
  "start" | "end" | "center" | "between" | "around" | "evenly"
>;

type TOrder =
  | `-order-${number}`
  | `order-${number}`
  | "order-first"
  | "order-last"
  | "order-none";

type TGap = TUtilityWithArbitraryValues<"gap", TSpacingValues>;

type TOverflow = TUtility<"overflow", "auto" | "hidden" | "visible" | "scroll">;

type TPosition = "static" | "relative" | "absolute" | "fixed" | "sticky";

type TTransition =
  | "default"
  | "transition-all"
  | "transition-colors"
  | "transition-opacity"
  | "transition-shadow"
  | "transition-shadow"
  | "transition-transform"
  | "transition-none";
type TTransitionDuration = TUtility<"duration", TTransitionDurationValues>;
type TTransitionTiming = TUtility<"ease", "linear" | "in" | "out" | "in-out">;

type TLetterSpacing = TUtility<"tracking", TLetterSpacingValues>;
type TTextShadow = TUtility<"text-shadow", TTextShadowValues>;
type TBackgroundOpacity = TUtility<"bg-opacity", TBackgroundOpacityValues>;

type TTransform = "transform" | "transform-gpu" | "transform-none";

type TTranslate = TUtilityWithArbitraryValues<
  `translate-${"x" | "y" | "z"}`,
  TSpacingValues
>;

type TRotate =
  | `rotate-${number}`
  | `-rotate-${number}`
  | `rotate-[${number}deg]`;

type TCursor = TUtility<
  "cursor",
  | "auto"
  | "default"
  | "pointer"
  | "wait"
  | "text"
  | "move"
  | "help"
  | "not-allowed"
>;

type TListStyleType = TUtility<"list", "none" | "disc" | "decimal">;

type TFlexDirection = "flex-col" | "flex-row";

type TFlexFlowValues =
  | "flex-row-wrap"
  | "flex-row-reverse-wrap"
  | "flex-col-wrap"
  | "flex-col-reverse-wrap"
  | "flex-row-wrap-reverse"
  | "flex-row-reverse-wrap-reverse"
  | "flex-col-wrap-reverse"
  | "flex-col-reverse-wrap-reverse"
  | "flex-row-nowrap"
  | "flex-row-reverse-nowrap"
  | "flex-col-nowrap"
  | "flex-col-reverse-nowrap";

type TFlexWrap = "flex-wrap" | "flex-nowrap";
type TAfter = TUtilityWithArbitraryValues<"after", string, ":">;

type TOpacity = `opacity-${number}`;

type TColumns = `columns-${number}`;

type TOutline = `outline-${number}`;

type TMediaQuery = TUtilityWithArbitraryValues<TScreensValues, string, ":">;
type TBoxShadow = TUtility<"shadow", TBoxShadowValues>;

export interface IThemeClasses {
  after?: TAfter | TAfter[];
  alignItems?: TAlignItems;
  alignSelf?: TAlignSelf;
  background?: TBg | TBg[];
  backgroundColor?: TBgColor;
  backgroundOpacity?: TBackgroundOpacity;
  backgroundSize?: TBgSize;
  backgroundPosition?: TBgPosition;
  borderColor?: TBorderColor;
  borderRadius?: TBorderRadius;
  borderStyle?: TBorderStyle;
  borderWidth?: TBorderWidth | TBorderWidth[];
  bottom?: TBottom;
  boxShadow?: TBoxShadow;
  color?: TTextColor;
  columns?: TColumns;
  cursor?: TCursor;
  display?: TDisplay;
  flex?: TFlex;
  flexDirection?: TFlexDirection;
  flexFlow?: TFlexFlowValues;
  flexWrap?: TFlexWrap;
  fontFamily?: TTextFontFamily;
  fontSize?: TTextFontSize;
  fontWeight?: TTextFontWeight;
  gap?: TGap;
  height?: THeight;
  justifyContent?: TJustifyContent;
  left?: TLeft;
  lineHeight?: TLeading;
  letterSpacing?: TLetterSpacing;
  listStyleType?: TListStyleType;
  marginBottom?: TMarginBottom;
  marginLeft?: TMarginLeft;
  marginRight?: TMarginRight;
  marginTop?: TMarginTop;
  marginX?: TMarginX;
  marginY?: TMarginY;
  maxHeight?: TMaxHeight;
  maxWidth?: TMaxWidth;
  mediaQuery?: TMediaQuery | TMediaQuery[];
  minHeight?: TMinHeight;
  opacity?: TOpacity;
  order?: TOrder;
  outline?: TOutline;
  overflow?: TOverflow;
  padding?: TPadding;
  paddingBottom?: TPaddingBottom;
  paddingLeft?: TPaddingLeft;
  paddingRight?: TPaddingRight;
  paddingTop?: TPaddingTop;
  paddingX?: TPaddingX;
  paddingY?: TPaddingY;
  position?: TPosition;
  right?: TRight;
  rotate?: TRotate;
  textAlign?: TTextAlign;
  textOverflow?: TTextOverflow;
  textShadow?: TTextShadow;
  textTransform?: TTextTransform;
  top?: TTop;
  transform?: TTransform;
  transition?: TTransition;
  transitionDuration?: TTransitionDuration;
  transitionTiming?: TTransitionTiming;
  translate?: TTranslate | TTranslate[];
  whitespace?: TWhitespace;
  width?: TWidth;
  zIndex?: TZIndex;
}
