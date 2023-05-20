import "@styles/globals.css";
import { barlow, roboto } from "@app/styles/fonts";
import { IRootLayoutProps } from "@app/app/@types/RootLayout";
import { Jumbotron } from "@app/components/molecules/Jumbotron/Jumbotron";
import { PageTemplate } from "@app/components/templates/PageTemplate/PageTemplate";
import { navLinks } from "@app/config/navLinks";
import { getPageMetadata } from "@app/helpers/server/getPageMetadata";

const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => {
  const { description, title } = getPageMetadata();

  return (
    <html lang="pl" className={`${barlow.variable} ${roboto.variable}`}>
      <body>
        <Jumbotron description={description} links={navLinks} title={title} />
        <PageTemplate>{children}</PageTemplate>
      </body>
    </html>
  );
};

export default RootLayout;
