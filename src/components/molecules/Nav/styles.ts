import { NavDirection } from "@app/components/molecules/Nav/@types/Nav";
import { IThemeClasses } from "@app/types/theme";

export const mapNavDirectionToStyles: Record<NavDirection, string> = {
  [NavDirection.Horizontal]: "flex-row",
  [NavDirection.Vertical]: "flex-col mb-20"
};

export const mapNavDirectionToLinkStyles: Record<NavDirection, string> = {
  [NavDirection.Horizontal]: "mr-12 mb-0",
  [NavDirection.Vertical]: "mr-0 mb-8"
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
