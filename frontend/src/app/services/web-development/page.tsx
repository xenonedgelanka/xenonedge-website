import Link from 'next/link'
import { CodeXml, Globe, Activity, Lock, Database, Layers, ArrowRight, CircleCheck, ChevronRight } from 'lucide-react'

export const metadata = {
    title: 'Web Development Services | XenonEdge',
    description: 'Custom web development services using React, Next.js, and modern technologies. We build scalable, high-performance websites and web applications.'
}

const features = [
    { icon: CodeXml, title: 'Custom Development', desc: 'Tailor-made web solutions built from scratch to meet your specific business requirements and scalability needs.' },
    { icon: Activity, title: 'High Performance', desc: 'Lightning-fast load times and optimized core web vitals ensuring excellent user experience and SEO rankings.' },
    { icon: Lock, title: 'Secure by Design', desc: 'Implementation of industry-standard security protocols to protect your data and CircleUser against modern threats.' },
    { icon: Database, title: 'Scalable Architecture', desc: 'Future-proof backend systems designed to handle growing traffic and data without compromising performance.' },
    { icon: Layers, title: 'Modern Tech Stack', desc: 'Leveraging the latest technologies like Next.js, React, and Node.js to build robust and maintainable applications.' },
    { icon: Globe, title: 'Global CDN', desc: 'Content delivery network integration ensuring your application loads instantly for CircleUser anywhere in the world.' },
]

const stack = [
    { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { name: 'Backend', items: ['Node.js', 'Python', 'Go', 'Express', 'FastAPI'] },
    { name: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Prisma'] },
    { name: 'DevOps', items: ['AWS', 'Vercel', 'Docker', 'Kubernetes', 'CI/CD Pipelines'] },
]

const process = [
    { step: '01', title: 'Discovery & Planning', desc: 'We analyze your requirements, define technical scope, and create a roadmap for development.' },
    { step: '02', title: 'Design & Prototyping', desc: 'Creating UI/UX wireframes and interactive prototypes to visualize the end product before coding begins.' },
    { step: '03', title: 'Development', desc: 'Agile development with two-week sprints, keeping you updated with regular demos and progress reports.' },
    { step: '04', title: 'Testing & QA', desc: 'Rigorous testing including unit tests, integration tests, and user acceptance testing to ensure a bug-free launch.' },
    { step: '05', title: 'Deployment & Support', desc: 'Smooth deployment to production environments followed by ongoing maintenance and technical support.' },
]

export default function WebDevelopmentPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 overflow-hidden bg-[#071427]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#071427] via-[#0a1930] to-[#0f2540]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.15),transparent_50%)]" />
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
                            <CodeXml className="w-4 h-4" />
                            Web Development
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">Digital Future</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                            We engineer robust, scalable, and beautiful web applications using cutting-edge technologies that drive business growth and user engagement.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-sky-500/25 hover:-translate-y-0.5">
                                Start Your Project <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/portfolio" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300">
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#071427] tracking-tight">
                            World-Class <span className="text-sky-500">Engineering</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                            Our development philosophy centers on performance, security, and scalability, ensuring your platform grows with your business.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f, i) => (
                            <div key={i} className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-sky-500/5 hover:border-sky-100 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center mb-5 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
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
                            Technology <span className="text-sky-500">Stack</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            We choose the right tools for the job, prioritizing ecosystem maturity, developer experience, and long-term maintainability.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stack.map((category, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                <h3 className="text-lg font-bold text-[#071427] mb-4 border-b border-slate-100 pb-2">{category.name}</h3>
                                <ul className="space-y-3">
                                    {category.items.map((item, j) => (
                                        <li key={j} className="flex items-center gap-2 text-slate-600">
                                            <ChevronRight className="w-4 h-4 text-sky-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#071427] tracking-tight">
                            Development <span className="text-sky-500">Process</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            Transparent, iterative, and collaborative. We keep you in the loop at every stage of the development lifecycle.
                        </p>
                    </div>
                    <div className="space-y-0">
                        {process.map((p, i) => (
                            <div key={i} className="flex gap-6 md:gap-10">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 text-white font-black text-sm flex items-center justify-center shadow-lg shadow-sky-500/20">
                                        {p.step}
                                    </div>
                                    {i < process.length - 1 && <div className="w-px h-full bg-gradient-to-b from-sky-200 to-transparent min-h-[60px]" />}
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

            <section className="py-24 bg-[#071427] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.1),transparent_70%)]" />
                <div className="container relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                        Ready to Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">Extraordinary?</span>
                    </h2>
                    <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Let&apos;s turn your vision into a powerful web reality. Contact us today to discuss your project requirements.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-sky-500/25 hover:-translate-y-0.5">
                            Get in Touch <ArrowRight className="w-4 h-4" />
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
