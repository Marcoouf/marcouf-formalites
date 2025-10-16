import { NextResponse } from 'next/server'
import { resend } from '@/lib/resend'

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, subject, message, consent, contactPreference, timeSlot, referrer, company, mountedAt, elapsed } = body

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
        ${contactPreference ? `<p><strong>Préférence de contact :</strong> ${contactPreference}</p>` : ''}
        ${timeSlot ? `<p><strong>Créneau souhaité :</strong> ${timeSlot}</p>` : ''}
        ${referrer ? `<p><strong>Provenance :</strong> ${referrer}</p>` : ''}
        ${typeof company !== 'undefined' ? `<p><strong>Honeypot (company) :</strong> ${company || '—'}</p>` : ''}
        ${mountedAt ? `<p><strong>MountedAt :</strong> ${mountedAt}</p>` : ''}
        ${typeof elapsed !== 'undefined' ? `<p><strong>Elapsed :</strong> ${elapsed}</p>` : ''}
        <p><strong>Message :</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `,
      text:
        `Nom : ${name}\n` +
        `Email : ${email}\n` +
        (contactPreference ? `Préférence de contact : ${contactPreference}\n` : '') +
        (timeSlot ? `Créneau souhaité : ${timeSlot}\n` : '') +
        (referrer ? `Provenance : ${referrer}\n` : '') +
        (typeof company !== 'undefined' ? `Honeypot (company) : ${company || '—'}\n` : '') +
        (mountedAt ? `MountedAt : ${mountedAt}\n` : '') +
        (typeof elapsed !== 'undefined' ? `Elapsed : ${elapsed}\n` : '') +
        `Message :\n${message}`
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
