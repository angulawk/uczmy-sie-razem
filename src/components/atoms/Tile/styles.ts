import { IThemeClasses } from "@app/types/theme";

export const tileDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  flexDirection: "flex-col",
  mediaQuery: [
    "screenLg:basis-[calc(33.3%-2rem)]",
    "screenMdLg:basis-[calc(33.3%-2rem)]",
    "screenSmMd:basis-[calc(50%-2rem)]",
    "screenMaxSm:basis-full"
  ],
  alignItems: "items-center",
  backgroundColor: "bg-pink100",
  color: "text-black",
  fontSize: "text-24",
  marginBottom: "mb-20",
  padding: "p-16",
  textTransform: "uppercase",
  borderRadius: "rounded-md",
  cursor: "cursor-pointer"
};

export const tileIconWrapperDefaultThemeClasses: IThemeClasses = {
  height: "h-96",
  width: "w-96",
  marginBottom: "mb-16"
};
