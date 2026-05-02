import PortfolioGrid from '../../components/PortfolioGrid'

export const metadata = {
  title: 'XenonEdge | Portfolio & Our Works',
  description: 'Selected projects, graphic designs, and web applications delivered by XenonEdge.'
}

export default function PortfolioPage() {
  return (
    <>
      <section className="py-10 bg-[#071E3D] relative overflow-hidden hero-dark">
        {/* Architectural Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        <div className="container relative z-10 flex flex-col items-center pt-12 pb-4">
          <span className="inline-block px-4 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
            Our Showcase
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter text-center uppercase">
            Our Works
          </h1>
          <p className="mt-6 text-base md:text-lg text-slate-400 max-w-2xl text-center leading-relaxed">
            Explore our curated selection of high-performance projects spanning across Web Design, Mobile Apps, and Graphic Design. Engineering digital excellence that drives real-world results.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white relative z-10">
        <div className="container">
          <PortfolioGrid />
        </div>
      </section>
    </>
  )
}
