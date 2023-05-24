"use client";

import { CategoryDetail } from "@app/components/molecules/CategoryDetail/CategoryDetail";
import { ICategoryDetailsProps } from "@app/components/molecules/CategoryDetails/@types/CategoryDetails";
import { PrintButton } from "@app/components/molecules/PrintButton/PrintButton";

const CategoryDetails: React.FC<ICategoryDetailsProps> = ({
  title,
  categoryDetails
}) => (
  <div className="flow-root print:bg-red-100 bg-gray-50 rounded-lg px-6 pb-8 print:p-0">
    <PrintButton />
    <h1 className="text-36 mb-8">{title}</h1>
    {categoryDetails?.map(
      (
        {
          word,
          wordAudio,
          wordTranslaion,
          sentence,
          sentenceAudio,
          sentenceTranslation
        },
        index
      ) => (
        <CategoryDetail
          key={word}
          word={word}
          wordAudio={wordAudio}
          wordTranslaion={wordTranslaion}
          sentence={sentence}
          sentenceAudio={sentenceAudio}
          sentenceTranslation={sentenceTranslation}
          shouldDisplaySeparator={index !== categoryDetails.length - 1}
        />
      )
    )}
  </div>
);

export { CategoryDetails };
