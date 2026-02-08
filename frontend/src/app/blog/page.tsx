export const metadata = {
  title: 'XenonEdge | Blog',
  description: 'Articles and insights from XenonEdge.'
}

const posts = [
  { id: 'b1', title: 'Scaling with Serverless', excerpt: 'Best practices for serverless architectures.', date: '2025-11-01' },
  { id: 'b2', title: 'Designing for Performance', excerpt: 'Frontend strategies to improve UX and speed.', date: '2025-08-12' }
]

export default function BlogPage() {
  return (
    <>
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white border-b">
        <div className="container">
          <h1 className="text-5xl font-extrabold text-gray-900">Blog & Insights</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">Explore the latest articles on software engineering, cloud architecture, and digital innovation from our team of experts.</p>
        </div>
      </section>
      <section className="py-12 section-light">
      <div className="container">

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((p) => (
            <article key={p.id} className="card">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <div className="text-[var(--muted)] text-sm">{p.date}</div>
              <p className="mt-2 text-[var(--muted)]">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
