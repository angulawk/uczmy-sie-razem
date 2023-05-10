import { ICategoryProps } from "@app/components/molecules/Categories/@types/Categories";
import { Path } from "@app/routing/paths";
import { Title } from "@app/routing/titles";

export const mainCategories: ICategoryProps[] = [
  {
    path: Path.CategoriesHuman,
    title: Title.Human
  },
  {
    path: Path.CategoriesWeather,
    title: Title.Weather
  },
  {
    path: Path.CategoriesProfession,
    title: Title.Profession
  }
];
