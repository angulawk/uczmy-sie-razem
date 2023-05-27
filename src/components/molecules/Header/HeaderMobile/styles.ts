import { HeaderMobileVisibility } from "@app/components/molecules/Header/HeaderMobile/@types/HeaderMobile";
import { IThemeClasses } from "@app/types/theme";

export const headerMobileDefaultThemeClasses: IThemeClasses = {
  width: "w-240",
  height: "h-full",
  position: "relative",
  zIndex: "z-100",
  paddingX: "px-32",
  paddingY: "py-48",
  display: "flex"
};

export const mapHeaderMobileVisibilityToStyles: Record<
  HeaderMobileVisibility,
  IThemeClasses
> = {
  [HeaderMobileVisibility.Visible]: {
    backgroundColor: "bg-black"
  },
  [HeaderMobileVisibility.Hidden]: {
    backgroundColor: "bg-none"
  }
};
