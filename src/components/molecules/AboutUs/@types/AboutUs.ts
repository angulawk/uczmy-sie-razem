import { IIconProps } from "@app/components/atoms/Icon/@types/Icon";

export interface IFeaturesProps {
  title: string;
  description: string;
  iconSrc: IIconProps["iconSrc"];
  iconTitle: IIconProps["iconTitle"];
}

export interface IAboutUsProps {
  description?: string;
  features: IFeaturesProps[];
  title: string;
}
