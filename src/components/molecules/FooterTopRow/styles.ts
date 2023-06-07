import { IThemeClasses } from "@app/types/theme";

export const footerWrapperDefaultStyles: IThemeClasses = {
  display: "flex",
  justifyContent: "justify-between",
  alignItems: "items-center",
  mediaQuery: [
    "screenMaxXs:flex-col",
    "screenMaxXs:gap-32",
    "screenMaxXs:items-start"
  ]
};

export const footerSocialMediaLinksDefaultStyles: IThemeClasses = {
  color: "text-white"
};
