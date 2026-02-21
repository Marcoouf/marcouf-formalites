export default function PolitiqueConfidentialite() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-900">
      <h1 className="text-3xl font-bold mb-2 text-accent">Politique de confidentialité</h1>
      <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : 2025 • Site : https://marcouf-formalites.fr</p>

      {/* 1. Introduction */}
      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold">1. Introduction</h2>
        <p>
          La présente politique explique de manière claire comment nous collectons, utilisons et protégeons vos données
          personnelles lorsque vous consultez ce site et utilisez nos formulaires. Elle est rédigée conformément au Règlement
          (UE) 2016/679 (« RGPD ») et à la loi Informatique et Libertés modifiée.
        </p>
        <p>
          Nous attachons une importance particulière à la protection de votre vie privée et mettons en œuvre des mesures
          adaptées pour préserver la confidentialité, l’intégrité et la disponibilité de vos données.
        </p>
      </section>

      {/* 2. Responsable de traitement */}
      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">2. Identité du responsable de traitement</h2>
        <p>
          <strong>Responsable :</strong> Marcouf LEBAR – Entrepreneur individuel (Marcouf Formalités)
        </p>
        <p>
          <strong>Adresse professionnelle :</strong> 26 rue de la vannerie, 50750, CANISY
        </p>
        <p>
          <strong>Contact :</strong> <a className="underline" href="mailto:contact@marcouf-formalites.fr">contact@marcouf-formalites.fr</a>
        </p>
      </section>

      {/* 3. Données collectées */}
      <section className="space-y-3 mb-8">
        <h2 className="text-xl font-semibold">3. Données collectées</h2>
        <h3 className="font-medium">Formulaire de contact / demande de devis</h3>
        <p>
          Identité (nom, prénom), coordonnées (e‑mail, téléphone), informations professionnelles éventuelles (raison sociale,
          fonction), contenu de votre message et pièces jointes le cas échéant.
        </p>
        <h3 className="font-medium">Navigation et journalisation technique</h3>
        <p>
          Données techniques minimales nécessaires au fonctionnement et à la sécurité : identifiants internes de session,
          horodatages, URL consultées, user‑agent, adresse IP (pouvant être conservée sous forme tronquée ou hachée selon les
          besoins de sécurité et d’audit).
        </p>
        <h3 className="font-medium">Cookies et traceurs</h3>
        <p>
          Nous utilisons Matomo auto‑hébergé configuré pour des <em>statistiques anonymisées</em> répondant aux critères
          d’exemption de consentement de la CNIL (IP anonymisée, absence de suivi multi‑sites, respect du « Do Not Track »,
          absence de reciblage publicitaire, durée de vie limitée). Aucun cookie de marketing n’est utilisé et aucun compte
          utilisateur n’est proposé sur le site.
        </p>
      </section>

      {/* 4. Finalités */}
      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">4. Finalités du traitement</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Répondre à vos demandes envoyées via le formulaire (prise de contact, devis, rendez‑vous).</li>
          <li>Gérer la relation précontractuelle et, le cas échéant, contractuelle et la facturation.</li>
          <li>Assurer le fonctionnement, la sécurité et l’amélioration du site (journalisation, prévention des abus).</li>
          <li>Mesurer l’audience de manière agrégée via Matomo, sans consentement, conformément aux critères CNIL.</li>
          <li>Respecter nos obligations légales et réglementaires (comptabilité, réponse aux demandes d’autorités).</li>
        </ul>
      </section>

      {/* 5. Base légale */}
      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">5. Base légale des traitements</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Exécution de mesures précontractuelles ou du contrat</strong> : traitement des demandes, devis, échanges
            en vue d’une prestation puis exécution et facturation.
          </li>
          <li>
            <strong>Intérêt légitime</strong> : sécurité du site, prévention de la fraude, organisation interne.
          </li>
          <li>
            <strong>Obligation légale</strong> : conservation des pièces comptables, réponses aux demandes d’autorités
            compétentes.
          </li>
          <li>
            <strong>Exemption de consentement (cookies de mesure d’audience Matomo)</strong> : conformément aux
            recommandations de la CNIL lorsque la configuration remplit l’ensemble des critères d’exemption.
          </li>
        </ul>
      </section>

      {/* 6. Durées de conservation */}
      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">6. Durée de conservation</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Demandes de contact / devis</strong> : 3 ans à compter du dernier échange, puis archivage intermédiaire si
            nécessaire pour la preuve.
          </li>
          <li>
            <strong>Données clients et facturation</strong> : pendant la relation contractuelle puis 10 ans pour les pièces
            comptables (obligation légale).
          </li>
          <li>
            <strong>Journalisation technique (logs)</strong> : 6 à 12 mois au titre de la sécurité, selon la gravité des
            incidents et contraintes techniques.
          </li>
          <li>
            <strong>Cookies Matomo</strong> : durées limitées et paramétrées pour respecter l’exemption CNIL.
          </li>
        </ul>
      </section>

      {/* 7. Destinataires */}
      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">7. Destinataires des données</h2>
        <p>
          Les données sont destinées aux personnes habilitées de Marcouf Formalités. Elles peuvent être traitées par des
          prestataires agissant en qualité de sous‑traitants au sens du RGPD, dans la limite de leurs attributions et sur la
          base d’engagements contractuels de confidentialité et de sécurité.
        </p>
        <p>Sous‑traitants principaux :</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Hébergement</strong> : OVHcloud – France.</li>
          <li><strong>Mesure d’audience</strong> : Matomo auto‑hébergé (France/UE).</li>
        </ul>
      </section>

      {/* 8. Transferts hors UE */}
      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">8. Transferts hors de l’Union européenne</h2>
        <p>
          Aucun transfert hors UE/EEE n’est réalisé dans le cadre des traitements décrits. Les données sont hébergées et
          traitées au sein de l’Union européenne.
        </p>
      </section>

      {/* 9. Droits des personnes */}
      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">9. Vos droits</h2>
        <p>
          Vous disposez des droits suivants : accès, rectification, effacement, limitation, opposition pour motifs légitimes,
          retrait du consentement (le cas échéant) et portabilité des données lorsque cela s’applique.
        </p>
        <p>
          Pour exercer vos droits, écrivez à <a className="underline" href="mailto:contact@marcouf-formalites.fr">contact@marcouf-formalites.fr</a>.
          Nous pouvons vous demander un justificatif d’identité en cas de doute raisonnable. Vous pouvez également introduire
          une réclamation auprès de la CNIL (cnil.fr).
        </p>
      </section>

      {/* 10. Cookies */}
      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">10. Cookies et traceurs</h2>
        <p>
          Seuls des cookies strictement nécessaires au fonctionnement du site et des cookies de mesure d’audience Matomo
          configurés de manière anonymisée sont utilisés. Dans ces conditions, aucun bandeau de consentement n’est requis.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Nécessaires :</strong> indispensables au site (sécurité, anti‑abus, accessibilité).</li>
          <li><strong>Mesure d’audience Matomo (exemptée) :</strong> statistiques agrégées, IP anonymisée, respect du « Do Not Track »,
            absence de reciblage.
          </li>
        </ul>
      </section>

      {/* 11. Sécurité */}
      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">11. Sécurité des données</h2>
        <p>
          Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables (chiffrement en transit, gestion des
          accès, journalisation, sauvegardes, mise à jour des dépendances) afin de protéger vos données contre la perte, l’usage
          abusif, l’accès non autorisé et la divulgation.
        </p>
      </section>

      {/* 12. Mise à jour */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">12. Mise à jour de la politique</h2>
        <p>
          La présente politique peut évoluer pour tenir compte des changements légaux, techniques ou organisationnels. En cas
          de modification importante, nous vous en informerons par tout moyen approprié. Date de dernière mise à jour : 2025.
        </p>
      </section>
    </main>
  )
}
