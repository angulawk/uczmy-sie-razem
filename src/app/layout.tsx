import HeaderDesktop from '@app/components/molecules/HeaderDesktop/HeaderDesktop'
import './globals.css'

export const metadata = {
  title: 'Uczmy się razem',
  description: 'Strona do wspólnej nauki języka hiszpańskiego',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <html lang="en">
    <body>
      <HeaderDesktop />
      <main className="flex flex-col min-h-screen max-w-screen-xl mx-auto my-16 w-full">
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;