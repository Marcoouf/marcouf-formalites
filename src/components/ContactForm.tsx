"use client"

import { useState } from 'react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
  consent: boolean
}

interface Errors {
  name?: string
  email?: string
  subject?: string
  message?: string
  consent?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false,
  })

  const [errors, setErrors] = useState<Errors>({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Errors = {}

    if (!formData.name) newErrors.name = 'Le nom est requis.'
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Un email valide est requis.'
    }
    if (!formData.subject) newErrors.subject = 'L’objet est requis.'
    if (!formData.message) newErrors.message = 'Le message est requis.'
    if (!formData.consent) newErrors.consent = 'Veuillez accepter la politique de confidentialité.'

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '', consent: false })
      }, 1500)
    }
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-accent">Un projet, une question ?</h2>
        <p className="text-gray-600 mt-3">Laissez-moi un message, je vous répondrai sous 24h.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto bg-white shadow-xl p-8 rounded-xl">
        {submitted && <p className="text-green-600 text-center">Message envoyé avec succès !</p>}

        <div>
          <label className="block mb-2 text-sm font-medium">Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Votre nom"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Votre adresse email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Objet</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Objet de votre message"
          />
          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Votre message"
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mr-2 mt-1"
          />
          <label className="text-sm text-gray-700 leading-snug">
            J’ai lu et j’accepte la{' '}
            <a href="/confidentialite" className="underline text-green-600 hover:text-green-500">
              politique de confidentialité
            </a>
          </label>
        </div>
        {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}

        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 text-sm bg-gradient-to-r from-accent to-black text-white rounded-full hover:scale-105 transition-transform disabled:opacity-50"
          >
            {loading ? 'Envoi…' : 'Envoyer'}
          </button>
        </div>
      </form>
    </section>
  )
}
