import Link from 'next/link'
import { Brain, Bot, CircleStar, ChartBar, BotMessageSquare, Eye, ArrowRight, CircleCheck, Activity, Cog, Globe, Database } from 'lucide-react'
import ServiceCTA from '../../../components/ServiceCTA'
import ProcessTimeline from '../../../components/ProcessTimeline'

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
    { title: 'Customer Support AI', desc: 'Deploy AI chatbots that resolve 70%+ of support tickets automatically, with smart escalation to human agents when needed.', icon: BotMessageSquare },
    { title: 'Document Intelligence', desc: 'Extract data from invoices, contracts, and forms with 99%+ accuracy. Automate document processing workflows end-to-end.', icon: Database },
    { title: 'Recommendation Engines', desc: 'Personalized product, content, and service recommendations that increase engagement and drive 20-30% more revenue.', icon: Globe },
    { title: 'Process Automation', desc: 'AI-driven GitGraph automation that handles data entry, classification, routing, and decision-making at scale.', icon: Cog },
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
            <section className="hero-dark relative pt-32 pb-20 overflow-hidden bg-[#0B1E36]">
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Ccircle cx=\'15\' cy=\'15\' r=\'1.5\'/%3E%3C/g%3E%3C/svg%3E")' }} />
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-block px-4 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
                            AI Integrations
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                            Supercharge with <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">Artificial Intelligence</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                            From custom chatbots and LLM fine-tuning to predictive analytics and computer vision — we integrate cutting-edge AI into your business to automate, optimize, and innovate.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-5">
                            <Link href="/contact" className="btn-premium-primary">
                                Explore AI Solutions <ArrowRight className="w-4 h-4 arrow-icon" />
                            </Link>
                            <Link href="/portfolio" className="btn-premium-outline">
                                View AI Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-[#0B1E36] tracking-tight">
                            Our <span className="text-sky-500">AI Capabilities</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                            We bring the power of modern AI to your business, from natural language processing to computer vision and beyond.
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
                            Real-World <span className="text-sky-500">Use Cases</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            AI is not just a buzzword — here&apos;s how we&apos;re using it to deliver measurable business value.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {useCases.map((uc, i) => (
                            <div key={i} className="flex gap-5 p-8 rounded-md bg-white border-2 border-[#0B1E36] transition-all duration-300 hover:-translate-y-1 shadow-sm">
                                <div className={`w-14 h-14 rounded-md bg-sky-50 text-sky-500 flex items-center justify-center flex-shrink-0 transition-all duration-300`}>
                                    <uc.icon className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#0B1E36] mb-2">{uc.title}</h3>
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
                        <h2 className="text-3xl md:text-4xl font-black text-[#0B1E36] tracking-tight">
                            AI <span className="text-sky-500">Technology</span> Stack
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            We use industry-leading AI frameworks and platforms to build reliable, scalable intelligence.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {techStack.map((tech, i) => (
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
                            Our AI <span className="text-sky-500">Development</span> Process
                        </h2>
                        <p className="mt-4 text-slate-600 text-lg">
                            A rigorous, data-driven approach to building AI solutions that actually deliver results.
                        </p>
                    </div>
                    <ProcessTimeline steps={process} numberBgColor="bg-sky-500" />
                </div>
            </section>

            <ServiceCTA
                title="Ready to Unlock AI for Your Business?"
                subtitle="Whether you&apos;re exploring AI for the first time or scaling existing models, we&apos;re here to help you harness its full potential."
                primaryBtnText="Book an AI Consultation"
                primaryBtnHref="/contact"
                secondaryBtnText="Explore All Services"
                secondaryBtnHref="/services"
            />
        </>
    )
}
