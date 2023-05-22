import { ICategoryProps } from "@app/components/molecules/Categories/@types/Categories";
import { Path } from "@app/routing/paths";
import { Title } from "@app/routing/titles";
import Character from "@app/../public/icons/character.svg";
import HumanBody from "@app/../public/icons/body.svg";
import { IconDescription } from "@app/config/iconDescriptions";
import { IconDynamicName } from "@app/components/atoms/Icon/@types/Icon";

export const humanCategories: ICategoryProps[] = [
  {
    path: Path.CategoriesHumanBody,
    title: Title.Body,
    src: IconDynamicName.Body,
    description: IconDescription.HumanBody
  },
  {
    path: Path.CategoriesHumanCharacter,
    title: Title.Character,
    src: IconDynamicName.Character,
    description: IconDescription.HumanCharacter
  }
];
