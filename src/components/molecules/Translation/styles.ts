import { TranslationVariant } from "@app/components/molecules/Translation/@types/Translation";
import { IThemeClasses } from "@app/types/theme";

export const mapVariantToTranslationStyles: Record<
  TranslationVariant,
  IThemeClasses
> = {
  [TranslationVariant.Word]: {
    fontSize: "text-24"
  },
  [TranslationVariant.Sentence]: {
    fontSize: "text-18"
  }
};

export const mapVariantToTranslationWordStyles: Record<
  TranslationVariant,
  IThemeClasses
> = {
  [TranslationVariant.Word]: {
    fontWeight: "font-normal"
  },
  [TranslationVariant.Sentence]: {
    fontWeight: "font-thin"
  }
};

export const translationDefaultThemeClasses: IThemeClasses = {
  marginBottom: "mb-2",
  mediaQuery: ["print:text-14"]
};

export const translationContainerDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  flexDirection: "flex-row",
  flexWrap: "flex-wrap",
  alignItems: "items-center",
  mediaQuery: ["print:block"]
};
