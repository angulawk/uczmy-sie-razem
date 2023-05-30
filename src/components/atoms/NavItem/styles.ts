import { Location } from "@app/components/atoms/NavItem/@types/NavItem";
import { NavDirection } from "@app/components/molecules/Nav/@types/Nav";
import { IThemeClasses } from "@app/types/theme";

export const mapDirectionToNavItemStyles: Record<NavDirection, IThemeClasses> =
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

export const mapLocationToNavItemStyles: Record<NavDirection, IThemeClasses> = {
  [Location.Header]: {
    fontSize: "text-18",
    textShadow: "text-shadow-sm"
  },
  [Location.Footer]: {
    fontSize: "text-14"
  }
};

export const navItemDefaultThemeClasses: IThemeClasses = {
  cursor: "cursor-pointer",
  color: "text-white",
  marginRight: "mr-12",
  letterSpacing: "tracking-wider"
};
