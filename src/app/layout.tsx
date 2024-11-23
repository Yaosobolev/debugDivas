import type { Metadata } from 'next'
import fonts from '@/lib/fonts'
import '@/styles/main.css'

import { Header } from '@/components/shared/header'

export const metadata: Metadata = {
  title: 'Мероприятие',
  description: 'Платформа для отслеживания мероприятий',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${fonts.oswald.variable} ${fonts.raleway.variable} flex flex-col overflow-x-hidden h-screen font-sans`}
      >
        <Header />

        <main className="flex-1">{children}</main>

        <footer></footer>
      </body>
    </html>
  )
}
