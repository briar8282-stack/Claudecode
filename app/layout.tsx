import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Auckland Schools Ranking',
  description: 'Comprehensive ranking of Auckland schools with 10-point rating system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
