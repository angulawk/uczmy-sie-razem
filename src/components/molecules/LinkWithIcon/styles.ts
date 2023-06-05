import { LinkWithIconVariant } from "@app/components/molecules/LinkWithIcon/@types/LinkWithIcon";
import { IThemeClasses } from "@app/types/theme";

export const mapVariantToLinkWithIconStyles: Record<
  LinkWithIconVariant,
  IThemeClasses
> = {
  [LinkWithIconVariant.Link]: {
    height: "h-28"
  },
  [LinkWithIconVariant.Logo]: {
    height: "h-48"
  }
};

export const linkWithIconDefaultThemeClasses: IThemeClasses = {
  display: "flex",
  alignItems: "items-center",
  marginBottom: "mb-16"
};

export const linkWithIconDynamicIconDefaultThemeClasses: IThemeClasses = {
  height: "h-48",
  width: "w-auto"
};

export const linkWithIconTextDefaultThemeClasses: IThemeClasses = {
  paddingLeft: "pl-8",
  fontSize: "text-14"
};
