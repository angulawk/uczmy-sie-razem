import { ICategoryProps } from "@app/components/molecules/Categories/@types/Categories";
import { IconDescription } from "@app/config/iconDescriptions";
import { Path } from "@app/routing/paths";
import { Title } from "@app/routing/titles";
import Human from "@app/../public/icons/human.png";
import Weather from "@app/../public/icons/weather.png";
import Job from "@app/../public/icons/job.png";
import Animals from "@app/../public/icons/paws.png";

export const mainCategories: ICategoryProps[] = [
  {
    path: Path.CategoriesHuman,
    title: Title.Human,
    src: Human,
    description: IconDescription.Human
  },
  {
    path: Path.CategoriesWeather,
    title: Title.Weather,
    src: Weather,
    description: IconDescription.Weather
  },
  {
    path: Path.CategoriesProfession,
    title: Title.Profession,
    src: Job,
    description: IconDescription.Profession
  },
  {
    path: Path.CategoriesAnimals,
    title: Title.Animals,
    src: Animals,
    description: IconDescription.Animals
  }
];
