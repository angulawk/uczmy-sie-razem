import { IHeaderDesktopProps } from "@app/components/molecules/Header/HeaderDesktop/@types/HeaderDesktop";
import { Nav } from "@app/components/molecules/Nav/Nav";

const HeaderDesktop: React.FC<IHeaderDesktopProps> = ({
  links
}) => (
  <Nav links={links} />
);

export { HeaderDesktop };
