import { IThemeClasses } from "@app/types/theme";

export const categoryDetailDefaultThemeClasses: IThemeClasses = {
  borderStyle: "border-solid",
  borderColor: "border-black",
  borderWidth: "border-thin",
  width: "w-48",
  marginY: "my-8"
};

export const categoryDetailWrapperDefaultThemeClasses: IThemeClasses = {
  backgroundColor: "bg-gray200",
  borderRadius: "rounded-lg",
  paddingX: "px-20",
  paddingY: "py-16",
  mediaQuery: ["print:mb-8", "print:px-0", "print:py-0"]
};
