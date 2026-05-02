"use client"
import Link from "next/link"
import Image from "next/image"
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok, FaPhoneAlt, FaEnvelope } from "react-icons/fa"

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

const socialLinks = [
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook", color: "hover:bg-sky-500" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-sky-500" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram", color: "hover:bg-sky-500" },
  { icon: FaTiktok, href: "https://tiktok.com", label: "TikTok", color: "hover:bg-sky-500 hover:text-white" },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#050B15] text-white pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-[-10%] w-[40%] h-[40%] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Mission Section */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block transition-all duration-500">
              <div className="relative">
                <Image 
                  src="/images/whitelogo.png" 
                  alt="XenonEdge Logo" 
                  width={180} 
                  height={50} 
                  className="h-8 lg:h-10 w-auto brightness-110"
                  priority
                />
              </div>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm text-left">
              XenonEdge is a premier software development firm dedicated to engineering excellence. We transform ambitious ideas into high-performance digital products through state-of-the-art technology, precision coding, and bespoke innovation tailored for global enterprises.
            </p>

            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`group h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-colors duration-300 ${color}`}
                >
                  <Icon size={18} className="text-slate-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-1" /> {/* Spacer */}
          
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold text-base mb-6 tracking-wide uppercase text-[13px]">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-slate-400 text-sm flex items-center gap-2"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-6 tracking-wide uppercase text-[13px]">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-slate-400 text-sm flex items-center gap-2"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-base mb-6 tracking-wide uppercase text-[13px]">
              Contact
            </h4>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold mb-1">Email Support</p>
                <a 
                  href="mailto:info@xenonedge.com" 
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  info@xenonedge.com
                </a>
              </div>

              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold mb-1">Call Anytime</p>
                <a 
                  href="tel:+94762291826" 
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  +94 76 229 1826
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-2 text-slate-500 text-[12px]">
            <span>© {new Date().getFullYear()}</span>
            <span className="text-slate-300 font-medium">XENONEDGE (PVT) LTD</span>
            <span className="hidden md:inline text-slate-700 mx-1">|</span>
            <span className="hidden md:inline">Engineering the Future.</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.support.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-slate-500 hover:text-white text-[12px] transition-all duration-300"
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


