import { IconName } from "@app/components/atoms/Icon/@types/Icon";
import { Variant } from "@app/components/molecules/Jumbotron/@types/Jumbotron";
import { Jumbotron } from "@app/components/molecules/Jumbotron/Jumbotron";
import { IconTitle } from "@app/config/iconTitles";
import { Title } from "@app/routing/titles";

const AboutPage: React.FC = () => (
  <>
    <Jumbotron
      title={Title.About}
      iconSrc={IconName.About}
      iconTitle={IconTitle.About}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      variant={Variant.Primary}
    />
  </>
);

export default AboutPage;
