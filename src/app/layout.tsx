import { IRootLayoutProps } from '@app/app/@types/RootLayout';
import { links } from '@app/app/config';
import { HeaderDesktop } from '@app/components/molecules/HeaderDesktop/HeaderDesktop';
import { PageTemplate } from '@app/components/templates/PageTemplate/PageTemplate';
import '@styles/globals.css'

export const metadata = {
  title: 'Uczmy się razem',
  description: 'Strona do wspólnej nauki języka hiszpańskiego',
}

const RootLayout: React.FC<IRootLayoutProps> = ({
  children
}) => (
  <html lang="en">
    <body>
      <HeaderDesktop links={links} />
      <PageTemplate>
        {children}
      </PageTemplate>
    </body>
  </html>
);

export default RootLayout;