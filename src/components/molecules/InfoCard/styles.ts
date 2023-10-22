import { IThemeClasses } from "@app/types/theme";

export const infoCardDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  alignItems: "items-center",
  justifyContent: "justify-between",
  gap: "gap-56",
  mediaQuery: ["screenMaxMd:flex-col"]
};

export const infoCardImageWrapperDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  flex: "flex-[1_0_calc(50%-2.8rem)]",
  mediaQuery: ["screenMaxMd:order-1"]
};

export const infoCardImageDefaultThemeClasses: IThemeClasses = {
  maxHeight: "max-h-320",
  height: "h-full",
  mediaQuery: ["screenMaxMd:h-200"]
};

export const infoCardContentDefaultThemeClasses: IThemeClasses = {
  flex: "flex-[1_0_calc(50%-2.8rem)]",
  mediaQuery: ["screenMaxMd:text-center"]
};

export const infoCardTitleDefaultThemeClasses: IThemeClasses = {
  fontSize: "text-34",
  marginBottom: "mb-16"
};

export const infoCardDescriptionDefaultThemeClasses: IThemeClasses = {
  fontSize: "text-18"
};
