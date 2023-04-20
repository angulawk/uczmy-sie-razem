export interface ICategoryProps {
  name: string;
  href: string;
}

export interface ICategoriesProps {
  categories: ICategoryProps[];
  title?: string;
}
