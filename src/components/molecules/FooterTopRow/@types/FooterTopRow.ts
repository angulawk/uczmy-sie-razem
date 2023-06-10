import { IconName } from "@app/components/atoms/Icon/@types/Icon";
import { INavProps } from "@app/components/molecules/Nav/@types/Nav";
import { IconTitle } from "@app/config/iconTitles";

export interface IFooterLinksWithIcons {
  href: string;
  iconSrc: IconName;
  iconTitle: IconTitle;
  text: string;
}

export interface IFooterTopRowProps {
  navLinks: INavProps["links"];
  href: string;
  linksWithIcons: IFooterLinksWithIcons[];
}
