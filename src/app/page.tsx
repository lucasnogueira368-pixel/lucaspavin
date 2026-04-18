import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Differentials } from '@/components/sections/Differentials'
import { HowItWorks } from '@/components/sections/HowItWorks'
// import { Testimonials } from '@/components/sections/Testimonials' // TEMP: oculto ate termos depoimentos reais. Ver docs/PLACEHOLDERS.md
import { Faq } from '@/components/sections/Faq'
import { Contact } from '@/components/sections/Contact'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { BackToTop } from '@/components/ui/BackToTop'
import { ClientEffects } from '@/components/effects/ClientEffects'

export default function Home() {
  return (
    <>
      <Nav />
      <ClientEffects />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Differentials />
        <HowItWorks />
        {/* <Testimonials /> — TEMP: oculto ate termos depoimentos reais */}
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </>
  )
}
