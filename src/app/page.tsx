import { IconName } from "@app/components/atoms/Icon/@types/Icon";
import { AboutUs } from "@app/components/molecules/AboutUs/AboutUs";
import { Categories } from "@app/components/molecules/Categories/Categories";
import { Jumbotron } from "@app/components/molecules/Jumbotron/Jumbotron";
import { mainCategories } from "@app/config/categories/main";
import { features } from "@app/config/features/features";
import { IconTitle } from "@app/config/iconTitles";
import { Title } from "@app/routing/titles";

const Home: React.FC = () => (
  <>
    <Jumbotron
      title={Title.Root}
      iconSrc={IconName.Students}
      iconTitle={IconTitle.Main}
    />

    <AboutUs
      features={features}
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    />

    <Categories categories={mainCategories} title="Główne kategorie" />
  </>
);

export default Home;
