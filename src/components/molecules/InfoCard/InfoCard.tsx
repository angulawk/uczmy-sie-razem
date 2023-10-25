import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { Icon } from "@app/components/atoms/Icon/Icon";
import {
  infoCardContentDefaultThemeClasses,
  infoCardDefaultThemeClasses,
  infoCardDescriptionDefaultThemeClasses,
  infoCardImageDefaultThemeClasses,
  infoCardImageWrapperDefaultThemeClasses,
  infoCardTitleDefaultThemeClasses
} from "@app/components/molecules/InfoCard/styles";
import { IInfoCardProps } from "@app/components/molecules/InfoCard/@types/InfoCard";

const InfoCard: React.FC<IInfoCardProps> = ({
  title,
  iconSrc,
  iconTitle,
  description,
  isEven
}) => (
  <div className={convertObjectValuesToString(infoCardDefaultThemeClasses)}>
    <span
      className={`${convertObjectValuesToString(
        infoCardImageWrapperDefaultThemeClasses
      )} ${isEven ? "order-2 justify-start" : "order-1 justify-end"}`}
    >
      <Icon
        iconSrc={iconSrc}
        iconTitle={iconTitle}
        themeClasses={infoCardImageDefaultThemeClasses}
      />
    </span>
    <div
      className={`${convertObjectValuesToString(
        infoCardContentDefaultThemeClasses
      )} ${isEven ? "order-1 text-right" : "order-2 text-left"}`}
    >
      <h3
        className={convertObjectValuesToString(
          infoCardTitleDefaultThemeClasses
        )}
      >
        {title}
      </h3>
      <p
        className={convertObjectValuesToString(
          infoCardDescriptionDefaultThemeClasses
        )}
      >
        {description}
      </p>
    </div>
  </div>
);

export { InfoCard };
