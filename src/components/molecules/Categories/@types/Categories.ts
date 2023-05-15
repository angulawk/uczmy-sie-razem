import { IIconProps } from "@app/components/atoms/Icon/@types/Icon";
import { Path } from "@app/routing/paths";

export interface ICategoryProps {
  path: Path;
  title: string;
  src: IIconProps["iconSrc"];
  description: IIconProps["iconDescription"];
}

export interface ICategoriesProps {
  categories: ICategoryProps[];
  title?: string;
}
