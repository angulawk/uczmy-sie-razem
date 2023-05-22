import { ICategoryProps } from "@app/components/molecules/Categories/@types/Categories";
import { IconDescription } from "@app/config/iconDescriptions";
import { Path } from "@app/routing/paths";
import { Title } from "@app/routing/titles";
import Human from "@app/../public/icons/human.svg";
import Weather from "@app/../public/icons/weather.svg";
import Job from "@app/../public/icons/job.svg";
import Animals from "@app/../public/icons/paws.svg";
import { IconDynamicName } from "@app/components/atoms/Icon/@types/Icon";

export const mainCategories: ICategoryProps[] = [
  {
    path: Path.CategoriesHuman,
    title: Title.Human,
    src: IconDynamicName.Human,
    description: IconDescription.Human
  },
  {
    path: Path.CategoriesWeather,
    title: Title.Weather,
    src: IconDynamicName.Weather,
    description: IconDescription.Weather
  },
  {
    path: Path.CategoriesProfession,
    title: Title.Profession,
    src: IconDynamicName.Job,
    description: IconDescription.Profession
  },
  {
    path: Path.CategoriesAnimals,
    title: Title.Animals,
    src: IconDynamicName.Animals,
    description: IconDescription.Animals
  }
];
