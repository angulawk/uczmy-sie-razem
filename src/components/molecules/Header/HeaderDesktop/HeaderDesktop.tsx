import { IHeaderDesktopProps } from "@app/components/molecules/Header/HeaderDesktop/@types/HeaderDesktop";
import { Nav } from "@app/components/molecules/Nav/Nav";

const HeaderDesktop: React.FC<IHeaderDesktopProps> = ({ links }) => (
  <div className="mx-24 my-16">
    <Nav links={links} />
  </div>
);

export { HeaderDesktop };
