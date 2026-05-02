'use client'
import { useState, useEffect } from 'react'
import { API_URL } from '@/contexts/AdminAuthContext'
import axios from 'axios'
import toast from 'react-hot-toast'
import Link from 'next/link'
import {
  FileText, Plus, Pencil, Trash2, Eye, EyeOff,
  Search, X, Check, Upload, Tag, Calendar,
  BookOpen, Globe, Lock, Star, ArrowUpRight,
  TrendingUp, Users
} from 'lucide-react'

interface BlogPost {
  _id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  image: string
  author: string
  status: 'draft' | 'published'
  featured: boolean
  views: number
  createdAt: string
}

const CATEGORIES = ['Architecture', 'Design', 'AI', 'Development', 'Mobile', 'Cloud', 'Security', 'Other']

const EMPTY_FORM = {
  title: '', slug: '', excerpt: '', content: '',
  category: 'Development', tags: '', author: 'XenonEdge Team',
  status: 'draft' as 'draft' | 'published', featured: false, readTime: 5
}

export default function BlogAdmin() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState('')
  const [saving, setSaving] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState<'all' | 'published' | 'draft'>('all')
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)

  useEffect(() => { fetchPosts() }, [])

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/blog?limit=100&status=all`)
      setPosts(data.data || [])
    } catch { toast.error('Failed to load posts') }
    finally { setLoading(false) }
  }

  const openNew = () => {
    setForm(EMPTY_FORM)
    setImageFile(null)
    setImagePreview('')
    setEditingId(null)
    setShowForm(true)
    setTimeout(() => document.getElementById('blog-form-top')?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  const openEdit = (post: BlogPost) => {
    setForm({
      title: post.title, slug: post.slug, excerpt: post.excerpt,
      content: post.content, category: post.category,
      tags: post.tags?.join(', ') || '', author: post.author,
      status: post.status, featured: post.featured, readTime: 5
    })
    setImagePreview(post.image || '')
    setImageFile(null)
    setEditingId(post._id)
    setShowForm(true)
    setTimeout(() => document.getElementById('blog-form-top')?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setImageFile(file)
    setImagePreview(URL.createObjectURL(file))
  }

  const autoSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      const formData = new FormData()
      Object.entries(form).forEach(([k, v]) => formData.append(k, String(v)))
      if (!form.slug) formData.set('slug', autoSlug(form.title) + '-' + Date.now())
      if (imageFile) formData.append('image', imageFile)

      if (editingId) {
        await axios.put(`${API_URL}/blog/${editingId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        toast.success('Post updated!')
      } else {
        await axios.post(`${API_URL}/blog`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        toast.success('Post created!')
      }
      setShowForm(false)
      setEditingId(null)
      fetchPosts()
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to save post')
    } finally { setSaving(false) }
  }

  const toggleStatus = async (post: BlogPost) => {
    try {
      const newStatus = post.status === 'published' ? 'draft' : 'published'
      const formData = new FormData()
      formData.append('status', newStatus)
      await axios.put(`${API_URL}/blog/${post._id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      toast.success(newStatus === 'published' ? 'Post published!' : 'Moved to draft')
      fetchPosts()
    } catch { toast.error('Failed to update') }
  }

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${API_URL}/blog/${id}`)
      toast.success('Post deleted')
      setDeleteConfirm(null)
      fetchPosts()
    } catch { toast.error('Failed to delete') }
  }

  const filtered = posts.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchStatus = filterStatus === 'all' || p.status === filterStatus
    return matchSearch && matchStatus
  })

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div id="blog-form-top" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <FileText size={22} className="text-sky-400" /> Blog Posts
          </h1>
          <p className="text-slate-400 text-sm mt-1">Create and manage blog articles</p>
        </div>
        <button onClick={openNew} className="admin-btn-primary flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold">
          <Plus size={16} /> New Post
        </button>
      </div>

      {/* Blog Form */}
      {showForm && (
        <div className="admin-panel rounded-xl border border-white/10 overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <h2 className="font-semibold text-white">{editingId ? 'Edit Post' : 'New Blog Post'}</h2>
            <button onClick={() => setShowForm(false)} className="text-slate-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Image Upload */}
            <div>
              <label className="admin-label">Cover Image</label>
              <label className="relative block cursor-pointer group">
                <div className={`w-full h-48 rounded-xl overflow-hidden border-2 border-dashed transition-colors ${
                  imagePreview ? 'border-sky-500/30' : 'border-white/10 hover:border-sky-500/40'
                } bg-white/5 flex items-center justify-center`}>
                  {imagePreview ? (
                    <img src={imagePreview} alt="Cover" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center">
                      <Upload size={32} className="mx-auto mb-2 text-slate-600" />
                      <p className="text-sm text-slate-500">Click to upload cover image</p>
                      <p className="text-xs text-slate-600 mt-1">JPG, PNG, WebP up to 10MB</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                    <div className="text-white text-sm font-medium flex items-center gap-2">
                      <Upload size={16} /> Change Image
                    </div>
                  </div>
                </div>
                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Title */}
              <div className="md:col-span-2">
                <label className="admin-label">Title *</label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 flex items-center justify-center text-slate-500 pointer-events-none">
                    <FileText size={18} />
                  </div>
                  <input className="admin-input w-full !pl-14 text-lg font-medium" required value={form.title}
                    onChange={e => setForm({ ...form, title: e.target.value, slug: autoSlug(e.target.value) })}
                    placeholder="Enter post title..." />
                </div>
              </div>

              {/* Slug */}
              <div>
                <label className="admin-label">Slug (URL)</label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 flex items-center justify-center text-slate-500 pointer-events-none">
                    <TrendingUp size={16} />
                  </div>
                  <input className="admin-input w-full !pl-14 font-mono text-xs" value={form.slug}
                    onChange={e => setForm({ ...form, slug: e.target.value })}
                    placeholder="auto-generated-from-title" />
                </div>
              </div>

              {/* Author */}
              <div>
                <label className="admin-label">Author</label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 flex items-center justify-center text-slate-500 pointer-events-none">
                    <Users size={16} />
                  </div>
                  <input className="admin-input w-full !pl-14" value={form.author}
                    onChange={e => setForm({ ...form, author: e.target.value })} placeholder="Author name" />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="admin-label">Category *</label>
                <select className="admin-input w-full" value={form.category}
                  onChange={e => setForm({ ...form, category: e.target.value })}>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              {/* Read Time */}
              <div>
                <label className="admin-label">Read Time (minutes)</label>
                <input type="number" className="admin-input w-full" value={form.readTime} min={1}
                  onChange={e => setForm({ ...form, readTime: parseInt(e.target.value) })} />
              </div>

              {/* Tags */}
              <div className="md:col-span-2">
                <label className="admin-label">Tags (comma-separated)</label>
                <input className="admin-input w-full" value={form.tags}
                  onChange={e => setForm({ ...form, tags: e.target.value })}
                  placeholder="react, nextjs, typescript" />
              </div>

              {/* Excerpt */}
              <div className="md:col-span-2">
                <label className="admin-label">Excerpt / Summary *</label>
                <textarea className="admin-input w-full resize-none" rows={2} required value={form.excerpt}
                  onChange={e => setForm({ ...form, excerpt: e.target.value })}
                  placeholder="Short summary of the article..." />
              </div>

              {/* Content */}
              <div className="md:col-span-2">
                <label className="admin-label">Content (Markdown / HTML) *</label>
                <textarea className="admin-input w-full resize-none font-mono text-xs leading-relaxed" rows={14} required value={form.content}
                  onChange={e => setForm({ ...form, content: e.target.value })}
                  placeholder="Write your article content here...&#10;&#10;# Heading&#10;## Sub-heading&#10;&#10;Paragraph text..." />
              </div>
            </div>

            {/* Status & Featured */}
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-3">
                <label className="text-sm text-slate-400">Status</label>
                <select className="admin-input py-1.5 text-sm" value={form.status}
                  onChange={e => setForm({ ...form, status: e.target.value as any })}>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <label className="text-sm text-slate-400">Featured Post</label>
                <button type="button" onClick={() => setForm({ ...form, featured: !form.featured })}
                  className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${form.featured ? 'bg-amber-500' : 'bg-slate-600'}`}>
                  <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${form.featured ? 'translate-x-6' : 'translate-x-0.5'}`} />
                </button>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button type="submit" disabled={saving} className="admin-btn-primary px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2">
                {saving ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Check size={16} />}
                {editingId ? 'Save Changes' : 'Create Post'}
              </button>
              <button type="button" onClick={() => setShowForm(false)}
                className="px-6 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex items-center flex-1 sm:max-w-xs">
          <div className="absolute left-3 flex items-center justify-center text-slate-500 pointer-events-none">
            <Search size={18} />
          </div>
          <input className="admin-input !pl-14 w-full" placeholder="Search posts..."
            value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
        <div className="flex gap-2">
          {(['all', 'published', 'draft'] as const).map(s => (
            <button key={s} onClick={() => setFilterStatus(s)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold capitalize transition-all ${
                filterStatus === s ? 'bg-sky-500 text-white' : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10'
              }`}>{s}</button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      {loading ? (
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="admin-panel rounded-xl border border-white/10 p-5 animate-pulse flex gap-5">
              <div className="w-32 h-20 bg-white/10 rounded-lg flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="w-2/3 h-4 bg-white/10 rounded" />
                <div className="w-full h-2 bg-white/5 rounded" />
                <div className="w-24 h-2 bg-white/5 rounded" />
              </div>
            </div>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="admin-panel rounded-xl border border-white/10 p-16 text-center">
          <BookOpen size={48} className="mx-auto mb-4 text-slate-700" />
          <p className="text-slate-400 text-lg font-medium">No posts found</p>
          <button onClick={openNew} className="admin-btn-primary mt-5 px-6 py-2.5 rounded-lg text-sm font-semibold inline-flex items-center gap-2">
            <Plus size={16} /> Write First Post
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((post) => (
            <div key={post._id} className="admin-panel rounded-xl border border-white/10 hover:border-white/20 transition-all overflow-hidden flex">
              {/* Cover */}
              <div className="w-36 h-24 flex-shrink-0 bg-white/5 relative overflow-hidden">
                {post.image ? (
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FileText size={24} className="text-slate-700" />
                  </div>
                )}
                {post.featured && (
                  <div className="absolute top-2 left-2 bg-amber-500 rounded p-0.5">
                    <Star size={10} className="text-white" fill="white" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 flex items-center gap-4 px-5 py-4 min-w-0">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      post.status === 'published'
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-slate-500/20 text-slate-400'
                    }`}>
                      {post.status === 'published' ? <Globe size={8} /> : <Lock size={8} />}
                      {post.status}
                    </span>
                    <span className="text-[10px] text-slate-600 bg-white/5 px-2 py-0.5 rounded">{post.category}</span>
                  </div>
                  <h3 className="font-semibold text-white text-sm truncate">{post.title}</h3>
                  <p className="text-xs text-slate-500 truncate mt-0.5">{post.excerpt}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-[10px] text-slate-600 flex items-center gap-1">
                      <Calendar size={9} /> {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                    <span className="text-[10px] text-slate-600 flex items-center gap-1">
                      <Eye size={9} /> {post.views} views
                    </span>
                    {post.tags?.length > 0 && (
                      <span className="text-[10px] text-slate-600 flex items-center gap-1">
                        <Tag size={9} /> {post.tags.slice(0, 2).join(', ')}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button onClick={() => toggleStatus(post)} title={post.status === 'published' ? 'Unpublish' : 'Publish'}
                    className={`p-2 rounded-lg transition-colors ${post.status === 'published' ? 'text-emerald-400 hover:bg-emerald-400/10' : 'text-slate-500 hover:bg-white/10'}`}>
                    {post.status === 'published' ? <Globe size={15} /> : <Lock size={15} />}
                  </button>
                  <button onClick={() => openEdit(post)}
                    className="p-2 rounded-lg text-sky-400 hover:bg-sky-400/10 transition-colors">
                    <Pencil size={15} />
                  </button>
                  {deleteConfirm === post._id ? (
                    <div className="flex items-center gap-1">
                      <button onClick={() => handleDelete(post._id)} className="p-2 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors"><Check size={15} /></button>
                      <button onClick={() => setDeleteConfirm(null)} className="p-2 rounded-lg text-slate-400 hover:bg-white/10 transition-colors"><X size={15} /></button>
                    </div>
                  ) : (
                    <button onClick={() => setDeleteConfirm(post._id)} className="p-2 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors"><Trash2 size={15} /></button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
