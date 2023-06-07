import { IconName } from "@app/components/atoms/Icon/@types/Icon";
import { ButtonType } from "@app/components/molecules/Button/@types/Button";
import { Button } from "@app/components/molecules/Button/Button";
import {
  footerButtonDefaultStyles,
  footerContainerDefaultStyles,
  footerDefaultStyles,
  footerRightsDefaultStyles,
  footerSeparatorDefaultStyles,
  footerSocialMediaLinksDefaultStyles,
  footerWrapperDefaultStyles
} from "@app/components/organisms/Footer/styles";
import { IFooterProps } from "@app/components/organisms/Footer/types/Footer";
import { LinkWithIcon } from "@app/components/molecules/LinkWithIcon/LinkWithIcon";
import {
  NavDirection,
  NavLocation
} from "@app/components/molecules/Nav/@types/Nav";
import { Nav } from "@app/components/molecules/Nav/Nav";
import { IconTitle } from "@app/config/iconTitles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { getFullYear } from "@app/helpers/time/getFullYear";

const Footer: React.FC<IFooterProps> = ({ navLinks }) => (
  <div className={convertObjectValuesToString(footerDefaultStyles)}>
    <div className={convertObjectValuesToString(footerContainerDefaultStyles)}>
      <div className={convertObjectValuesToString(footerWrapperDefaultStyles)}>
        <Button
          type={ButtonType.Secondary}
          themeClasses={footerButtonDefaultStyles}
        >
          {/* TODO should be replaced with correct email address */}
          <a href="mailto:agnieszka.weronika.wojcik@gmail.com">Napisz do nas</a>
        </Button>

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
      <hr
        className={convertObjectValuesToString(footerSeparatorDefaultStyles)}
      />
      <p className={convertObjectValuesToString(footerRightsDefaultStyles)}>
        Copyright &copy; {getFullYear()} All rights reserved
      </p>
    </div>
  </div>
);

export { Footer };
