import { ICategoryProps } from "@app/components/molecules/Categories/@types/Categories";
import { ILinkProps } from "@app/components/molecules/HeaderDesktop/@types/HeaderDesktop";

export const links: ILinkProps[] = [
  {
    href: "/about",
    label: "O stronie"
  },
  {
    href: "/contact",
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