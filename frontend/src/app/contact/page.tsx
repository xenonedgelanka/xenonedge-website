import ContactForm from '../../components/ContactForm'

export const metadata = {
  title: 'XenonEdge | Contact',
  description: 'Get in touch with XenonEdge to elevate your business with cutting-edge software solutions.'
}

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-24 bg-gradient-to-br from-[#f8fafc] to-[#e0f2fe] relative overflow-hidden min-h-[90vh] flex flex-col justify-center border-b border-sky-100">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-300/30 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-300/20 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-white/40 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container relative z-10">
          <ContactForm />
        </div>
      </section>
      
      {/* Optional: Trusted Brands or Minimal Footer section could be injected here */}
    </>
  )
}
