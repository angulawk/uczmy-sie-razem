import { TSVGIcon } from "@app/types/svg";

export enum IconDynamicName {
  Human = "human",
  Weather = "weather",
  Job = "job",
  Animals = "animals",
  Body = "body",
  Character = "character"
}

export interface IIconProps {
  iconSrc: IconDynamicName;
  iconDescription: string;
}

export type TIconDynamicComponents = Record<IIconProps["iconSrc"], TSVGIcon>;
