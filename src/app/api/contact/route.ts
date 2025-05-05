import { NextResponse } from 'next/server'
import { resend } from '@/lib/resend'

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, subject, message, consent } = body

  if (!name || !email || !subject || !message || !consent) {
    return NextResponse.json(
      { success: false, error: 'Champs requis manquants.' },
      { status: 400 }
    )
  }

  try {
    const data = await resend.emails.send({
      from: 'Marcouf Formalités <contact@marcouf-formalites.fr>',
      to: [
        'contact@marcouf-formalites.fr',
        'marcouf.lebar@gmail.com'
      ],
      subject: `📩 Nouveau message : ${subject}`,
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `Nom : ${name}\nEmail : ${email}\nMessage :\n${message}`
    })

    if (data.error) {
      return NextResponse.json({ success: false, error: data.error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, error: 'Erreur serveur.' }, { status: 500 })
  }
}
