import { NextResponse } from 'next/server'
import { resend } from '@/lib/resend'

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, subject, message, consent } = body

  // Validation côté serveur
  if (!name || !email || !subject || !message || !consent) {
    return NextResponse.json(
      { success: false, error: 'Champs requis manquants.' },
      { status: 400 }
    )
  }

  try {
    const data = await resend.emails.send({
      from: 'Marcouf Formalités <contact@marcouf-formalites.fr>', // doit être un domaine vérifié
      to: ['contact@marcouf-formalites.fr'], // redirigé ensuite vers Gmail
      subject: `📩 Nouveau message : ${subject}`,
      html: `
        <h2>Vous avez reçu un message via le site Marcouf Formalités</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message :</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `
    })

    if (data.error) {
      console.error('Erreur Resend:', data.error)
      return NextResponse.json({ success: false, error: data.error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur serveur:', error)
    return NextResponse.json({ success: false, error: 'Erreur serveur.' }, { status: 500 })
  }
}
