import Link from 'next/link'
import { Cog, Database, GitBranch, Lock, GitGraph, CircleUser, ArrowRight, CircleCheck, ChartBar, Layers } from 'lucide-react'
import ServiceCTA from '../../../components/ServiceCTA'
import ProcessTimeline from '../../../components/ProcessTimeline'

export const metadata = {
    title: 'Custom Software Solutions | XenonEdge',
    description: 'Enterprise-grade custom software development. CRM, ERP, and bespoke business applications that streamline operations and drive efficiency.'
}

const features = [
    { icon: Cog, title: 'Bespoke Development', desc: 'Software tailored to your exact workflows and business logic, eliminating the inefficiencies of off-the-shelf solutions.' },
    { icon: Database, title: 'Data Management', desc: 'Centralized databases and data warehousing solutions that ensure data integrity, accessibility, and security across your organization.' },
    { icon: Lock, title: 'High Security', desc: 'Robust authentication, role-based access control, and encryption to protect sensitive corporate and customer data.' },
    { icon: GitGraph, title: 'GitGraph Automation', desc: 'Streamline complex business processes with custom automated workflows that reduce manual errors and save time.' },
    { icon: GitBranch, title: 'Integration Services', desc: 'Seamless integration with existing legacy systems and third-party APIs to create a unified ecosystem.' },
    { icon: CircleUser, title: 'User-Centric Design', desc: 'Internal tools designed with the same care as consumer apps, ensuring high adoption rates among your employees.' },
]

const solutions = [
    { title: 'ERP Systems', desc: 'Comprehensive enterprise resource planning systems to manage day-to-day business activities.', icon: ChartBar, color: 'from-emerald-500 to-teal-500' },
    { title: 'CRM Platforms', desc: 'Custom customer relationship management tools to track leads, sales, and customer interactions.', icon: CircleUser, color: 'from-blue-500 to-indigo-500' },
    { title: 'SaaS Products', desc: 'Scalable multi-tenant architectures for building and launching your own Software-as-a-Service product.', icon: Layers, color: 'from-orange-500 to-amber-500' },
    { title: 'Legacy Modernization', desc: 'Upgrading and refactoring outdated software to modern tech stacks without disrupting operations.', icon: Cog, color: 'from-red-500 to-rose-500' },
]

const process = [
    { step: '01', title: 'Consultation', desc: 'Deep dive into your business operations to identify bottlenecks and software requirements.' },
    { step: '02', title: 'Solution Architecture', desc: 'Designing a scalable and secure technical architecture that aligns with your long-term goals.' },
    { step: '03', title: 'Agile Development', desc: 'Building the solution in iterative sprints, allowing for flexibility and regular feedback.' },
    { step: '04', title: 'Deployment & Training', desc: 'Smooth rollout of the new software along with comprehensive training for your team.' },
    { step: '05', title: 'Maintenance', desc: 'Ongoing support, updates, and feature enhancements to ensure the software evolves with your business.' },
]

export default function CustomSoftwarePage() {
    return (
        <>
            <section className="hero-dark relative pt-32 pb-20 overflow-hidden bg-[#0B1E36]">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M0 0h20v20H0V0zm10 17l7-7h-4v-4h4V2l-7 7v4h4v4h-4z\'/%3E%3C/g%3E%3C/svg%3E")' }} />
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-block px-4 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
                            Custom Software Solutions
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                            Software Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">Your Business</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                            Off-the-shelf software failing you? We build powerful, custom solutions designed to solve your unique challenges and accelerate growth.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-5">
                            <Link href="/contact" className="btn-premium-primary">
                                Discuss Your Requirements <ArrowRight className="w-4 h-4 arrow-icon" />
                            </Link>
                            <Link href="/portfolio" className="btn-premium-outline">
                                View Case Studies
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#0B1E36] tracking-tight">
                            Why <span className="text-sky-500">Custom Software?</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                            Gain a competitive edge with technology that adapts to you, not the other way around.
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
                            Our <span className="text-sky-500">Solutions</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            We specialize in complex, high-impact software systems.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutions.map((sol, i) => (
                            <div key={i} className="flex gap-5 p-8 rounded-md bg-white border border-slate-100 transition-all duration-300">
                                <div className={`w-14 h-14 rounded-md bg-sky-500 text-white flex items-center justify-center flex-shrink-0`}>
                                    <sol.icon className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#0B1E36] mb-2">{sol.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{sol.desc}</p>
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
                            Technologies We <span className="text-sky-500">Use</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            Enterprise-grade tools for enterprise-grade solutions.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Java', 'Spring Boot', '.NET Core', 'Python', 'React', 'Angular', 'PostgreSQL', 'Microsoft Azure'].map((tech, i) => (
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
                            Implementation <span className="text-sky-500">Process</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            A structured approach from discovery to deployment.
                        </p>
                    </div>
                    <ProcessTimeline steps={process} numberBgColor="bg-sky-500" />
                </div>
            </section>

            <ServiceCTA
                title="Ready to Transform Your Operations?"
                subtitle="Let&apos;s build the software your business deserves. Efficient, scalable, and secure."
                primaryBtnText="Get Your Free Consultation"
                primaryBtnHref="/contact"
                secondaryBtnText="Explore All Services"
                secondaryBtnHref="/services"
            />
        </>
    )
}
