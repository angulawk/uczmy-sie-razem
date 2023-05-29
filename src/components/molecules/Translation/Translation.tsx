import { SoundButton } from "@app/components/molecules/SoundButton/SoundButton";
import { ITranslationProps } from "@app/components/molecules/Translation/@types/Translation";
import {
  translationContainerDefaultThemeClasses,
  translationDefaultThemeClasses
} from "@app/components/molecules/Translation/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const Translation: React.FC<ITranslationProps> = ({
  word,
  wordAudio,
  wordTranslaion
}) => (
  <div
    className={convertObjectValuesToString(
      translationContainerDefaultThemeClasses
    )}
  >
    <p className={convertObjectValuesToString(translationDefaultThemeClasses)}>
      {" "}
      {word}
      {" - "}
      {wordTranslaion}
    </p>
    <SoundButton audioSrc={wordAudio} />
  </div>
);

export { Translation };
