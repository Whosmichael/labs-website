'use client'

import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="relative">
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
