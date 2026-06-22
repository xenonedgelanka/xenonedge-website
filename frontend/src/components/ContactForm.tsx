"use client"

import { useState, useEffect } from 'react'
import { FiFacebook, FiLinkedin, FiInstagram, FiMail, FiPhone, FiMapPin, FiSend, FiTwitter } from 'react-icons/fi'
import { FaTiktok } from 'react-icons/fa'
import { HiOutlineClock } from 'react-icons/hi'
import toast from 'react-hot-toast'
import { Turnstile } from '@marsidev/react-turnstile'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

// Cloudflare Turnstile Site Key (Using Test Key)
const SITE_KEY = '0x4AAAAAADHerN7db9Xkx7W6'





export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [token, setToken] = useState<string | null>(null)
  const [settings, setSettings] = useState<any>(null)

  useEffect(() => {
    fetch(`${API_URL}/settings`)
      .then((res) => res.json())
      .then((res) => {
        if (res.success && res.data) {
          setSettings(res.data)
        }
      })
      .catch(() => {})
  }, [])

  const activeSocials = []
  if (settings) {
    if (settings.facebook) activeSocials.push({ icon: FiFacebook, href: settings.facebook, label: "Facebook" })
    if (settings.tiktok) activeSocials.push({ icon: FaTiktok, href: settings.tiktok, label: "TikTok" })
    if (settings.linkedin) activeSocials.push({ icon: FiLinkedin, href: settings.linkedin, label: "LinkedIn" })
    if (settings.instagram) activeSocials.push({ icon: FiInstagram, href: settings.instagram, label: "Instagram" })
    if (settings.twitter) activeSocials.push({ icon: FiTwitter, href: settings.twitter, label: "Twitter" })
  }

  const contactDetails = [
    {
      icon: FiMapPin,
      label: "Our Office",
      value: settings?.address || "Colombo, Sri Lanka",
    },
    {
      icon: FiPhone,
      label: "Direct Line",
      value: settings?.phone || "+94 76 229 1826",
      href: settings?.phone ? `tel:${settings.phone.replace(/\s+/g, '')}` : "tel:+94762291826",
    },
    {
      icon: FiMail,
      label: "Digital Inquiries",
      value: settings?.email || "xenonedgelanka@gmail.com",
      href: settings?.email ? `mailto:${settings.email}` : "mailto:xenonedgelanka@gmail.com",
    },
    {
      icon: HiOutlineClock,
      label: "Availability",
      value: "24 / 7 — Always Available",
    },
  ]

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
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">

        {/* Left Side: Contact Details */}
        <div className="md:col-span-2 pt-2">
          <h3 className="text-2xl font-semibold text-[#0B1E36] mb-3">
            Get in touch
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-xs">
            Have a project in mind? We&apos;d love to hear about it. Drop us a message and we&apos;ll get back to you shortly.
          </p>

          <div className="space-y-7">
            {contactDetails.map((item) => {
              const Icon = item.icon
              const content = (
                <div className="flex items-start gap-4 group">
                  <Icon className="text-sky-500 shrink-0 mt-0.5" size={22} />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#0B1E36] font-bold mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-slate-500 text-sm group-hover:text-[#0B1E36] transition-colors duration-200">
                      {item.value}
                    </p>
                  </div>
                </div>
              )

              if (item.href) {
                return (
                  <a key={item.label} href={item.href} className="block">
                    {content}
                  </a>
                )
              }
              return <div key={item.label}>{content}</div>
            })}
          </div>

          {/* Social Media Icons */}
          {activeSocials.length > 0 && (
            <div className="mt-10 pt-8 border-t border-slate-200">
              <p className="text-xs uppercase tracking-[0.2em] text-[#0B1E36] font-bold mb-4">Follow Us</p>
              <div className="flex gap-4">
                {activeSocials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-slate-400 hover:text-sky-500 transition-colors duration-300"
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Form Card */}
        <div className="md:col-span-3 bg-slate-50 rounded-2xl shadow-sm border-2 border-[#0B1E36] p-8 md:p-10">
          <h3 className="text-3xl font-bold text-[#0B1E36] mb-8">
            Send us a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
              <input
                type="text" name="name" required value={form.name} onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all font-medium text-[#0B1E36]"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email" name="email" required value={form.email} onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all font-medium text-[#0B1E36]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                <input
                  type="tel" name="phone" value={form.phone} onChange={handleChange}
                  placeholder="+94 76 123 4567"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all font-medium text-[#0B1E36]"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Subject / Topic</label>
              <input
                type="text" name="subject" required value={form.subject} onChange={handleChange}
                placeholder="How can we help?"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all font-medium text-[#0B1E36]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
              <textarea
                name="message" required rows={5} value={form.message} onChange={handleChange}
                placeholder="Tell us about your project..."
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
              className="mt-4 bg-[#0B1E36] text-white rounded-xl px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-sky-500 transition-colors flex items-center justify-center gap-2.5 disabled:opacity-70"
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
