import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, message } = body

  try {
    await resend.emails.send({
      from: 'contact@marcouf-formalites.fr',
      to: 'marcouf.lebar@gmail.com', // l'adresse qui reçoit le message
      subject: `Message de ${name}`,
      replyTo: email,
            html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Échec de l’envoi.' }, { status: 500 })
  }
}
