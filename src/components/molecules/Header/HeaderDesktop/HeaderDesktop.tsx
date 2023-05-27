import { IHeaderDesktopProps } from "@app/components/molecules/Header/HeaderDesktop/@types/HeaderDesktop";
import { headerDesktopDefaultThemeClasses } from "@app/components/molecules/Header/HeaderDesktop/styles";
import { Nav } from "@app/components/molecules/Nav/Nav";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const HeaderDesktop: React.FC<IHeaderDesktopProps> = ({ links }) => (
  <div
    className={convertObjectValuesToString(headerDesktopDefaultThemeClasses)}
  >
    <Nav links={links} />
  </div>
);

export { HeaderDesktop };
