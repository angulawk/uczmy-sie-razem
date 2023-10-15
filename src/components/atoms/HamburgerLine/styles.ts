import {
  HamburgerLinePosition,
  HamburgerLineVisibility
} from "@app/components/atoms/HamburgerLine/@types/HamburgerLine";
import { IThemeClasses } from "@app/types/theme";

export const hamburgerLineDefaultStyles: IThemeClasses = {
  position: "absolute",
  display: "block",
  height: "h-2",
  borderRadius: "rounded-md",
  opacity: "opacity-100",
  transform: "transform",
  transition: "transition-all",
  transitionDuration: "duration-fast",
  transitionTiming: "ease-linear"
};

export const mapHamburgerLineVisibilityToStyles: Record<
  HamburgerLineVisibility,
  IThemeClasses
> = {
  [HamburgerLineVisibility.Visible]: {
    backgroundColor: "bg-white"
  },
  [HamburgerLineVisibility.Hidden]: {
    backgroundColor: "bg-black"
  }
};

export const mapHamburgerLinePositionToStyles: Record<
  HamburgerLinePosition,
  IThemeClasses
> = {
  [HamburgerLinePosition.Top]: {
    top: "top-0",
    left: "left-0"
  },
  [HamburgerLinePosition.MiddleTop]: {
    top: "top-12",
    left: "left-0",
    width: "w-full"
  },
  [HamburgerLinePosition.MiddleBottom]: {
    top: "top-12",
    left: "left-0",
    width: "w-full"
  },
  [HamburgerLinePosition.Bottom]: {
    top: "top-24",
    left: "left-0"
  }
};

export const mapHamburgerLineVisibilityPositionToStyles: Record<
  HamburgerLineVisibility,
  Record<HamburgerLinePosition, IThemeClasses>
> = {
  [HamburgerLineVisibility.Visible]: {
    [HamburgerLinePosition.Top]: {
      top: "top-18",
      left: "left-1/2",
      width: "w-0"
    },
    [HamburgerLinePosition.MiddleTop]: {
      rotate: "rotate-45"
    },
    [HamburgerLinePosition.MiddleBottom]: {
      rotate: "-rotate-45"
    },
    [HamburgerLinePosition.Bottom]: {
      top: "top-8",
      left: "left-1/2",
      width: "w-0"
    }
  },
  [HamburgerLineVisibility.Hidden]: {
    [HamburgerLinePosition.Top]: {
      rotate: "rotate-0",
      width: "w-full"
    },
    [HamburgerLinePosition.MiddleTop]: {
      rotate: "rotate-0"
    },
    [HamburgerLinePosition.MiddleBottom]: {
      rotate: "rotate-0"
    },
    [HamburgerLinePosition.Bottom]: {
      rotate: "rotate-0",
      width: "w-full"
    }
  }
};
