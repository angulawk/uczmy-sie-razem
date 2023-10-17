import { Title } from "@app/components/atoms/Title/Title";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { IAboutUsProps } from "@app/components/molecules/AboutUs/@types/AboutUs";
import {
  aboutUsWrapperDefaultThemeClasses,
  aboutUsImageDefaultThemeClasses,
  aboutUsTitleDefaultThemeClasses,
  aboutUsDescriptionDefaultThemeClasses,
  aboutUsContentDefaultThemeClasses,
  aboutUsContainerDefaultThemeClasses
} from "@app/components/molecules/AboutUs/styles";
import { Icon } from "@app/components/atoms/Icon/Icon";

const AboutUs: React.FC<IAboutUsProps> = ({ features, title }) => (
  <>
    <Title>{title}</Title>

    <div
      className={convertObjectValuesToString(
        aboutUsContainerDefaultThemeClasses
      )}
    >
      {features.map(({ title, iconSrc, iconTitle, description }, index) => (
        <div
          className={convertObjectValuesToString(
            aboutUsWrapperDefaultThemeClasses
          )}
          key={title}
        >
          <Icon
            iconSrc={iconSrc}
            iconTitle={iconTitle}
            themeClasses={`${convertObjectValuesToString(
              aboutUsImageDefaultThemeClasses
            )} ${index % 2 === 0 ? "order-2" : "order-1"}`}
          />
          <div
            className={`${convertObjectValuesToString(
              aboutUsContentDefaultThemeClasses
            )} ${index % 2 === 0 ? "order-1 text-right" : "order-2 text-left"}`}
          >
            <h2
              className={convertObjectValuesToString(
                aboutUsTitleDefaultThemeClasses
              )}
            >
              {title}
            </h2>
            <p
              className={convertObjectValuesToString(
                aboutUsDescriptionDefaultThemeClasses
              )}
            >
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </>
);

export { AboutUs };
