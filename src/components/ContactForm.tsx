'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

interface FormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  preferredContact: 'email' | 'phone'
  timePreference: 'indifferent' | 'matin' | 'apresmidi' | 'soiree'
  heardFrom?: string
  consent: boolean
}

interface Errors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
  consent?: string
  general?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    timePreference: 'indifferent',
    heardFrom: '',
    consent: false,
  })
  const [errors, setErrors] = useState<Errors>({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [hp, setHp] = useState('')
  const [mountedAt, setMountedAt] = useState<number | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => setMountedAt(Date.now()), [])
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 900)
    return () => clearTimeout(t)
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    const { name, value } = target

    setFormData((prev) => {
      switch (name) {
        case 'consent':
          return { ...prev, consent: (target as HTMLInputElement).checked }
        case 'preferredContact':
          return { ...prev, preferredContact: value as FormData['preferredContact'] }
        case 'timePreference':
          return { ...prev, timePreference: value as FormData['timePreference'] }
        case 'name':
          return { ...prev, name: value }
        case 'email':
          return { ...prev, email: value }
        case 'phone':
          return { ...prev, phone: value }
        case 'subject':
          return { ...prev, subject: value }
        case 'message':
          return { ...prev, message: value }
        case 'heardFrom':
          return { ...prev, heardFrom: value }
        default:
          return prev
      }
    })
  }

  const phoneRegex = /^\+?[0-9\s().-]{6,20}$/

  const validate = (data: FormData): Errors => {
    const newErrors: Errors = {}

    if (!data.name.trim()) newErrors.name = 'Le nom est requis.'
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Un email valide est requis.'
    }
    if (!data.subject.trim()) newErrors.subject = "Merci d'indiquer le sujet."
    if (!data.message.trim()) newErrors.message = 'Le message est requis.'
    if (data.preferredContact === 'phone' && (!data.phone || !phoneRegex.test(data.phone))) {
      newErrors.phone = 'Un numéro valide est requis pour être rappelé.'
    }
    if (!data.consent) newErrors.consent = 'Veuillez accepter la politique de confidentialité.'

    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate(formData)
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      return
    }

    const elapsed = mountedAt ? Date.now() - mountedAt : 9999
    if (hp) {
      setSubmitted(true)
      return
    }

    if (elapsed < 900 && formData.message.trim().length < 30) {
      setErrors({
        general: 'Envoi trop rapide: détaillez un peu votre besoin puis réessayez.',
      })
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          meta: { ts: mountedAt, hp },
        }),
      })

      const result = await response.json()
      if (result?.success) {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          preferredContact: 'email',
          timePreference: 'indifferent',
          heardFrom: '',
          consent: false,
        })
        setErrors({})
        return
      }

      setErrors({ general: 'Une erreur est survenue. Veuillez réessayer.' })
    } catch {
      setErrors({ general: "Impossible d'envoyer le message. Veuillez réessayer plus tard." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-shell scroll-mt-10 py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-sm font-semibold tracking-[0.08em] uppercase text-[#053725]">Contact</p>
          <h2 className="section-title">Parlons de votre dossier</h2>
          <p className="section-lead">
            Décrivez votre besoin en quelques lignes. Je vous réponds sous 24h avec une première feuille de route.
          </p>

          <div className="space-y-2 text-slate-700">
            <p>
              Email: <a href="mailto:contact@marcouf-formalites.fr" className="underline">contact@marcouf-formalites.fr</a>
            </p>
            <p>
              Téléphone: <a href="tel:+33631581617" className="underline">06 31 58 16 17</a>
            </p>
            <p>Disponibilité: lundi au vendredi, 9h - 18h</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="surface-card space-y-6 p-6 sm:p-8">
          <div className="hidden" aria-hidden>
            <label>
              Ne pas remplir
              <input
                type="text"
                name="company"
                autoComplete="off"
                tabIndex={-1}
                value={hp}
                onChange={(e) => setHp(e.target.value)}
              />
            </label>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-800">
                Nom *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className="form-field"
                placeholder="Votre nom"
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-600">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-800">
                Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="form-field"
                placeholder="vous@entreprise.fr"
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-800">
              Sujet *
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              className="form-field"
            >
              <option value="" disabled>
                Choisir un sujet…
              </option>
              <option>Formalités d’entreprise</option>
              <option>Mise à jour des statuts</option>
              <option>Procès-verbaux d’assemblée</option>
              <option>Recherche d’antériorité</option>
              <option>Formalités exceptionnelles (dissolution/liquidation)</option>
              <option>Autre demande</option>
            </select>
            {errors.subject && (
              <p id="subject-error" className="mt-1 text-sm text-red-600">
                {errors.subject}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-800">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              minLength={20}
              maxLength={1000}
              value={formData.message}
              onChange={handleChange}
              required
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className="form-field"
              placeholder="Contexte, délai souhaité, type de formalité…"
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-600">
                {errors.message}
              </p>
            )}
          </div>

          <details className="rounded-xl border-[3px] border-[var(--accent)] bg-[var(--background)] p-4">
            <summary className="cursor-pointer text-sm font-medium text-slate-800">
              Options de contact (facultatif)
            </summary>
            <div className="mt-4 space-y-4">
              <fieldset>
                <legend className="text-sm font-medium text-slate-800">Préférence de contact</legend>
                <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-700">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleChange}
                    />
                    <span>Email</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleChange}
                    />
                    <span>Téléphone</span>
                  </label>
                </div>
              </fieldset>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-800">
                  Téléphone
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  inputMode="tel"
                  placeholder="Ex. +33 6 12 34 56 78"
                  className="form-field"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="timePreference" className="mb-2 block text-sm font-medium text-slate-800">
                    Créneau souhaité
                  </label>
                  <select
                    id="timePreference"
                    name="timePreference"
                    value={formData.timePreference}
                    onChange={handleChange}
                    className="form-field"
                  >
                    <option value="indifferent">Indifférent</option>
                    <option value="matin">Matin</option>
                    <option value="apresmidi">Après-midi</option>
                    <option value="soiree">Début de soirée</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="heardFrom" className="mb-2 block text-sm font-medium text-slate-800">
                    Comment m’avez-vous connu ?
                  </label>
                  <select
                    id="heardFrom"
                    name="heardFrom"
                    value={formData.heardFrom}
                    onChange={handleChange}
                    className="form-field"
                  >
                    <option value="">Sélectionner…</option>
                    <option value="recommandation">Recommandation</option>
                    <option value="google">Recherche Google</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="article">Article du site</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>
            </div>
          </details>

          <div className="flex items-start gap-2">
            <input
              id="consent"
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="mt-1"
            />
            <label htmlFor="consent" className="text-sm text-slate-700">
              * J’ai lu et j’accepte la{' '}
              <Link href="/politique-de-confidentialite" className="underline">
                politique de confidentialité
              </Link>
              .
            </label>
          </div>
          {errors.consent && <p className="text-sm text-red-600">{errors.consent}</p>}

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={!ready || loading}
              title={!ready ? 'Initialisation du formulaire…' : undefined}
              className="btn-devis disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Envoi…' : 'Envoyer ma demande'}
            </button>

            <p className="text-sm text-slate-600">Réponse moyenne: moins de 24h</p>
          </div>

          {submitted && (
            <div className="rounded-xl border border-[#b8d7c6] bg-[#edf3ee] p-3 text-sm text-[#053725]">
              Message envoyé. Merci, je vous recontacte rapidement.
            </div>
          )}

          {errors.general && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{errors.general}</div>
          )}
        </form>
      </div>
    </section>
  )
}
