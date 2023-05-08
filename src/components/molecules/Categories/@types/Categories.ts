import { Path } from "@app/routing/paths";

export interface ICategoryProps {
  path: Path;
  title: string;
}

export interface ICategoriesProps {
  categories: ICategoryProps[];
  title?: string;
}
