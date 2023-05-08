import { ICategoryProps } from "@app/components/molecules/Categories/@types/Categories";
import { Path } from "@app/routing/paths";
import { Title } from "@app/routing/titles";

export const humanCategories: ICategoryProps[] = [
  {
    path: Path.CategoriesHumanBody,
    title: Title.Body
  },
  {
    path: Path.CategoriesHumanCharacter,
    title: Title.Character
  }
];
