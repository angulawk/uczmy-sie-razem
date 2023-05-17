import { IThemeClasses } from "@app/types/theme";

export const pageTemplateDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  flexDirection: "flex-col",
  mediaQuery: [
    "screenLg:max-w-[1400px]",
    "screenMdLg:max-w-[1200px]",
    "screenSmMd:max-w-[800px] screenSmMd:px-40",
    "screenSmXs:max-w-[600px] screenSmXs:px-40",
    "screenMaxMd:px-24"
  ],
  marginX: "mx-auto",
  width: "w-full"
};
