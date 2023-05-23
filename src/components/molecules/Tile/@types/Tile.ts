import { IIconProps } from "@app/components/atoms/Icon/@types/Icon";

export interface ITileProps {
  content: string;
  link: string;
  iconSrc: IIconProps["iconSrc"];
  iconTitle: IIconProps["iconTitle"];
}
