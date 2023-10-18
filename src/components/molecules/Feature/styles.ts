import { IThemeClasses } from "@app/types/theme";

export const featureDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  alignItems: "items-center",
  justifyContent: "justify-between",
  gap: "gap-56",
  mediaQuery: ["screenMaxMd:flex-col"]
};

export const featureImageWrapperDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  flex: "flex-[1_0_50%]",
  mediaQuery: ["screenMaxMd:order-1"]
};

export const featureImageDefaultThemeClasses: IThemeClasses = {
  maxHeight: "max-h-320",
  height: "h-full",
  mediaQuery: ["screenMaxMd:h-200"]
};

export const featureContentDefaultThemeClasses: IThemeClasses = {
  flex: "flex-[1_0_50%]",
  mediaQuery: ["screenMaxMd:text-center"]
};

export const featureTitleDefaultThemeClasses: IThemeClasses = {
  fontSize: "text-34"
};

export const featureDescriptionDefaultThemeClasses: IThemeClasses = {
  fontSize: "text-18"
};
