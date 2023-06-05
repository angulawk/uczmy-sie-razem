import { TSVGIcon } from "@app/types/svg";
import { IThemeClasses } from "@app/types/theme";

export enum IconName {
  Human = "human",
  Weather = "weather",
  Job = "job",
  Animals = "animals",
  Body = "body",
  Character = "character",
  Logo = "logo",
  Instagram = "instagram",
  Youtube = "youtube",
  VolumeOn = "volume-on",
  VolumeOff = "volume-off"
}

export interface IIconProps {
  iconSrc: IconName;
  iconTitle: string;
  themeClasses?: Pick<IThemeClasses, "height" | "overflow" | "width">;
}

export type TIconComponents = Record<IIconProps["iconSrc"], TSVGIcon>;
