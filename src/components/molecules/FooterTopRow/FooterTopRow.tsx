import { LinkWithIcon } from "@app/components/molecules/LinkWithIcon/LinkWithIcon";
import {
  NavDirection,
  NavLocation
} from "@app/components/molecules/Nav/@types/Nav";
import { Nav } from "@app/components/molecules/Nav/Nav";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import {
  footerContactButtonDefaultStyles,
  footerSocialMediaLinksDefaultStyles,
  footerWrapperDefaultStyles
} from "@app/components/molecules/FooterTopRow/styles";
import { IFooterTopRowProps } from "@app/components/molecules/FooterTopRow/@types/FooterTopRow";
import { Button } from "@app/components/molecules/Button/Button";
import { ButtonType } from "@app/components/molecules/Button/@types/Button";

const FooterTopRow: React.FC<IFooterTopRowProps> = ({
  navLinks,
  href,
  linksWithIcons
}) => (
  <div className={convertObjectValuesToString(footerWrapperDefaultStyles)}>
    <Button
      type={ButtonType.Secondary}
      themeClasses={footerContactButtonDefaultStyles}
      href={href}
    >
      Napisz do nas
    </Button>

    <Nav
      direction={NavDirection.Vertical}
      links={navLinks}
      location={NavLocation.Footer}
    />
    <div
      className={convertObjectValuesToString(
        footerSocialMediaLinksDefaultStyles
      )}
    >
      {linksWithIcons.map(({ href, iconSrc, iconTitle, text }) => (
        <LinkWithIcon
          key={href}
          href={href}
          iconSrc={iconSrc}
          iconTitle={iconTitle}
          text={text}
        />
      ))}
    </div>
  </div>
);

export { FooterTopRow };
