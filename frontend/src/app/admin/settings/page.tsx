'use client'
import { useState, useEffect } from 'react'
import { API_URL } from '@/contexts/AdminAuthContext'
import axios from 'axios'
import toast from 'react-hot-toast'
import {
  Settings as SettingsIcon, Save, Building2, Mail, Phone, MapPin,
  Globe, Share2, Facebook, Twitter, Instagram, Linkedin, Github, Youtube,
  Search as SearchIcon, Type, FileText, Sparkles, ChevronDown, ChevronUp,
  RotateCcw, CheckCircle, AlertCircle, ExternalLink, User
} from 'lucide-react'

interface SiteSettings {
  _id?: string
  companyName: string
  tagline: string
  description: string
  email: string
  phone: string
  address: string
  facebook: string
  twitter: string
  instagram: string
  linkedin: string
  github: string
  youtube: string
  seoTitle: string
  seoDescription: string
  seoKeywords: string
  heroTitle: string
  heroSubtitle: string
  heroCTA: string
  aboutTitle: string
  aboutDescription: string
  footerText: string
  copyrightText: string
  statClients: string
  statProjects: string
  statExperience: string
  statCountries: string
}

const EMPTY_SETTINGS: SiteSettings = {
  companyName: 'XenonEdge Lanka',
  tagline: 'Building the Digital Future',
  description: '',
  email: '',
  phone: '',
  address: '',
  facebook: '',
  twitter: '',
  instagram: '',
  linkedin: '',
  github: '',
  youtube: '',
  seoTitle: '',
  seoDescription: '',
  seoKeywords: '',
  heroTitle: '',
  heroSubtitle: '',
  heroCTA: 'Get Started',
  aboutTitle: '',
  aboutDescription: '',
  footerText: '',
  copyrightText: '',
  statClients: '25+',
  statProjects: '40+',
  statExperience: '1.5+',
  statCountries: '4+',
}

interface SectionProps {
  title: string
  icon: React.ReactNode
  color: string
  children: React.ReactNode
  defaultOpen?: boolean
}

function CollapsibleSection({ title, icon, color, children, defaultOpen = true }: SectionProps) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="admin-panel rounded-xl border border-white/10 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 hover:bg-white/[0.02] transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${color}`}>{icon}</div>
          <h2 className="font-semibold text-white text-sm">{title}</h2>
        </div>
        {open ? <ChevronUp size={16} className="text-slate-500" /> : <ChevronDown size={16} className="text-slate-500" />}
      </button>
      {open && (
        <div className="px-5 pb-5 pt-2 border-t border-white/5">
          {children}
        </div>
      )}
    </div>
  )
}

