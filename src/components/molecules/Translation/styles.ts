import { IThemeClasses } from "@app/types/theme";

export const translationDefaultThemeClasses: IThemeClasses = {
  fontSize: "text-20",
  marginBottom: "mb-2",
  mediaQuery: ["print:text-14"]
};

export const translationContainerDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  flexDirection: "flex-row",
  flexWrap: "flex-wrap",
  alignItems: "items-center",
  mediaQuery: ["print:block"]
};
