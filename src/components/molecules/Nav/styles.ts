import {
  NavDirection,
  NavLocation
} from "@app/components/molecules/Nav/@types/Nav";
import { IThemeClasses } from "@app/types/theme";

export const mapDirectionToNavStyles: Record<NavDirection, IThemeClasses> = {
  [NavDirection.Horizontal]: {
    flexDirection: "flex-row"
  },
  [NavDirection.Vertical]: {
    flexDirection: "flex-col"
  }
};

export const mapLocationToNavStyles: Record<NavLocation, IThemeClasses> = {
  [NavLocation.HeaderDesktop]: {
    fontSize: "text-18",
    textShadow: "text-shadow-sm",
    gap: "gap-12"
  },
  [NavLocation.HeaderMobile]: {
    fontSize: "text-18",
    gap: "gap-20"
  },
  [NavLocation.Footer]: {
    fontSize: "text-14",
    gap: "gap-12",
    marginTop: "mt-0"
  }
};

export const navDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  color: "text-white",
  marginTop: "mt-24"
};
