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
  Human = "/categories/human",
  Weather = "/categories/weather",
  Profession = "/categories/profession",
  Body = "/categories/human/body",
  Character = "/categories/human/character"
}

export enum Title {
  Root = "Uczmy się hiszpańskiego razem",
  Home = "Strona główna",
  About = "O stronie",
  Contact = "Kontakt",
  Human = "Człowiek",
  Weather = "Pogoda",
  Profession = "Zawody",
  Body = "Ciało",
  Character = "Cechy charakteru"
}

export const links: ILinkProps[] = [
  {
    path: Path.Root,
    title: Title.Home
  },
  {
    path: Path.About,
    title: Title.About
  },
  {
    path: Path.Contact,
    title: Title.Contact
  }
];

export const mainCategories: ICategoryProps[] = [
  {
    path: Path.Human,
    title: Title.Human
  },
  {
    path: Path.Weather,
    title: Title.Weather
  },
  {
    path: Path.Profession,
    title: Title.Profession
  }
];

export const humanCategory: ICategoryProps[] = [
  {
    path: Path.Body,
    title: Title.Body
  },
  {
    path: Path.Character,
    title: Title.Character
  }
];

export const pagesMetadata: IPageMetadata[] = [
  {
    description: "Strona poswięcona jest nauce słownictwa języka hiszpańskiego",
    path: Path.Root,
    title: Title.Root
  },
  ...links,
  ...mainCategories,
  ...humanCategory
];




