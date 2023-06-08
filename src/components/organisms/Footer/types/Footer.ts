import { IFooterLinksWithIcons } from "@app/components/molecules/FooterTopRow/@types/FooterTopRow";
import { INavProps } from "@app/components/molecules/Nav/@types/Nav";

export interface IFooterProps {
  navLinks: INavProps["links"];
  href: string;
  linksWithIcons: IFooterLinksWithIcons[];
}
