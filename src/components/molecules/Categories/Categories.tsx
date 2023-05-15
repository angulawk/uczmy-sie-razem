import { Tile } from "@app/components/atoms/Tile/Tile";
import { ICategoriesProps } from "@app/components/molecules/Categories/@types/Categories";

const Categories: React.FC<ICategoriesProps> = ({ categories, title }) => (
  <>
    {title && <h1 className="text-36 mx-auto my-36">{title}</h1>}

    <div className="flex flex-wrap items-center justify-between">
      {categories.map(({ title, path, src, description }) => (
        <Tile
          content={title}
          key={title}
          link={path}
          iconSrc={src}
          iconDescription={description}
        />
      ))}
    </div>
  </>
);

export { Categories };
