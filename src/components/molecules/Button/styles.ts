import {
  ButtonSize,
  ButtonType,
  IMapTypeToButtonContainerProps,
  TMapSizeToButtonContainerProps
} from "@app/components/molecules/Button/@types/Button";
import { IThemeClasses } from "@app/types/theme";

export const mapTypeToButtonContainerProps: IMapTypeToButtonContainerProps = {
  [ButtonType.Primary]: {
    backgroundColor: "bg-green200",
    hover: ["hover:translate-y-sm", "hover:shadow-primaryButton"],
    active: ["active:translate-y-md", "active:shadow-none"]
  },
  [ButtonType.Secondary]: {
    backgroundColor: "bg-green100",
    color: "text-black",
    hover: ["hover:translate-y-sm", "hover:shadow-secondaryButton"],
    active: ["active:translate-y-md", "active:shadow-none"]
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
  color: "text-white",
  fontSize: "text-18",
  paddingX: "px-24",
  paddingY: "py-8",
  borderRadius: "rounded-sm",
  transitionDuration: "duration-fast",
  transition: "transition-all",
  transitionTiming: "ease-in-out",
  textAlign: "text-center"
};
