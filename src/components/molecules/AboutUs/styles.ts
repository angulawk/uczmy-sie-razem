import { IThemeClasses } from "@app/types/theme";

export const aboutUsMainTitleDefaultThemeClasses: IThemeClasses = {
  fontSize: "text-24",
  lineHeight: "leading-40"
};

export const aboutUsSectionDescriptionDefaultThemeClasses: IThemeClasses = {
  fontSize: "text-24"
};

export const aboutUsContainerDefaultThemeClasses: IThemeClasses = {
  marginY: "my-56",
  display: "flex",
  flexDirection: "flex-col",
  gap: "gap-56"
};

export const aboutUsWrapperDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  alignItems: "items-center",
  justifyContent: "justify-between",
  gap: "gap-56",
  mediaQuery: ["screenMaxMd:flex-col"]
};

export const aboutUsImageWrapperDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  flex: "flex-[1_0_50%]",
  mediaQuery: ["screenMaxMd:order-1"]
};

export const aboutUsImageDefaultThemeClasses: IThemeClasses = {
  maxHeight: "max-h-320",
  height: "h-full",
  mediaQuery: ["screenMaxMd:h-200"]
};

export const aboutUsContentDefaultThemeClasses: IThemeClasses = {
  flex: "flex-[1_0_50%]",
  mediaQuery: ["screenMaxMd:text-center"]
};

export const aboutUsTitleDefaultThemeClasses: IThemeClasses = {
  fontSize: "text-34"
};

export const aboutUsDescriptionDefaultThemeClasses: IThemeClasses = {
  fontSize: "text-18"
};
