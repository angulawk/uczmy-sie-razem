import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";
import { IInfoCardListProps } from "@app/components/molecules/InfoCardList/@types/InfoCardList";
import {
  infoCardListContainerDefaultThemeClasses,
  infoCardListMainTitleDefaultThemeClasses
} from "@app/components/molecules/InfoCardList/styles";
import { InfoCard } from "@app/components/molecules/InfoCard/InfoCard";

const InfoCardList: React.FC<IInfoCardListProps> = ({ infoCards, title }) => (
  <div
    className={convertObjectValuesToString(
      infoCardListContainerDefaultThemeClasses
    )}
  >
    <h3
      className={convertObjectValuesToString(
        infoCardListMainTitleDefaultThemeClasses
      )}
    >
      {title}
    </h3>
    {infoCards.map(({ title, iconSrc, iconTitle, description }, index) => (
      <InfoCard
        title={title}
        iconSrc={iconSrc}
        iconTitle={iconTitle}
        description={description}
        isEven={index % 2 === 0}
        key={title}
      />
    ))}
  </div>
);

export { InfoCardList };
