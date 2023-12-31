import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/src/lib/utils'
import Navbar from '@/src/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SmartPDF',
  description: 'Realtime chat pdf',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <body className={cn(
        'min-h-screen font-sans antialiased grainy', inter.className
      )}>
        <Navbar/>
        {children}</body>
    </html>
  )
}
