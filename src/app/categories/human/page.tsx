import { IconName } from "@app/components/atoms/Icon/@types/Icon";
import { Categories } from "@app/components/molecules/Categories/Categories";
import { Variant } from "@app/components/molecules/Jumbotron/@types/Jumbotron";
import { Jumbotron } from "@app/components/molecules/Jumbotron/Jumbotron";
import { humanCategories } from "@app/config/categories/human";
import { IconTitle } from "@app/config/iconTitles";
import { Title } from "@app/routing/titles";

const HumanPage: React.FC = () => (
  <>
    <Jumbotron
      title={Title.Human}
      iconSrc={IconName.Human}
      iconTitle={IconTitle.Human}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      variant={Variant.Secondary}
    />
    <Categories categories={humanCategories} />
  </>
);

export default HumanPage;
