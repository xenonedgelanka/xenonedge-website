'use client'
import { useState, useEffect, useRef } from 'react'
import { API_URL } from '@/contexts/AdminAuthContext'
import axios from 'axios'
import toast from 'react-hot-toast'
import {
  Star, Plus, Pencil, Trash2, Eye, EyeOff,
  Upload, X, Search, ChevronDown, ChevronUp,
  Check, AlertTriangle, User, Users, Briefcase
} from 'lucide-react'
import { FaGoogle } from 'react-icons/fa'

interface Review {
  _id: string
  author: string
  company: string
  role: string
  text: string
  rating: number
  avatar: string
  source: 'Direct' | 'Google'
  isVisible: boolean
  isApproved: boolean
  order: number
  createdAt: string
}

const EMPTY_FORM = {
  author: '', company: '', role: '', text: '',
  rating: 5, isVisible: true, isApproved: false, order: 0, source: 'Direct'
}

export default function ReviewsAdmin() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const [avatarPreview, setAvatarPreview] = useState<string>('')
  const [saving, setSaving] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const [isGoogleModalOpen, setIsGoogleModalOpen] = useState(false)
  const [googlePlaceId, setGooglePlaceId] = useState('')
  const [isSyncing, setIsSyncing] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  useEffect(() => { fetchReviews() }, [])

  const fetchReviews = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/reviews?all=true`)
      setReviews(data.data || [])
    } catch { toast.error('Failed to load reviews') }
    finally { setLoading(false) }
  }

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setAvatarFile(file)
    setAvatarPreview(URL.createObjectURL(file))
  }

  const openNew = () => {
    setForm(EMPTY_FORM)
    setAvatarFile(null)
    setAvatarPreview('')
    setEditingId(null)
    setShowForm(true)
  }

  const openEdit = (review: Review) => {
    setForm({
      author: review.author, company: review.company,
      role: review.role, text: review.text,
      rating: review.rating, isVisible: review.isVisible,
      isApproved: review.isApproved,
      order: review.order, source: review.source || 'Direct'
    })
    setAvatarPreview(review.avatar || '')
    setAvatarFile(null)
    setEditingId(review._id)
    setShowForm(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    try {
      const formData = new FormData()
      Object.entries(form).forEach(([k, v]) => formData.append(k, String(v)))
      if (avatarFile) formData.append('avatar', avatarFile)

      if (editingId) {
        await axios.put(`${API_URL}/reviews/${editingId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        toast.success('Review updated!')
      } else {
        await axios.post(`${API_URL}/reviews`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        toast.success('Review created!')
      }

      setShowForm(false)
      setEditingId(null)
      fetchReviews()
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to save review')
    } finally { setSaving(false) }
  }

  const handleGoogleSync = async () => {
    if (!googlePlaceId) return toast.error('Please enter a Google Place ID');
    setIsSyncing(true);
    try {
      const res = await axios.post(`${API_URL}/reviews/google-sync`, { placeId: googlePlaceId });
      if (res.data.success) {
        toast.success(res.data.message);
        setIsGoogleModalOpen(false);
        fetchReviews();
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Sync failed');
    } finally {
      setIsSyncing(false);
    }
  }

  const toggleVisibility = async (review: Review) => {
    try {
      const formData = new FormData()
      formData.append('isVisible', String(!review.isVisible))
      await axios.put(`${API_URL}/reviews/${review._id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      toast.success(review.isVisible ? 'Hidden from website' : 'Visible on website')
      fetchReviews()
    } catch { toast.error('Failed to update') }
  }

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${API_URL}/reviews/${id}`)
      toast.success('Review deleted')
      setDeleteConfirm(null)
      fetchReviews()
    } catch { toast.error('Failed to delete') }
  }

  const toggleApproval = async (review: Review) => {
    try {
      const formData = new FormData()
      formData.append('isApproved', String(!review.isApproved))
      await axios.put(`${API_URL}/reviews/${review._id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      toast.success(review.isApproved ? 'Unapproved' : 'Approved!')
      fetchReviews()
    } catch { toast.error('Failed to update') }
  }

  const filtered = reviews.filter(r =>
    r.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.company.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Star size={22} className="text-amber-400" /> Reviews & Testimonials
          </h1>
          <p className="text-slate-400 text-sm mt-1">Manage client reviews shown on the website</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => setIsGoogleModalOpen(true)} className="admin-btn-secondary flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold">
            <FaGoogle className="text-red-500" /> <span className="hidden md:inline">Import Google</span>
          </button>
          <button onClick={openNew} className="admin-btn-primary flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold">
            <Plus size={16} /> Add Review
          </button>
        </div>
      </div>

      {/* Form */}
      {showForm && (
        <div className="admin-panel rounded-xl border border-white/10 overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <h2 className="font-semibold text-white">{editingId ? 'Edit Review' : 'Add New Review'}</h2>
            <button onClick={() => setShowForm(false)} className="text-slate-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Avatar Upload */}
            <div className="md:col-span-2 flex items-center gap-5">
              <div
                className="relative w-20 h-20 rounded-full overflow-hidden bg-white/10 border-2 border-dashed border-white/20 hover:border-sky-500/50 transition-colors cursor-pointer flex items-center justify-center flex-shrink-0"
                onClick={() => fileRef.current?.click()}
              >
                {avatarPreview ? (
                  <img src={avatarPreview} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <User size={28} className="text-slate-500" />
                )}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Upload size={16} className="text-white" />
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-white mb-1">Client Photo</div>
                <div className="text-xs text-slate-500 mb-2">Click to upload (optional)</div>
                <button type="button" onClick={() => fileRef.current?.click()}
                  className="text-xs px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all border border-white/10 flex items-center gap-1.5">
                  <Upload size={12} /> Upload Photo
                </button>
              </div>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
            </div>

            {/* Author */}
            <div>
              <label className="admin-label">Author Name *</label>
              <div className="relative flex items-center">
                <div className="absolute left-3 flex items-center justify-center text-slate-500 pointer-events-none">
                  <Users size={16} />
                </div>
                <input className="admin-input w-full !pl-14" required value={form.author}
                  onChange={e => setForm({ ...form, author: e.target.value })} placeholder="John Doe" />
              </div>
            </div>
            {/* Company */}
            <div>
              <label className="admin-label">Company *</label>
              <div className="relative flex items-center">
                <div className="absolute left-3 flex items-center justify-center text-slate-500 pointer-events-none">
                  <Briefcase size={16} />
                </div>
                <input className="admin-input w-full !pl-14" required value={form.company}
                  onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Acme Corp" />
              </div>
            </div>
            {/* Role */}
            <div>
              <label className="admin-label">Role / Title *</label>
              <div className="relative flex items-center">
                <div className="absolute left-3 flex items-center justify-center text-slate-500 pointer-events-none">
                  <Star size={16} />
                </div>
                <input className="admin-input w-full !pl-14" required value={form.role}
                  onChange={e => setForm({ ...form, role: e.target.value })} placeholder="CEO" />
              </div>
            </div>
            {/* Rating */}
            <div>
              <label className="admin-label">Rating</label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map(n => (
                  <button key={n} type="button" onClick={() => setForm({ ...form, rating: n })}
                    className={`text-2xl transition-transform hover:scale-110 ${n <= form.rating ? 'text-amber-400' : 'text-slate-600'}`}>
                    ★
                  </button>
                ))}
                <span className="text-sm text-slate-400 ml-2">{form.rating}/5</span>
              </div>
            </div>
            {/* Text */}
            <div className="md:col-span-2">
              <label className="admin-label">Review Text *</label>
              <textarea className="admin-input w-full resize-none" required rows={4} value={form.text}
                onChange={e => setForm({ ...form, text: e.target.value })}
                placeholder="Write the client's review here..." />
            </div>

            {/* Order & Visible */}
            <div>
              <label className="admin-label">Display Order</label>
              <input type="number" className="admin-input w-full" value={form.order}
                onChange={e => setForm({ ...form, order: parseInt(e.target.value) })} />
            </div>
            {/* Source */}
            <div className="flex items-center gap-3">
              <label className="admin-label mb-0">Source</label>
              <div className="flex bg-white/5 rounded-lg p-1 border border-white/10">
                <button
                  type="button"
                  onClick={() => setForm({ ...form, source: 'Direct' })}
                  className={`px-3 py-1 text-xs rounded-md transition-all ${form.source === 'Direct' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  Direct
                </button>
                <button
                  type="button"
                  onClick={() => setForm({ ...form, source: 'Google' })}
                  className={`px-3 py-1 text-xs rounded-md transition-all ${form.source === 'Google' ? 'bg-amber-500 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  Google
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <label className="admin-label mb-0 text-amber-400">Approved & Verified</label>
              <button
                type="button"
                onClick={() => setForm({ ...form, isApproved: !form.isApproved })}
                className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${form.isApproved ? 'bg-amber-500' : 'bg-slate-600'}`}
              >
                <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${form.isApproved ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <label className="admin-label mb-0">Visible on Website</label>
              <button
                type="button"
                onClick={() => setForm({ ...form, isVisible: !form.isVisible })}
                className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${form.isVisible ? 'bg-sky-500' : 'bg-slate-600'}`}
              >
                <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${form.isVisible ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </button>
            </div>

            <div className="md:col-span-2 flex gap-3">
              <button type="submit" disabled={saving} className="admin-btn-primary px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2">
                {saving ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Check size={16} />}
                {editingId ? 'Save Changes' : 'Create Review'}
              </button>
              <button type="button" onClick={() => setShowForm(false)} className="px-6 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Search */}
      <div className="relative flex items-center w-full sm:w-80">
        <div className="absolute left-3 flex items-center justify-center text-slate-500 pointer-events-none">
          <Search size={18} />
        </div>
        <input
          className="admin-input !pl-14 w-full"
          placeholder="Search reviews..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Reviews List */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="admin-panel rounded-xl border border-white/10 p-5 animate-pulse">
              <div className="flex gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10" />
                <div className="space-y-2">
                  <div className="w-28 h-3 bg-white/10 rounded" />
                  <div className="w-20 h-2 bg-white/5 rounded" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-2 bg-white/5 rounded" />
                <div className="w-3/4 h-2 bg-white/5 rounded" />
              </div>
            </div>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="admin-panel rounded-xl border border-white/10 p-16 text-center">
          <Star size={48} className="mx-auto mb-4 text-slate-700" />
          <p className="text-slate-400 text-lg font-medium">No reviews yet</p>
          <p className="text-slate-600 text-sm mt-2">Add your first client review to get started</p>
          <button onClick={openNew} className="admin-btn-primary mt-5 px-6 py-2.5 rounded-lg text-sm font-semibold inline-flex items-center gap-2">
            <Plus size={16} /> Add First Review
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((review) => (
            <div key={review._id} className={`admin-panel rounded-xl border transition-all duration-200 overflow-hidden ${
              review.isVisible && review.isApproved ? 'border-white/10' : 'border-white/5 opacity-70'
            }`}>
              <div className="p-5">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {review.avatar ? (
                      <img src={review.avatar} alt={review.author} className="w-11 h-11 rounded-full object-cover ring-2 ring-white/10" />
                    ) : (
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold">
                        {review.author.charAt(0)}
                      </div>
                    )}
                    <div>
                      <div className="font-semibold text-white text-sm">{review.author}</div>
                      <div className="text-xs text-slate-400">{review.role} · {review.company}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${review.isApproved ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                      {review.isApproved ? 'Approved' : 'Pending'}
                    </div>
                    {!review.isVisible && (
                      <div className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-slate-500/10 text-slate-400 border border-white/5">
                        Hidden
                      </div>
                    )}
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map(n => (
                    <span key={n} className={`text-base ${n <= review.rating ? 'text-amber-400' : 'text-slate-700'}`}>★</span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">"{review.text}"</p>
              </div>

              {/* Actions */}
              <div className="border-t border-white/5 px-5 py-3 flex items-center justify-between bg-white/2">
                <div className="flex items-center gap-2">
                  {review.source === 'Google' && (
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-amber-500/10 text-amber-500 border border-amber-500/20" title="Google Review">
                      <FaGoogle size={10} />
                      <span className="text-[10px] font-bold uppercase">Google</span>
                    </div>
                  )}
                  <span className="text-[10px] text-slate-600">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleApproval(review)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${review.isApproved ? 'bg-white/5 text-slate-400 hover:text-white' : 'bg-amber-500/10 text-amber-500 hover:bg-amber-500 hover:text-white border border-amber-500/20'}`}
                  >
                    {review.isApproved ? <EyeOff size={14} /> : <Check size={14} />}
                    {review.isApproved ? 'Unapprove' : 'Approve'}
                  </button>

                  <button onClick={() => openEdit(review)}
                    className="p-1.5 rounded-lg text-sky-400 hover:bg-sky-400/10 transition-colors">
                    <Pencil size={14} />
                  </button>
                  {deleteConfirm === review._id ? (
                    <div className="flex items-center gap-1">
                      <button onClick={() => handleDelete(review._id)}
                        className="p-1.5 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors">
                        <Check size={14} />
                      </button>
                      <button onClick={() => setDeleteConfirm(null)}
                        className="p-1.5 rounded-lg text-slate-400 hover:bg-white/10 transition-colors">
                        <X size={14} />
                      </button>
                    </div>
                  ) : (
                    <button onClick={() => setDeleteConfirm(review._id)}
                      className="p-1.5 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors">
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Google Sync Modal */}
      {isGoogleModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#040c18]/80 backdrop-blur-sm" onClick={() => setIsGoogleModalOpen(false)} />
          <div className="relative w-full max-w-md bg-[#0a1120] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FaGoogle className="text-red-500" />
                Sync Google Reviews
              </h3>
              <button onClick={() => setIsGoogleModalOpen(false)} className="p-2 hover:bg-white/5 rounded-lg text-slate-400">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-sm text-slate-400 leading-relaxed">
                Enter your <span className="text-white font-semibold">Google Place ID</span> to automatically import the latest reviews.
              </p>
              <div>
                <label className="admin-label">Google Place ID</label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 flex items-center justify-center text-slate-500 pointer-events-none">
                    <Search size={16} />
                  </div>
                  <input 
                    className="admin-input w-full !pl-14" 
                    value={googlePlaceId}
                    onChange={e => setGooglePlaceId(e.target.value)}
                    placeholder="Place ID..." 
                  />
                </div>
                <a href="https://developers.google.com/maps/documentation/places/web-service/place-id" target="_blank" className="text-[10px] text-sky-400 hover:underline mt-2 inline-block">
                  Find Place ID?
                </a>
              </div>
            </div>
            <div className="p-6 bg-white/[0.02] flex gap-3">
              <button onClick={() => setIsGoogleModalOpen(false)} className="flex-1 py-3 text-sm font-bold text-slate-400 hover:text-white transition-colors">
                Cancel
              </button>
              <button 
                onClick={handleGoogleSync}
                disabled={isSyncing}
                className="flex-[2] py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-red-600/20 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSyncing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Syncing...
                  </>
                ) : (
                  <>
                    <FaGoogle />
                    Start Sync
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
