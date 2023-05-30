import { IIconProps } from "@app/components/atoms/Icon/@types/Icon";
import { IThemeClasses } from "@app/types/theme";

export enum LinkWithIconVariant {
  Link,
  Logo
}

export interface ILinkWithIconProps {
  href: string;
  iconSrc: IIconProps["iconSrc"];
  iconTitle: IIconProps["iconTitle"];
  isExternal?: boolean;
  themeClasses?: Pick<IThemeClasses, "height" | "width">;
  text?: string;
  variant?: LinkWithIconVariant;
}
