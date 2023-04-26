import { NavDirection } from "@app/components/molecules/Nav/@types/Nav";

export const mapNavDirectionToStyles = {
  [NavDirection.Horizontal]: "flex-row",
  [NavDirection.Vertical]: "flex-col"
};