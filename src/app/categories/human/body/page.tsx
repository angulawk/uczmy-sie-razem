import { CategoryDetails } from "@app/components/molecules/CategoryDetails/CategoryDetails";
import { bodyCategory } from "@app/config/categoryDetails/body";

const Body: React.FC = () => {
  return <CategoryDetails title="Ciało" categoryDetails={bodyCategory} />;
};

export default Body;
