import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Emir Kaya | Kişisel Site',
  description: 'Frontend ağırlıklı, modern web arayüzleri geliştirmeyi seviyorum.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}


