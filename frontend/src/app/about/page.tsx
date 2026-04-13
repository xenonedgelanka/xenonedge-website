import AboutContent from '../../components/AboutContent'

export const metadata = {
  title: 'XenonEdge | About Us',
  description: 'Learn about XenonEdge — our mission, vision, values, and the journey of building world-class software solutions from Sri Lanka.'
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-dark pt-32 pb-24 bg-gradient-to-br from-[#071E3D] to-[#0a2444] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,233,0.06)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"></div>

        <div className="container relative z-10 flex flex-col items-center text-center pt-12">
          <span className="inline-block px-4 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight max-w-4xl">
            Engineering the Future of Digital
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
            We&apos;re a passionate team of engineers, designers, and strategists building scalable, 
            secure, and high-performance systems that drive business growth and innovation worldwide.
          </p>
        </div>
      </section>

      <AboutContent />
    </>
  )
}
