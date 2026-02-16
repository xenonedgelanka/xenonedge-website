import Link from 'next/link'
import { Brain, Bot, CircleStar, ChartBar, BotMessageSquare, Eye, ArrowRight, CircleCheck, Activity, Cog, Globe, Database } from 'lucide-react'

export const metadata = {
    title: 'AI Integrations & Machine Learning | XenonEdge',
    description: 'Empower your business with AI integrations, custom LLM solutions, chatbots, computer vision, and machine learning models. Expert AI development services by XenonEdge.'
}

const features = [
    { icon: Bot, title: 'Custom AI Chatbots', desc: 'Intelligent conversational agents powered by GPT, Claude, and custom LLMs. Handle customer support, lead qualification, and internal workflows 24/7.' },
    { icon: Brain, title: 'LLM Fine-Tuning', desc: 'Train large language models on your proprietary data for domain-specific accuracy. Custom GPT models, RAG pipelines, and knowledge base integration.' },
    { icon: Eye, title: 'Computer Vision', desc: 'Image recognition, object detection, and visual inspection systems for quality control, security, and automated data extraction.' },
    { icon: ChartBar, title: 'Predictive Analytics', desc: 'Machine learning models that forecast demand, detect anomalies, predict churn, and uncover hidden patterns in your data.' },
    { icon: BotMessageSquare, title: 'NLP & Text Analysis', desc: 'Sentiment analysis, document classification, entity extraction, and automated summarization to unlock insights from unstructured text data.' },
    { icon: CircleStar, title: 'AI-Powered Automation', desc: 'Automate repetitive tasks with intelligent workflows. Document processing, email triage, data entry, and decision support systems.' },
]

const useCases = [
    { title: 'Customer Support AI', desc: 'Deploy AI chatbots that resolve 70%+ of support tickets automatically, with smart escalation to human agents when needed.', icon: BotMessageSquare, color: 'from-cyan-500 to-blue-500' },
    { title: 'Document Intelligence', desc: 'Extract data from invoices, contracts, and forms with 99%+ accuracy. Automate document processing workflows end-to-end.', icon: Database, color: 'from-violet-500 to-purple-500' },
    { title: 'Recommendation Engines', desc: 'Personalized product, content, and service recommendations that increase engagement and drive 20-30% more revenue.', icon: Globe, color: 'from-pink-500 to-rose-500' },
    { title: 'Process Automation', desc: 'AI-driven GitGraph automation that handles data entry, classification, routing, and decision-making at scale.', icon: Cog, color: 'from-amber-500 to-orange-500' },
]

const techStack = [
    'OpenAI GPT-4', 'Claude API', 'LangChain', 'TensorFlow', 'PyTorch', 'Hugging Face',
    'Pinecone', 'ChromaDB', 'AWS SageMaker', 'Google Vertex AI', 'FastAPI', 'Python'
]

const process = [
    { step: '01', title: 'AI Opportunity Assessment', desc: 'We analyze your business processes, data assets, and pain points to identify the highest-impact AI opportunities.' },
    { step: '02', title: 'Data Strategy & Prep', desc: 'Clean, structure, and enrich your data. Design data pipelines and establish the foundation for reliable AI models.' },
    { step: '03', title: 'Model Development', desc: 'Build, train, and fine-tune AI models using your data. Iterative experimentation to optimize accuracy and performance.' },
    { step: '04', title: 'Integration & Deployment', desc: 'Deploy models into your existing systems with secure APIs, monitoring dashboards, and automated retraining pipelines.' },
    { step: '05', title: 'Monitoring & Improvement', desc: 'Continuous performance monitoring, model drift detection, and regular retraining to keep your AI systems accurate over time.' },
]

export default function AIIntegrationsPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#071427] via-[#0b1d3a] to-[#0f2847]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.15),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.1),transparent_60%)]" />
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Ccircle cx=\'15\' cy=\'15\' r=\'1.5\'/%3E%3C/g%3E%3C/svg%3E")' }} />
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                            <Brain className="w-4 h-4" />
                            AI Integrations
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                            Supercharge with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Artificial Intelligence</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                            From custom chatbots and LLM fine-tuning to predictive analytics and computer vision — we integrate cutting-edge AI into your business to automate, optimize, and innovate.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:-translate-y-0.5">
                                Explore AI Solutions <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/portfolio" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300">
                                View AI Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#071427] tracking-tight">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">AI Capabilities</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                            We bring the power of modern AI to your business, from natural language processing to computer vision and beyond.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f, i) => (
                            <div key={i} className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-cyan-500/5 hover:border-cyan-100 transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-50 to-purple-50 text-cyan-500 flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-purple-500 group-hover:text-white transition-all duration-300">
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
                            Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Use Cases</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            AI is not just a buzzword — here&apos;s how we&apos;re using it to deliver measurable business value.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {useCases.map((uc, i) => (
                            <div key={i} className="flex gap-5 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${uc.color} text-white flex items-center justify-center flex-shrink-0`}>
                                    <uc.icon className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#071427] mb-2">{uc.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{uc.desc}</p>
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
                            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Technology</span> Stack
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            We use industry-leading AI frameworks and platforms to build reliable, scalable intelligence.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {techStack.map((tech, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                <CircleCheck className="w-5 h-5 text-cyan-500 flex-shrink-0" />
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
                            Our AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Development</span> Process
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            A rigorous, data-driven approach to building AI solutions that actually deliver results.
                        </p>
                    </div>
                    <div className="space-y-0">
                        {process.map((p, i) => (
                            <div key={i} className="flex gap-6 md:gap-10">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 text-white font-black text-sm flex items-center justify-center shadow-lg shadow-cyan-500/20">
                                        {p.step}
                                    </div>
                                    {i < process.length - 1 && <div className="w-px h-full bg-gradient-to-b from-cyan-200 to-transparent min-h-[60px]" />}
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

            <section className="py-24 bg-gradient-to-br from-[#071427] via-[#0b1d3a] to-[#0f2847] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1),transparent_70%)]" />
                <div className="container relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Unlock AI</span> for Your Business?
                    </h2>
                    <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Whether you&apos;re exploring AI for the first time or scaling existing models, we&apos;re here to help you harness its full potential.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:-translate-y-0.5">
                            Book an AI Consultation <ArrowRight className="w-4 h-4" />
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
