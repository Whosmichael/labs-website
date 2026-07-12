import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Services } from '@/components/sections/services'
import { Products } from '@/components/sections/products'
import { Process } from '@/components/sections/process'
import { Pricing } from '@/components/sections/pricing'
import { Contact } from '@/components/sections/contact'

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
