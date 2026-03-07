import Hero from '@/components/Hero'
import APropos from '@/components/APropos'
import Expertise from '@/components/Expertise'
import ProcessSection from '@/components/ProcessSection'
import PricingSection from '@/components/PricingSection'
import Commitments from '@/components/Commitments'
import LatestArticlesRail from '@/components/LatestArticlesRail'
import HomeFaq from '@/components/HomeFaq'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <main>
      <Hero />
      <APropos />
      <Expertise />
      <ProcessSection />
      <PricingSection />
      <Commitments />
      <LatestArticlesRail limit={3} />
      <HomeFaq />
      <ContactForm />
    </main>
  )
}
