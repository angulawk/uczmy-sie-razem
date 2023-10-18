import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { Icon } from "@app/components/atoms/Icon/Icon";
import { IFeatureProps } from "@app/components/molecules/Feature/@types/Feature";
import {
  featureContentDefaultThemeClasses,
  featureDefaultThemeClasses,
  featureDescriptionDefaultThemeClasses,
  featureImageDefaultThemeClasses,
  featureImageWrapperDefaultThemeClasses,
  featureTitleDefaultThemeClasses
} from "@app/components/molecules/Feature/styles";

const Feature: React.FC<IFeatureProps> = ({
  title,
  iconSrc,
  iconTitle,
  description,
  index
}) => (
  <div
    className={convertObjectValuesToString(featureDefaultThemeClasses)}
    key={title}
  >
    <span
      className={`${convertObjectValuesToString(
        featureImageWrapperDefaultThemeClasses
      )} ${
        index && index % 2 === 0
          ? "order-2 justify-start"
          : "order-1 justify-end"
      }`}
    >
      <Icon
        iconSrc={iconSrc}
        iconTitle={iconTitle}
        themeClasses={featureImageDefaultThemeClasses}
      />
    </span>
    <div
      className={`${convertObjectValuesToString(
        featureContentDefaultThemeClasses
      )} ${
        index && index % 2 === 0 ? "order-1 text-right" : "order-2 text-left"
      }`}
    >
      <h3
        className={convertObjectValuesToString(featureTitleDefaultThemeClasses)}
      >
        {title}
      </h3>
      <p
        className={convertObjectValuesToString(
          featureDescriptionDefaultThemeClasses
        )}
      >
        {description}
      </p>
    </div>
  </div>
);

export { Feature };
