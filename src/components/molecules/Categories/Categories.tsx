import { Tile } from "@app/components/atoms/Tile/Tile";
import { Title } from "@app/components/atoms/Title/Title";
import { ICategoriesProps } from "@app/components/molecules/Categories/@types/Categories";
import { categoriesDefaultThemeClasses } from "@app/components/molecules/Categories/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const Categories: React.FC<ICategoriesProps> = ({ categories, title }) => (
  <>
    {title && <Title title={title} />}

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
