import { Resend } from 'resend'

const apiKey = process.env.RESEND_API_KEY

if (!apiKey) {
  // Échec explicite en build/runtime si la clé est absente
  throw new Error('RESEND_API_KEY manquante dans les variables d\’environnement')
}

export const resend = new Resend(apiKey)
