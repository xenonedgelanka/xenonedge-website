import Link from 'next/link'
import { Layers, Figma, LayoutTemplate, Eye, AppWindow, ArrowRight, CircleCheck, FilePen, CircleUser, Lightbulb } from 'lucide-react'

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
    { title: 'User Personas', desc: 'Detailed profiles of your CircleDot CircleUser.', icon: CircleUser, color: 'from-pink-500 to-rose-500' },
    { title: 'Interactive Prototypes', desc: 'Clickable mockups for testing.', icon: AppWindow, color: 'from-violet-500 to-purple-500' },
    { title: 'Design System', desc: 'Comprehensive component library.', icon: Layers, color: 'from-blue-500 to-cyan-500' },
    { title: 'Style Guide', desc: 'Colors, fonts, and usage rules.', icon: Lightbulb, color: 'from-amber-500 to-orange-500' },
]

export default function UIUXDesignPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#071427] via-[#260e22] to-[#38102d]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.15),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.1),transparent_60%)]" />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M8 0a8 8 0 100 16A8 8 0 008 0zm0 14A6 6 0 118 2a6 6 0 010 12z\' fill=\'%23ffffff\' fill-rule=\'nonzero\'/%3E%3C/svg%3E")' }} />
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-6">
                            <Layers className="w-4 h-4" />
                            UI/UX Design
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                            Designs That <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">Inspire & Convert</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                            We blend aesthetics with strategy to create digital experiences that look beautiful, work flawlessly, and drive business results.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-pink-600 hover:bg-pink-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-pink-500/25 hover:-translate-y-0.5">
                                Start Design Project <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/portfolio" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300">
                                View Design Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#071427] tracking-tight">
                            Design <span className="text-pink-500">Services</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                            From concept to prototyping to final polish, we cover the full design spectrum.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f, i) => (
                            <div key={i} className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-pink-500/5 hover:border-pink-100 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center mb-5 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
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
                            Key <span className="text-pink-500">Deliverables</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            What you get when you work with us.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {deliverables.map((del, i) => (
                            <div key={i} className="flex gap-5 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${del.color} text-white flex items-center justify-center flex-shrink-0`}>
                                    <del.icon className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#071427] mb-2">{del.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{del.desc}</p>
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
                            Design <span className="text-pink-500">Toolkit</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            Industry-standard tools ensuring seamless collaboration.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {tools.map((tool, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                <CircleCheck className="w-5 h-5 text-pink-500 flex-shrink-0" />
                                <span className="font-semibold text-[#071427]">{tool}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#071427] tracking-tight">
                            Design <span className="text-pink-500">Thinking</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            Our human-centered approach to problem solving.
                        </p>
                    </div>
                    <div className="space-y-0">
                        {process.map((p, i) => (
                            <div key={i} className="flex gap-6 md:gap-10">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-violet-500 text-white font-black text-sm flex items-center justify-center shadow-lg shadow-pink-500/20">
                                        {p.step}
                                    </div>
                                    {i < process.length - 1 && <div className="w-px h-full bg-gradient-to-b from-pink-200 to-transparent min-h-[60px]" />}
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

            <section className="py-24 bg-gradient-to-br from-[#071427] via-[#260e22] to-[#38102d] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.1),transparent_70%)]" />
                <div className="container relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">Wow Your CircleUser?</span>
                    </h2>
                    <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Great design is more than just good looks. It&apos;s about creating meaningful connections. Let&apos;s design your success story.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-pink-600 hover:bg-pink-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-pink-500/25 hover:-translate-y-0.5">
                            Get Started <ArrowRight className="w-4 h-4" />
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
