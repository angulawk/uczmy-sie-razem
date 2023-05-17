import { CSSProperties } from "react";
import { ImageProps } from "next/image";

export interface IIconProps {
  iconSrc: ImageProps["src"];
  iconDescription: string;
  iconStyle?: CSSProperties;
}
