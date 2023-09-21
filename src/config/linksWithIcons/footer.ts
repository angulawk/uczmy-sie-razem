import { IconName } from "@app/components/atoms/Icon/@types/Icon";
import { IFooterLinksWithIcons } from "@app/components/molecules/FooterTopRow/@types/FooterTopRow";
import { IconTitle } from "@app/config/iconTitles";

export const footerLinksWithIcons: IFooterLinksWithIcons[] = [
  {
    href: "/",
    iconSrc: IconName.Instagram,
    iconTitle: IconTitle.Instagram,
    text: "Instagram"
  },
  {
    href: "/",
    iconSrc: IconName.Youtube,
    iconTitle: IconTitle.Youtube,
    text: "Youtube"
  }
];
