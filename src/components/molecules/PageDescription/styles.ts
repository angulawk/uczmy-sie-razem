import { IThemeClasses } from "@app/types/theme";

export const pageDescriptionThemeClasses: IThemeClasses = {
  color: "text-black",
  display: "flex",
  flexDirection: "flex-col",
  justifyContent: "justify-center",
  width: "w-full",
  mediaQuery: ["screenSmMd:px-0", "screenSmXs:px-0"]
};

export const pageDescriptionWrapperThemeClasses: IThemeClasses = {
  marginX: "mx-auto",
  width: "w-full",
  mediaQuery: [
    "screenLg:max-w-[1400px]",
    "screenMdLg:max-w-[1200px]",
    "screenSmMd:max-w-[1000px]",
    "screenMaxSm:px-0",
    "screenSmXs:max-w-[600px]"
  ]
};

export const pageDescriptionTitleThemeClasses: IThemeClasses = {
  fontWeight: "font-normal",
  fontSize: "text-40",
  letterSpacing: "tracking-wider",
  lineHeight: "leading-40",
  mediaQuery: ["screenMdLg:text-36", "screenMaxSm:text-34"]
};

export const pageDescriptionDescriptionThemeClasses: IThemeClasses = {
  fontWeight: "font-thin",
  fontSize: "text-18",
  marginTop: "mt-16",
  letterSpacing: "tracking-wider"
};
