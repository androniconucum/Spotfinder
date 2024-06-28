import './globals.css'
import SessionProvider from './SessionProvider';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full w-full  bg-[#efefef]">
      <body>
      <SessionProvider>
        {children}
      </SessionProvider>
      </body>
    </html>
  )
}