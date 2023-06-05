import { NavDirection } from "@app/components/molecules/Nav/@types/Nav";
import { IThemeClasses } from "@app/types/theme";

export const mapNavDirectionToStyles: Record<NavDirection, IThemeClasses> = {
  [NavDirection.Horizontal]: {
    flexDirection: "flex-row"
  },
  [NavDirection.Vertical]: {
    flexDirection: "flex-col",
    marginBottom: "mb-20"
  }
};

export const navDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  gap: "gap-4",
  color: "text-white",
  marginTop: "mt-24"
};
