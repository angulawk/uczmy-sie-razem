import {
  footerContainerDefaultStyles,
  footerDefaultStyles
} from "@app/components/organisms/Footer/styles";
import { IFooterProps } from "@app/components/organisms/Footer/types/Footer";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { FooterTopRow } from "@app/components/molecules/FooterTopRow/FooterTopRow";
import { FooterBottomRow } from "@app/components/molecules/FooterBottomRow/FooterBottomRow";

const Footer: React.FC<IFooterProps> = ({ navLinks, href, linksWithIcons }) => (
  <div className={convertObjectValuesToString(footerDefaultStyles)}>
    <div className={convertObjectValuesToString(footerContainerDefaultStyles)}>
      <FooterTopRow
        navLinks={navLinks}
        href={href}
        linksWithIcons={linksWithIcons}
      />

      <FooterBottomRow />
    </div>
  </div>
);

export { Footer };
