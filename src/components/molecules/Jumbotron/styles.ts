import { IThemeClasses } from "@app/types/theme";

export const jumbotronDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  justifyContent: "justify-end",
  width: "w-full",
  height: "h-720"
};

export const jumbotronWrapperDefaultThemeClasses: IThemeClasses = {
  position: "relative",
  width: "w-full",
  marginX: "mx-auto",
  justifyContent: "justify-end",
  mediaQuery: [
    "screenLg:max-w-[1400px]",
    "screenMdLg:max-w-[1200px]",
    "screenSmMd:max-w-[1000px]",
    "print:hidden"
  ]
};
