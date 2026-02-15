import Link from 'next/link'
import { CreditCard, Box, ChartLine, FileSearch, Car, ArrowRight, CircleCheck, ChartBar, Lock, CircleStar, CircleUser } from 'lucide-react'

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
    { title: 'Custom Headless', desc: 'Speed and flexibility with Next.js frontends connected to robust backends.', icon: Box, color: 'from-orange-500 to-amber-500' },
    { title: 'Shopify Plus', desc: 'Scalable, hosted solutions for high-growth brands who need reliability.', icon: CircleStar, color: 'from-green-500 to-emerald-500' },
    { title: 'WooCommerce', desc: 'Flexible, open-source ecommerce for WordPress sites with endless plugins.', icon: ChartLine, color: 'from-violet-500 to-purple-500' },
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
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#071427] via-[#24130a] to-[#3a1d0e]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.15),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(251,191,36,0.1),transparent_60%)]" />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z\' fill=\'%23ffffff\' fill-rule=\'nonzero\'/%3E%3C/svg%3E")' }} />
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
                            <CreditCard className="w-4 h-4" />
                            Ecommerce Solutions
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                            Sell More with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Smart Commerce</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                            We build high-converting online stores that provide seamless shopping experiences, robust inventory management, and secure payments.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/25 hover:-translate-y-0.5">
                                Launch Your Store <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/portfolio" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300">
                                View Ecommerce Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#071427] tracking-tight">
                            Features That <span className="text-orange-500">Sell</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                            Every feature is designed to reduce friction and increase average order value.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f, i) => (
                            <div key={i} className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-orange-500/5 hover:border-orange-100 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-5 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                    <f.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-[#071427] mb-3">{f.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#071427] tracking-tight">
                            Platforms We <span className="text-orange-500">Love</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            We work with the best ecommerce platforms in the industry.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {platforms.map((plat, i) => (
                            <div key={i} className="flex gap-5 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plat.color} text-white flex items-center justify-center flex-shrink-0`}>
                                    <plat.icon className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#071427] mb-2">{plat.title}</h3>
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
                        <h2 className="text-3xl md:text-4xl font-black text-[#071427] tracking-tight">
                            Tools of the <span className="text-orange-500">Trade</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            Tech that powers modern commerce.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Shopify', 'Stripe', 'PayPal', 'Next.js', 'Redis', 'Algolia', 'Klaviyo', 'SendGrid'].map((tech, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                <CircleCheck className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span className="font-semibold text-[#071427]">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#071427] tracking-tight">
                            Our <span className="text-orange-500">Process</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            From concept to first sale.
                        </p>
                    </div>
                    <div className="space-y-0">
                        {process.map((p, i) => (
                            <div key={i} className="flex gap-6 md:gap-10">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white font-black text-sm flex items-center justify-center shadow-lg shadow-orange-500/20">
                                        {p.step}
                                    </div>
                                    {i < process.length - 1 && <div className="w-px h-full bg-gradient-to-b from-orange-200 to-transparent min-h-[60px]" />}
                                </div>
                                <div className="pb-12">
                                    <h3 className="text-xl font-bold text-[#071427] mb-2">{p.title}</h3>
                                    <p className="text-slate-600 leading-relaxed max-w-xl">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-br from-[#071427] via-[#24130a] to-[#3a1d0e] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.1),transparent_70%)]" />
                <div className="container relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Boost Your Sales?</span>
                    </h2>
                    <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Don&apos;t just build a store, build a sales engine. Start selling with a platform designed for growth.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/25 hover:-translate-y-0.5">
                            Start Your Project <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300">
                            Explore All Services
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
