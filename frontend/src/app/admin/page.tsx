'use client'
import { useState, useEffect } from 'react'
import { useAuth, API_URL } from '@/contexts/AdminAuthContext'
import axios from 'axios'
import Link from 'next/link'
import {
  Star, FileText, Briefcase, MessageSquare,
  TrendingUp, Eye, Users, ArrowUpRight,
  Clock, CheckCircle, AlertCircle, Mail, Settings,
  Pencil, Trash2, LayoutDashboard
} from 'lucide-react'

interface Stats {
  reviews: number
  blogs: number
  portfolio: number
  messages: number
  newMessages: number
  publishedBlogs: number
}

export default function AdminDashboard() {
  const { admin } = useAuth()
  const [stats, setStats] = useState<Stats>({ reviews: 0, blogs: 0, portfolio: 0, messages: 0, newMessages: 0, publishedBlogs: 0 })
  const [recentMessages, setRecentMessages] = useState<any[]>([])
  const [recentContent, setRecentContent] = useState<{blogs: any[], portfolio: any[], reviews: any[]}>({blogs: [], portfolio: [], reviews: []})
  const [activeTab, setActiveTab] = useState<'blogs' | 'portfolio' | 'reviews'>('blogs')
  const [loading, setLoading] = useState(true)
  const [deleteConfirm, setDeleteConfirm] = useState<{type: string, id: string} | null>(null)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const [reviewsRes, blogsRes, portfolioRes, messagesRes] = await Promise.allSettled([
        axios.get(`${API_URL}/reviews?all=true`),
        axios.get(`${API_URL}/blog?limit=100`),
        axios.get(`${API_URL}/portfolio?all=true`),
        axios.get(`${API_URL}/contact`),
      ])

      const reviewsCount = reviewsRes.status === 'fulfilled' ? reviewsRes.value.data.count || 0 : 0
      const reviewsData = reviewsRes.status === 'fulfilled' ? reviewsRes.value.data.data || [] : []
      const blogsData = blogsRes.status === 'fulfilled' ? blogsRes.value.data : null
      const blogsCount = blogsData?.pagination?.total || 0
      const publishedBlogs = blogsData?.data?.filter((b: any) => b.status === 'published').length || 0
      const portfolioCount = portfolioRes.status === 'fulfilled' ? portfolioRes.value.data.count || 0 : 0
      const portfolioData = portfolioRes.status === 'fulfilled' ? portfolioRes.value.data.data || [] : []
      const messagesData = messagesRes.status === 'fulfilled' ? messagesRes.value.data : null
      const messagesCount = messagesData?.count || 0
      const newMessages = messagesData?.data?.filter((m: any) => m.status === 'new').length || 0
      const recent = messagesData?.data?.slice(0, 5) || []

      setStats({ reviews: reviewsCount, blogs: blogsCount, portfolio: portfolioCount, messages: messagesCount, newMessages, publishedBlogs })
      setRecentMessages(recent)
      setRecentContent({
        blogs: blogsData?.data?.slice(0, 5) || [],
        portfolio: portfolioData.slice(0, 5),
        reviews: reviewsData.slice(0, 5)
      })
    } catch (error) {
      console.error('Failed to fetch stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const statCards = [
    { label: 'Total Reviews', value: stats.reviews, icon: Star, href: '/admin/reviews', color: 'from-amber-500 to-orange-500', bg: 'bg-amber-500/10', text: 'text-amber-400' },
    { label: 'Blog Posts', value: stats.blogs, sub: `${stats.publishedBlogs} published`, icon: FileText, href: '/admin/blog', color: 'from-sky-500 to-blue-600', bg: 'bg-sky-500/10', text: 'text-sky-400' },
    { label: 'Portfolio Items', value: stats.portfolio, icon: Briefcase, href: '/admin/portfolio', color: 'from-purple-500 to-violet-600', bg: 'bg-purple-500/10', text: 'text-purple-400' },
    { label: 'Messages', value: stats.messages, sub: `${stats.newMessages} new`, icon: MessageSquare, href: '/admin/messages', color: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-500/10', text: 'text-emerald-400' },
  ]

  const quickActions = [
    { label: 'Add Review', href: '/admin/reviews', icon: Star, desc: 'Add client testimonial' },
    { label: 'New Blog Post', href: '/admin/blog', icon: FileText, desc: 'Write an article' },
    { label: 'Add Project', href: '/admin/portfolio', icon: Briefcase, desc: 'Showcase your work' },
    { label: 'View Messages', href: '/admin/messages', icon: Mail, desc: 'Check inbox' },
    { label: 'Site Settings', href: '/admin/settings', icon: Settings, desc: 'Manage configuration' },
  ]

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">
            Welcome back, {admin?.name?.split(' ')[0]} 👋
          </h1>
          <p className="text-slate-400 text-sm">Here's what's happening with your website today.</p>
        </div>
        <Link href="/" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-sm transition-all duration-200">
          <Eye size={14} />
          View Live Site
          <ArrowUpRight size={12} />
        </Link>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {statCards.map((card) => (
          <Link key={card.label} href={card.href} className="admin-stat-card group rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-2.5 rounded-lg ${card.bg}`}>
                <card.icon size={20} className={card.text} />
              </div>
              <ArrowUpRight size={14} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {loading ? <div className="w-12 h-8 bg-white/10 rounded animate-pulse" /> : card.value}
            </div>
            <div className="text-sm text-slate-400">{card.label}</div>
            {card.sub && <div className="text-xs text-slate-500 mt-0.5">{card.sub}</div>}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Messages */}
        <div className="lg:col-span-2 space-y-6">
          <div className="admin-panel rounded-xl border border-white/10 overflow-hidden">
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <h2 className="font-semibold text-white flex items-center gap-2">
                <MessageSquare size={16} className="text-sky-400" />
                Recent Messages
              </h2>
              <Link href="/admin/messages" className="text-xs text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-1">
                View All <ArrowUpRight size={12} />
              </Link>
            </div>
            <div className="divide-y divide-white/5">
              {loading ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="p-5 flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse flex-shrink-0" />
                    <div className="flex-1 space-y-2">
                      <div className="w-32 h-3 bg-white/10 rounded animate-pulse" />
                      <div className="w-full h-2 bg-white/5 rounded animate-pulse" />
                    </div>
                  </div>
                ))
              ) : recentMessages.length === 0 ? (
                <div className="p-8 text-center text-slate-500">
                  <Mail size={32} className="mx-auto mb-2 opacity-30" />
                  <p className="text-sm">No messages yet</p>
                </div>
              ) : (
                recentMessages.map((msg) => (
                  <div key={msg._id} className="p-5 flex items-start gap-4 hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {msg.firstName?.charAt(0)?.toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-white">{msg.firstName} {msg.lastName}</span>
                        {msg.status === 'new' && (
                          <span className="px-1.5 py-0.5 text-[10px] font-bold bg-sky-500/20 text-sky-400 rounded-full">NEW</span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 truncate">{msg.message}</p>
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className="text-[10px] text-slate-600">{msg.email}</span>
                        <span className="text-[10px] text-slate-600">
                          {new Date(msg.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Live Content Management Section */}
          <div className="admin-panel rounded-xl border border-white/10 overflow-hidden">
            <div className="p-5 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="font-semibold text-white flex items-center gap-2">
                <LayoutDashboard size={16} className="text-sky-400" />
                Live Content Manager
              </h2>
              <div className="flex bg-white/5 rounded-lg p-1 border border-white/10">
                {(['blogs', 'portfolio', 'reviews'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all capitalize ${
                      activeTab === tab ? 'bg-sky-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-5">
              <div className="space-y-4">
                {loading ? (
                  <div className="space-y-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="h-16 bg-white/5 rounded-lg animate-pulse" />
                    ))}
                  </div>
                ) : recentContent[activeTab].length === 0 ? (
                  <div className="text-center py-10 text-slate-500 italic text-sm">
                    No {activeTab} items found.
                  </div>
                ) : (
                  recentContent[activeTab].map((item: any) => (
                    <div key={item._id} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group">
                      <div className="flex items-center gap-4 min-w-0">
                        {activeTab === 'reviews' ? (
                          <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-sky-400 flex-shrink-0">
                            {item.author.charAt(0)}
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-sky-400 flex-shrink-0 overflow-hidden">
                            {item.image || item.coverImage || item.thumbnail ? (
                              <img src={item.image || item.coverImage || item.thumbnail} className="w-full h-full object-cover" />
                            ) : <LayoutDashboard size={16} />}
                          </div>
                        )}
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-white truncate">
                            {item.title || item.author || 'Untitled'}
                          </div>
                          <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">
                            {activeTab === 'blogs' ? item.category : activeTab === 'portfolio' ? item.category : `${item.rating} Stars`}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link 
                          href={`/admin/${activeTab === 'blogs' ? 'blog' : activeTab}`}
                          className="p-2 rounded-lg bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white transition-all"
                          title="Manage/Edit"
                        >
                          <Pencil size={14} />
                        </Link>
                        <button 
                          onClick={() => setDeleteConfirm({ type: activeTab, id: item._id })}
                          className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all"
                          title="Delete"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="mt-6 pt-5 border-t border-white/5">
                <Link 
                  href={`/admin/${activeTab === 'blogs' ? 'blog' : activeTab}`}
                  className="text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-2"
                >
                  Go to Full {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Column: Quick Actions & Status */}
        <div className="space-y-5">
          {/* Quick Actions */}
          <div className="admin-panel rounded-xl border border-white/10 overflow-hidden">
            <div className="p-5 border-b border-white/10">
              <h2 className="font-semibold text-white flex items-center gap-2">
                <TrendingUp size={16} className="text-sky-400" />
                Quick Actions
              </h2>
            </div>
            <div className="p-3 space-y-1">
              {quickActions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-sky-500/20 transition-colors">
                    <action.icon size={14} className="text-slate-400 group-hover:text-sky-400 transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{action.label}</div>
                    <div className="text-xs text-slate-600">{action.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* System Status */}
          <div className="admin-panel rounded-xl border border-white/10 p-5">
            <h2 className="font-semibold text-white flex items-center gap-2 mb-4">
              <CheckCircle size={16} className="text-emerald-400" />
              System Status
            </h2>
            <div className="space-y-3">
              {[
                { label: 'API Server', status: 'Operational', color: 'text-emerald-400', dot: 'bg-emerald-400' },
                { label: 'Database', status: 'Connected', color: 'text-emerald-400', dot: 'bg-emerald-400' },
                { label: 'Cloudinary', status: 'Active', color: 'text-emerald-400', dot: 'bg-emerald-400' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${item.dot} animate-pulse`} />
                    <span className={`text-xs font-medium ${item.color}`}>{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setDeleteConfirm(null)} />
          <div className="relative w-full max-w-sm bg-[#0f172a] border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-500 mb-4 mx-auto">
              <AlertCircle size={24} />
            </div>
            <h3 className="text-lg font-bold text-white text-center mb-2">Delete {deleteConfirm.type.slice(0, -1)}?</h3>
            <p className="text-slate-400 text-sm text-center mb-6">
              Are you sure you want to remove this item? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors border border-white/10 text-sm font-medium"
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  try {
                    const endpoint = deleteConfirm.type === 'blogs' ? 'blog' : deleteConfirm.type;
                    await axios.delete(`${API_URL}/${endpoint}/${deleteConfirm.id}`);
                    setDeleteConfirm(null);
                    fetchStats(); // Refresh dashboard
                  } catch {
                    alert('Failed to delete item');
                  }
                }}
                className="flex-1 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors text-sm font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
