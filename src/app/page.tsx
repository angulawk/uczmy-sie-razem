import { IconName } from "@app/components/atoms/Icon/@types/Icon";
import { Categories } from "@app/components/molecules/Categories/Categories";
import { Jumbotron } from "@app/components/molecules/Jumbotron/Jumbotron";
import { mainCategories } from "@app/config/categories/main";
import { IconTitle } from "@app/config/iconTitles";
import { Title } from "@app/routing/titles";

const Home: React.FC = () => (
  <>
    <Jumbotron
      title={Title.Root}
      iconSrc={IconName.Students}
      iconTitle={IconTitle.Main}
    />
    <Categories categories={mainCategories} title="Główne kategorie" />
  </>
);

export default Home;
