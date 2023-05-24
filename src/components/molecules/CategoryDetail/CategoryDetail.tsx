import { ICategoryDetailProps } from "@app/components/molecules/CategoryDetail/@types/CategoryDetail";
import { Translation } from "@app/components/molecules/Translation/Translation";

const CategoryDetail: React.FC<ICategoryDetailProps> = ({
  word,
  wordAudio,
  wordTranslaion,
  sentence,
  sentenceAudio,
  sentenceTranslation,
  shouldDisplaySeparator
}) => (
  <>
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
    {shouldDisplaySeparator && (
      <hr className="border-thin border-solid border-black w-48 my-8" />
    )}
  </>
);

export { CategoryDetail };
