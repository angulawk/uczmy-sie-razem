import { IPageTemplateProps } from "@app/components/templates/PageTemplate/@types/PageTemplate";
import { pageTemplateDefaultThemeClasses } from "@app/components/templates/PageTemplate/styles";
import { convertObjectValuesToString } from "@app/helpers/objects/convertObjectValuesToString";

const PageTemplate: React.FC<IPageTemplateProps> = ({ children }) => (
  <main
    className={convertObjectValuesToString(pageTemplateDefaultThemeClasses)}
  >
    {children}
  </main>
);

export { PageTemplate };
