import { IconName } from "@app/components/atoms/Icon/@types/Icon";

import { LinkWithIcon } from "@app/components/molecules/LinkWithIcon/LinkWithIcon";
import {
  NavDirection,
  NavLocation
} from "@app/components/molecules/Nav/@types/Nav";
import { Nav } from "@app/components/molecules/Nav/Nav";
import { IconTitle } from "@app/config/iconTitles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { ContactButton } from "@app/components/molecules/ContactButton/ContactButton";
import {
  footerSocialMediaLinksDefaultStyles,
  footerWrapperDefaultStyles
} from "@app/components/molecules/FooterTopRow/styles";
import { IFooterTopRowProps } from "@app/components/molecules/FooterTopRow/@types/FooterTopRow";

const FooterTopRow: React.FC<IFooterTopRowProps> = ({ navLinks }) => (
  <div className={convertObjectValuesToString(footerWrapperDefaultStyles)}>
    <ContactButton />

    <Nav
      direction={NavDirection.Vertical}
      links={navLinks}
      variant={NavLocation.Footer}
    />
    <div
      className={convertObjectValuesToString(
        footerSocialMediaLinksDefaultStyles
      )}
    >
      <LinkWithIcon
        href="/"
        iconSrc={IconName.Instagram}
        iconTitle={IconTitle.Instagram}
        text="Instagram"
      />
      <LinkWithIcon
        href="/"
        iconSrc={IconName.Youtube}
        iconTitle={IconTitle.Youtube}
        text="Youtube"
      />
    </div>
  </div>
);

export { FooterTopRow };
