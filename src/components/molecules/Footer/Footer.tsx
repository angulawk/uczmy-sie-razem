import { IconName } from "@app/components/atoms/Icon/@types/Icon";
import { Location } from "@app/components/atoms/NavItem/@types/NavItem";
import { NavItem } from "@app/components/atoms/NavItem/NavItem";
import {
  footerContainerDefaultStyles,
  footerDefaultStyles,
  footerLinksWrapperDefaultStyles,
  footerSocialMediaLinksDefaultStyles,
  footerWrapperDefaultStyles
} from "@app/components/molecules/Footer/styles";
import { IFooterProps } from "@app/components/molecules/Footer/types/Footer";
import { LinkWithIcon } from "@app/components/molecules/LinkWithIcon/LinkWithIcon";
import { NavDirection } from "@app/components/molecules/Nav/@types/Nav";
import { IconTitle } from "@app/config/iconTitles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const Footer: React.FC<IFooterProps> = ({ navLinks, logoHref }) => (
  <div className={convertObjectValuesToString(footerDefaultStyles)}>
    <div className={convertObjectValuesToString(footerContainerDefaultStyles)}>
      <div className={convertObjectValuesToString(footerWrapperDefaultStyles)}>
        <LinkWithIcon
          href={logoHref}
          iconSrc={IconName.Logo}
          iconTitle={IconTitle.Logo}
        />
        <div
          className={convertObjectValuesToString(
            footerLinksWrapperDefaultStyles
          )}
        >
          {navLinks?.map(({ path, title }) => (
            <NavItem
              key={path + title}
              direction={NavDirection.Vertical}
              location={Location.Footer}
              path={path}
              title={title}
            />
          ))}
        </div>
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
      <hr />
      <p>All rights reserved</p>
    </div>
  </div>
);

export { Footer };
