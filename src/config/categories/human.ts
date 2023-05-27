import { ICategoryProps } from "@app/components/molecules/Categories/@types/Categories";
import { Path } from "@app/routing/paths";
import { Title } from "@app/routing/titles";
import { IconName } from "@app/components/atoms/Icon/@types/Icon";
import { IconTitle } from "@app/config/iconTitles";

export const humanCategories: ICategoryProps[] = [
  {
    path: Path.CategoriesHumanBody,
    title: Title.Body,
    src: IconName.Body,
    iconTitle: IconTitle.HumanBody
  },
  {
    path: Path.CategoriesHumanCharacter,
    title: Title.Character,
    src: IconName.Character,
    iconTitle: IconTitle.HumanCharacter
  }
];
