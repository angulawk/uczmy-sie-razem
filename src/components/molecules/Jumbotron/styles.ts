import { IThemeClasses } from "@app/types/theme";

export const jumbotronWrapperDefaultThemeClasses: IThemeClasses = {
  backgroundColor: "bg-gray100",
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

export const jumbotronDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  justifyContent: "justify-end",
  width: "w-full",
  height: "h-640",
  mediaQuery: ["screenMaxMd:flex-col", "screenMaxMd:py-36"]
};

export const jumbotronPageDescriptionThemeClasses: IThemeClasses = {
  flex: "flex-[0_1_50%]",
  mediaQuery: [
    "screenMaxSm:flex-[0_1_100%]",
    "screenMaxMd:text-center",
    "screenMaxMd:order-1"
  ]
};

export const jumbotronIconThemeClasses: IThemeClasses = {
  flex: "flex-[0_1_50%]",
  mediaQuery: ["screenMaxSm:flex-[0_1_100%]", "screenMaxSm:hidden"]
};
