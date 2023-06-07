import { LinkWithIconSize } from "@app/components/molecules/LinkWithIcon/@types/LinkWithIcon";
import { IThemeClasses } from "@app/types/theme";

export const mapSizeToLinkWithIconStyles: Record<
  LinkWithIconSize,
  IThemeClasses
> = {
  [LinkWithIconSize.Small]: {
    height: "h-28"
  },
  [LinkWithIconSize.Medium]: {
    height: "h-48"
  }
};

export const linkWithIconDefaultLinkThemeClasses: IThemeClasses = {
  display: "flex",
  alignItems: "items-center",
  marginBottom: "mb-16"
};

export const linkWithIconDefaultIconThemeClasses: IThemeClasses = {
  width: "w-auto"
};

export const linkWithIconTextDefaultThemeClasses: IThemeClasses = {
  paddingLeft: "pl-8",
  fontSize: "text-14"
};
