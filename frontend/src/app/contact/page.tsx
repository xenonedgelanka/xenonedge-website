import ContactForm from '../../components/ContactForm'

export const metadata = {
  title: 'XenonEdge | Contact',
  description: 'Get in touch with XenonEdge to elevate your business with cutting-edge software solutions.'
}

export default function ContactPage() {
  return (
    <>
      <section className="pt-16 pb-8 bg-slate-50 relative overflow-hidden flex flex-col justify-center border-b border-slate-100">
        <div className="container relative z-10 w-full">
          <ContactForm />
        </div>
      </section>
      
      {/* Optional: Trusted Brands or Minimal Footer section could be injected here */}
    </>
  )
}
