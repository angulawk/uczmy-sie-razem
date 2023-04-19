import Tile from "@app/components/atoms/Tile/Tile";
import { ICategoriesProps } from "@app/components/molecules/Categories/@types/Categories";

const Categories = ({
  categories
}: ICategoriesProps) => (
  <div className="flex items-center justify-center">
    {categories.map(({
      name,
      href
    }) => (
      <Tile content={name} key={name} link={href} />
    ))}
  </div>
);

export default Categories;
