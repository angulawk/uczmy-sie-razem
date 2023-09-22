import "@styles/globals.css";
import { barlow } from "@app/styles/fonts";
import { IRootLayoutProps } from "@app/app/@types/RootLayout";
import { PageTemplate } from "@app/components/templates/PageTemplate/PageTemplate";
import { navLinks } from "@app/config/navLinks";
import { Footer } from "@app/components/organisms/Footer/Footer";
import { footerLinksWithIcons } from "@app/config/linksWithIcons/footer";
import { Header } from "@app/components/molecules/Header/Header";

const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => (
  <html lang="pl" className={`${barlow.variable} font-barlow`}>
    <body>
      <div className="flex flex-col min-h-[100vh]">
        <PageTemplate>
          <Header links={navLinks} />
          {children}
        </PageTemplate>

        <Footer
          navLinks={navLinks}
          href="mailto:agnieszka.weronika.wojcik@gmail.com"
          linksWithIcons={footerLinksWithIcons}
        />
      </div>
    </body>
  </html>
);

export default RootLayout;
