import Image from 'next/image'

export const metadata = {
  title: 'XenonEdge | Portfolio',
  description: 'Selected projects and case studies from XenonEdge.'
}

const projects = [
  { id: 'p1', title: 'Fintech Dashboard', img: '/images/portfolio-1.svg' },
  { id: 'p2', title: 'Health App', img: '/images/portfolio-2.svg' },
  { id: 'p3', title: 'E-commerce Platform', img: '/images/portfolio-3.svg' }
]

export default function PortfolioPage() {
  return (
    <>
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white border-b">
        <div className="container">
          <h1 className="text-5xl font-extrabold text-gray-900">Our Portfolio</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">Showcasing innovative projects and successful case studies from our work with leading brands and startups.</p>
        </div>
      </section>
      <section className="py-12 section-light">
      <div className="container">

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.id} className="card">
              <div className="h-48 w-full relative">
                <Image src={p.img} alt={p.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 className="mt-3 font-semibold">{p.title}</h3>
              <p className="mt-2 text-[var(--muted)]">Short summary of the project and the value delivered.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
