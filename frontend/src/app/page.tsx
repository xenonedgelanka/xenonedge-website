import Hero from '../components/Hero'
import QuoteSection from '../components/QuoteSection'
import CompanyHighlights from '../components/CompanyHighlights'
import Services from '../components/Services'
import Process from '../components/Process'

import CTA from '../components/CTA'
import PortfolioPreview from '../components/PortfolioPreview'
import Testimonials from '../components/Testimonials'
import BlogPreview from '../components/BlogPreview'

export const metadata = {
  title: 'xenonedge',
  description: 'XenonEdge delivers scalable, secure, and high-performance software solutions. From custom web development to enterprise digital transformations, we build tomorrow’s technology today | Leading Software Development Company & Custom IT Solutions'
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
      <CTA />
    </>
  )
}
