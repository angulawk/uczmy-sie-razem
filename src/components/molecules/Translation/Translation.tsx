import { SoundButton } from "@app/components/molecules/SoundButton/SoundButton";
import {
  ITranslationProps,
  TranslationVariant
} from "@app/components/molecules/Translation/@types/Translation";
import {
  mapVariantToTranslationStyles,
  mapVariantToTranslationWordStyles,
  translationContainerDefaultThemeClasses,
  translationDefaultThemeClasses
} from "@app/components/molecules/Translation/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const Translation: React.FC<ITranslationProps> = ({
  phrase,
  translation,
  wordAudio,
  variant = TranslationVariant.Word
}) => {
  const translationStyles = {
    ...translationDefaultThemeClasses,
    ...mapVariantToTranslationStyles[variant]
  };

  const translationWordStyles = {
    ...mapVariantToTranslationWordStyles[variant]
  };

  return (
    <div
      className={convertObjectValuesToString(
        translationContainerDefaultThemeClasses
      )}
    >
      <p className={convertObjectValuesToString(translationStyles)}>
        <span className={convertObjectValuesToString(translationWordStyles)}>
          {phrase}
        </span>
        {" - "}
        {translation}
      </p>
      <SoundButton audioSrc={wordAudio} />
    </div>
  );
};

export { Translation };
