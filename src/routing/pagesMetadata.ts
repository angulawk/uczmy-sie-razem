import { humanCategories } from "@app/config/categories/human";
import { mainCategories } from "@app/config/categories/main";
import { navLinks } from "@app/config/navLinks";
import { IPageMetadata } from "@app/routing/@types/pagesMetadata";
import { Path } from "@app/routing/paths";
import { Title } from "@app/routing/titles";

export const pagesMetadata: IPageMetadata[] = [
  {
    description: "Strona poświęcona jest nauce słownictwa języka hiszpańskiego",
    path: Path.Root,
    title: Title.Root
  },
  ...navLinks,
  ...mainCategories,
  ...humanCategories
];
