export enum TranslationVariant {
  Word,
  Sentence
}

export interface ITranslationProps {
  phrase: string;
  translation: string;
  wordAudio: string;
  variant?: TranslationVariant;
}
