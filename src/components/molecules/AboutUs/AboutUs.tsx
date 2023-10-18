import { Title } from "@app/components/atoms/Title/Title";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { IAboutUsProps } from "@app/components/molecules/AboutUs/@types/AboutUs";
import {
  aboutUsSectionDescriptionDefaultThemeClasses,
  aboutUsWrapperDefaultThemeClasses,
  aboutUsImageDefaultThemeClasses,
  aboutUsTitleDefaultThemeClasses,
  aboutUsDescriptionDefaultThemeClasses,
  aboutUsContentDefaultThemeClasses,
  aboutUsContainerDefaultThemeClasses,
  aboutUsImageWrapperDefaultThemeClasses
} from "@app/components/molecules/AboutUs/styles";
import { Icon } from "@app/components/atoms/Icon/Icon";

const AboutUs: React.FC<IAboutUsProps> = ({ description, features, title }) => (
  <>
    <Title>{title}</Title>
    {description && (
      <div
        className={convertObjectValuesToString(
          aboutUsSectionDescriptionDefaultThemeClasses
        )}
      >
        {description}
      </div>
    )}

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
          <span
            className={`${convertObjectValuesToString(
              aboutUsImageWrapperDefaultThemeClasses
            )} ${
              index % 2 === 0 ? "order-2 justify-start" : "order-1 justify-end"
            }`}
          >
            <Icon
              iconSrc={iconSrc}
              iconTitle={iconTitle}
              themeClasses={aboutUsImageDefaultThemeClasses}
            />
          </span>
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
