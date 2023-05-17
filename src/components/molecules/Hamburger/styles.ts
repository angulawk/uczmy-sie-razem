import { IThemeClasses } from "@app/types/theme";

export const hamburgerDefaultStyles: IThemeClasses = {
  position: "absolute",
  top: "top-32",
  right: "right-32",
  width: "w-36",
  height: "h-28",
  marginX: "mx-auto",
  transform: "transform",
  transition: "transition-all",
  transitionDuration: "duration-default",
  transitionTiming: "ease-in-out",
  cursor: "cursor-pointer"
};

export const hamburgerLineDefaultStyles: IThemeClasses = {
  position: "absolute",
  display: "block",
  height: "h-2",
  borderRadius: "rounded-md",
  backgroundColor: "bg-white",
  opacity: "opacity-100",
  transform: "transform",
  transition: "transition-all",
  transitionDuration: "duration-default",
  transitionTiming: "ease-in-out"
};
