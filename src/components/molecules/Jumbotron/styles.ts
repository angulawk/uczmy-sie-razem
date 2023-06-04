import { IThemeClasses } from "@app/types/theme";

export const jumbotronDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  justifyContent: "justify-end",
  background: "bg-students",
  backgroundSize: "bg-cover",
  backgroundPosition: "bg-center",
  width: "w-full",
  height: "h-720",
  position: "relative",
  mediaQuery: ["print:hidden"]
};

export const jumbotronWrapperDefaultThemeClasses: IThemeClasses = {
  width: "w-full",
  marginX: "mx-auto",
  display: "flex",
  justifyContent: "justify-end",
  mediaQuery: [
    "screenLg:max-w-[1400px]",
    "screenMdLg:max-w-[1200px]",
    "screenSmMd:max-w-[1000px]"
  ]
};
