import { IThemeClasses } from "@app/types/theme";

export interface IPageDescriptionProps {
  description?: string;
  title?: string;
  themeClasses?: Pick<IThemeClasses, "mediaQuery">;
}
