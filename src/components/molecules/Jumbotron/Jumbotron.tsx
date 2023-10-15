import {
  IJumbotronProps,
  Variant
} from "@app/components/molecules/Jumbotron/@types/Jumbotron";
import { PageDescription } from "@app/components/molecules/PageDescription/PageDescription";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import {
  jumbotronDefaultThemeClasses,
  jumbotronIconThemeClasses,
  jumbotronIconWrapperStyles,
  jumbotronPageDescriptionThemeClasses,
  jumbotronWrapperDefaultThemeClasses,
  mapVariantToJumbotronDescriptionStyles,
  mapVariantToJumbotronIconStyles
} from "@app/components/molecules/Jumbotron/styles";

import { Icon } from "@app/components/atoms/Icon/Icon";

const Jumbotron: React.FC<IJumbotronProps> = ({
  description,
  title,
  iconSrc,
  iconTitle,
  variant = Variant.Primary
}) => {
  const jumbotronPageDescriptionStyles = {
    ...jumbotronPageDescriptionThemeClasses,
    ...mapVariantToJumbotronDescriptionStyles[variant]
  };

  const jumbotronIconStyles = {
    ...jumbotronIconThemeClasses,
    ...mapVariantToJumbotronIconStyles[variant]
  };

  return (
    <div
      className={convertObjectValuesToString(
        jumbotronWrapperDefaultThemeClasses
      )}
    >
      <div
        className={convertObjectValuesToString(jumbotronDefaultThemeClasses)}
      >
        <PageDescription
          description={description}
          title={title}
          themeClasses={jumbotronPageDescriptionStyles}
        />
        {variant === Variant.Secondary ? (
          <span
            className={convertObjectValuesToString(jumbotronIconWrapperStyles)}
          >
            <Icon
              iconSrc={iconSrc}
              iconTitle={iconTitle}
              themeClasses={jumbotronIconStyles}
            />
          </span>
        ) : (
          <Icon
            iconSrc={iconSrc}
            iconTitle={iconTitle}
            themeClasses={jumbotronIconStyles}
          />
        )}
      </div>
    </div>
  );
};

export { Jumbotron };
