import { ICategoryProps } from "@app/components/molecules/Categories/@types/Categories";
import { Path } from "@app/routing/paths";
import { Title } from "@app/routing/titles";
import Character from "@app/../public/icons/character.png";
import HumanBody from "@app/../public/icons/body.png";
import { IconDescription } from "@app/config/iconDescriptions";

export const humanCategories: ICategoryProps[] = [
  {
    path: Path.CategoriesHumanBody,
    title: Title.Body,
    src: HumanBody,
    description: IconDescription.HumanBody
  },
  {
    path: Path.CategoriesHumanCharacter,
    title: Title.Character,
    src: Character,
    description: IconDescription.HumanCharacter
  }
];
