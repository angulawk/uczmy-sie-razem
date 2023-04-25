import { Tile } from "@app/components/atoms/Tile/Tile";
import { ICategoriesProps } from "@app/components/molecules/Categories/@types/Categories";

const Categories: React.FC<ICategoriesProps> = ({
  categories,
  title
}) => (
  <>
    {title && (
      <h1>{title}</h1>
    )}

    <div className="flex items-center justify-center">
      {categories.map(({
        title,
        path
      }) => (
        <Tile content={title} key={title} link={path} />
      ))}
    </div>
  </>
);

export { Categories };
