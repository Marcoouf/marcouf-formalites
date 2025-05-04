import { notFound } from 'next/navigation';

// Liste des slugs valides
const validSlugs = ['creation', 'modification', 'liquidation', 'marque', 'cession'];

// Génération statique des chemins
export function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

// Typage correct
type Props = {
  params: {
    slug: string;
  };
};

export default function ExpertisePage({ params }: Props) {
  const { slug } = params;

  const titles: Record<string, string> = {
    creation: "Création d’entreprise",
    modification: "Modification de société",
    liquidation: "Clôture / Liquidation",
    marque: "Propriété intellectuelle",
    cession: "Cession de parts",
  };

  const title = titles[slug];

  if (!title) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 py-24 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-700">
        Cette page vous présentera prochainement mon accompagnement sur : <strong>{title}</strong>.
      </p>
    </main>
  );
}
