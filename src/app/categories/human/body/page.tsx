import { CategoryDetails } from "@app/components/molecules/CategoryDetails/CategoryDetails";
import { bodyCategory } from "@app/config/categoryDetails/body";

const BodyPage: React.FC = () => (
  <CategoryDetails title="Ciało" categoryDetails={bodyCategory} />
);

export default BodyPage;
