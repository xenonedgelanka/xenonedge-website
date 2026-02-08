export const metadata = {
  title: 'XenonEdge | About Us',
  description: 'Company overview: mission, vision, and values of XenonEdge.'
}

export default function AboutPage() {
  return (
    <>
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white border-b">
        <div className="container">
          <h1 className="text-5xl font-extrabold text-gray-900">About XenonEdge</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">We're a software solutions company focused on delivering scalable, secure, and high-performance systems that drive business growth and innovation worldwide.</p>
        </div>
      </section>
      <section className="py-12">
      <div className="container">

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="card">
            <h2 className="text-xl font-semibold">Mission</h2>
            <p className="mt-2 text-[var(--muted)]">To empower organizations with software that accelerates growth and improves user experience.</p>
          </article>

          <article className="card">
            <h2 className="text-xl font-semibold">Vision</h2>
            <p className="mt-2 text-[var(--muted)]">To be a trusted global partner for building resilient and innovative digital products.</p>
          </article>

          <article className="card md:col-span-2">
            <h2 className="text-xl font-semibold">Values</h2>
            <ul className="mt-3 list-disc pl-5 text-[var(--muted)]">
              <li>Quality-first engineering</li>
              <li>Security and privacy by design</li>
              <li>Customer-centric partnership</li>
              <li>Continuous improvement and learning</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
    </>
  )
}
