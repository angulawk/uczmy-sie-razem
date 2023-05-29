import { Placement } from "@app/components/atoms/Title/@types/Title";
import { IThemeClasses } from "@app/types/theme";

export const mapTitlePlacementToStyles: Record<Placement, IThemeClasses> = {
  [Placement.Main]: {
    marginY: "my-48"
  },
  [Placement.Details]: {
    marginY: "my-24"
  }
};

export const titleDefaultThemeClasses: IThemeClasses = {
  fontSize: "text-36",
  color: "text-black",
  marginX: "mx-auto",
  mediaQuery: ["print:text-24", "print:my-8"]
};
