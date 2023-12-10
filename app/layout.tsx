import type { Metadata } from 'next'
import './globals.css'
import ScrollToTop from './components/ScrollToTop';

export const metadata: Metadata = {
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
      <body className="tbody">{children}
      <ScrollToTop /></body>
    </html>
  )
}
