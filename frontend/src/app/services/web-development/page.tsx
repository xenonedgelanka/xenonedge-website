import Link from 'next/link'
import { CodeXml, Globe, Activity, Lock, Database, Layers, ArrowRight, CircleCheck, ChevronRight } from 'lucide-react'
import ServiceCTA from '../../../components/ServiceCTA'
import ProcessTimeline from '../../../components/ProcessTimeline'

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
            <section className="hero-dark relative pt-32 pb-20 overflow-hidden bg-[#0B1E36]">
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-block px-4 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
                            Web Development
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">Digital Future</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                            We engineer robust, scalable, and beautiful web applications using cutting-edge technologies that drive business growth and user engagement.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-5">
                            <Link href="/contact" className="btn-premium-primary">
                                Start Your Project <ArrowRight className="w-4 h-4 arrow-icon" />
                            </Link>
                            <Link href="/portfolio" className="btn-premium-outline">
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#0B1E36] tracking-tight">
                            World-Class <span className="text-sky-500">Engineering</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                            Our development philosophy centers on performance, security, and scalability, ensuring your platform grows with your business.
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
                            Technology <span className="text-sky-500">Stack</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            We choose the right tools for the job, prioritizing ecosystem maturity, developer experience, and long-term maintainability.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stack.map((category, i) => (
                            <div key={i} className="bg-white p-6 rounded-md border-2 border-[#0B1E36] shadow-sm hover:shadow-md transition-shadow duration-300">
                                <h3 className="text-lg font-bold text-[#0B1E36] mb-4 border-b border-slate-100 pb-2">{category.name}</h3>
                                <div className="space-y-3">
                                    {category.items.map((item, j) => (
                                        <div key={j} className="flex items-center gap-3 py-1">
                                            <CircleCheck className="w-4 h-4 text-sky-500 flex-shrink-0" />
                                            <span className="font-semibold text-[#0B1E36] text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#0B1E36] tracking-tight">
                            Development <span className="text-sky-500">Process</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            Transparent, iterative, and collaborative. We keep you in the loop at every stage of the development lifecycle.
                        </p>
                    </div>
                    <ProcessTimeline steps={process} numberBgColor="bg-sky-500" />
                </div>
            </section>

            <ServiceCTA
                title="Ready to Build Something Extraordinary?"
                subtitle="Let&apos;s turn your vision into a powerful web reality. Contact us today to discuss your project requirements."
                primaryBtnText="Get in Touch"
                primaryBtnHref="/contact"
                secondaryBtnText="Explore All Services"
                secondaryBtnHref="/services"
            />
        </>
    )
}
