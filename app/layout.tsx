import './globals.css'
import SessionProvider from './SessionProvider';
import Nav from "@/app/components/user/homepage"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full w-full  bg-[#efefef]">
      <body>
      <Nav />
      <SessionProvider>
        {children}
      </SessionProvider>
      </body>
    </html>
  )
}