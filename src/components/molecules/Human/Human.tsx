import Categories from "@app/components/molecules/Categories/Categories";
import { categories } from "@app/components/molecules/Human/config";

const Human = () => (
  <>
    <h1>Człowiek</h1>
    <Categories categories={categories} />
  </>
)

export default Human;
