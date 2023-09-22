import { IconName } from "@app/components/atoms/Icon/@types/Icon";
import { Categories } from "@app/components/molecules/Categories/Categories";
import { Jumbotron } from "@app/components/molecules/Jumbotron/Jumbotron";
import { mainCategories } from "@app/config/categories/main";
import { Title } from "@app/routing/titles";

const Home: React.FC = () => (
  <>
    <Jumbotron title={Title.Root} src={IconName.Students} />
    <Categories categories={mainCategories} title="Główne kategorie" />
  </>
);

export default Home;
