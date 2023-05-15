import { IPageTemplateProps } from "@app/components/templates/PageTemplate/@types/PageTemplate";

const PageTemplate: React.FC<IPageTemplateProps> = ({ children }) => (
  <main className="flex flex-col min-h-screen max-w-[1400px] mx-auto w-full">
    {children}
  </main>
);

export { PageTemplate };
