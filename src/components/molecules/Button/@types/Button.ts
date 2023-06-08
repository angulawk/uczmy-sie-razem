import { TChildren } from "@app/app/@types/RootLayout";
import { IThemeClasses } from "@app/types/theme";

export enum ButtonSize {
  Small,
  Medium,
  Large
}

export enum ButtonType {
  Primary,
  Secondary
}

export interface IButtonProps {
  children: TChildren;
  href?: string;
  onClick?: () => void;
  size?: ButtonSize;
  tabIndex?: number;
  themeClasses?: Pick<IThemeClasses, "mediaQuery">;
  type?: ButtonType;
}

export type TMapSizeToButtonContainerProps = Record<
  ButtonSize,
  Pick<IThemeClasses, "height">
>;

export interface IMapTypeToButtonContainerProps {
  [ButtonType.Primary]: Pick<
    IThemeClasses,
    "backgroundColor" | "hover" | "active"
  >;
  [ButtonType.Secondary]: Pick<
    IThemeClasses,
    "backgroundColor" | "color" | "hover" | "active"
  >;
}
