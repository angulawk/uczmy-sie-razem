import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { IAboutUsProps } from "@app/components/molecules/AboutUs/@types/AboutUs";
import {
  aboutUsContainerDefaultThemeClasses,
  aboutUsMainTitleDefaultThemeClasses
} from "@app/components/molecules/AboutUs/styles";
import { Feature } from "@app/components/molecules/Feature/Feature";

const AboutUs: React.FC<IAboutUsProps> = ({ features, title }) => (
  <>
    <h3
      className={convertObjectValuesToString(
        aboutUsMainTitleDefaultThemeClasses
      )}
    >
      {title}
    </h3>

    <div
      className={convertObjectValuesToString(
        aboutUsContainerDefaultThemeClasses
      )}
    >
      {features.map(({ title, iconSrc, iconTitle, description }, index) => (
        <Feature
          title={title}
          iconSrc={iconSrc}
          iconTitle={iconTitle}
          description={description}
          index={index}
          key={title}
        />
      ))}
    </div>
  </>
);

export { AboutUs };
