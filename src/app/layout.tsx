import HeaderDesktop from '@app/components/molecules/HeaderDesktop'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <main className="flex min-h-screen flex-col items-center">
        <HeaderDesktop />

        {children}
      </main>
      </body>
    </html>
  )
}
