import { SoundButton } from "@app/components/molecules/SoundButton/SoundButton";
import { ITranslationProps } from "@app/components/molecules/Translation/@types/Translation";

const Translation: React.FC<ITranslationProps> = ({
  word,
  wordAudio,
  wordTranslaion
}) => (
  <p className="text-18 mb-2">
    <>
      <span className="font-bold">{word}</span> {" - "} {wordTranslaion}
    </>
    <SoundButton audioSrc={wordAudio} />
  </p>
);

export { Translation };
