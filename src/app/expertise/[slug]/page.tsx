import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [
    { slug: "creation" },
    { slug: "modification" },
    { slug: "liquidation" },
    { slug: "marque" },
    { slug: "cession" },
  ];
}

// ✅ Le bon typage ici
export default function ExpertisePage({
  params,
}: {
  params: { slug: string };
}) {
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
        Cette page est en construction. Elle expliquera prochainement les détails de mon accompagnement pour « {title} ».
      </p>
    </main>
  );
}
