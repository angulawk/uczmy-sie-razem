import { ICategoryDetailProps } from "@app/components/molecules/CategoryDetail/@types/CategoryDetail";
import { categoryDetailWrapperDefaultThemeClasses } from "@app/components/molecules/CategoryDetail/styles";
import { Translation } from "@app/components/molecules/Translation/Translation";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const CategoryDetail: React.FC<ICategoryDetailProps> = ({
  word,
  wordAudio,
  wordTranslaion,
  sentence,
  sentenceAudio,
  sentenceTranslation
}) => (
  <div
    className={convertObjectValuesToString(
      categoryDetailWrapperDefaultThemeClasses
    )}
  >
    <Translation
      word={word}
      wordAudio={wordAudio}
      wordTranslaion={wordTranslaion}
    />
    <Translation
      word={sentence}
      wordAudio={sentenceAudio}
      wordTranslaion={sentenceTranslation}
    />
  </div>
);

export { CategoryDetail };
