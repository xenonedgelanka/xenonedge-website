"use client"
import Link from 'next/link'
import { CodeXml, AppWindow, Cog, CreditCard, Brain, Layers, FileSearch, AudioWaveform, ArrowRight } from 'lucide-react'

const services = [
    {
        title: 'Web Development',
        desc: 'Robust, scalable web platforms using modern frameworks like React, Next.js, and specialized backend architectures. We focus on performance, security, and seamless user experiences.',
        href: '/services/web-development',
        icon: CodeXml,
        color: 'from-sky-500 to-cyan-400',
        lightBg: 'bg-sky-50',
        lightText: 'text-sky-500',
    },
    {
        title: 'Mobile App Development',
        desc: 'Cross-platform and native mobile applications with strong UX, performance optimizations, and platform alignment using React Native, Flutter, and native technologies.',
        href: '/services/mobile-app-development',
        icon: AppWindow,
        color: 'from-purple-500 to-pink-400',
        lightBg: 'bg-purple-50',
        lightText: 'text-purple-500',
    },
    {
        title: 'Custom Software Solutions',
        desc: 'Tailored software built to solve your unique business challenges. From enterprise resource planning (ERP) to custom CRM systems, we build solutions that integrate seamlessly.',
        href: '/services/custom-software-solutions',
        icon: Cog,
        color: 'from-emerald-500 to-teal-400',
        lightBg: 'bg-emerald-50',
        lightText: 'text-emerald-500',
    },
    {
        title: 'Ecommerce Application',
        desc: 'Scalable and secure online stores designed to drive sales and provide a seamless shopping experience. We specialize in custom-built and platform-based ecommerce solutions.',
        href: '/services/ecommerce-application',
        icon: CreditCard,
        color: 'from-orange-500 to-amber-400',
        lightBg: 'bg-orange-50',
        lightText: 'text-orange-500',
    },
    {
        title: 'AI Integrations',
        desc: 'Empower your applications with intelligent automation, custom LLM fine-tuning, and advanced machine learning models for enhanced efficiency and personalized experiences.',
        href: '/services/ai-integrations',
        icon: Brain,
        color: 'from-cyan-500 to-blue-400',
        lightBg: 'bg-cyan-50',
        lightText: 'text-cyan-500',
    },
    {
        title: 'UI/UX Design',
        desc: 'Crafting intuitive, user-centric interfaces that blend aesthetics with functionality. Our design process ensures a seamless and engaging experience across all digital touchpoints.',
        href: '/services/ui-ux-design',
        icon: Layers,
        color: 'from-pink-500 to-violet-400',
        lightBg: 'bg-pink-50',
        lightText: 'text-pink-500',
    },
    {
        title: 'SEO & Content Writing',
        desc: 'Boost your visibility and engage CircleUser with high-quality, SEO-optimized content. Our strategies improve FileSearch rankings and drive organic traffic to your digital platforms.',
        href: '/services/seo-content-writing',
        icon: FileSearch,
        color: 'from-indigo-500 to-sky-400',
        lightBg: 'bg-indigo-50',
        lightText: 'text-indigo-500',
    },
    {
        title: 'Digital Marketing',
        desc: 'Strategic marketing to grow your brand and reach your audience. Social media marketing, PPC campaigns, and data-driven strategies to maximize ROI.',
        href: '/services/digital-marketing',
        icon: AudioWaveform,
        color: 'from-rose-500 to-orange-400',
        lightBg: 'bg-rose-50',
        lightText: 'text-rose-500',
    },
]

export default function ServicesContent() {
    return (
        <>
            <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
                <div className="container relative px-6 mx-auto">
                    <h1 className="text-5xl md:text-6xl font-black text-[#071427] tracking-tight">
                        Premium <span className="text-sky-500">Software</span> Services
                    </h1>
                    <p className="mt-6 text-xl text-slate-600 max-w-3xl leading-relaxed">
                        Delivering high-performance, secure, and scalable digital solutions. As a leading software development company in Sri Lanka, we empower businesses worldwide with state-of-the-art technology.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, i) => (
                            <Link key={i} href={service.href} className="group block">
                                <article className="p-10 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 h-full hover:-translate-y-1">
                                    <div className={`w-12 h-12 rounded-xl ${service.lightBg} ${service.lightText} flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:${service.color} group-hover:text-white transition-all duration-300`}>
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#071427] mb-4 group-hover:text-sky-600 transition-colors">{service.title}</h2>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        {service.desc}
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-sky-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                                        Learn More <ArrowRight className="w-4 h-4" />
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
