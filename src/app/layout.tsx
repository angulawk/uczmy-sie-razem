import "@styles/globals.css";
import { barlow } from "@app/styles/fonts";
import { IRootLayoutProps } from "@app/app/@types/RootLayout";
import { Jumbotron } from "@app/components/molecules/Jumbotron/Jumbotron";
import { PageTemplate } from "@app/components/templates/PageTemplate/PageTemplate";
import { navLinks } from "@app/config/navLinks";
import { getPageMetadata } from "@app/helpers/server/getPageMetadata";
import { Footer } from "@app/components/molecules/Footer/Footer";
import { Path } from "@app/routing/paths";

const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => {
  const { description, title } = getPageMetadata();

  return (
    <html lang="pl" className={`${barlow.variable} font-barlow`}>
      <body>
        <Jumbotron description={description} links={navLinks} title={title} />
        <PageTemplate>{children}</PageTemplate>
        <Footer navLinks={navLinks} logoHref={Path.Root} />
      </body>
    </html>
  );
};

export default RootLayout;
