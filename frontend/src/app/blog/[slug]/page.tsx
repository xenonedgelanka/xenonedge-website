import Image from 'next/image'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import { notFound } from 'next/navigation'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

interface BlogPost {
  _id: string
  title: string
  category: string
  createdAt: string
  image: string
  content: string
  excerpt: string
  author: string
  tags?: string[]
}

async function getBlogPost(id: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${API_URL}/blog/${id}`, { next: { revalidate: 60 } })
    if (!res.ok) return null
    const json = await res.json()
    return json.data
  } catch (err) {
    return null
  }
}

async function getRecentPosts(excludeId: string): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${API_URL}/blog?limit=4&status=published`, { next: { revalidate: 60 } })
    if (!res.ok) return []
    const json = await res.json()
    return (json.data || []).filter((p: BlogPost) => p._id !== excludeId).slice(0, 3)
  } catch (err) {
    return []
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric' 
  }).replace(/(\d+)/, (match) => {
    const day = parseInt(match);
    const suffix = ['th', 'st', 'nd', 'rd'][(day % 10 > 3 || Math.floor(day % 100 / 10) === 1) ? 0 : day % 10];
    return match + suffix;
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    notFound();
  }

  const recentPosts = await getRecentPosts(post._id);

  return (
    <>
      <section className="hero-dark pt-24 pb-12 bg-[#071E3D] text-white">
        <div className="container relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sky-400 hover:text-white mb-8 font-bold uppercase tracking-widest text-xs transition-all group">
            <FiArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Knowledge Hub
          </Link>

          <div className="max-w-4xl">
            <span className="inline-flex items-center px-4 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-8 uppercase">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
              <span>By {post.author}</span>
              <div className="w-1 h-1 bg-sky-500 rounded-full"></div>
              <span>Published on {formatDate(post.createdAt)}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Main Content Area */}
          <article className="lg:w-2/3">
            <div className="relative aspect-[21/10] w-full rounded-2xl overflow-hidden shadow-2xl mb-16">
              {post.image ? (
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                  <FiArrowLeft size={64} />
                </div>
              )}
            </div>

            <div className="prose prose-lg max-w-none text-slate-600 prose-headings:text-[#071E3D] prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-a:text-sky-600 prose-li:marker:text-sky-500 prose-strong:text-[#071E3D]">
              <div className="lead text-xl md:text-2xl text-[#071E3D] font-bold leading-relaxed mb-12 border-l-4 border-sky-500 pl-8">
                {post.excerpt}
              </div>

              {/* In a real app, this content would be HTML from a CMS or Markdown */}
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
              
              {post.tags && post.tags.length > 0 && (
                <div className="mt-20 pt-10 border-t border-slate-100">
                  <div className="flex flex-wrap gap-3 items-center">
                    <span className="font-bold text-[#071E3D] text-xs uppercase tracking-widest mr-2">Core Themes:</span>
                    {post.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 bg-slate-50 rounded-lg text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:bg-sky-500 hover:text-white cursor-pointer transition-all">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>

          {/* Sidebar Area */}
          <aside className="lg:w-1/3">
            <div className="sticky top-32">
              <h3 className="text-xl font-black text-[#071E3D] mb-10 uppercase tracking-tight relative inline-block">
                Latest Insights
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-sky-500 rounded-full"></div>
              </h3>

              <div className="flex flex-col gap-8">
                {recentPosts.map(recent => (
                  <Link key={recent._id} href={`/blog/${recent._id}`} className="group flex gap-6 items-start transition-all">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 shadow-sm">
                      {recent.image ? (
                        <Image
                          src={recent.image}
                          alt={recent.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-200">
                          <FiArrowLeft size={24} />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <span className="text-[9px] font-bold text-sky-500 uppercase tracking-widest block mb-2">
                        {formatDate(recent.createdAt)}
                      </span>
                      <h4 className="text-sm font-black text-[#071E3D] group-hover:text-sky-600 transition-colors line-clamp-2 leading-snug uppercase tracking-tight">
                        {recent.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Newsletter Widget */}
              <div className="mt-16 bg-[#071E3D] rounded-2xl p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 blur-2xl rounded-full"></div>
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tight relative z-10">Stay Ahead</h4>
                <p className="text-xs text-slate-400 mb-8 font-bold uppercase tracking-widest leading-relaxed relative z-10">Get premium tech insights delivered weekly.</p>
                <div className="flex flex-col gap-4 relative z-10">
                  <input type="email" placeholder="Email address" className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-sky-500 text-sm transition-all" />
                  <button className="w-full py-4 bg-sky-500 text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/20">Subscribe</button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
