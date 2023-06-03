import { ICategoryDetailProps } from "@app/components/molecules/CategoryDetail/@types/CategoryDetail";
import { categoryDetailDefaultThemeClasses } from "@app/components/molecules/CategoryDetail/styles";
import { TranslationVariant } from "@app/components/molecules/Translation/@types/Translation";
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
    className={convertObjectValuesToString(categoryDetailDefaultThemeClasses)}
  >
    <Translation
      phrase={word}
      translation={wordTranslaion}
      wordAudio={wordAudio}
    />
    <Translation
      phrase={sentence}
      translation={sentenceTranslation}
      wordAudio={sentenceAudio}
      variant={TranslationVariant.Sentence}
    />
  </div>
);

export { CategoryDetail };
