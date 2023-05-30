import { TChildren } from "@app/app/@types/RootLayout";
import { IThemeClasses } from "@app/types/theme";

export interface ILinkProps {
  children: TChildren;
  href: string;
  isExternal?: boolean;
  isHoverable?: boolean;
  themeClasses?: Pick<
    IThemeClasses,
    "alignItems" | "display" | "height" | "justifyContent" | "width"
  >;
}
