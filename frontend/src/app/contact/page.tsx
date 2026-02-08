export const metadata = {
  title: 'XenonEdge | Contact',
  description: 'Contact XenonEdge to discuss your software, cloud, or product design needs.'
}

export default function ContactPage() {
  return (
    <>
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white border-b">
        <div className="container max-w-2xl">
          <h1 className="text-5xl font-extrabold text-gray-900">Let's Work Together</h1>
          <p className="mt-4 text-lg text-gray-600">Tell us about your project and we'll get back to you with tailored solutions and a timeline.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="container max-w-2xl">

          <form className="mt-8 grid grid-cols-1 gap-4">
            <label className="flex flex-col">
              <span className="text-sm text-[var(--muted)]">Name</span>
              <input name="name" type="text" className="mt-1 rounded p-3 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)]" />
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-[var(--muted)]">Email</span>
              <input name="email" type="email" className="mt-1 rounded p-3 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)]" />
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-[var(--muted)]">Company</span>
              <input name="company" type="text" className="mt-1 rounded p-3 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)]" />
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-[var(--muted)]">Message</span>
              <textarea name="message" rows={6} className="mt-1 rounded p-3 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)]" />
            </label>

            <div>
              <button type="submit" className="rounded bg-[var(--accent)] px-5 py-3 text-white">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
