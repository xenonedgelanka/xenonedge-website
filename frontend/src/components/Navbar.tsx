"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navbar() {
    const path = usePathname()
    const isHome = path === '/'
    const [scrolled, setScrolled] = useState(isHome ? false : true)

    type LinkItem = { label: string; href: string; children?: LinkItem[] }
    const links: LinkItem[] = [
        { label: 'Home', href: '/' },
        {
            label: 'Services',
            href: '/services',
            children: [
                { label: 'Web Development', href: '/services/web-development' },
                { label: 'Mobile App Development', href: '/services/mobile-app-development' },
                { label: 'Custom Software Solutions', href: '/services/custom-software-solutions' },
                { label: 'Ecommerce Application', href: '/services/ecommerce-application' },
                { label: 'AI Integrations', href: '/services/ai-integrations' },
                { label: 'UI/UX Design', href: '/services/ui-ux-design' },
                { label: 'SEO & Content', href: '/services/seo-content-writing' },
                { label: 'Digital Marketing', href: '/services/digital-marketing' },
            ]
        },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Blog', href: '/blog' },
        { label: 'About', href: '/about' }
    ]

    // State to toggle between dark-glass (false) and light-glass (true) themes
    const [isHeaderLight, setIsHeaderLight] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const scrollPos = window.scrollY
            const isScrolled = scrollPos > 20
            setScrolled(isHome ? isScrolled : true)

            if (isHome) {
                // Determine if we are over a dark section (Hero)
                const hero = document.querySelector('.hero-dark')

                let isOverDarkSection = false

                // Check Hero
                if (hero) {
                    const heroRect = hero.getBoundingClientRect()
                    // Navbar is 64px high. Only stay dark if Hero covers the entire navbar.
                    if (heroRect.bottom >= 64) {
                        isOverDarkSection = true
                    }
                }

                // If we are over a dark section, header should NOT be light
                setIsHeaderLight(!isOverDarkSection)
            } else {
                // Non-home pages default to light header (unless specific logic added later)
                setIsHeaderLight(true)
            }
        }


        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [path])

    // Determine current theme style
    // 1. Transparent (top of home)
    // 2. Dark Glass (scrolled within hero)
    // 3. Light Glass (past hero or other pages)
    let headerClass = 'bg-transparent border-transparent text-white'

    if (scrolled) {
        if (isHeaderLight) {
            headerClass = 'bg-white border-b border-slate-200 text-slate-900'
        } else {
            headerClass = 'bg-slate-950/40 backdrop-blur-xl backdrop-saturate-150 border-b border-white/10 text-white'
        }
    }

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${headerClass}`}>
            <div className="container flex items-center justify-between h-16">
                <Link href="/" className="font-bold text-2xl md:text-3xl tracking-tight">
                    XenonEdge
                </Link>

                <nav>
                    <details className="md:hidden">
                        <summary className={`cursor-pointer transition-colors duration-200 list-none ${isHeaderLight ? 'text-slate-900' : 'text-white'}`}>
                            {/* Hamburger Icon - Three Lines */}
                            <div className="flex flex-col gap-1.5 w-7">
                                <span className={`block h-0.5 w-full rounded-full transition-colors ${isHeaderLight ? 'bg-slate-900' : 'bg-white'}`}></span>
                                <span className={`block h-0.5 w-full rounded-full transition-colors ${isHeaderLight ? 'bg-slate-900' : 'bg-white'}`}></span>
                                <span className={`block h-0.5 w-full rounded-full transition-colors ${isHeaderLight ? 'bg-slate-900' : 'bg-white'}`}></span>
                            </div>
                        </summary>
                        <div className={`absolute right-4 left-4 mt-4 flex flex-col space-y-1 rounded-xl p-4 border shadow-xl transition-all duration-200 max-h-[80vh] overflow-y-auto ${isHeaderLight
                            ? 'bg-white border-slate-200 text-slate-900'
                            : 'bg-[#0a2444]/60 backdrop-blur-xl border-white/20 text-white'
                            }`}>
                            {links.map((link) => (
                                <div key={link.href}>
                                    <Link href={link.href} className="py-2.5 px-3 block rounded-lg hover:bg-slate-100/50 dark:hover:bg-white/10 transition-colors font-medium">
                                        {link.label}
                                    </Link>
                                    {link.children && (
                                        <div className={`ml-4 flex flex-col space-y-1 border-l pl-4 mt-1 mb-2 ${isHeaderLight ? 'border-slate-300' : 'border-white/20'}`}>
                                            {link.children.map((child) => (
                                                <Link key={child.href} href={child.href} className="text-sm py-2 px-3 rounded-lg opacity-75 hover:opacity-100 hover:bg-slate-100/50 dark:hover:bg-white/10 transition-all">
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link href="/contact" className={`py-2.5 px-3 block rounded-lg font-medium text-center mt-2 border-2 transition-all ${isHeaderLight
                                ? 'border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'
                                : 'border-white text-white hover:bg-white hover:text-slate-900'
                                }`}>
                                Contact Us
                            </Link>
                        </div>
                    </details>

                    <ul className="hidden md:flex items-center gap-6 text-sm md:text-[16.5px]">
                        {links.map((link) => {
                            const active = path === link.href || (link.children && path.startsWith(link.href))
                            const stateColor = isHeaderLight ? 'text-slate-600 hover:text-sky-600' : 'text-white/80 hover:text-white'
                            const base = active ? (isHeaderLight ? 'text-sky-600 font-bold' : 'text-sky-400 font-bold') : stateColor

                            return (
                                <li key={link.href} className="relative group">
                                    <Link href={link.href} className={`${base} transition-colors py-2 flex items-center gap-1`}>
                                        {link.label}
                                        {link.children && (
                                            <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        )}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {link.children && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 min-w-[220px]">
                                            <div className={`rounded-xl overflow-hidden border p-2 flex flex-col transition-colors duration-200 ${isHeaderLight
                                                ? 'bg-white border-slate-200'
                                                : 'bg-[#0a2444]/60 backdrop-blur-xl border-white/10'
                                                }`}>
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className={`px-4 py-2.5 rounded-lg text-sm transition-all duration-200 whitespace-nowrap ${isHeaderLight
                                                            ? 'text-slate-700 hover:bg-slate-100 hover:text-sky-600'
                                                            : 'text-slate-200 hover:bg-white/10 hover:text-white'
                                                            }`}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </li>
                            )
                        })}
                        <li>
                            <Link
                                href="/contact"
                                className={`inline-flex items-center rounded px-6 py-2 font-bold transition-all duration-300 border-2 ${isHeaderLight
                                    ? 'border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'
                                    : 'border-white text-white hover:bg-white hover:text-sky-600'
                                    }`}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
