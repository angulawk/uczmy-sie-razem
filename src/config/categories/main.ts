import { IconName } from "@app/components/atoms/Icon/config";
import { ICategoryProps } from "@app/components/molecules/Categories/@types/Categories";
import { IconDescription } from "@app/config/iconDescriptions";
import { Path } from "@app/routing/paths";
import { Title } from "@app/routing/titles";

export const mainCategories: ICategoryProps[] = [
  {
    path: Path.CategoriesHuman,
    title: Title.Human,
    src: IconName.Human,
    description: IconDescription.Human
  },
  {
    path: Path.CategoriesWeather,
    title: Title.Weather,
    src: IconName.Weather,
    description: IconDescription.Weather
  },
  {
    path: Path.CategoriesProfession,
    title: Title.Profession,
    src: IconName.Job,
    description: IconDescription.Profession
  },
  {
    path: Path.CategoriesAnimals,
    title: Title.Animals,
    src: IconName.Animals,
    description: IconDescription.Animals
  }
];
