import { IThemeClasses } from "@app/types/theme";

export const categoriesDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  flexWrap: "flex-wrap",
  alignItems: "items-center",
  justifyContent: "justify-between",
  mediaQuery: ["screenMinMd:gap-32", "screenMaxMd:gap-12"]
};
