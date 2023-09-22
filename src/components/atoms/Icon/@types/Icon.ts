import { TSVGIcon } from "@app/types/svg";
import { IThemeClasses } from "@app/types/theme";

export enum IconName {
  Human = "human",
  Weather = "weather",
  Job = "job",
  Animals = "animals",
  Body = "body",
  Character = "character",
  Instagram = "instagram",
  Youtube = "youtube",
  VolumeOn = "volume-on",
  VolumeOff = "volume-off",
  Students = "students"
}

export interface IIconProps {
  iconSrc: IconName | any;
  iconTitle: string;
  themeClasses?: Pick<
    IThemeClasses,
    "mediaQuery" | "height" | "overflow" | "width"
  >;
}

export type TIconComponents = Record<IIconProps["iconSrc"], TSVGIcon>;
