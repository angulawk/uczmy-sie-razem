import { IPageTemplateProps } from "@app/components/templates/PageTemplate/@types/PageTemplate";

const PageTemplate: React.FC<IPageTemplateProps> = ({ children }) => (
  <main className="flex flex-col min-h-screen max-w-screen-xl mx-auto my-16 w-full p-20">
    {children}
  </main>
);

export { PageTemplate };
