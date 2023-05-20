import { CSSProperties } from "react";
import { StaticImageData } from "next/image";

export interface IIconProps {
  iconSrc: StaticImageData;
  iconDescription: string;
  iconStyle?: CSSProperties;
}
