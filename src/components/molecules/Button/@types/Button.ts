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
  onClick?: (() => void) | any;
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
  [ButtonType.Primary]: {
    backgroundColor: IThemeClasses["backgroundColor"];
  };
  [ButtonType.Secondary]: {
    backgroundColor: IThemeClasses["backgroundColor"];
    color: IThemeClasses["color"];
  };
}
