# Audit du site Marcouf Formalités

## Points majeurs à corriger

1. Aucun blocage critique restant : le formulaire API et la passerelle Resend embarquent désormais l’ensemble des champs RGPD/anti-spam et gèrent l’absence de clé, ce qui supprime le risque de message vide ou de crash en production. (P0, Impact : RGPD/DX)【F:src/app/api/contact/route.ts†L12-L102】【F:src/lib/resend.ts†L1-L26】

## Améliorations de fond

- Les pages d’expertise utilisent encore des animations `framer-motion` sans respecter `prefers-reduced-motion`. Prévoir un hook commun (par exemple `useReducedMotion`) pour désactiver ces transitions quand l’utilisateur limite les animations. (P1, Impact : Accessibilité)【F:src/app/expertise/creation/CreationPageClient.tsx†L23-L158】【F:src/app/expertise/redaction-actes/RedactionActesPageClient.tsx†L16-L136】
- Les blocs JSON-LD `LegalService`/FAQ sont dupliqués dans chaque page ; un petit helper (ex. `buildLegalServiceJsonLd`) éviterait les divergences futures et simplifierait les mises à jour de contenu. (P2, Impact : DX/SEO)【F:src/app/expertise/creation/page.tsx†L3-L66】【F:src/app/expertise/modification/page.tsx†L3-L67】【F:src/app/expertise/redaction-actes/page.tsx†L3-L87】

## Points positifs

- La palette globale respecte désormais la charte : `.text-accent` cible correctement la classe utilitaire, `bg-noise-paper` est alignée sur `bg-noise` et le bouton `btn-devis` coupe sa pulsation quand `prefers-reduced-motion` est activé. (P2, Impact : Accessibilité/UI)【F:src/app/globals.css†L29-L115】
- Le rail des derniers articles consomme le helper partagé et supprime l’import dynamique, réduisant le JS chargé côté client et la duplication de lecture disque. (P1, Impact : Perf/DX)【F:src/components/LatestArticlesRail.tsx†L1-L74】【F:src/lib/articles.ts†L74-L95】
- Les pages d’expertise servent désormais les schémas `LegalService` (et FAQ pour la rédaction d’actes) côté serveur, améliorant les rich snippets sans injecter de script côté client. (P1, Impact : SEO)【F:src/app/expertise/creation/page.tsx†L3-L66】【F:src/app/expertise/modification/page.tsx†L3-L67】【F:src/app/expertise/redaction-actes/page.tsx†L3-L87】
- L’email de contact récapitule toutes les préférences (canal, créneau, origine, métadonnées anti-spam) dans les versions HTML et texte, ce qui réduit les allers-retours avec les prospects. (P1, Impact : RGPD/UX)【F:src/app/api/contact/route.ts†L34-L92】
