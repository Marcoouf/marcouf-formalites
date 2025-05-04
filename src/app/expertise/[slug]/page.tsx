import { notFound } from 'next/navigation';

// Liste des slugs valides
const validSlugs = ['creation', 'modification', 'liquidation', 'marque', 'cession'];

// Génère les chemins statiques pour le build
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return validSlugs.map((slug) => ({ slug }));
}

// Typage explicite correct
type PageProps = {
  params: {
    slug: string;
  };
};

export default function ExpertisePage({ params }: PageProps) {
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
        Cette page présentera bientôt mon accompagnement sur <strong>{title}</strong>.
      </p>
    </main>
  );
}
