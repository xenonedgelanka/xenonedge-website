'use client'
import { useState, useEffect, useRef } from 'react'
import { API_URL } from '@/contexts/AdminAuthContext'
import axios from 'axios'
import toast from 'react-hot-toast'
import {
  Briefcase, Plus, Pencil, Trash2, Eye, EyeOff,
  Search, X, Check, Upload, Link as LinkIcon,
  Github, Star, Grid3X3, FileText, Settings
} from 'lucide-react'

interface PortfolioItem {
  _id: string
  title: string
  description: string
  category: string
  technologies: string[]
  image: string
  liveUrl: string
  githubUrl: string
  featured: boolean
  isVisible: boolean
  order: number
  createdAt: string
}

const CATEGORIES = ['Web Design', 'Mobile App', 'Graphic Design', 'UI/UX', 'E-commerce', 'AI/ML', 'Other']

const EMPTY_FORM = {
  title: '', description: '', category: 'Web Design',
  technologies: '', liveUrl: '', githubUrl: '',
  featured: false, isVisible: true, order: 0
}

export default function PortfolioAdmin() {
  const [projects, setProjects] = useState<PortfolioItem[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState('')
  const [saving, setSaving] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCat, setFilterCat] = useState('All')
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  useEffect(() => { fetchProjects() }, [])

  const fetchProjects = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/portfolio?all=true`)
      setProjects(data.data || [])
    } catch { toast.error('Failed to load projects') }
    finally { setLoading(false) }
  }

  const openNew = () => {
    setForm(EMPTY_FORM); setImageFile(null); setImagePreview(''); setEditingId(null); setShowForm(true)
    setTimeout(() => document.getElementById('portfolio-form-top')?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  const openEdit = (item: PortfolioItem) => {
    setForm({
      title: item.title, description: item.description, category: item.category,
      technologies: item.technologies?.join(', ') || '', liveUrl: item.liveUrl || '',
      githubUrl: item.githubUrl || '', featured: item.featured, isVisible: item.isVisible, order: item.order
    })
    setImagePreview(item.image || ''); setImageFile(null); setEditingId(item._id); setShowForm(true)
    setTimeout(() => document.getElementById('portfolio-form-top')?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setSaving(true)
    try {
      const formData = new FormData()
      Object.entries(form).forEach(([k, v]) => formData.append(k, String(v)))
      if (imageFile) formData.append('image', imageFile)
      if (editingId) {
        await axios.put(`${API_URL}/portfolio/${editingId}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        toast.success('Project updated!')
      } else {
        await axios.post(`${API_URL}/portfolio`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        toast.success('Project added!')
      }
      setShowForm(false); setEditingId(null); fetchProjects()
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to save')
    } finally { setSaving(false) }
  }

  const toggleVisibility = async (item: PortfolioItem) => {
    try {
      const formData = new FormData(); formData.append('isVisible', String(!item.isVisible))
      await axios.put(`${API_URL}/portfolio/${item._id}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      toast.success(item.isVisible ? 'Hidden' : 'Now visible'); fetchProjects()
    } catch { toast.error('Failed to update') }
  }

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${API_URL}/portfolio/${id}`)
      toast.success('Project deleted'); setDeleteConfirm(null); fetchProjects()
    } catch { toast.error('Failed to delete') }
  }

  const filtered = projects.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchCat = filterCat === 'All' || p.category === filterCat
    return matchSearch && matchCat
  })

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div id="portfolio-form-top" />
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Briefcase size={22} className="text-purple-400" /> Portfolio
          </h1>
          <p className="text-slate-400 text-sm mt-1">Manage portfolio projects shown on website</p>
        </div>
        <button onClick={openNew} className="admin-btn-primary flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold">
          <Plus size={16} /> Add Project
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="admin-panel rounded-xl border border-white/10 overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <h2 className="font-semibold text-white">{editingId ? 'Edit Project' : 'Add New Project'}</h2>
            <button onClick={() => setShowForm(false)} className="text-slate-400 hover:text-white transition-colors"><X size={20} /></button>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Image */}
            <div>
              <label className="admin-label">Project Image</label>
              <label className="relative block cursor-pointer group">
                <div className={`w-full h-52 rounded-xl overflow-hidden border-2 border-dashed transition-colors ${
                  imagePreview ? 'border-purple-500/30' : 'border-white/10 hover:border-purple-500/40'
                } bg-white/5 flex items-center justify-center`}>
                  {imagePreview ? (
                    <img src={imagePreview} alt="Project" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center">
                      <Upload size={32} className="mx-auto mb-2 text-slate-600" />
                      <p className="text-sm text-slate-500">Upload project screenshot or mockup</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                    <div className="text-white text-sm font-medium flex items-center gap-2"><Upload size={16} /> Change Image</div>
                  </div>
                </div>
                <input type="file" accept="image/*" className="hidden" onChange={e => {
                  const f = e.target.files?.[0]; if (f) { setImageFile(f); setImagePreview(URL.createObjectURL(f)) }
                }} />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="admin-label">Project Title *</label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 flex items-center justify-center text-slate-500 pointer-events-none">
                    <FileText size={16} />
                  </div>
                  <input className="admin-input w-full !pl-14" required value={form.title}
                    onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Enter project name" />
                </div>
              </div>
              <div>
                <label className="admin-label">Category *</label>
                <select className="admin-input w-full" value={form.category}
                  onChange={e => setForm({ ...form, category: e.target.value })}>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="admin-label">Display Order</label>
                <input type="number" className="admin-input w-full" value={form.order}
                  onChange={e => setForm({ ...form, order: parseInt(e.target.value) })} />
              </div>
              <div className="md:col-span-2">
                <label className="admin-label">Description</label>
                <textarea className="admin-input w-full resize-none" rows={3} value={form.description}
                  onChange={e => setForm({ ...form, description: e.target.value })}
                  placeholder="Brief description of the project..." />
              </div>
              <div className="md:col-span-2">
                <label className="admin-label">Technologies (comma-separated)</label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 flex items-center justify-center text-slate-500 pointer-events-none">
                    <Settings size={16} />
                  </div>
                  <input className="admin-input w-full !pl-14" value={form.technologies}
                    onChange={e => setForm({ ...form, technologies: e.target.value })}
                    placeholder="React, Next.js, TypeScript, MongoDB" />
                </div>
              </div>
              <div>
                <label className="admin-label">Live URL</label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 flex items-center justify-center text-slate-500 pointer-events-none">
                    <LinkIcon size={16} />
                  </div>
                  <input className="admin-input w-full !pl-14" value={form.liveUrl}
                    onChange={e => setForm({ ...form, liveUrl: e.target.value })} placeholder="https://example.com" />
                </div>
              </div>
              <div>
                <label className="admin-label">GitHub URL</label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 flex items-center justify-center text-slate-500 pointer-events-none">
                    <Github size={16} />
                  </div>
                  <input className="admin-input w-full !pl-14" value={form.githubUrl}
                    onChange={e => setForm({ ...form, githubUrl: e.target.value })} placeholder="https://github.com/..." />
                </div>
              </div>
            </div>

            {/* Toggles */}
            <div className="flex flex-wrap gap-6">
              {[
                { key: 'isVisible', label: 'Visible on Website', color: 'bg-sky-500' },
                { key: 'featured', label: 'Featured Project', color: 'bg-amber-500' },
              ].map(({ key, label, color }) => (
                <div key={key} className="flex items-center gap-3">
                  <label className="text-sm text-slate-400">{label}</label>
                  <button type="button"
                    onClick={() => setForm({ ...form, [key]: !(form as any)[key] })}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${(form as any)[key] ? color : 'bg-slate-600'}`}>
                    <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${(form as any)[key] ? 'translate-x-6' : 'translate-x-0.5'}`} />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button type="submit" disabled={saving} className="admin-btn-primary px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2">
                {saving ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Check size={16} />}
                {editingId ? 'Save Changes' : 'Add Project'}
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
          <input className="admin-input !pl-14 w-full" placeholder="Search projects..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
        <div className="flex gap-2 flex-wrap">
          {['All', ...CATEGORIES].map(cat => (
            <button key={cat} onClick={() => setFilterCat(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterCat === cat ? 'bg-purple-500 text-white' : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10'
              }`}>{cat}</button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="admin-panel rounded-xl border border-white/10 overflow-hidden animate-pulse">
              <div className="aspect-video bg-white/10" />
              <div className="p-4 space-y-2">
                <div className="w-3/4 h-4 bg-white/10 rounded" />
                <div className="w-1/2 h-2 bg-white/5 rounded" />
              </div>
            </div>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="admin-panel rounded-xl border border-white/10 p-16 text-center">
          <Grid3X3 size={48} className="mx-auto mb-4 text-slate-700" />
          <p className="text-slate-400 text-lg font-medium">No projects found</p>
          <button onClick={openNew} className="admin-btn-primary mt-5 px-6 py-2.5 rounded-lg text-sm font-semibold inline-flex items-center gap-2">
            <Plus size={16} /> Add First Project
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map(item => (
            <div key={item._id} className={`admin-panel rounded-xl border transition-all overflow-hidden group ${
              item.isVisible ? 'border-white/10 hover:border-white/20' : 'border-white/5 opacity-60'
            }`}>
              {/* Image */}
              <div className="aspect-video bg-white/5 relative overflow-hidden">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Briefcase size={32} className="text-slate-700" />
                  </div>
                )}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-900/80 text-white rounded backdrop-blur-sm">{item.category}</span>
                  {item.featured && <span className="text-[10px] font-bold px-2 py-0.5 bg-amber-500/90 text-white rounded backdrop-blur-sm flex items-center gap-1"><Star size={8} fill="white" /> Featured</span>}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                {item.description && <p className="text-xs text-slate-500 line-clamp-2 mb-3">{item.description}</p>}
                {item.technologies?.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.technologies.slice(0, 4).map(t => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">{t}</span>
                    ))}
                    {item.technologies.length > 4 && <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-500">+{item.technologies.length - 4}</span>}
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="border-t border-white/5 px-4 py-3 flex items-center justify-between bg-white/2">
                <div className="flex gap-2">
                  {item.liveUrl && <a href={item.liveUrl} target="_blank" rel="noopener" className="text-[10px] text-sky-400 hover:text-sky-300 flex items-center gap-1"><LinkIcon size={10} /> Live</a>}
                  {item.githubUrl && <a href={item.githubUrl} target="_blank" rel="noopener" className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1"><Github size={10} /> GitHub</a>}
                </div>
                <div className="flex items-center gap-1.5">
                  <button onClick={() => toggleVisibility(item)} title={item.isVisible ? 'Hide' : 'Show'}
                    className={`p-1.5 rounded-lg transition-colors ${item.isVisible ? 'text-emerald-400 hover:bg-emerald-400/10' : 'text-slate-500 hover:bg-white/10'}`}>
                    {item.isVisible ? <Eye size={13} /> : <EyeOff size={13} />}
                  </button>
                  <button onClick={() => openEdit(item)} className="p-1.5 rounded-lg text-sky-400 hover:bg-sky-400/10 transition-colors"><Pencil size={13} /></button>
                  {deleteConfirm === item._id ? (
                    <div className="flex gap-1">
                      <button onClick={() => handleDelete(item._id)} className="p-1.5 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors"><Check size={13} /></button>
                      <button onClick={() => setDeleteConfirm(null)} className="p-1.5 rounded-lg text-slate-400 hover:bg-white/10 transition-colors"><X size={13} /></button>
                    </div>
                  ) : (
                    <button onClick={() => setDeleteConfirm(item._id)} className="p-1.5 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors"><Trash2 size={13} /></button>
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
