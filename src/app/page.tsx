import { mainCategories } from "@app/app/config";
import { Categories } from "@app/components/molecules/Categories/Categories";

const Home: React.FC = () => (
  <Categories categories={mainCategories} />
);

export default Home;