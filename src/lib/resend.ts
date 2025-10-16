import { Resend } from 'resend'

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY manquante dans le fichier d’environnement')
}

export const resend = new Resend(process.env.RESEND_API_KEY)
