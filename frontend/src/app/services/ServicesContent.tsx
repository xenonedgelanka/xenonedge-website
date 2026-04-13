"use client"
import Link from 'next/link'
import { CodeXml, AppWindow, Cog, CreditCard, Brain, Layers, FileSearch, AudioWaveform, ArrowRight } from 'lucide-react'

const services = [
    {
        title: 'Web Development',
        desc: 'Robust, scalable web platforms using modern frameworks like React, Next.js, and specialized backend architectures. We focus on performance, security, and seamless user experiences.',
        href: '/services/web-development',
        icon: CodeXml,
    },
    {
        title: 'Mobile App Development',
        desc: 'Cross-platform and native mobile applications with strong UX, performance optimizations, and platform alignment using React Native, Flutter, and native technologies.',
        href: '/services/mobile-app-development',
        icon: AppWindow,
    },
    {
        title: 'Custom Software Solutions',
        desc: 'Tailored software built to solve your unique business challenges. From enterprise resource planning (ERP) to custom CRM systems, we build solutions that integrate seamlessly.',
        href: '/services/custom-software-solutions',
        icon: Cog,
    },
    {
        title: 'Ecommerce Application',
        desc: 'Scalable and secure online stores designed to drive sales and provide a seamless shopping experience. We specialize in custom-built and platform-based ecommerce solutions.',
        href: '/services/ecommerce-application',
        icon: CreditCard,
    },
    {
        title: 'AI Integrations',
        desc: 'Empower your applications with intelligent automation, custom LLM fine-tuning, and advanced machine learning models for enhanced efficiency and personalized experiences.',
        href: '/services/ai-integrations',
        icon: Brain,
    },
    {
        title: 'UI/UX Design',
        desc: 'Crafting intuitive, user-centric interfaces that blend aesthetics with functionality. Our design process ensures a seamless and engaging experience across all digital touchpoints.',
        href: '/services/ui-ux-design',
        icon: Layers,
    },
    {
        title: 'SEO & Content Writing',
        desc: 'Boost your visibility and engage CircleUser with high-quality, SEO-optimized content. Our strategies improve FileSearch rankings and drive organic traffic to your digital platforms.',
        href: '/services/seo-content-writing',
        icon: FileSearch,
    },
    {
        title: 'Digital Marketing',
        desc: 'Strategic marketing to grow your brand and reach your audience. Social media marketing, PPC campaigns, and data-driven strategies to maximize ROI.',
        href: '/services/digital-marketing',
        icon: AudioWaveform,
    },
]

export default function ServicesContent() {
    return (
        <>
            <section className="hero-dark pt-32 pb-20 bg-[#0B1E36] text-white relative overflow-hidden">
                <div className="container relative px-6 mx-auto">
                    <span className="inline-block px-4 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
                        Our Services
                    </span>
                    <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">
                        Premium <span className="text-sky-400">Software</span> Services
                    </h1>
                    <p className="mt-6 text-xl text-slate-300 max-w-3xl leading-relaxed">
                        Delivering high-performance, secure, and scalable digital solutions. As a leading software development company in Sri Lanka, we empower businesses worldwide with state-of-the-art technology.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, i) => (
                            <Link key={i} href={service.href} className="group block">
                                <article className="p-10 rounded-md border-2 border-[#0B1E36] bg-white hover:bg-slate-50 transition-all duration-300 h-full hover:-translate-y-1 shadow-sm">
                                    <div className={`w-12 h-12 rounded-md bg-sky-50 text-sky-500 flex items-center justify-center mb-5 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300`}>
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#0B1E36] mb-4 group-hover:text-sky-600 transition-colors uppercase tracking-tight">{service.title}</h2>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        {service.desc}
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-sky-500 font-bold text-sm group-hover:gap-3 transition-all duration-300 uppercase tracking-widest">
                                        Learn More <ArrowRight className="w-4 h-4 arrow-icon" />
                                    </span>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
