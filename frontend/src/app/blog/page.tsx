import BlogContent from '../../components/BlogContent'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export const metadata = {
  title: 'Knowledge Hub',
  description: 'Expert perspectives on technology, business strategy, and the future of digital innovation from the XenonEdge team.'
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
    // Blog data unavailable — render empty state gracefully
  }

  return <BlogContent blogs={blogs} />
}
