import { ICategoryProps } from "@app/components/molecules/Categories/@types/Categories";
import { ILinkProps } from "@app/components/molecules/Nav/@types/Nav";

interface IPageMetadata {
  description?: string;
  path: Path;
  title?: string;
}

export enum Path {
  Root = "/",
  About = "/about",
  Contact = "/contact",
  Human = "/categories/human"
}

export const pagesMetadata: IPageMetadata[] = [
  {
    description: "Strona poswięcona jest nauce słownictwa języka hiszpańskiego",
    path: Path.Root,
    title: "Uczmy się hiszpańskiego razem"
  },
  {
    path: Path.About,
    title: "O stronie"
  },
  {
    path: Path.Contact,
    title: "Kontakt"
  },
  {
    path: Path.Human,
    title: "Człowiek"
  },
]


export const links: ILinkProps[] = [
  {
    href: Path.About,
    label: "O stronie"
  },
  {
    href: Path.Contact,
    label: "Kontakt"
  }
]

export const mainCategories: ICategoryProps[] = [
  {
    name: "Człowiek",
    href: "/categories/human"
  },
  {
    name: "Pogoda",
    href: "/categories/weather"
  },
  {
    name: "Zawody",
    href: "/categories/job"
  }
];

export const humanCategory: ICategoryProps[] = [
  {
    name: "Ciało",
    href: "/categories/human/body"
  },
  {
    name: "Cechy charakteru",
    href: "/categories/human/character"
  }
];