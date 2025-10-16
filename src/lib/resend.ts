import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY

type SendParams = Parameters<Resend['emails']['send']>[0]
type SendResult = Awaited<ReturnType<Resend['emails']['send']>>

const client = resendApiKey ? new Resend(resendApiKey) : null

if (!resendApiKey) {
  console.error('RESEND_API_KEY manquante : envoi des emails désactivé.')
}

export const resend: Pick<Resend, 'emails'> = {
  emails: {
    async send(payload: SendParams): Promise<SendResult> {
      if (!client) {
        return {
          data: null,
          error: { message: 'RESEND_API_KEY absente : email non envoyé.' },
        } as SendResult
      }
      return client.emails.send(payload)
    },
  },
}
