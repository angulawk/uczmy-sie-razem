import "@styles/globals.css";
import { IRootLayoutProps } from "@app/app/@types/RootLayout";
import { Jumbotron } from "@app/components/molecules/Jumbotron/Jumbotron";
import { PageTemplate } from "@app/components/templates/PageTemplate/PageTemplate";
import { navLinks } from "@app/config/navLinks";
import { getPageMetadata } from "@app/helpers/server/getPageMetadata";
import { Alata, Barlow, Roboto } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: "400"
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500"]
});

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
