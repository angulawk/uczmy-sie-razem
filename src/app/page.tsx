import { Categories } from "@app/components/molecules/Categories/Categories";
import { mainCategories } from "@app/config/categories/main";

const Home: React.FC = () => (
  <Categories categories={mainCategories} title="Główne kategorie" />
);

export default Home;
