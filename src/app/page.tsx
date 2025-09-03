import Hero from '@/components/Hero'
import APropos from '@/components/APropos'
import Expertise from "@/components/Expertise";
import ContactForm from '@/components/ContactForm';
import Commitments from '@/components/Commitments';

export default function Home() {
  return (
    <main>
      <Hero />
      <APropos />
      <Expertise />
      <Commitments />
      <ContactForm />

    </main>
  )
}
