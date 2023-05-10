import { Device } from "@app/components/layout/Responsive/@types/Responsive";
import { Responsive } from "@app/components/layout/Responsive/Responsive";
import { IHeaderProps } from "@app/components/molecules/Header/@types/Header";
import { HeaderDesktop } from "@app/components/molecules/Header/HeaderDesktop/HeaderDesktop";
import { HeaderMobile } from "@app/components/molecules/Header/HeaderMobile/HeaderMobile";

const Header: React.FC<IHeaderProps> = ({ links }) => (
  <>
    <Responsive devices={[Device.Mobile]}>
      <HeaderMobile links={links} />
    </Responsive>
    <Responsive devices={[Device.Tv, Device.Desktop, Device.Tablet]}>
      <HeaderDesktop links={links} />
    </Responsive>
  </>
);

export { Header };
