import { IThemeClasses } from "@app/types/theme";

export const footerDefaultStyles: IThemeClasses = {
  backgroundColor: "bg-black",
  width: "w-full",
  paddingY: "py-32",
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

export const footerSocialMediaLinksDefaultStyles: IThemeClasses = {
  color: "text-white"
};

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

export const footerSeparatorDefaultStyles: IThemeClasses = {
  color: "text-gray100",
  opacity: "opacity-20",
  marginY: "my-24"
};

export const footerRightsDefaultStyles: IThemeClasses = {
  color: "text-white",
  fontSize: "text-16",
  textAlign: "text-center"
};

export const footerButtonDefaultStyles: IThemeClasses = {
  mediaQuery: ["screenMaxXs:w-full"]
};
