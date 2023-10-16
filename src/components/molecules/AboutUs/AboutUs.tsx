import { Title } from "@app/components/atoms/Title/Title";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { categoriesDefaultThemeClasses } from "@app/components/molecules/Categories/styles";
import { IAboutUsProps } from "@app/components/molecules/AboutUs/@types/AboutUs";
import { aboutUsDescriptionDefaultThemeClasses } from "@app/components/molecules/AboutUs/styles";
import { Icon } from "@app/components/atoms/Icon/Icon";

const AboutUs: React.FC<IAboutUsProps> = ({ description, features, title }) => (
  <>
    <Title>{title}</Title>
    {description && (
      <div
        className={convertObjectValuesToString(
          aboutUsDescriptionDefaultThemeClasses
        )}
      >
        {description}
      </div>
    )}

    <div className={convertObjectValuesToString(categoriesDefaultThemeClasses)}>
      {features.map(({ title, iconSrc, iconTitle, description }) => (
        <div key={title}>
          <Icon iconSrc={iconSrc} iconTitle={iconTitle} />
          <div>{title}</div>
          <div>{description}</div>
        </div>
      ))}
    </div>
  </>
);

export { AboutUs };
