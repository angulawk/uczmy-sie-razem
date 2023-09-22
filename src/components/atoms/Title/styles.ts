import { TitlePlacement } from "@app/components/atoms/Title/@types/Title";
import { IThemeClasses } from "@app/types/theme";

export const mapTitlePlacementToStyles: Record<TitlePlacement, IThemeClasses> =
  {
    [TitlePlacement.Main]: {
      marginBottom: "mb-48"
    },
    [TitlePlacement.Details]: {
      marginY: "my-24"
    }
  };

export const titleDefaultThemeClasses: IThemeClasses = {
  fontSize: "text-36",
  color: "text-black",
  marginX: "mx-auto",
  mediaQuery: ["print:text-24", "print:my-8"]
};
