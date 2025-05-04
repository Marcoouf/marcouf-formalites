import { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Expertise – ${params.slug}`,
  };
}

export default function ExpertisePage({ params }: Props) {
  const { slug } = params;

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-accent">
        Domaine d&apos;expertise : {slug}
      </h1>
      <p className="mt-4 text-gray-600">
        Cette page est en cours de rédaction. Vous y trouverez bientôt une présentation détaillée de ce domaine juridique.
      </p>
    </div>
  );
}
