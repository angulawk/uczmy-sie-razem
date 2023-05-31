import { TSVGIcon } from "@app/types/svg";

export enum IconName {
  Human = "human",
  Weather = "weather",
  Job = "job",
  Animals = "animals",
  Body = "body",
  Character = "character",
  VolumeOn = "volume-on",
  VolumeOff = "volume-off"
}

export interface IIconProps {
  iconSrc: IconName;
  iconTitle: string;
}

export type TIconComponents = Record<IIconProps["iconSrc"], TSVGIcon>;
