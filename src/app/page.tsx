import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Differentials } from '@/components/sections/Differentials'
import { Contact } from '@/components/sections/Contact'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
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
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
