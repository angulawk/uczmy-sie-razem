import { ICategoryProps } from "@app/components/molecules/Categories/@types/Categories";
import { Path } from "@app/routing/paths";
import { Title } from "@app/routing/titles";
import { IconName } from "@app/components/atoms/Icon/@types/Icon";
import { IconTitle } from "@app/config/iconTitles";

export const mainCategories: ICategoryProps[] = [
  {
    path: Path.CategoriesHuman,
    title: Title.Human,
    src: IconName.Human,
    iconTitle: IconTitle.Human
  },
  {
    path: Path.CategoriesWeather,
    title: Title.Weather,
    src: IconName.Weather,
    iconTitle: IconTitle.Weather
  },
  {
    path: Path.CategoriesProfession,
    title: Title.Profession,
    src: IconName.Job,
    iconTitle: IconTitle.Profession
  },
  {
    path: Path.CategoriesAnimals,
    title: Title.Animals,
    src: IconName.Animals,
    iconTitle: IconTitle.Animals
  }
];
