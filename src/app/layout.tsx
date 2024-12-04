import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SPORTIFY - Premium Sports Gear',
  description: 'Discover premium sports gear and accessories for athletes who demand excellence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
