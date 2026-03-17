import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChanceLove.ai — From Intern to Indispensable',
  description: 'The AI Intern Playbook. Hire an AI that actually works in your business.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
