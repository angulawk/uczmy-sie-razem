import Categories from "@app/components/molecules/Categories/Categories";
import { categories } from "@app/components/molecules/MainCategories/config";

const MainCategories = () => (
  <Categories categories={categories} />
);

export default MainCategories;
