"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa"
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi"

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

const footerLinks = {
  services: [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
    { name: "Custom Software Solutions", href: "/services/custom-software-solutions" },
    { name: "Ecommerce Application", href: "/services/ecommerce-application" },
    { name: "AI Integrations", href: "/services/ai-integrations" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "FAQs", href: "/faq" },
  ]
}

export default function Footer() {
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
    if (settings.facebook) activeSocials.push({ icon: FaFacebookF, href: settings.facebook, label: "Facebook" })
    if (settings.instagram) activeSocials.push({ icon: FaInstagram, href: settings.instagram, label: "Instagram" })
    if (settings.tiktok) activeSocials.push({ icon: FaTiktok, href: settings.tiktok, label: "TikTok" })
    if (settings.linkedin) activeSocials.push({ icon: FaLinkedinIn, href: settings.linkedin, label: "LinkedIn" })
    if (settings.twitter) activeSocials.push({ icon: FaTwitter, href: settings.twitter, label: "Twitter" })
  }

  return (
    <footer className="relative bg-gradient-to-b from-[#071E3D] to-[#050B15] text-white overflow-hidden border-t border-[#071E3D]/30">

      {/* ── Main Footer ── */}
      <div className="container mx-auto px-6 lg:px-8 pt-20 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-3 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/images/whitelogo.png"
                alt="xenonedge logo"
                width={180}
                height={50}
                className="h-7 lg:h-9 w-auto brightness-110"
                priority
              />
            </Link>

            <p className="text-slate-400 text-[15px] leading-relaxed max-w-[280px] italic">
              &ldquo;Engineering the future through precision coding, bespoke
              innovation and state-of-the-art technology.&rdquo;
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 pt-2">
              {activeSocials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-slate-500 hover:text-sky-400 transition-colors duration-300"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white/80 font-semibold text-[13px] uppercase tracking-[0.25em] mb-7">
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-[15px] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div className="lg:col-span-3">
            <h4 className="text-white/80 font-semibold text-[13px] uppercase tracking-[0.25em] mb-7">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-[15px] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white/80 font-semibold text-[13px] uppercase tracking-[0.25em] mb-7">
              Contact
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <HiOutlineLocationMarker className="text-sky-400 mt-0.5 shrink-0" size={20} />
                  <span className="text-slate-400 group-hover:text-white text-[15px] transition-colors duration-200 leading-relaxed">
                    Sri Lanka
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+94762291826"
                  className="flex items-center gap-3 group"
                >
                  <HiOutlinePhone className="text-sky-400 shrink-0" size={20} />
                  <span className="text-slate-400 group-hover:text-white text-[15px] transition-colors duration-200">
                    +94 762291826
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@xenonedge.com"
                  className="flex items-center gap-3 group"
                >
                  <HiOutlineMail className="text-sky-400 shrink-0" size={19} />
                  <span className="text-slate-400 group-hover:text-white text-[15px] transition-colors duration-200">
                    info@xenonedge.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[11px] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} xenonedge (Pvt) Ltd. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {footerLinks.support.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-500 hover:text-white text-[11px] tracking-[0.15em] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
