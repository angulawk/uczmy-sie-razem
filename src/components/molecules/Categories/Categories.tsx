import { Tile } from "@app/components/molecules/Tile/Tile";
import { Title } from "@app/components/atoms/Title/Title";
import { ICategoriesProps } from "@app/components/molecules/Categories/@types/Categories";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { categoriesDefaultThemeClasses } from "@app/components/molecules/Categories/styles";

const Categories: React.FC<ICategoriesProps> = ({ categories, title }) => (
  <>
    <Title>{title}</Title>

    <div className={convertObjectValuesToString(categoriesDefaultThemeClasses)}>
      {categories.map(({ title, path, src, iconTitle }) => (
        <Tile
          content={title}
          key={title}
          link={path}
          iconSrc={src}
          iconTitle={iconTitle}
        />
      ))}
    </div>
  </>
);

export { Categories };
