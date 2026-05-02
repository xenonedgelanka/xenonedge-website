"use client"

import { useState } from 'react'
import { FiFacebook, FiLinkedin, FiInstagram, FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { FaTiktok } from 'react-icons/fa'
import toast from 'react-hot-toast'
import { Turnstile } from '@marsidev/react-turnstile'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

// Cloudflare Turnstile Site Key (Using Test Key)
const SITE_KEY = '0x4AAAAAADHerN7db9Xkx7W6'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [token, setToken] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Verify Human via Turnstile
    if (!token) {
      toast.error('Please complete the human verification.')
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.name.split(' ')[0] || form.name,
          lastName: form.name.split(' ').slice(1).join(' ') || '',
          email: form.email,
          phone: form.phone,
          country: '',
          service: form.subject,
          message: form.message,
          captchaToken: token // Pass token to backend
        }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        toast.success('Message sent successfully!')
        setForm({ name: '', email: '', phone: '', subject: '', message: '' })
        setToken(null) // Reset token
      } else {
        throw new Error(data.message || 'Failed to send')
      }
    } catch (err: any) {
      toast.error(err.message || 'Failed to send message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border-2 border-[#0B1E36] overflow-hidden my-10">
      <div className="grid grid-cols-1 md:grid-cols-5">

        {/* Left Side: Contact Info & Socials */}
        <div className="bg-[#0B1E36] p-10 text-white md:col-span-2 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-4">Get in touch</h3>
            <p className="text-slate-300 text-sm mb-10 leading-relaxed">
              Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you shortly.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <FiMail className="text-sky-400 shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Email Us</p>
                  <a href="mailto:xenonedgelanka@gmail.com" className="font-semibold hover:text-sky-400 transition-colors">xenonedgelanka@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FiPhone className="text-sky-400 shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Call Us</p>
                  <a href="tel:+94762291826" className="font-semibold hover:text-sky-400 transition-colors">+94 76 229 1826</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FiMapPin className="text-sky-400 shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Location</p>
                  <p className="font-semibold">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-4 font-semibold">Follow Us</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sky-500 transition-colors"><FiFacebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sky-500 transition-colors"><FaTiktok size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sky-500 transition-colors"><FiLinkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sky-500 transition-colors"><FiInstagram size={18} /></a>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-10 md:col-span-3 bg-slate-50">
          <h3 className="text-2xl font-bold text-[#0B1E36] mb-8">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
              <input
                type="text" name="name" required value={form.name} onChange={handleChange} placeholder="John Doe"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all font-medium text-[#0B1E36]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email" name="email" required value={form.email} onChange={handleChange} placeholder="john@example.com"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all font-medium text-[#0B1E36]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                <input
                  type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+94 76 123 4567"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all font-medium text-[#0B1E36]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Subject / Topic</label>
              <input
                type="text" name="subject" required value={form.subject} onChange={handleChange} placeholder="How can we help?"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all font-medium text-[#0B1E36]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
              <textarea
                name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your project..."
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all resize-none font-medium text-[#0B1E36]"
              />
            </div>

            {/* Cloudflare Turnstile Human Verification */}
            <div className="py-2">
              <Turnstile
                siteKey={SITE_KEY}
                onSuccess={(token) => setToken(token)}
                onExpire={() => setToken(null)}
                onError={() => setToken(null)}
                options={{
                  theme: 'light',
                  size: 'normal',
                }}
              />
            </div>

            <button
              type="submit" disabled={submitting}
              className="mt-4 bg-[#0B1E36] text-white rounded-xl px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-sky-500 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {submitting ? 'Sending...' : (
                <>
                  Send Message
                  <FiSend size={16} />
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}
