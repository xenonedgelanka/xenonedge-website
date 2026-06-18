import BlogContent from '../../components/BlogContent'
import { FALLBACK_BLOGS } from '../../data/fallbackBlogs'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export const metadata = {
  title: 'Knowledge Hub | xenonedge',
  description: 'Expert perspectives on technology, business strategy, and the future of digital innovation from the xenonedge team.',
  alternates: {
    canonical: 'https://xenonedge.com/blog',
  },
  openGraph: {
    title: 'Knowledge Hub | XenonEdge',
    description: 'Expert perspectives on technology, business strategy, and the future of digital innovation from the XenonEdge team.',
    url: 'https://xenonedge.com/blog',
    siteName: 'XenonEdge',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function BlogPage() {
  let blogs: any[] = []

  try {
    const res = await fetch(`${API_URL}/blog?status=published`, {
      next: { revalidate: 60 }
    })
    if (res.ok) {
      const data = await res.json()
      blogs = data.data || []
    }
  } catch (err) {
    // Fall back to static content
  }

  if (!blogs || blogs.length === 0) {
    blogs = FALLBACK_BLOGS
  }

  return <BlogContent blogs={blogs} />
}
