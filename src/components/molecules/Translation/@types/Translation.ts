export enum Variant {
  Word,
  Sentence
}

export interface ITranslationProps {
  phrase: string;
  translation: string;
  wordAudio: string;
  variant?: Variant;
}
