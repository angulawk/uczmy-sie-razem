import { IIconProps } from "@app/components/atoms/Icon/@types/Icon";

export interface IFeatureProps {
  title: string;
  description: string;
  iconSrc: IIconProps["iconSrc"];
  iconTitle: IIconProps["iconTitle"];
  index: number;
}
