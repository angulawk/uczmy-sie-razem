import { IThemeClasses } from "@app/types/theme";

export const printButtonContainerDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  justifyContent: "justify-end",
  mediaQuery: ["print:hidden"]
};
