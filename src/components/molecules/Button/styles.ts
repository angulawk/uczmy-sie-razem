import {
  ButtonSize,
  ButtonType,
  IMapTypeToButtonContainerProps,
  TMapSizeToButtonContainerProps
} from "@app/components/molecules/Button/@types/Button";
import { IThemeClasses } from "@app/types/theme";

export const mapTypeToButtonContainerProps: IMapTypeToButtonContainerProps = {
  [ButtonType.Primary]: {
    backgroundColor: "bg-green200"
  },
  [ButtonType.Secondary]: {
    backgroundColor: "bg-green100",
    color: "text-black"
  }
};

export const mapSizeToButtonContainerProps: TMapSizeToButtonContainerProps = {
  [ButtonSize.Large]: {
    height: "h-56"
  },
  [ButtonSize.Medium]: {
    height: "h-48"
  },
  [ButtonSize.Small]: {
    height: "h-40"
  }
};

export const buttonDefaultThemeClasses: IThemeClasses = {
  cursor: "cursor-pointer",
  backgroundColor: "bg-green200",
  color: "text-white",
  fontSize: "text-18",
  paddingX: "px-24",
  paddingY: "py-8",
  borderRadius: "rounded-sm",
  boxShadow: "shadow-button",
  transitionDuration: "duration-default",
  transition: "transition-all",
  transitionTiming: "ease-in-out",
  hover: ["hover:translate-y-sm", "hover:shadow-buttonHover"],
  active: ["active:translate-y-md", "active:shadow-buttonHover"]
  // focus: ["focus:translate-y-md", "focus:shadow-buttonHover"]
};
