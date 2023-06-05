import { IThemeClasses } from "@app/types/theme";

export const printButtonContainerDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  justifyContent: "justify-end",
  mediaQuery: ["print:hidden"]
};

export const printButtonDefaultThemeClasses: IThemeClasses = {
  backgroundColor: "bg-green200",
  color: "text-white",
  fontSize: "text-18",
  paddingX: "px-24",
  paddingY: "py-8",
  borderRadius: "rounded-sm",
  boxShadow: "shadow-button"
};
