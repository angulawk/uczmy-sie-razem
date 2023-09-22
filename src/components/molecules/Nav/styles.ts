import {
  NavDirection,
  NavLocation
} from "@app/components/molecules/Nav/@types/Nav";
import { IThemeClasses } from "@app/types/theme";

export const mapDirectionToNavStyles: Record<NavDirection, IThemeClasses> = {
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

export const mapDirectionToLinkStyles: Record<NavDirection, IThemeClasses> = {
  [NavDirection.Horizontal]: {
    marginRight: "mr-12"
  },
  [NavDirection.Vertical]: {
    marginRight: "mr-0"
  }
};

export const navDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  gap: "gap-8",
  flexDirection: "flex-col"
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
