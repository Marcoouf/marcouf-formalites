"use client"

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
  preferredContact?: string
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

  // Honeypot + tempo anti‑spam (réglage plus souple)
  const [hp, setHp] = useState('') // champ leurre invisible
  const [mountedAt, setMountedAt] = useState<number | null>(null)
  useEffect(() => setMountedAt(Date.now()), [])
  // Petit délai d'armement du bouton pour éviter les envois robots
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1200)
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
      newErrors.phone = 'Un numéro de téléphone valide est requis pour être rappelé.'
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

    // Anti‑spam : si honeypot rempli → succès silencieux ; si envoi trop rapide + message trop court → on bloque avec un message clair
    const elapsed = mountedAt ? Date.now() - mountedAt : 9999
    if (hp) {
      setSubmitted(true)
      return
    }
    if (elapsed < 1200 && formData.message.trim().length < 40) {
      setErrors({ general: 'Envoi trop rapide — merci de patienter une seconde et de détailler un peu votre demande.' })
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
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
      } else {
        setErrors({ general: 'Une erreur est survenue. Veuillez réessayer.' })
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      }
    } catch {
      setErrors({ general: "Impossible d'envoyer le message. Veuillez réessayer plus tard." })
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    } finally {
      setLoading(false)
    }
  }

  const remaining = 1000 - formData.message.length

  return (
    <section id="contact" className="scroll-mt-32 py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-slate-100">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-black">Un projet, une question&nbsp;?</h2>
          <p className="text-gray-600 mt-3">Laissez‑moi un message, je vous réponds sous 24&nbsp;h.</p>
        </div>

        {/* Carte formulaire */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-8 bg-white shadow-xl p-8 md:p-10 rounded-2xl border border-gray-100"
        >

          {/* Honeypot */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nom */}
            <div className="group">
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
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
                className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                placeholder="Votre nom"
              />
              {errors.name && (
                <p id="name-error" className="text-red-500 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="group">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                inputMode="email"
                required
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
                placeholder="Votre adresse email"
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Téléphone */}
          <div className="group">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium">Téléphone</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              inputMode="tel"
              placeholder="Ex. +33 6 12 34 56 78"
              className={`w-full bg-white border rounded-md px-4 py-2 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && <p id="phone-error" className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Sujet */}
          <div className="group">
            <label htmlFor="subject" className="block mb-2 text-sm font-medium">
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
              className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            >
              <option value="" disabled>
                Choisir un sujet…
              </option>
              <option>Création d’entreprise</option>
              <option>Modification de société</option>
              <option>Contrats & documentation</option>
              <option>Modèles d’actes & secrétariat</option>
              <option>Propriété intellectuelle</option>
              <option>Autre demande</option>
            </select>
            {errors.subject && (
              <p id="subject-error" className="text-red-500 text-sm mt-1">
                {errors.subject}
              </p>
            )}
          </div>

          {/* Préférences de contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="space-y-2">
              <legend className="text-sm font-medium">Préférence de contact</legend>
              <div className="flex gap-4 mt-1">
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="preferredContact" value="email" checked={formData.preferredContact === 'email'} onChange={handleChange} />
                  <span>Email</span>
                </label>
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="preferredContact" value="phone" checked={formData.preferredContact === 'phone'} onChange={handleChange} />
                  <span>Téléphone</span>
                </label>
              </div>
              {formData.preferredContact === 'phone' && <p className="text-xs text-gray-500">Si “Téléphone” est sélectionné, indiquez un numéro joignable.</p>}
            </fieldset>

            <div>
              <label htmlFor="timePreference" className="block mb-2 text-sm font-medium">Créneau souhaité</label>
              <select
                id="timePreference"
                name="timePreference"
                value={formData.timePreference}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
              >
                <option value="indifferent">Indifférent</option>
                <option value="matin">Matin</option>
                <option value="apresmidi">Après‑midi</option>
                <option value="soiree">Début de soirée</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="group">
            <div className="flex items-baseline justify-between">
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Message *
              </label>
              <span className={`text-xs ${remaining < 0 ? 'text-red-600' : 'text-gray-400'}`}>
                {Math.max(0, remaining)} caractères restants
              </span>
            </div>
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
              className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
              placeholder="Décrivez votre besoin (contexte, délais, documents disponibles)…"
            />
            {errors.message && (
              <p id="message-error" className="text-red-500 text-sm mt-1">
                {errors.message}
              </p>
            )}
          </div>

          {/* Origine */}
          <div className="group">
            <label htmlFor="heardFrom" className="block mb-2 text-sm font-medium">Comment avez‑vous connu Marcouf Formalités&nbsp;?</label>
            <select
              id="heardFrom"
              name="heardFrom"
              value={formData.heardFrom}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            >
              <option value="">Sélectionner…</option>
              <option value="recommandation">Recommandation</option>
              <option value="google">Recherche Google</option>
              <option value="linkedin">LinkedIn</option>
              <option value="article">Article du site</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          {/* Consentement RGPD */}
          <div className="flex items-start">
            <input
              id="consent"
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="mt-1 mr-2"
            />
            <label htmlFor="consent" className="text-sm text-gray-700">
              * J’ai lu et j’accepte la{' '}
              <Link href="/politique-de-confidentialite" className="underline text-green-700 hover:text-green-600">
                politique de confidentialité
              </Link>
              .
            </label>
          </div>
          {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}

          {/* CTA */}
          <div className="flex flex-col items-center justify-center gap-3">
            <button
              type="submit"
              disabled={!ready || loading}
              title={!ready ? 'Initialisation du formulaire…' : undefined}
              className="btn-devis disabled:opacity-50 disabled:cursor-not-allowed"
              aria-live="polite"
            >
              {loading ? 'Envoi…' : 'Envoyer'}
            </button>

            {submitted && (
              <div className="mt-3 text-center rounded-lg border border-green-200 bg-green-50 text-green-800 p-3 text-sm">
                ✅ Message envoyé. Merci ! Je vous recontacte rapidement.
              </div>
            )}
            {errors.general && (
              <div className="mt-3 text-center rounded-lg border border-red-200 bg-red-50 text-red-800 p-3 text-sm">
                {errors.general}
              </div>
            )}
          </div>

          {/* Coordonnées alternatives */}
          <p className="text-xs text-gray-500 text-center">
            Ou écrivez‑moi à{' '}
            <a href="mailto:contact@marcouf-formalites.fr" className="underline">
              contact@marcouf-formalites.fr
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  )
}
