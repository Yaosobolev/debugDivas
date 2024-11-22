import type { Metadata } from 'next'
import fonts from '@/lib/fonts'
import '@/styles/main.css'

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
      <body className={`${fonts.oswald.variable} ${fonts.raleway.variable}`}>
        <header></header>

        <main>{children}</main>

        <footer></footer>
      </body>
    </html>
  )
}
