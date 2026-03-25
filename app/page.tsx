import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { TripleBundleSection } from '@/components/TripleBundleSection'
import { AIInternPlaybookSection } from '@/components/AIInternPlaybookSection'
import { ModulesSection } from '@/components/ModulesSection'
import { BundleSection } from '@/components/BundleSection'
import { AboutSection } from '@/components/AboutSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-black">
        <Hero />
        <TripleBundleSection />
        <AIInternPlaybookSection />
        <ModulesSection />
        <BundleSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}
