import { TSVGIcon } from "@app/types/svg";
import { IThemeClasses } from "@app/types/theme";

export enum IconName {
  About = "about",
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
  Students = "students",
  Category = "category",
  Listening = "listening",
  Phrases = "phrases",
  Print = "print"
}

export interface IIconProps {
  iconSrc: IconName;
  iconTitle: string;
  themeClasses?: Pick<
    IThemeClasses,
    "mediaQuery" | "height" | "overflow" | "width"
  >;
}

export type TIconComponents = Record<IIconProps["iconSrc"], TSVGIcon>;
