import { ILinkProps } from "@app/components/molecules/Nav/@types/Nav";
import { Path } from "@app/routing/paths";
import { Title } from "@app/routing/titles";

export const navLinks: ILinkProps[] = [
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
