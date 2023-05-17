import { Tile } from "@app/components/atoms/Tile/Tile";
import { ICategoriesProps } from "@app/components/molecules/Categories/@types/Categories";
import {
  categoriesDefaultThemeClasses,
  categoriesTitleDefaultThemeClasses
} from "@app/components/molecules/Categories/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const Categories: React.FC<ICategoriesProps> = ({ categories, title }) => (
  <>
    {title && (
      <h1
        className={convertObjectValuesToString(
          categoriesTitleDefaultThemeClasses
        )}
      >
        {title}
      </h1>
    )}

    <div className={convertObjectValuesToString(categoriesDefaultThemeClasses)}>
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
