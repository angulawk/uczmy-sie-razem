import { Path } from "@app/app/config";

export interface ICategoryProps {
  path: Path;
  title: string;
}

export interface ICategoriesProps {
  categories: ICategoryProps[];
  title?: string;
}
