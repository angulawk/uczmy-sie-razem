import { NavDirection } from "@app/components/molecules/Nav/@types/Nav";
import { IThemeClasses } from "@app/types/theme";

export const mapNavDirectionToStyles: Record<NavDirection, IThemeClasses> = {
  [NavDirection.Horizontal]: {
    flexDirection: "flex-row",
    marginTop: "mt-0",
    color: "text-black"
  },
  [NavDirection.Vertical]: {
    flexDirection: "flex-col",
    marginTop: "mt-28",
    color: "text-white"
  }
};

export const mapNavDirectionToLinkStyles: Record<NavDirection, IThemeClasses> =
  {
    [NavDirection.Horizontal]: {
      marginRight: "mr-12"
    },
    [NavDirection.Vertical]: {
      marginRight: "mr-0"
    }
  };

export const navDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  gap: "gap-8"
};

export const navLinkDefaultThemeClasses: IThemeClasses = {
  cursor: "cursor-pointer",
  fontSize: "text-18",
  textShadow: "text-shadow-sm",
  marginRight: "mr-12",
  letterSpacing: "tracking-wider"
};
