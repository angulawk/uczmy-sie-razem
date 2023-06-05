import {
  ButtonSize,
  IMapTypeToButtonContainerProps,
  TMapSizeToButtonContainerProps
} from "@app/components/molecules/Button/@types/Button";
import { IThemeClasses } from "@app/types/theme";

export const mapTypeToButtonContainerProps: IMapTypeToButtonContainerProps = {
  primary: {
    backgroundColor: "bg-green200"
  },
  secondary: {
    backgroundColor: "bg-gray200",
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
  boxShadow: "shadow-button"
};
