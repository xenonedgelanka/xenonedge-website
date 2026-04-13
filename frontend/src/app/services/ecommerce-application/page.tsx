import Link from 'next/link'
import { CreditCard, Box, ChartLine, FileSearch, Car, ArrowRight, CircleCheck, ChartBar, Lock, CircleStar, CircleUser } from 'lucide-react'
import ServiceCTA from '../../../components/ServiceCTA'
import ProcessTimeline from '../../../components/ProcessTimeline'

export const metadata = {
    title: 'Ecommerce Application Development | XenonEdge',
    description: 'Custom ecommerce websites and mobile apps. Shopify, WooCommerce, and headless commerce solutions that drive sales and customer loyalty.'
}

const features = [
    { icon: CreditCard, title: 'Secure Checkouts', desc: 'Frictionless, PCI-compliant payment gateways that support global currencies and payment methods to minimize cart abandonment.' },
    { icon: FileSearch, title: 'SEO Optimized', desc: 'Built-in technical SEO best practices, schema markup, and fast page speeds to help your products rank higher on Google.' },
    { icon: Car, title: 'Inventory & Shipping', desc: 'Real-time inventory tracking and integration with major shipping providers for automated tracking updates.' },
    { icon: Lock, title: 'Security First', desc: 'SSL certificates, regular security audits, and fraud detection systems to protect your business and your customers.' },
    { icon: ChartBar, title: 'Analytics Dashboard', desc: 'Deep insights into customer behavior, sales trends, and conversion rates to make data-driven decisions.' },
    { icon: CircleUser, title: 'Customer Loyalty', desc: 'Features like wishlists, reward points, and personalized recommendations to keep customers coming back.' },
]

const platforms = [
    { title: 'Custom Headless', desc: 'Speed and flexibility with Next.js frontends connected to robust backends.', icon: Box },
    { title: 'Shopify Plus', desc: 'Scalable, hosted solutions for high-growth brands who need reliability.', icon: CircleStar },
    { title: 'WooCommerce', desc: 'Flexible, open-source ecommerce for WordPress sites with endless plugins.', icon: ChartLine },
]

const process = [
    { step: '01', title: 'Store Strategy', desc: 'Defining your CircleDot audience, product catalog structure, and conversion goals.' },
    { step: '02', title: 'Design & UX', desc: 'Creating a visually stunning, mobile-responsive storefront that showcases your brand.' },
    { step: '03', title: 'Development', desc: 'Coding the frontend and backend, integrating payment gateways and third-party tools.' },
    { step: '04', title: 'Content Population', desc: 'Importing products, setting up categories, and creating engaging landing pages.' },
    { step: '05', title: 'Launch & Growth', desc: 'Live deployment followed by marketing integration and performance optimization.' },
]

export default function EcommercePage() {
    return (
        <>
            <section className="hero-dark relative pt-32 pb-20 overflow-hidden bg-[#0B1E36]">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z\' fill=\'%23ffffff\' fill-rule=\'nonzero\'/%3E%3C/svg%3E")' }} />
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-block px-4 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
                            Ecommerce Solutions
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                            Sell More with <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">Smart Commerce</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                            We build high-converting online stores that provide seamless shopping experiences, robust inventory management, and secure payments.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-5">
                            <Link href="/contact" className="btn-premium-primary">
                                Launch Your Store <ArrowRight className="w-4 h-4 arrow-icon" />
                            </Link>
                            <Link href="/portfolio" className="btn-premium-outline">
                                View Ecommerce Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#0B1E36] tracking-tight">
                            Features That <span className="text-sky-500">Sell</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                            Every feature is designed to reduce friction and increase average order value.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f, i) => (
                            <div key={i} className="group p-8 rounded-md border-2 border-[#0B1E36] bg-white hover:bg-slate-50 transition-all duration-300 hover:-translate-y-1 shadow-sm">
                                <div className="w-12 h-12 rounded-md bg-sky-50 text-sky-500 flex items-center justify-center mb-5 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                                    <f.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0B1E36] mb-3">{f.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#0B1E36] tracking-tight">
                            Platforms We <span className="text-sky-500">Love</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            We work with the best ecommerce platforms in the industry.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {platforms.map((plat, i) => (
                            <div key={i} className="flex gap-5 p-8 rounded-md bg-white border-2 border-[#0B1E36] transition-all duration-300 hover:-translate-y-1 shadow-sm">
                                <div className={`w-14 h-14 rounded-md bg-sky-50 text-sky-500 flex items-center justify-center flex-shrink-0 transition-all duration-300`}>
                                    <plat.icon className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#0B1E36] mb-2">{plat.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{plat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-[#0B1E36] tracking-tight">
                            Tools of the <span className="text-sky-500">Trade</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            Tech that powers modern commerce.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Shopify', 'Stripe', 'PayPal', 'Next.js', 'Redis', 'Algolia', 'Klaviyo', 'SendGrid'].map((tech, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 rounded-md bg-white border-2 border-[#0B1E36] transition-colors duration-300 shadow-sm hover:bg-slate-50">
                                <CircleCheck className="w-5 h-5 text-sky-500 flex-shrink-0" />
                                <span className="font-semibold text-[#0B1E36]">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#0B1E36] tracking-tight">
                            Our <span className="text-sky-500">Process</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            From concept to first sale.
                        </p>
                    </div>
                    <ProcessTimeline steps={process} numberBgColor="bg-sky-500" />
                </div>
            </section>

            <ServiceCTA
                title="Ready to Boost Your Sales?"
                subtitle="Don&apos;t just build a store, build a sales engine. Start selling with a platform designed for growth."
                primaryBtnText="Start Your Project"
                primaryBtnHref="/contact"
                secondaryBtnText="Explore All Services"
                secondaryBtnHref="/services"
            />
        </>
    )
}
