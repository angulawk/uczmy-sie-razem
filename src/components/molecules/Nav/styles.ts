import { NavDirection } from "@app/components/molecules/Nav/@types/Nav";

export const mapNavDirectionToStyles: Record<NavDirection, string> = {
  [NavDirection.Horizontal]: "flex-row",
  [NavDirection.Vertical]: "flex-col mb-20"
};

export const mapNavDirectionToLinkStyles: Record<NavDirection, string> = {
  [NavDirection.Horizontal]: "mr-12 mb-0",
  [NavDirection.Vertical]: "mr-0 mb-8"
};
