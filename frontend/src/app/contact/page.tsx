import ContactForm from '../../components/ContactForm'

export const metadata = {
  title: 'Contact Us | XenonEdge Software Solutions',
  description: 'Get in touch with XenonEdge, the leading software development company in Jaffna, Sri Lanka, for premium custom software development, mobile apps, web, AI, and digital marketing.',
  alternates: {
    canonical: 'https://xenonedge.com/contact',
  }
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="pt-32 pb-14 bg-slate-50 relative overflow-hidden text-center">
        <p className="text-[12px] uppercase tracking-[0.3em] text-sky-600 font-medium mb-4">
          Let&apos;s Build Together
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-[#0B1E36] mb-4">
          Get in <em className="font-serif italic font-normal text-sky-600">Touch</em>
        </h1>
        <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Have a project in mind? We&apos;d love to hear about it. Drop us a message and let&apos;s turn your ideas into powerful software.
        </p>
        <div className="w-12 h-[2px] bg-slate-300 mx-auto mt-6" />
      </section>

      {/* Contact Content */}
      <section className="bg-slate-50 pb-20 relative overflow-hidden">
        <div className="container relative z-10 w-full">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
