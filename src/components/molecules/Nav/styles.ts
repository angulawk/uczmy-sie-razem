import {
  NavDirection,
  NavLocation
} from "@app/components/molecules/Nav/@types/Nav";
import { IThemeClasses } from "@app/types/theme";

export const mapDirectionToNavStyles: Record<NavDirection, IThemeClasses> = {
  [NavDirection.Horizontal]: {
    flexDirection: "flex-row",
    gap: "gap-12"
  },
  [NavDirection.Vertical]: {
    flexDirection: "flex-col",
    gap: "gap-20"
  }
};

export const mapLocationToNavStyles: Record<NavDirection, IThemeClasses> = {
  [NavLocation.Header]: {
    fontSize: "text-18",
    textShadow: "text-shadow-sm"
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
