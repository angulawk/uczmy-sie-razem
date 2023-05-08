import { Categories } from "@app/components/molecules/Categories/Categories";
import { humanCategories } from "@app/config/categories/human";

const HumanPage: React.FC = () => (
  <Categories categories={humanCategories} title="Człowiek" />
);

export default HumanPage;
