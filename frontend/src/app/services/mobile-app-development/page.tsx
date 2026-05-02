import Link from 'next/link'
import { AppWindow, Cpu, Activity, Lock, Layers, Cloud, ArrowRight, CircleCheck, LayoutGrid, ListRestart, HouseWifi } from 'lucide-react'
import ServiceCTA from '../../../components/ServiceCTA'
import ProcessTimeline from '../../../components/ProcessTimeline'

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
    { title: 'Consumer Apps', desc: 'Engaging B2C apps focused on user retention, gamification, and social sharing features.', icon: LayoutGrid },
    { title: 'Enterprise Mobility', desc: 'Secure internal tools for workforce management, logistics, and productivity.', icon: Activity },
    { title: 'mCommerce', desc: 'Feature-rich shopping apps with secure payment gateways and personalized product feeds.', icon: ListRestart },
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
            <section className="hero-dark relative pt-20 pb-12 overflow-hidden bg-[#0B1E36]">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M0 0h2v2H0V0zm4 4h2v2H4V4zm4 4h2v2H8V8z\'/%3E%3C/g%3E%3C/svg%3E")' }} />
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-block px-4 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
                            Mobile App Development
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                            Apps That CircleUser <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">Love to Use</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                            We design and develop premium iOS and Android applications that deliver seamless experiences and drive real business value.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-5">
                            <Link href="/contact" className="btn-premium-primary">
                                Launch Your App <ArrowRight className="w-4 h-4 arrow-icon" />
                            </Link>
                            <Link href="/portfolio" className="btn-premium-outline">
                                View Mobile Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#0B1E36] tracking-tight">
                            Platform <span className="text-sky-500">Excellence</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                            Whether you need a native powerhouse or a cross-platform solution, we have the expertise to deliver.
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
                            App <span className="text-sky-500">Categories</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            We have deep experience building successful applications across various domains and industries.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {appTypes.map((app, i) => (
                            <div key={i} className="flex gap-5 p-8 rounded-md bg-white border-2 border-[#0B1E36] transition-all duration-300 hover:-translate-y-1 shadow-sm">
                                <div className={`w-14 h-14 rounded-md bg-sky-50 text-sky-500 flex items-center justify-center flex-shrink-0 transition-all duration-300`}>
                                    <app.icon className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#0B1E36] mb-2">{app.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{app.desc}</p>
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
                            Tech <span className="text-sky-500">Stack</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            Leveraging the best tools for mobile innovation.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL', 'Redux', 'SQLite'].map((tech, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 rounded-md bg-white border-2 border-[#0B1E36] transition-colors duration-300 shadow-sm hover:bg-slate-50">
                                <CircleCheck className="w-5 h-5 text-sky-500 flex-shrink-0" />
                                <span className="font-semibold text-[#0B1E36]">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#0B1E36] tracking-tight">
                            Development <span className="text-sky-500">Lifecycle</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            From the first line of code to the five-star review, we handle everything.
                        </p>
                    </div>
                    <ProcessTimeline steps={process} numberBgColor="bg-sky-500" />
                </div>
            </section>

            <ServiceCTA
                title="Got an App Idea? Let&apos;s Build It."
                subtitle="The next big app could be yours. Partner with us to bring your vision to life on the App Store and Google Play."
                primaryBtnText="Get a Free Quote"
                primaryBtnHref="/contact"
                secondaryBtnText="Explore All Services"
                secondaryBtnHref="/services"
            />
        </>
    )
}
