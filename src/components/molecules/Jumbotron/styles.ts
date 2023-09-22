import { JumbotronLocation } from "@app/components/molecules/Jumbotron/@types/Jumbotron";
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
  alignItems: "items-center",
  width: "w-full",
  height: "h-480",
  mediaQuery: [
    "screenMaxMd:flex-col",
    "screenMaxMd:py-36",
    "screenMaxXs:h-full"
  ]
};

export const jumbotronPageDescriptionThemeClasses: IThemeClasses = {
  flex: "flex-[0_1_50%]",
  mediaQuery: ["screenMaxSm:flex-[0_1_100%]", "screenMaxMd:text-center"]
};

export const mapLocationToJumbotronDescriptionStyles: Record<JumbotronLocation, IThemeClasses> = {
  [JumbotronLocation.Main]: {
    flex: "flex-[0_1_50%]",
  },
  [JumbotronLocation.Category]: {
    flex: "flex-[0_1_66.65%]",
    order: "order-last"
  }
};

export const jumbotronIconThemeClasses: IThemeClasses = {
  mediaQuery: ["screenMaxSm:flex-[0_1_100%]"]
};

export const mapLocationToJumbotronIconStyles: Record<JumbotronLocation, IThemeClasses> = {
  [JumbotronLocation.Main]: {
    flex: "flex-[0_1_50%]",
  },
  [JumbotronLocation.Category]: {
    flex: "flex-[0_1_33.35%]",
    order: "order-first",
    height: "h-240",
    padding: "p-24"
  }
};

export const jumbotronIconWrapperStyles: IThemeClasses = {
  backgroundColor: "bg-gray300",
  padding: "p-24",
  borderRadius: "rounded-lg"
}