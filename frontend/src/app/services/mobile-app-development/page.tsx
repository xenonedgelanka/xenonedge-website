import Link from 'next/link'
import { AppWindow, Cpu, Activity, Lock, Layers, Cloud, ArrowRight, CircleCheck, LayoutGrid, ListRestart, HouseWifi } from 'lucide-react'

export const metadata = {
    title: 'Mobile App Development | XenonEdge',
    description: 'Top-rated mobile app development company for iOS and Android. Native and cross-platform solutions using React Native, Flutter, and Swift.'
}

const features = [
    { icon: AppWindow, title: 'Cross-Platform', desc: 'Build once, deploy everywhere. We use React Native and Flutter to create apps that look and feel native on both iOS and Android.' },
    { icon: Cpu, title: 'Native Performance', desc: 'Optimized code and efficient resource management ensure your app runs smoothly even on older devices.' },
    { icon: HouseWifi, title: 'Offline First', desc: 'Robust offline capabilities ensuring your app remains functional and synchronizes data seamlessly when connectivity returns.' },
    { icon: Lock, title: 'Enterprise Security', desc: 'Bank-grade encryption and secure authentication flows to protect sensitive user data and ensure compliance.' },
    { icon: Layers, title: 'Stunning UI/UX', desc: 'Pixel-perfect designs with fluid animations and intuitive navigation patterns that delight CircleUser.' },
    { icon: Cloud, title: 'Cloud Sync', desc: 'Real-time data synchronization with scalable cloud backends like Firebase, AWS Amplify, or custom Node.js servers.' },
]

const appTypes = [
    { title: 'Consumer Apps', desc: 'Engaging B2C apps focused on user retention, gamification, and social sharing features.', icon: LayoutGrid, color: 'from-purple-500 to-pink-500' },
    { title: 'Enterprise Mobility', desc: 'Secure internal tools for workforce management, logistics, and productivity.', icon: Activity, color: 'from-blue-500 to-cyan-500' },
    { title: 'mCommerce', desc: 'Feature-rich shopping apps with secure payment gateways and personalized product feeds.', icon: ListRestart, color: 'from-amber-500 to-orange-500' },
]

const process = [
    { step: '01', title: 'Concept & Strategy', desc: 'Validating your app idea, defining core features, and creating a product roadmap for MVP and beyond.' },
    { step: '02', title: 'UX/UI Design', desc: 'Designing user flaws and high-fidelity screens that adhere to Apple Human Interface Guidelines and Material Design.' },
    { step: '03', title: 'Development', desc: 'Iterative coding process with regular builds delivered to your device for testing and feedback.' },
    { step: '04', title: 'Testing', desc: 'Comprehensive testing across multiple devices, screen sizes, and OS versions to ensure compatibility.' },
    { step: '05', title: 'Store Launch', desc: 'Handling the complex submission process for the Apple App Store and Google Play Store optimization (ASO).' },
]

export default function MobileAppDevelopmentPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#071427] via-[#1a0b2e] to-[#2d0f35]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.15),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.1),transparent_60%)]" />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M0 0h2v2H0V0zm4 4h2v2H4V4zm4 4h2v2H8V8z\'/%3E%3C/g%3E%3C/svg%3E")' }} />
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                            <AppWindow className="w-4 h-4" />
                            Mobile App Development
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                            Apps That CircleUser <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Love to Use</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                            We design and develop premium iOS and Android applications that deliver seamless experiences and drive real business value.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/25 hover:-translate-y-0.5">
                                Launch Your App <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/portfolio" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300">
                                View Mobile Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#071427] tracking-tight">
                            Platform <span className="text-purple-500">Excellence</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                            Whether you need a native powerhouse or a cross-platform solution, we have the expertise to deliver.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f, i) => (
                            <div key={i} className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-purple-500/5 hover:border-purple-100 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center mb-5 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
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
                            App <span className="text-purple-500">Categories</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            We have deep experience building successful applications across various domains and industries.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {appTypes.map((app, i) => (
                            <div key={i} className="flex gap-5 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${app.color} text-white flex items-center justify-center flex-shrink-0`}>
                                    <app.icon className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#071427] mb-2">{app.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{app.desc}</p>
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
                            Tech <span className="text-purple-500">Stack</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            Leveraging the best tools for mobile innovation.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL', 'Redux', 'SQLite'].map((tech, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                <CircleCheck className="w-5 h-5 text-purple-500 flex-shrink-0" />
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
                            Development <span className="text-purple-500">Lifecycle</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            From the first line of code to the five-star review, we handle everything.
                        </p>
                    </div>
                    <div className="space-y-0">
                        {process.map((p, i) => (
                            <div key={i} className="flex gap-6 md:gap-10">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white font-black text-sm flex items-center justify-center shadow-lg shadow-purple-500/20">
                                        {p.step}
                                    </div>
                                    {i < process.length - 1 && <div className="w-px h-full bg-gradient-to-b from-purple-200 to-transparent min-h-[60px]" />}
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

            <section className="py-24 bg-gradient-to-br from-[#071427] via-[#1a0b2e] to-[#2d0f35] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.1),transparent_70%)]" />
                <div className="container relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                        Got an App Idea? <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Let&apos;s Build It.</span>
                    </h2>
                    <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        The next big app could be yours. Partner with us to bring your vision to life on the App Store and Google Play.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/25 hover:-translate-y-0.5">
                            Get a Free Quote <ArrowRight className="w-4 h-4" />
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
