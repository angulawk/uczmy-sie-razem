import { humanCategory } from "@app/app/config";
import { Categories } from "@app/components/molecules/Categories/Categories";

const HumanPage: React.FC = () => (
  <Categories categories={humanCategory} title="Człowiek" />
);

export default HumanPage;
