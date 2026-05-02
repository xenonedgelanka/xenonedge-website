import '../styles/globals.css'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Script from 'next/script'
import { headers } from 'next/headers'
import { Toaster } from 'react-hot-toast'

const siteConfig = {
  name: 'XenonEdge',
  description: 'XenonEdge builds scalable, secure, and high-performance software solutions. Leading software development company in Sri Lanka specializing in web, mobile, and AI solutions.',
  url: 'https://xenonedge.com',
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
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: 'XenonEdge | Modern Software Solutions',
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
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
    icon: [
      { url: '/images/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers()
  const pathname = headersList.get('x-invoke-path') || headersList.get('x-pathname') || ''
  const isAdmin = pathname.startsWith('/admin')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'XenonEdge',
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [siteConfig.links.twitter, siteConfig.links.github],
    description: siteConfig.description,
    address: { '@type': 'PostalAddress', addressCountry: 'LK' },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+94 76 229 1826',
      contactType: 'customer service',
      email: 'xenonedgelanka@gmail.com',
    },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <Script src="https://cdn.lordicon.com/lordicon.js" strategy="afterInteractive" />
        {isAdmin ? (
          <>{children}</>
        ) : (
          <div className="min-h-screen flex flex-col">
            <Toaster position="top-right" toastOptions={{
              style: { background: '#0B1E36', color: '#f1f5f9' },
              success: { iconTheme: { primary: '#38bdf8', secondary: '#0f172a' } },
            }} />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        )}
      </body>
    </html>
  )
}
