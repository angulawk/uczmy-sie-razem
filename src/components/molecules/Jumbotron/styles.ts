import { Variant } from "@app/components/molecules/Jumbotron/@types/Jumbotron";
import { IThemeClasses } from "@app/types/theme";

export const jumbotronWrapperDefaultThemeClasses: IThemeClasses = {
  backgroundColor: "bg-gray100",
  position: "relative",
  width: "w-full",
  marginX: "mx-auto",
  justifyContent: "justify-end",
  mediaQuery: [
    "screenLg:max-w-[1400px]",
    "screenMdLg:max-w-[1200px]",
    "screenSmMd:max-w-[1000px]",
    "print:hidden"
  ]
};

export const jumbotronDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  justifyContent: "justify-end",
  marginY: "my-96",
  alignItems: "items-center",
  width: "w-full",
  gap: "gap-56",
  mediaQuery: [
    "screenMaxSm:flex-col",
    "screenMaxXs:h-full",
    "screenMaxSm:mt-96",
    "screenMaxSm:mb-56"
  ]
};

export const jumbotronPageDescriptionThemeClasses: IThemeClasses = {
  flex: "flex-[0_1_50%]",
  mediaQuery: [
    "screenMaxXs:flex-[0_1_100%]",
    "screenMaxSm:px-0",
    "screenMaxSm:pl-0"
  ]
};

export const mapVariantToJumbotronDescriptionStyles: Record<
  Variant,
  IThemeClasses
> = {
  [Variant.Primary]: {
    flex: "flex-[0_1_50%]",
    mediaQuery: ["screenMaxMd:text-center"]
  },
  [Variant.Secondary]: {
    flex: "flex-[0_1_66.65%]",
    order: "order-last",
    mediaQuery: ["screenMaxSm:text-center"]
  }
};

export const jumbotronIconThemeClasses: IThemeClasses = {
  mediaQuery: ["screenMaxXs:flex-[0_1_100%]"]
};

export const mapVariantToJumbotronIconStyles: Record<Variant, IThemeClasses> = {
  [Variant.Primary]: {
    flex: "flex-[0_1_50%]",
    maxHeight: "max-h-240"
  },
  [Variant.Secondary]: {
    flex: "flex-[0_1_33.35%]",
    order: "order-first",
    height: "h-200",
    padding: "p-32"
  }
};

export const jumbotronIconWrapperStyles: IThemeClasses = {
  backgroundColor: "bg-gray300",
  padding: "p-24",
  borderRadius: "rounded-lg",
  boxShadow: "shadow-pageDescription"
};
