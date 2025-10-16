import { NextResponse } from 'next/server'
import { resend } from '@/lib/resend'

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

export async function POST(request: Request) {
  const body = await request.json()
  const {
    name,
    email,
    phone,
    subject,
    message,
    consent,
    preferredContact,
    timePreference,
    heardFrom,
    meta,
  } = body

  if (!name || !email || !subject || !message || !consent) {
    return NextResponse.json(
      { success: false, error: 'Champs requis manquants.' },
      { status: 400 }
    )
  }

  const contactPreference = preferredContact === 'phone' ? 'Téléphone' : 'Email'
  const timeSlots: Record<string, string> = {
    indifferent: 'Indifférent',
    matin: 'Matin',
    apresmidi: 'Après-midi',
    soiree: 'Soirée',
  }
  const timeSlot = timeSlots[timePreference as keyof typeof timeSlots] ?? 'Non précisé'
  const referrer = typeof heardFrom === 'string' && heardFrom.trim().length > 0 ? heardFrom.trim() : 'Non précisé'

  const mountedAt = typeof meta?.ts === 'number' ? meta.ts : null
  const mountedAtIso = mountedAt ? new Date(mountedAt).toISOString() : null
  const elapsed = typeof meta?.elapsed === 'number' ? meta.elapsed : mountedAt ? Date.now() - mountedAt : null
  const honeypot = typeof meta?.hp === 'string' ? meta.hp.trim() : ''
  const safeMessage = escapeHtml(message)
  const formattedMessage = safeMessage.replace(/\n/g, '<br>')

  try {
    const data = await resend.emails.send({
      from: 'Marcouf Formalités <contact@marcouf-formalites.fr>',
      to: ['contact@marcouf-formalites.fr', 'marcouf.lebar@gmail.com'],
      subject: `📩 Nouveau message : ${subject}`,
      html: `
        <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Téléphone :</strong> ${escapeHtml(phone)}</p>` : ''}
        <p><strong>Préférence de contact :</strong> ${contactPreference}${phone ? ` (tél. ${escapeHtml(phone)})` : ''}</p>
        <p><strong>Créneau préféré :</strong> ${timeSlot}</p>
        <p><strong>Origine :</strong> ${escapeHtml(referrer)}</p>
        <p><strong>Message :</strong><br>${formattedMessage}</p>
        <hr />
        <p><strong>Anti-spam</strong></p>
        <ul>
          <li>Honeypot (company) : ${honeypot ? escapeHtml(honeypot) : 'vide'}</li>
          <li>Mounted at : ${mountedAtIso ?? 'non transmis'}</li>
          <li>Elapsed : ${typeof elapsed === 'number' ? `${elapsed} ms` : 'non transmis'}</li>
        </ul>
      `,
      text: [
        `Nom : ${name}`,
        `Email : ${email}`,
        phone ? `Téléphone : ${phone}` : null,
        `Préférence de contact : ${contactPreference}${phone ? ` (tél. ${phone})` : ''}`,
        `Créneau préféré : ${timeSlot}`,
        `Origine : ${referrer}`,
        '---',
        'Message :',
        message,
        '---',
        `Anti-spam / company : ${honeypot || 'vide'}`,
        `Mounted at : ${mountedAtIso ?? 'non transmis'}`,
        `Elapsed : ${typeof elapsed === 'number' ? `${elapsed} ms` : 'non transmis'}`,
      ]
        .filter(Boolean)
        .join('\n'),
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
