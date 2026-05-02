import AboutContent from '../../components/AboutContent'

export const metadata = {
  title: 'XenonEdge | About Us',
  description: 'Learn about XenonEdge — our mission, vision, values, and the journey of building world-class software solutions from Sri Lanka.'
}

export default function AboutPage() {
  return (
    <>
      <section className="hero-dark relative pt-20 pb-12 overflow-hidden bg-[#0B1E36]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
              About Us
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">Future of Digital</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl text-left">
              XenonEdge is a premier software development firm dedicated to engineering excellence. 
              We transform ambitious ideas into high-performance digital products through state-of-the-art 
              technology, precision coding, and bespoke innovation tailored for global enterprises.
            </p>
          </div>
        </div>
      </section>

      <AboutContent />
    </>
  )
}
