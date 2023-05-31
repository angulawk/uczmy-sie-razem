import { Variant } from "@app/components/molecules/Translation/@types/Translation";
import { IThemeClasses } from "@app/types/theme";

export const mapVariantToTranslationStyles: Record<Variant, IThemeClasses> = {
  [Variant.Word]: {
    fontSize: "text-20"
  },
  [Variant.Sentence]: {
    fontSize: "text-18"
  }
};

export const mapVariantToTranslationWordStyles: Record<Variant, IThemeClasses> =
  {
    [Variant.Word]: {
      fontWeight: "font-normal"
    },
    [Variant.Sentence]: {
      fontWeight: "font-thin"
    }
  };

export const translationDefaultThemeClasses: IThemeClasses = {
  fontSize: "text-20",
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
