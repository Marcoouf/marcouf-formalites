import Hero from '@/components/Hero'
import APropos from '@/components/APropos'
import Expertise from "@/components/Expertise";
import ContactForm from '@/components/ContactForm';
import Commitments from '@/components/Commitments';
import LatestArticlesRail from '@/components/LatestArticlesRail'

export default function Home() {
  return (
    <main>
      <Hero />
      <APropos />
      <Expertise />
      <Commitments />
      <ContactForm />
      <LatestArticlesRail limit={3} />
    </main>
  )
}
