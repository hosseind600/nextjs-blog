import type { Metadata } from 'next'
import './globals.css'
import ScrollToTop from './components/ScrollToTop';

export const metadata: Metadata = {
  title: 'Next Personal Website Demo',
  description: 'This demo is generated to show a demonstration on Nextjs .',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="tbody">{children}
      <ScrollToTop /></body>
    </html>
  )
}
