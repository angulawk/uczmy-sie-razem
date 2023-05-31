"use client";

import { TitlePlacement } from "@app/components/atoms/Title/@types/Title";
import { Title } from "@app/components/atoms/Title/Title";
import { CategoryDetail } from "@app/components/molecules/CategoryDetail/CategoryDetail";
import { ICategoryDetailsProps } from "@app/components/molecules/CategoryDetails/@types/CategoryDetails";
import {
  categoryDetailsDefaultThemeClasses,
  categoryDetailsWrapperDefaultThemeClasses
} from "@app/components/molecules/CategoryDetails/styles";
import { PrintButton } from "@app/components/molecules/PrintButton/PrintButton";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const CategoryDetails: React.FC<ICategoryDetailsProps> = ({
  title,
  categoryDetails
}) => (
  <div
    className={convertObjectValuesToString(categoryDetailsDefaultThemeClasses)}
  >
    <PrintButton />
    <Title placement={TitlePlacement.Details}>{title}</Title>

    <div
      className={convertObjectValuesToString(
        categoryDetailsWrapperDefaultThemeClasses
      )}
    >
      {categoryDetails.map(
        ({
          word,
          wordAudio,
          wordTranslaion,
          sentence,
          sentenceAudio,
          sentenceTranslation
        }) => (
          <CategoryDetail
            key={word}
            word={word}
            wordAudio={wordAudio}
            wordTranslaion={wordTranslaion}
            sentence={sentence}
            sentenceAudio={sentenceAudio}
            sentenceTranslation={sentenceTranslation}
          />
        )
      )}
    </div>
  </div>
);

export { CategoryDetails };
