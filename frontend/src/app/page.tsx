import Hero from '../components/Hero'
import QuoteSection from '../components/QuoteSection'
import CompanyHighlights from '../components/CompanyHighlights'
import Services from '../components/Services'
import Process from '../components/Process'

import CTA from '../components/CTA'
import PortfolioPreview from '../components/PortfolioPreview'
import Testimonials from '../components/Testimonials'
import BlogPreview from '../components/BlogPreview'
import FAQ from '../components/FAQ'

export const metadata = {
  title: {
    absolute: 'xenonedge | Best Software Development Company in Jaffna, Sri Lanka'
  },
  description: 'Looking for the best software company in Jaffna? xenonedge is the leading software development partner in Sri Lanka. We build custom software solutions, high-performance web development, mobile apps, AI integrations, eCommerce platforms, UI/UX design, SEO, and digital marketing services.',
  alternates: {
    canonical: 'https://xenonedge.com',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuoteSection />
      <CompanyHighlights />
      <Services />
      <Process />
      <PortfolioPreview />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <CTA />
    </>
  )
}
