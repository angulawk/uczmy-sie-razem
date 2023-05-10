import "@styles/globals.css";
import { IRootLayoutProps } from "@app/app/@types/RootLayout";
import { Jumbotron } from "@app/components/molecules/Jumbotron/Jumbotron";
import { PageTemplate } from "@app/components/templates/PageTemplate/PageTemplate";
import { navLinks } from "@app/config/navLinks";
import { getPageMetadata } from "@app/helpers/server/getPageMetadata";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: "400"
});

const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => {
  const { description, title } = getPageMetadata();

  return (
    <html lang="pl" className={`${inter.variable} ${roboto.variable}`}>
      <body>
        <Jumbotron description={description} links={navLinks} title={title} />
        <PageTemplate>{children}</PageTemplate>
      </body>
    </html>
  );
};

export default RootLayout;
