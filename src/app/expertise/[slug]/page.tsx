import { notFound } from "next/navigation";

// Liste des slugs valides
const validSlugs = ["creation", "modification", "liquidation", "marque", "cession"];

// Génère les chemins statiques
export async function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

// Définition des props avec typage correct
interface PageProps {
  params: {
    slug: string;
  };
}

// Page dynamique
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
    <main className="min-h-screen py-20 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-700">
        Cette page vous présentera bientôt les détails de mon accompagnement sur « {title} ».
      </p>
    </main>
  );
}
