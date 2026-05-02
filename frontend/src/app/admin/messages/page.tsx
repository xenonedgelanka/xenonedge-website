'use client'
import { useState, useEffect } from 'react'
import { API_URL } from '@/contexts/AdminAuthContext'
import axios from 'axios'
import toast from 'react-hot-toast'
import {
  MessageSquare, Search, Trash2, X, Check,
  Mail, Phone, Globe, Tag, Calendar,
  ChevronDown, Eye, MailOpen, Reply,
  Archive, Inbox, Filter
} from 'lucide-react'

interface Message {
  _id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  service: string
  message: string
  status: 'new' | 'read' | 'replied' | 'archived'
  createdAt: string
}

const STATUS_CONFIG = {
  new: { label: 'New', color: 'text-sky-400', bg: 'bg-sky-500/20', icon: Inbox },
  read: { label: 'Read', color: 'text-slate-400', bg: 'bg-slate-500/20', icon: MailOpen },
  replied: { label: 'Replied', color: 'text-emerald-400', bg: 'bg-emerald-500/20', icon: Reply },
  archived: { label: 'Archived', color: 'text-slate-600', bg: 'bg-slate-700/30', icon: Archive },
}

export default function MessagesAdmin() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedMsg, setSelectedMsg] = useState<Message | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState<'all' | 'new' | 'read' | 'replied' | 'archived'>('all')
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)

  useEffect(() => { fetchMessages() }, [])

  const fetchMessages = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/contact`)
      setMessages(data.data || [])
    } catch { toast.error('Failed to load messages') }
    finally { setLoading(false) }
  }

  const updateStatus = async (id: string, status: string) => {
    try {
      await axios.patch(`${API_URL}/contact/${id}/status`, { status })
      toast.success(`Marked as ${status}`)
      if (selectedMsg?._id === id) {
        setSelectedMsg(prev => prev ? { ...prev, status: status as any } : null)
      }
      fetchMessages()
    } catch { toast.error('Failed to update') }
  }

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${API_URL}/contact/${id}`)
      toast.success('Message deleted')
      setDeleteConfirm(null)
      if (selectedMsg?._id === id) setSelectedMsg(null)
      fetchMessages()
    } catch { toast.error('Failed to delete') }
  }

  const openMessage = (msg: Message) => {
    setSelectedMsg(msg)
    if (msg.status === 'new') updateStatus(msg._id, 'read')
  }

  const filtered = messages.filter(m => {
    const matchSearch = [m.firstName, m.lastName, m.email, m.service].join(' ').toLowerCase().includes(searchTerm.toLowerCase())
    const matchStatus = filterStatus === 'all' || m.status === filterStatus
    return matchSearch && matchStatus
  })

  const counts = {
    all: messages.length,
    new: messages.filter(m => m.status === 'new').length,
    read: messages.filter(m => m.status === 'read').length,
    replied: messages.filter(m => m.status === 'replied').length,
    archived: messages.filter(m => m.status === 'archived').length,
  }

  return (
    <div className="p-6 lg:p-8 h-full flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <MessageSquare size={22} className="text-emerald-400" /> Messages
            {counts.new > 0 && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-sky-500 text-white">{counts.new} new</span>
            )}
          </h1>
          <p className="text-slate-400 text-sm mt-1">Contact form submissions from your website</p>
        </div>
      </div>

      {/* Status Tabs */}
      <div className="flex gap-2 flex-wrap">
        {(['all', 'new', 'read', 'replied', 'archived'] as const).map(s => (
          <button key={s} onClick={() => setFilterStatus(s)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold capitalize transition-all flex items-center gap-1.5 ${
              filterStatus === s ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10'
            }`}>
            {s === 'all' ? <Inbox size={12} /> : (() => { const C = STATUS_CONFIG[s].icon; return <C size={12} /> })()}
            {s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}
            <span className={`ml-1 px-1.5 py-0.5 rounded-full text-[9px] font-bold ${
              filterStatus === s ? 'bg-emerald-500/30 text-emerald-300' : 'bg-white/10 text-slate-500'
            }`}>{counts[s]}</span>
          </button>
        ))}
      </div>

      {/* Main Area: Split View */}
      <div className="flex gap-5 flex-1 min-h-0" style={{ minHeight: '500px' }}>
        {/* Message List */}
        <div className={`flex flex-col min-w-0 ${selectedMsg ? 'hidden lg:flex lg:w-2/5 xl:w-1/3' : 'flex-1'}`}>
          {/* Search */}
          <div className="relative flex items-center mb-3">
            <div className="absolute left-0 w-10 flex items-center justify-center text-slate-500 pointer-events-none">
              <Search size={14} />
            </div>
            <input className="admin-input !pl-14 w-full text-sm" placeholder="Search messages..."
              value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto space-y-2 pr-1">
            {loading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="admin-panel rounded-xl border border-white/10 p-4 animate-pulse flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="w-32 h-3 bg-white/10 rounded" />
                    <div className="w-full h-2 bg-white/5 rounded" />
                  </div>
                </div>
              ))
            ) : filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <Mail size={40} className="text-slate-700 mb-3" />
                <p className="text-slate-400 text-sm font-medium">No messages found</p>
              </div>
            ) : (
              filtered.map(msg => (
                <button key={msg._id} onClick={() => openMessage(msg)}
                  className={`w-full text-left admin-panel rounded-xl border transition-all p-4 flex gap-3 ${
                    selectedMsg?._id === msg._id
                      ? 'border-sky-500/50 bg-sky-500/5'
                      : msg.status === 'new'
                        ? 'border-sky-500/20 bg-sky-500/5 hover:border-sky-500/30'
                        : 'border-white/10 hover:border-white/20'
                  }`}>
                  {/* Avatar */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${
                    msg.status === 'new' ? 'bg-gradient-to-br from-sky-400 to-blue-600' : 'bg-gradient-to-br from-slate-600 to-slate-700'
                  }`}>
                    {msg.firstName?.charAt(0)?.toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-white truncate">{msg.firstName} {msg.lastName}</span>
                      {msg.status === 'new' && <div className="w-2 h-2 rounded-full bg-sky-400 flex-shrink-0" />}
                    </div>
                    <p className="text-xs text-slate-400 truncate mt-0.5">{msg.message}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      {msg.service && <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-500">{msg.service}</span>}
                      <span className="text-[10px] text-slate-600">{new Date(msg.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Message Detail */}
        {selectedMsg ? (
          <div className={`flex-1 flex flex-col admin-panel rounded-xl border border-white/10 overflow-hidden ${selectedMsg ? 'flex' : 'hidden lg:flex'}`}>
            {/* Detail Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10 flex-shrink-0">
              <div className="flex items-center gap-3">
                <button onClick={() => setSelectedMsg(null)} className="lg:hidden text-slate-400 hover:text-white transition-colors mr-1">
                  <X size={18} />
                </button>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white font-bold">
                  {selectedMsg.firstName?.charAt(0)?.toUpperCase()}
                </div>
                <div>
                  <div className="font-semibold text-white">{selectedMsg.firstName} {selectedMsg.lastName}</div>
                  <div className="text-xs text-slate-400">{selectedMsg.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* Status dropdown */}
                <div className="relative group">
                  <button className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition-all ${STATUS_CONFIG[selectedMsg.status].bg} ${STATUS_CONFIG[selectedMsg.status].color} border-current/20`}>
                    {(() => { const C = STATUS_CONFIG[selectedMsg.status].icon; return <C size={12} /> })()}
                    {STATUS_CONFIG[selectedMsg.status].label}
                    <ChevronDown size={10} />
                  </button>
                  <div className="absolute right-0 top-full mt-1 w-36 admin-panel rounded-xl border border-white/10 overflow-hidden shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                    {(['new', 'read', 'replied', 'archived'] as const).map(s => (
                      <button key={s} onClick={() => updateStatus(selectedMsg._id, s)}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-xs hover:bg-white/5 transition-colors ${STATUS_CONFIG[s].color}`}>
                        {(() => { const C = STATUS_CONFIG[s].icon; return <C size={12} /> })()}
                        {STATUS_CONFIG[s].label}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Delete */}
                {deleteConfirm === selectedMsg._id ? (
                  <div className="flex items-center gap-1">
                    <button onClick={() => handleDelete(selectedMsg._id)} className="p-2 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors"><Check size={14} /></button>
                    <button onClick={() => setDeleteConfirm(null)} className="p-2 rounded-lg text-slate-400 hover:bg-white/10 transition-colors"><X size={14} /></button>
                  </div>
                ) : (
                  <button onClick={() => setDeleteConfirm(selectedMsg._id)} className="p-2 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors"><Trash2 size={14} /></button>
                )}
              </div>
            </div>

            {/* Message Details */}
            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              {/* Meta Info */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Mail, label: 'Email', value: selectedMsg.email },
                  { icon: Phone, label: 'Phone', value: selectedMsg.phone || '—' },
                  { icon: Globe, label: 'Country', value: selectedMsg.country || '—' },
                  { icon: Tag, label: 'Service', value: selectedMsg.service || '—' },
                  { icon: Calendar, label: 'Received', value: new Date(selectedMsg.createdAt).toLocaleString() },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon size={12} className="text-slate-500" />
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{label}</span>
                    </div>
                    <div className="text-sm text-slate-300 break-all">{value}</div>
                  </div>
                ))}
              </div>

              {/* Message */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                  <MessageSquare size={12} /> Message
                </div>
                <p className="text-slate-200 leading-relaxed text-sm whitespace-pre-wrap">{selectedMsg.message}</p>
              </div>

              {/* Reply CTA */}
              <a
                href={`mailto:${selectedMsg.email}?subject=Re: Your inquiry to XenonEdge Lanka`}
                onClick={() => updateStatus(selectedMsg._id, 'replied')}
                className="admin-btn-primary w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 no-underline"
              >
                <Reply size={16} />
                Reply via Email
              </a>
            </div>
          </div>
        ) : (
          <div className="hidden lg:flex flex-1 admin-panel rounded-xl border border-white/10 items-center justify-center">
            <div className="text-center text-slate-600">
              <MessageSquare size={48} className="mx-auto mb-3" />
              <p className="text-sm">Select a message to view</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