export default function SettingsAdmin() {
  const [settings, setSettings] = useState<SiteSettings>(EMPTY_SETTINGS)
  const [original, setOriginal] = useState<SiteSettings>(EMPTY_SETTINGS)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)

  useEffect(() => { fetchSettings() }, [])

  useEffect(() => {
    setHasChanges(JSON.stringify(settings) !== JSON.stringify(original))
  }, [settings, original])

  const fetchSettings = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/settings`)
      if (data.data) {
        const s = data.data
        const cleaned: SiteSettings = {
          companyName: s.companyName || EMPTY_SETTINGS.companyName,
          tagline: s.tagline || EMPTY_SETTINGS.tagline,
          description: s.description || '',
          email: s.email || '',
          phone: s.phone || '',
          address: s.address || '',
          facebook: s.facebook || '',
          twitter: s.twitter || '',
          instagram: s.instagram || '',
          linkedin: s.linkedin || '',
          github: s.github || '',
          youtube: s.youtube || '',
          seoTitle: s.seoTitle || '',
          seoDescription: s.seoDescription || '',
          seoKeywords: s.seoKeywords || '',
          heroTitle: s.heroTitle || '',
          heroSubtitle: s.heroSubtitle || '',
          heroCTA: s.heroCTA || EMPTY_SETTINGS.heroCTA,
          aboutTitle: s.aboutTitle || '',
          aboutDescription: s.aboutDescription || '',
          footerText: s.footerText || '',
          copyrightText: s.copyrightText || '',
          statClients: s.statClients || '25+',
          statProjects: s.statProjects || '40+',
          statExperience: s.statExperience || '1.5+',
          statCountries: s.statCountries || '4+',
        }
        setSettings(cleaned)
        setOriginal(cleaned)
      }
    } catch {
      toast.error('Failed to load settings')
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const { data } = await axios.put(`${API_URL}/settings`, settings)
      if (data.success) {
        toast.success('Settings saved successfully!')
        setOriginal({ ...settings })
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to save settings')
    } finally {
      setSaving(false)
    }
  }

  const handleReset = () => {
    setSettings({ ...original })
    toast.success('Changes reverted')
  }

  const update = (key: keyof SiteSettings, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  const Field = ({ label, field, placeholder, type = 'text', icon, rows }: {
    label: string, field: keyof SiteSettings, placeholder?: string, type?: string, icon?: React.ReactNode, rows?: number
  }) => (
    <div>
      <label className="admin-label">{label}</label>
      {icon ? (
        <div className="relative flex items-center">
          <div className="absolute left-0 w-10 flex items-center justify-center text-slate-500 pointer-events-none">
            {icon}
          </div>
          <input
            type={type}
            className="admin-input !pl-14 w-full"
            value={settings[field]}
            onChange={e => update(field, e.target.value)}
            placeholder={placeholder}
          />
        </div>
      ) : rows ? (
        <textarea
          className="admin-input w-full resize-none"
          rows={rows}
          value={settings[field]}
          onChange={e => update(field, e.target.value)}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          className="admin-input w-full"
          value={settings[field]}
          onChange={e => update(field, e.target.value)}
          placeholder={placeholder}
        />
      )}
    </div>
  )

  // Profile Update State
  const [profile, setProfile] = useState({ username: '', password: '', code: '' })
  const [codeRequested, setCodeRequested] = useState(false)
  const [requestingCode, setRequestingCode] = useState(false)
  const [updatingProfile, setUpdatingProfile] = useState(false)

  const requestVerification = async () => {
    setRequestingCode(true)
    try {
      const token = localStorage.getItem('admin_token')
      await axios.post(`${API_URL}/auth/request-code`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      })
      toast.success('Verification code sent to your email!')
      setCodeRequested(true)
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to send code')
    } finally {
      setRequestingCode(false)
    }
  }

  const updateAdminProfile = async () => {
    if (!profile.code) return toast.error('Please enter the verification code')
    setUpdatingProfile(true)
    try {
      const token = localStorage.getItem('admin_token')
      const { data } = await axios.post(`${API_URL}/auth/update-profile`, profile, {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (data.success) {
        toast.success('Admin profile updated successfully!')
        setProfile({ username: '', password: '', code: '' })
        setCodeRequested(false)
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to update profile')
    } finally {
      setUpdatingProfile(false)
    }
  }

  if (loading) {
    return (
      <div className="p-6 lg:p-8 space-y-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-6 h-6 bg-white/10 rounded animate-pulse" />
          <div className="w-40 h-6 bg-white/10 rounded animate-pulse" />
        </div>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="admin-panel rounded-xl border border-white/10 p-5 animate-pulse">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-white/10 rounded-lg" />
              <div className="w-32 h-4 bg-white/10 rounded" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="w-20 h-2 bg-white/5 rounded" />
                <div className="w-full h-10 bg-white/5 rounded-lg" />
              </div>
              <div className="space-y-2">
                <div className="w-24 h-2 bg-white/5 rounded" />
                <div className="w-full h-10 bg-white/5 rounded-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <SettingsIcon size={22} className="text-slate-400" /> Site Settings
          </h1>
          <p className="text-slate-400 text-sm mt-1">Manage your website configuration and account security</p>
        </div>
        <div className="flex items-center gap-3">
          {hasChanges && (
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              <RotateCcw size={14} /> Discard
            </button>
          )}
          <button
            onClick={handleSave}
            disabled={saving || !hasChanges}
            className="admin-btn-primary flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
          >
            {saving ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Save size={16} />
            )}
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      {/* Admin Account Security */}
      <CollapsibleSection
        title="Admin Account Security"
        icon={<User size={16} className="text-sky-400" />}
        color="bg-sky-500/10"
        defaultOpen={false}
      >
        <div className="space-y-6">
          <p className="text-xs text-slate-400 leading-relaxed italic">
            Update your admin login credentials. A verification code will be sent to <span className="text-sky-400 font-bold">{original.email}</span> to authorize these changes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="admin-label">New Username</label>
              <input
                type="text"
                className="admin-input w-full"
                value={profile.username}
                onChange={e => setProfile({ ...profile, username: e.target.value })}
                placeholder="Leave empty to keep current"
              />
            </div>
            <div>
              <label className="admin-label">New Password</label>
              <input
                type="password"
                className="admin-input w-full"
                value={profile.password}
                onChange={e => setProfile({ ...profile, password: e.target.value })}
                placeholder="Minimum 6 characters"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-end gap-4 pt-4 border-t border-white/5">
            <div className="flex-1 w-full">
              <label className="admin-label">Verification Code</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="admin-input flex-1"
                  value={profile.code}
                  onChange={e => setProfile({ ...profile, code: e.target.value })}
                  placeholder="6-digit code"
                  disabled={!codeRequested}
                />
                <button
                  onClick={requestVerification}
                  disabled={requestingCode}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-bold rounded-lg border border-white/10 transition-all whitespace-nowrap disabled:opacity-50"
                >
                  {requestingCode ? 'Sending...' : codeRequested ? 'Resend Code' : 'Get Code'}
                </button>
              </div>
            </div>
            <button
              onClick={updateAdminProfile}
              disabled={updatingProfile || !codeRequested || (!profile.username && !profile.password)}
              className="admin-btn-primary px-6 py-2.5 rounded-lg text-xs font-bold h-[42px] disabled:opacity-50"
            >
              {updatingProfile ? 'Updating...' : 'Update Account'}
            </button>
          </div>
        </div>
      </CollapsibleSection>

      {/* Unsaved Banner */}
      {hasChanges && (
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
          <AlertCircle size={16} className="text-amber-400 flex-shrink-0" />
          <span className="text-sm text-amber-300">You have unsaved changes to site settings</span>
        </div>
      )}

      {/* Company Info */}
      <CollapsibleSection
        title="Company Information"
        icon={<Building2 size={16} className="text-sky-400" />}
        color="bg-sky-500/10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Company Name" field="companyName" placeholder="XenonEdge Lanka" />
          <Field label="Tagline" field="tagline" placeholder="Building the Digital Future" />
          <div className="md:col-span-2">
            <Field label="Company Description" field="description" placeholder="Brief description of your company..." rows={3} />
          </div>
        </div>
      </CollapsibleSection>

      {/* Contact Info */}
      <CollapsibleSection
        title="Contact Information"
        icon={<Mail size={16} className="text-emerald-400" />}
        color="bg-emerald-500/10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Email Address" field="email" placeholder="info@xenonedge.com" icon={<Mail size={14} />} />
          <Field label="Phone Number" field="phone" placeholder="+94 77 123 4567" icon={<Phone size={14} />} />
          <div className="md:col-span-2">
            <Field label="Office Address" field="address" placeholder="123 Main Street, Colombo, Sri Lanka" icon={<MapPin size={14} />} />
          </div>
        </div>
      </CollapsibleSection>

      {/* Social Media */}
      <CollapsibleSection
        title="Social Media Links"
        icon={<Share2 size={16} className="text-purple-400" />}
        color="bg-purple-500/10"
        defaultOpen={false}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Facebook" field="facebook" placeholder="https://facebook.com/xenonedge" icon={<Facebook size={14} />} />
          <Field label="Twitter / X" field="twitter" placeholder="https://twitter.com/xenonedge" icon={<Twitter size={14} />} />
          <Field label="Instagram" field="instagram" placeholder="https://instagram.com/xenonedge" icon={<Instagram size={14} />} />
          <Field label="LinkedIn" field="linkedin" placeholder="https://linkedin.com/company/xenonedge" icon={<Linkedin size={14} />} />
          <Field label="GitHub" field="github" placeholder="https://github.com/xenonedge" icon={<Github size={14} />} />
          <Field label="YouTube" field="youtube" placeholder="https://youtube.com/@xenonedge" icon={<Youtube size={14} />} />
        </div>
      </CollapsibleSection>

      {/* SEO */}
      <CollapsibleSection
        title="SEO & Meta Tags"
        icon={<SearchIcon size={16} className="text-amber-400" />}
        color="bg-amber-500/10"
        defaultOpen={false}
      >
        <div className="space-y-5">
          <Field label="Default Page Title" field="seoTitle" placeholder="XenonEdge Lanka | Digital Solutions" />
          <Field label="Meta Description" field="seoDescription" placeholder="XenonEdge Lanka provides world-class web, mobile, and AI solutions..." rows={3} />
          <Field label="Meta Keywords" field="seoKeywords" placeholder="web development, mobile apps, AI, Sri Lanka, digital solutions" />
          {/* SEO Preview */}
          {(settings.seoTitle || settings.seoDescription) && (
            <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                <Globe size={12} /> Google Preview
              </div>
              <div className="space-y-1">
                <div className="text-blue-400 text-sm font-medium truncate">
                  {settings.seoTitle || settings.companyName || 'Page Title'}
                </div>
                <div className="text-emerald-500 text-xs truncate">
                  xenonedge.com
                </div>
                <div className="text-slate-400 text-xs line-clamp-2">
                  {settings.seoDescription || 'No meta description set.'}
                </div>
              </div>
            </div>
          )}
        </div>
      </CollapsibleSection>

      {/* Hero Section */}
      <CollapsibleSection
        title="Hero Section Content"
        icon={<Sparkles size={16} className="text-rose-400" />}
        color="bg-rose-500/10"
        defaultOpen={false}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <Field label="Hero Title" field="heroTitle" placeholder="Building the Digital Future" />
          </div>
          <div className="md:col-span-2">
            <Field label="Hero Subtitle" field="heroSubtitle" placeholder="We create cutting-edge digital solutions..." rows={2} />
          </div>
          <Field label="CTA Button Text" field="heroCTA" placeholder="Get Started" />
        </div>
      </CollapsibleSection>

      {/* About Section */}
      <CollapsibleSection
        title="About Section Content"
        icon={<FileText size={16} className="text-cyan-400" />}
        color="bg-cyan-500/10"
        defaultOpen={false}
      >
        <div className="space-y-6">
          <Field label="About Title" field="aboutTitle" placeholder="About XenonEdge Lanka" />
          <Field label="About Description" field="aboutDescription" placeholder="Tell visitors about your company, mission, and values..." rows={5} />
          
          <div className="pt-4 border-t border-white/5">
            <h3 className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-4">Success Metrics (Stats)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Happy Clients" field="statClients" placeholder="25+" />
              <Field label="Projects Delivered" field="statProjects" placeholder="40+" />
              <Field label="Years of Experience" field="statExperience" placeholder="1.5+" />
              <Field label="Countries Served" field="statCountries" placeholder="4+" />
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Footer */}
      <CollapsibleSection
        title="Footer Content"
        icon={<Type size={16} className="text-indigo-400" />}
        color="bg-indigo-500/10"
        defaultOpen={false}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <Field label="Footer Description" field="footerText" placeholder="Brief company description for the footer..." rows={2} />
          </div>
          <Field label="Copyright Text" field="copyrightText" placeholder="© 2025 XenonEdge Lanka. All rights reserved." />
        </div>
      </CollapsibleSection>

      {/* Sticky Save Bar */}
      {hasChanges && (
        <div className="sticky bottom-4 z-10">
          <div className="flex items-center justify-between gap-4 px-5 py-4 rounded-xl bg-[#0d1b2e]/95 backdrop-blur-sm border border-white/10 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <AlertCircle size={14} className="text-amber-400" />
              Unsaved changes
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                Discard
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="admin-btn-primary px-5 py-2 rounded-lg text-sm font-semibold flex items-center gap-2"
              >
                {saving ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Save size={14} />
                )}
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
