import { TChildren } from "@app/app/@types/RootLayout";
import { IThemeClasses } from "@app/types/theme";

export enum ButtonSize {
  Small,
  Medium,
  Large
}

export interface IButtonProps {
  children: TChildren;
  onClick?: () => void;
  size?: ButtonSize;
  tabIndex?: number;
  type?: "primary" | "secondary";
  themeClasses?: Pick<IThemeClasses, "mediaQuery">;
}

export type TMapSizeToButtonContainerProps = Record<
  ButtonSize,
  Pick<IThemeClasses, "height">
>;

export interface IMapTypeToButtonContainerProps {
  primary: {
    backgroundColor: IThemeClasses["backgroundColor"];
  };
  secondary: {
    backgroundColor: IThemeClasses["backgroundColor"];
    color: IThemeClasses["color"];
  };
}
