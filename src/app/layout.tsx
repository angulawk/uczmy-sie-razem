import { IRootLayoutProps } from '@app/app/@types/RootLayout';
import { links } from '@app/app/config';
import { Jumbotron } from '@app/components/molecules/Jumbotron/Jumbotron';
import { PageTemplate } from '@app/components/templates/PageTemplate/PageTemplate';
import { getPageMetadata } from '@app/helpers/server/getPageMetadata';
import '@styles/globals.css'

const RootLayout: React.FC<IRootLayoutProps> = ({
  children
}) => {
  const { description, title } = getPageMetadata()
  
  return (
    <html lang="en">
      <body>
        <Jumbotron
          description={description}
          links={links}
          title={title}
        />
        <PageTemplate>
          {children}
        </PageTemplate>
      </body>
    </html>
  )
}

export default RootLayout;