import './App.css'
import { Inter } from 'next/font/google'

import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sync60',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    // process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
