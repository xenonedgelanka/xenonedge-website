import Link from 'next/link'
import { Layers, Figma, LayoutTemplate, Eye, AppWindow, ArrowRight, CircleCheck, FilePen, CircleUser, Lightbulb } from 'lucide-react'
import ServiceCTA from '../../../components/ServiceCTA'
import ProcessTimeline from '../../../components/ProcessTimeline'

export const metadata = {
    title: 'UI/UX Design Services | XenonEdge',
    description: 'User-centered UI/UX design services. We create intuitive, engaging, and beautiful digital experiences that delight CircleUser and achieve business goals.'
}

const features = [
    { icon: Layers, title: 'Visual Identity', desc: 'Crafting a unique visual language for your brand including color palettes, typography, and iconography systems.' },
    { icon: LayoutTemplate, title: 'Wireframing', desc: 'Rapid prototyping and low-fidelity wireframes to iterate on layout and structure before visual design begins.' },
    { icon: Figma, title: 'High-Fidelity UI', desc: 'Pixel-perfect interface designs created in Figma, ready for developer handoff with complete design specs.' },
    { icon: Eye, title: 'User Research', desc: 'In-depth user testing, interviews, and persona development to ensure we are solving the right problems for the right people.' },
    { icon: AppWindow, title: 'Responsive Design', desc: 'Fluid layouts that adapt seamlessly to any screen size, from large desktop monitors to mobile phones.' },
    { icon: FilePen, title: 'Design Systems', desc: 'Scalable component libraries and style guides that ensure consistency across all your digital products.' },
]

const process = [
    { step: '01', title: 'Empathize & Define', desc: 'Understanding your CircleUser through research and defining the core problems to solve.' },
    { step: '02', title: 'Ideate & Sketch', desc: 'Brainstorming creative solutions and sketching initial concepts to explore different directions.' },
    { step: '03', title: 'Prototype', desc: 'Building interactive prototypes to simulate the user journey and test flow logic.' },
    { step: '04', title: 'Test & Iterate', desc: 'Gathering user feedback on prototypes and refining the design based on real-world usage data.' },
    { step: '05', title: 'Final UI & Handoff', desc: 'Polishing the visual design and preparing assets and documentation for the development team.' },
]

const tools = [
    'Figma', 'Adobe XD', 'Sketch', 'InVision', 'Maze', 'Zeplin', 'Principle', 'Adobe Illustrator'
]

const deliverables = [
    { title: 'User Personas', desc: 'Detailed profiles of your CircleDot CircleUser.', icon: CircleUser },
    { title: 'Interactive Prototypes', desc: 'Clickable mockups for testing.', icon: AppWindow },
    { title: 'Design System', desc: 'Comprehensive component library.', icon: Layers },
    { title: 'Style Guide', desc: 'Colors, fonts, and usage rules.', icon: Lightbulb },
]

export default function UIUXDesignPage() {
    return (
        <>
            <section className="hero-dark relative pt-20 pb-12 overflow-hidden bg-[#0B1E36]">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M8 0a8 8 0 100 16A8 8 0 008 0zm0 14A6 6 0 118 2a6 6 0 010 12z\' fill=\'%23ffffff\' fill-rule=\'nonzero\'/%3E%3C/svg%3E")' }} />
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-block px-4 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
                            UI/UX Design
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                            Designs That <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">Inspire & Convert</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                            We blend aesthetics with strategy to create digital experiences that look beautiful, work flawlessly, and drive business results.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-5">
                            <Link href="/contact" className="btn-premium-primary">
                                Start Design Project <ArrowRight className="w-4 h-4 arrow-icon" />
                            </Link>
                            <Link href="/portfolio" className="btn-premium-outline">
                                View Design Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#0B1E36] tracking-tight">
                            Design <span className="text-sky-500">Services</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                            From concept to prototyping to final polish, we cover the full design spectrum.
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

            <section className="py-16 bg-slate-50">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#0B1E36] tracking-tight">
                            Key <span className="text-sky-500">Deliverables</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            What you get when you work with us.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {deliverables.map((del, i) => (
                            <div key={i} className="flex gap-5 p-8 rounded-md bg-white border-2 border-[#0B1E36] transition-all duration-300 hover:-translate-y-1 shadow-sm">
                                <div className={`w-14 h-14 rounded-md bg-sky-50 text-sky-500 flex items-center justify-center flex-shrink-0 transition-all duration-300`}>
                                    <del.icon className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#0B1E36] mb-2">{del.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{del.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-[#0B1E36] tracking-tight">
                            Design <span className="text-sky-500">Toolkit</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            Industry-standard tools ensuring seamless collaboration.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {tools.map((tool, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 rounded-md bg-white border-2 border-[#0B1E36] transition-colors duration-300 shadow-sm hover:bg-slate-50">
                                <CircleCheck className="w-5 h-5 text-sky-500 flex-shrink-0" />
                                <span className="font-semibold text-[#0B1E36]">{tool}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#0B1E36] tracking-tight">
                            Design <span className="text-sky-500">Thinking</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            Our human-centered approach to problem solving.
                        </p>
                    </div>
                    <ProcessTimeline steps={process} numberBgColor="bg-pink-500" />
                </div>
            </section>

            <ServiceCTA
                title="Ready to Wow Your Users?"
                subtitle="Great design is more than just good looks. It&apos;s about creating meaningful connections. Let&apos;s design your success story."
                primaryBtnText="Get Started"
                primaryBtnHref="/contact"
                secondaryBtnText="Explore All Services"
                secondaryBtnHref="/services"
            />
        </>
    )
}
