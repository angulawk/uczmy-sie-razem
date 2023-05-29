import { IThemeClasses } from "@app/types/theme";

export const categoryDetailsDefaultThemeClasses: IThemeClasses = {
  paddingX: "px-8",
  marginY: "my-48"
};

export const categoryDetailsWrapperDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  flexDirection: "flex-col",
  flexWrap: "flex-nowrap",
  gap: "gap-20",
  mediaQuery: ["print:gap-0"]
};
