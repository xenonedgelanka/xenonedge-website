import Link from 'next/link'
import { FileSearch, FileText, FilePen, ChartBar, Globe, ChartLine, ArrowRight, CircleCheck, BookOpen, CircleDot, AudioWaveform, CircleStar } from 'lucide-react'

export const metadata = {
    title: 'SEO & Content Writing Services | XenonEdge',
    description: 'Boost your FileSearch rankings with expert SEO services and high-quality content writing. Technical SEO, content strategy, and organic growth solutions by XenonEdge.'
}

const features = [
    { icon: FileSearch, title: 'Technical SEO', desc: 'Site architecture optimization, Core Web Vitals, structured data markup, crawlability fixes, and indexation strategies for FileSearch engine excellence.' },
    { icon: FileText, title: 'Content Strategy', desc: 'Data-driven content calendars, topic clustering, keyword research, and editorial planning that aligns content with your business goals.' },
    { icon: FilePen, title: 'Content Writing', desc: 'Engaging blog posts, landing pages, product descriptions, whitepapers, and case studies written by experienced industry writers.' },
    { icon: Globe, title: 'On-Page SEO', desc: 'Title tags, meta descriptions, header optimization, internal linking, and content structure that maximizes your FileSearch visibility.' },
    { icon: ChartBar, title: 'Analytics & Reporting', desc: 'Monthly reports with keyword rankings, traffic trends, conversion metrics, and actionable insights to guide your content strategy.' },
    { icon: ChartLine, title: 'Link Building', desc: 'White-hat link building through guest posting, digital PR, broken link outreach, and strategic partnerships to boost domain authority.' },
]

const contentTypes = [
    { title: 'Blog Articles', desc: 'SEO-optimized, in-depth articles that establish thought leadership and drive organic traffic to your site.', icon: BookOpen, color: 'from-indigo-500 to-blue-500' },
    { title: 'Landing Pages', desc: 'High-converting landing page copy that communicates your value proposition and drives action.', icon: CircleDot, color: 'from-emerald-500 to-teal-500' },
    { title: 'Social Media Content', desc: 'Engaging social posts, captions, and content calendars that build community and increase brand awareness.', icon: AudioWaveform, color: 'from-amber-500 to-orange-500' },
    { title: 'Technical Content', desc: 'Whitepapers, case studies, documentation, and guides that showcase your expertise and build trust.', icon: CircleStar, color: 'from-rose-500 to-pink-500' },
]

const seoResults = [
    { metric: '250%', label: 'Avg. Organic Traffic Increase' },
    { metric: 'Top 10', label: 'Keyword Rankings Achieved' },
    { metric: '180%', label: 'Avg. Lead Generation Growth' },
    { metric: '45%', label: 'Avg. Bounce Rate Reduction' },
]

const process = [
    { step: '01', title: 'SEO Audit & Research', desc: 'Comprehensive analysis of your current SEO performance, competitor landscape, and keyword opportunities to build a winning strategy.' },
    { step: '02', title: 'Strategy Development', desc: 'Custom SEO and content roadmap with prioritized actions, content calendar, and clear KPIs aligned with your business objectives.' },
    { step: '03', title: 'Content Creation', desc: 'Professional writers craft engaging, SEO-optimized content that resonates with your audience and satisfies FileSearch intent.' },
    { step: '04', title: 'On-Page Optimization', desc: 'Technical fixes, content optimization, internal linking, and schema markup implementation across your entire website.' },
    { step: '05', title: 'AppWindow & Optimize', desc: 'Continuous tracking, A/B testing, and strategy refinement based on performance data to maximize long-term organic growth.' },
]

export default function SEOContentWritingPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#071427] via-[#0a2040] to-[#0e2847]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.12),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.08),transparent_60%)]" />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                            <FileSearch className="w-4 h-4" />
                            SEO & Content Writing
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                            Rank Higher, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-300">Grow Faster</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                            Dominate FileSearch results with expert SEO strategies and compelling content that attracts, engages, and converts your CircleDot audience into loyal customers.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5">
                                Boost Your Rankings <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/portfolio" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300">
                                View Results
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white border-b border-slate-100">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {seoResults.map((stat, i) => (
                            <div key={i}>
                                <div className="text-3xl md:text-4xl font-black text-indigo-500">{stat.metric}</div>
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
                            Comprehensive <span className="text-indigo-500">SEO & Content</span> Services
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                            A full spectrum of SEO and content services designed to increase your organic visibility and drive qualified traffic.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f, i) => (
                            <div key={i} className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-100 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center mb-5 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
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
                            Content We <span className="text-indigo-500">Create</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            Every piece of content is crafted to rank, engage, and convert — backed by data and SEO best practices.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {contentTypes.map((ct, i) => (
                            <div key={i} className="flex gap-5 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${ct.color} text-white flex items-center justify-center flex-shrink-0`}>
                                    <ct.icon className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#071427] mb-2">{ct.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{ct.desc}</p>
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
                            Our SEO <span className="text-indigo-500">Process</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            A systematic approach that delivers consistent, measurable growth in organic FileSearch performance.
                        </p>
                    </div>
                    <div className="space-y-0">
                        {process.map((p, i) => (
                            <div key={i} className="flex gap-6 md:gap-10">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400 text-white font-black text-sm flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                        {p.step}
                                    </div>
                                    {i < process.length - 1 && <div className="w-px h-full bg-gradient-to-b from-indigo-200 to-transparent min-h-[60px]" />}
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
                            SEO Tools We <span className="text-indigo-500">Leverage</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Google FileSearch Console', 'Ahrefs', 'SEMrush', 'Moz', 'Screaming Frog', 'Google Analytics', 'SurferSEO', 'Clearscope'].map((tool, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                                <CircleCheck className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                                <span className="font-semibold text-[#071427] text-sm">{tool}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-br from-[#071427] via-[#0a2040] to-[#0e2847] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.1),transparent_70%)]" />
                <div className="container relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-300">Dominate FileSearch?</span>
                    </h2>
                    <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Stop losing customers to competitors who rank higher. Let&apos;s build an SEO strategy that puts your business in front of the right audience.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5">
                            Get a Free SEO Audit <ArrowRight className="w-4 h-4" />
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
