import '../styles/globals.css'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Script from 'next/script'

const siteConfig = {
  name: 'XenonEdge',
  description: 'XenonEdge builds scalable, secure, and high-performance software solutions. Leading software development company in Sri Lanka specializing in web, mobile, and AI solutions.',
  url: 'https://xenonedge.com', // Replace with actual production URL
  ogImage: 'https://xenonedge.com/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/xenonedge',
    github: 'https://github.com/xenonedge',
  },
}

export const metadata: Metadata = {
  title: {
    default: 'XenonEdge | Modern Software Solutions & Custom Development',
    template: '%s | XenonEdge'
  },
  description: siteConfig.description,
  keywords: [
    'Software Development Sri Lanka',
    'Web Development',
    'Mobile App Development',
    'Custom Software Solutions',
    'AI Integrations',
    'Ecommerce Application',
    'UI/UX Design',
    'Digital Marketing'
  ],
  authors: [{ name: 'XenonEdge' }],
  creator: 'XenonEdge',
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: 'XenonEdge | Modern Software Solutions',
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@xenonedge',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'XenonEdge',
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.github,
    ],
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'LK',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+94 76 229 1826',
      contactType: 'customer service',
      email: 'xenonedgelanka@gmail.com',
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-['Inter']">
        <Script src="https://cdn.lordicon.com/lordicon.js" strategy="afterInteractive" />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
