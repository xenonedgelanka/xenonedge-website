import Link from 'next/link'
import { AudioWaveform, CircleDot, ChartLine, ChartBar, MailCheck, CircleUser, ArrowRight, CircleCheck, Activity, Globe, Heart, Eye } from 'lucide-react'

export const metadata = {
    title: 'Digital Marketing Services | XenonEdge',
    description: 'Data-driven digital marketing services including social media marketing, PPC campaigns, email marketing, and brand strategy. Maximize your ROI with XenonEdge.'
}

const features = [
    { icon: AudioWaveform, title: 'Social Media Marketing', desc: 'Strategic social media campaigns across Facebook, Instagram, LinkedIn, and TikTok that build brand awareness, drive engagement, and generate leads.' },
    { icon: CircleDot, title: 'PPC & Paid Advertising', desc: 'High-ROI pay-per-click campaigns on Google Ads, Facebook Ads, and LinkedIn Ads with precise targeting, A/B testing, and continuous optimization.' },
    { icon: MailCheck, title: 'Email Marketing', desc: 'Automated email sequences, newsletter campaigns, and drip marketing that nurtures leads and drives conversions with personalized messaging.' },
    { icon: ChartLine, title: 'Growth Strategy', desc: 'Data-driven growth frameworks that identify your highest-impact marketing channels and optimize budget allocation for maximum ROI.' },
    { icon: Heart, title: 'Brand Strategy', desc: 'Build a memorable brand identity with compelling messaging, visual consistency, and a clear brand voice that resonates with your audience.' },
    { icon: ChartBar, title: 'Analytics & Insights', desc: 'Comprehensive tracking, attribution modeling, and monthly performance reports that give you full visibility into your marketing ROI.' },
]

const channels = [
    { title: 'Google Ads', desc: 'FileSearch, display, shopping, and YouTube ads that capture high-intent buyers at the moment they are searching.', icon: Globe, color: 'from-blue-500 to-sky-500' },
    { title: 'Social Media Ads', desc: 'Targeted campaigns on Meta, Instagram, LinkedIn, and TikTok with custom audiences and lookalike targeting.', icon: CircleUser, color: 'from-pink-500 to-rose-500' },
    { title: 'Email Campaigns', desc: 'Automated nurture sequences, promotional campaigns, and re-engagement flows that drive repeat purchases.', icon: MailCheck, color: 'from-emerald-500 to-teal-500' },
    { title: 'Content Marketing', desc: 'Blog content, infographics, videos, and thought leadership that attracts organic traffic and builds authority.', icon: Eye, color: 'from-amber-500 to-orange-500' },
]

const results = [
    { metric: '5x', label: 'Average ROAS' },
    { metric: '300%', label: 'Lead Generation Growth' },
    { metric: '60%', label: 'Avg. CPC Reduction' },
    { metric: '10M+', label: 'Ad Impressions Managed' },
]

const process = [
    { step: '01', title: 'Market Research', desc: 'Deep analysis of your market, competitors, CircleDot audience demographics, and current marketing performance to identify opportunities.' },
    { step: '02', title: 'Strategy & Planning', desc: 'Custom marketing strategy with channel mix, budget allocation, campaign calendar, and clear KPIs tied to your business goals.' },
    { step: '03', title: 'Campaign Execution', desc: 'Professional creative production, ad setup, audience targeting, and campaign launch across all selected channels.' },
    { step: '04', title: 'Optimization', desc: 'Continuous A/B testing, bid optimization, audience refinement, and creative iteration based on real-time performance data.' },
    { step: '05', title: 'Reporting & Scale', desc: 'Monthly performance reviews with actionable insights. We scale what works and cut what doesn\'t to maximize your marketing ROI.' },
]

export default function DigitalMarketingPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#071427] via-[#0a2040] to-[#102040]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(244,63,94,0.12),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(249,115,22,0.1),transparent_60%)]" />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")' }} />
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium mb-6">
                            <AudioWaveform className="w-4 h-4" />
                            Digital Marketing
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                            Marketing That <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300">Drives Growth</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                            Data-driven digital marketing strategies that increase your brand visibility, generate qualified leads, and deliver measurable ROI across every channel.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-400 hover:to-orange-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-rose-500/25 hover:-translate-y-0.5">
                                Grow Your Business <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/portfolio" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300">
                                See Our Results
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white border-b border-slate-100">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {results.map((stat, i) => (
                            <div key={i}>
                                <div className="text-3xl md:text-4xl font-black text-rose-500">{stat.metric}</div>
                                <div className="mt-2 text-slate-500 text-sm font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#071427] tracking-tight">
                            Full-Spectrum <span className="text-rose-500">Marketing</span> Services
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                            A comprehensive suite of digital marketing services designed to reach your audience, wherever they are online.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f, i) => (
                            <div key={i} className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-rose-500/5 hover:border-rose-100 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-rose-500 group-hover:to-orange-500 group-hover:text-white transition-all duration-300">
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
                            Marketing <span className="text-rose-500">Channels</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            We master every major digital marketing channel to maximize your reach and return on investment.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {channels.map((ch, i) => (
                            <div key={i} className="flex gap-5 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${ch.color} text-white flex items-center justify-center flex-shrink-0`}>
                                    <ch.icon className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#071427] mb-2">{ch.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{ch.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#071427] tracking-tight">
                            Our Marketing <span className="text-rose-500">Process</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            A data-driven approach that ensures every marketing dollar produces measurable results.
                        </p>
                    </div>
                    <div className="space-y-0">
                        {process.map((p, i) => (
                            <div key={i} className="flex gap-6 md:gap-10">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-orange-400 text-white font-black text-sm flex items-center justify-center shadow-lg shadow-rose-500/20">
                                        {p.step}
                                    </div>
                                    {i < process.length - 1 && <div className="w-px h-full bg-gradient-to-b from-rose-200 to-transparent min-h-[60px]" />}
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

            <section className="py-24 bg-slate-50">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-[#071427] tracking-tight">
                            Platforms We <span className="text-rose-500">Master</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Google Ads', 'Facebook Ads', 'Instagram', 'LinkedIn', 'TikTok', 'Mailchimp', 'HubSpot', 'Google Analytics'].map((platform, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                                <CircleCheck className="w-5 h-5 text-rose-500 flex-shrink-0" />
                                <span className="font-semibold text-[#071427]">{platform}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-br from-[#071427] via-[#0a2040] to-[#102040] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.1),transparent_70%)]" />
                <div className="container relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300">Accelerate Growth?</span>
                    </h2>
                    <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Stop guessing and start growing. Let&apos;s build a marketing strategy that delivers real, measurable results for your business.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-400 hover:to-orange-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-rose-500/25 hover:-translate-y-0.5">
                            Get a Free Marketing Audit <ArrowRight className="w-4 h-4" />
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
