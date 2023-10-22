import { IIconProps } from "@app/components/atoms/Icon/@types/Icon";

export interface IInfoCardProps {
  title: string;
  description: string;
  iconSrc: IIconProps["iconSrc"];
  iconTitle: IIconProps["iconTitle"];
  isEven?: boolean;
}
