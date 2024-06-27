import './globals.css'
import SessionProvider from './SessionProvider';


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<<<<<<< HEAD
    <html lang="en" className="bg-[#aeaeae]">
      <body className={inter.className}>{children}</body>
=======
    <html lang="en" className="h-full bg-gray-900">
      <body className="h-full">
      <SessionProvider>
        {children}
      </SessionProvider>
      </body>
>>>>>>> 13b274600f3fa8259760278c632bc1b71caf2ee3
    </html>
  )
}