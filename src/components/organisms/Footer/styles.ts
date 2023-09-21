import { IThemeClasses } from "@app/types/theme";

export const footerDefaultStyles: IThemeClasses = {
  backgroundColor: "bg-black",
  width: "w-full",
  paddingY: "py-32",
  marginTop: "mt-auto",
  mediaQuery: ["print:hidden"]
};

export const footerContainerDefaultStyles: IThemeClasses = {
  marginX: "mx-auto",
  mediaQuery: [
    "screenLg:max-w-[1400px]",
    "screenMdLg:max-w-[1200px]",
    "screenSmMd:max-w-[1000px]",
    "screenSmMd:px-40",
    "screenSmXs:max-w-[600px]",
    "screenSmXs:px-40",
    "screenMaxMd:px-24"
  ]
};
