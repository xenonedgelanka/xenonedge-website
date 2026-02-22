"use client"
import Link from "next/link"
import Image from "next/image"
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#071427]" />
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/footer-pattern.svg"
          alt="pattern"
          fill
          className="object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-20 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-sky-300 bg-clip-text text-transparent">
              XenonEdge
            </h3>

            <p className="mt-5 text-sm text-slate-400 max-w-sm leading-relaxed">
              We build scalable, secure, and high-performance software solutions
              for startups and enterprises worldwide.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              {[
                { icon: FaFacebookF, href: "#", label: "Facebook" },
                { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
                { icon: FaInstagram, href: "#", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-10 w-10 rounded-full bg-white/10 hover:bg-sky-400 hover:text-black transition flex items-center justify-center"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Custom Software Solutions</li>
              <li>Ecommerce Application</li>
              <li>AI Integrations</li>
              <li>UI/UX Design</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <div>
                Email:
                <a
                  href="mailto:xenonedgelanka@gmail.com"
                  className="block hover:text-white"
                >
                  xenonedgelanka@gmail.com
                </a>
              </div>
              <div>
                Phone:
                <a href="tel:+94762291826" className="block hover:text-white">
                  +94 76 229 1826
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div>
            © {new Date().getFullYear()} XenonEdge. All rights reserved.
          </div>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/faqs" className="hover:text-white">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
