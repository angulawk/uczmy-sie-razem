import { NavDirection } from "@app/components/molecules/Nav/@types/Nav";
import { IThemeClasses } from "@app/types/theme";

export const mapNavDirectionToStyles: Record<NavDirection, IThemeClasses> = {
  [NavDirection.Horizontal]: {
    flexDirection: "flex-row"
  },
  [NavDirection.Vertical]: {
    flexDirection: "flex-col",
    margingBottom: "mb-20"
  }
};

export const mapNavDirectionToLinkStyles: Record<NavDirection, IThemeClasses> =
  {
    [NavDirection.Horizontal]: {
      marginRight: "mr-12",
      marginBottom: "mb-0"
    },
    [NavDirection.Vertical]: {
      marginRight: "mr-0",
      marginBottom: "mb-8"
    }
  };

export const navDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  gap: "gap-4",
  color: "text-white",
  marginTop: "mt-24"
};

export const navLinkDefaultThemeClasses: IThemeClasses = {
  cursor: "cursor-pointer",
  fontSize: "text-18",
  textShadow: "text-shadow-sm",
  marginRight: "mr-12",
  letterSpacing: "tracking-wider"
};
