export const metadata = {
  title: 'XenonEdge | Software Development Company in Sri Lanka & Worldwide',
  description: 'Expert software development services in Sri Lanka. We build scalable web, mobile, AI, and ecommerce solutions for a global audience with top-tier technology.'
}

export default function ServicesPage() {
  return (
    <>
      <section className="py-24 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
        <div className="container relative px-6 mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-[#071427] tracking-tight">
            Premium <span className="text-sky-500">Software</span> Services
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl leading-relaxed">
            Delivering high-performance, secure, and scalable digital solutions. As a leading software development company in Sri Lanka, we empower businesses worldwide with state-of-the-art technology.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="p-10 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300" id="web-development">
              <h2 className="text-2xl font-bold text-[#071427] mb-4">Web Development</h2>
              <p className="text-slate-600 leading-relaxed">
                Robust, scalable web platforms using modern frameworks like React, Next.js, and specialized backend architectures. We focus on performance, security, and seamless user experiences.
              </p>
            </article>

            <article className="p-10 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300" id="mobile-app-development">
              <h2 className="text-2xl font-bold text-[#071427] mb-4">Mobile App Development</h2>
              <p className="text-slate-600 leading-relaxed">
                Cross-platform and native mobile applications with strong UX, performance optimizations, and platform alignment. We use React Native, Flutter, and native technologies to deliver top-tier mobile experiences.
              </p>
            </article>

            <article className="p-10 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300" id="custom-software-solutions">
              <h2 className="text-2xl font-bold text-[#071427] mb-4">Custom Software Solutions</h2>
              <p className="text-slate-600 leading-relaxed">
                Tailored software built to solve your unique business challenges. From enterprise resource planning (ERP) to custom CRM systems, we build solutions that integrate seamlessly with your existing workflows.
              </p>
            </article>

            <article className="p-10 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300" id="ecommerce-application">
              <h2 className="text-2xl font-bold text-[#071427] mb-4">Ecommerce Application</h2>
              <p className="text-slate-600 leading-relaxed">
                Scalable and secure online stores designed to drive sales and provide a seamless shopping experience. We specialize in Shopify, WooCommerce, and custom-built ecommerce platforms.
              </p>
            </article>

            <article className="p-10 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300" id="ai-integrations">
              <h2 className="text-2xl font-bold text-[#071427] mb-4">AI Integrations</h2>
              <p className="text-slate-600 leading-relaxed">
                Empower your applications with intelligent automation, custom LLM fine-tuning, and advanced machine learning models. We focus on enhancing efficiency and personalizing user experiences through state-of-the-art AI technology.
              </p>
            </article>

            <article className="p-10 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300" id="ui-ux-design">
              <h2 className="text-2xl font-bold text-[#071427] mb-4">UI/UX Design</h2>
              <p className="text-slate-600 leading-relaxed">
                Crafting intuitive, user-centric interfaces that blend aesthetics with functionality. Our design process ensures a seamless and engaging experience across all digital touchpoints.
              </p>
            </article>

            <article className="p-10 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300" id="seo-content-writing">
              <h2 className="text-2xl font-bold text-[#071427] mb-4">SEO & Content Writing</h2>
              <p className="text-slate-600 leading-relaxed">
                Boost your visibility and engage users with high-quality, SEO-optimized content. Our strategies improve search rankings and drive organic traffic to your digital platforms.
              </p>
            </article>

            <article className="p-10 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300" id="digital-marketing">
              <h2 className="text-2xl font-bold text-[#071427] mb-4">Digital Marketing</h2>
              <p className="text-slate-600 leading-relaxed">
                Strategic marketing to grow your brand and reach your audience. We specialize in social media marketing, PPC campaigns, and data-driven marketing strategies to maximize ROI.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
