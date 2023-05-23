import { IThemeClasses } from "@app/types/theme";

export const pageDescriptionThemeClasses: IThemeClasses = {
  backgroundColor: "bg-black",
  backgroundOpacity: "bg-opacity-60",
  display: "flex",
  flexDirection: "flex-col",
  paddingY: "py-48",
  paddingX: "px-24",
  justifyContent: "justify-center",
  position: "absolute",
  bottom: "bottom-0",
  left: "left-0",
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
    "screenSmMd:px-40",
    "screenSmXs:max-w-[600px]",
    "screenSmXs:px-40",
    "screenMaxXs:px-0"
  ]
};

export const pageDescriptionTitleThemeClasses: IThemeClasses = {
  fontWeight: "font-normal",
  color: "text-white",
  fontSize: "text-36",
  letterSpacing: "tracking-wider",
  lineHeight: "leading-40",
  mediaQuery: ["screenMaxSm:text-34"]
};

export const pageDescriptionDescriptionThemeClasses: IThemeClasses = {
  fontWeight: "font-thin",
  color: "text-white",
  fontSize: "text-20",
  marginTop: "mt-8",
  letterSpacing: "tracking-wider"
};
