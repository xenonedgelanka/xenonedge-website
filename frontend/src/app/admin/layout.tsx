'use client'
import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { AuthProvider, useAuth } from '@/contexts/AdminAuthContext'
import { Toaster } from 'react-hot-toast'
import {
  LayoutDashboard, Star, FileText, Briefcase,
  MessageSquare, LogOut, Menu, X, ChevronRight,
  Bell, Settings, Wrench, User
} from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/reviews', label: 'Reviews', icon: Star },
  { href: '/admin/blog', label: 'Blog Posts', icon: FileText },
  { href: '/admin/portfolio', label: 'Portfolio', icon: Briefcase },
  { href: '/admin/messages', label: 'Messages', icon: MessageSquare },
  { href: '/admin/settings', label: 'Settings', icon: Wrench },
]

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  pathname: string
  admin: any
  logout: () => void
}

const Sidebar = ({ sidebarOpen, setSidebarOpen, pathname, admin, logout }: SidebarProps) => {
  const isActive = (href: string) => {
    if (href === '/admin') return pathname === '/admin'
    return pathname.startsWith(href)
  }

  return (
    <aside className={`admin-sidebar ${sidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 flex flex-col`}>
      {/* Logo */}
      <div className="admin-sidebar-header flex items-center gap-3 p-5 border-b border-white/10 overflow-hidden">
        {sidebarOpen ? (
          <Image 
            src="/images/whitelogo.png" 
            alt="XenonEdge" 
            width={140} 
            height={32} 
            className="object-contain"
          />
        ) : (
          <div className="flex-shrink-0 mx-auto">
            <Image 
              src="/images/favicon.png" 
              alt="Logo" 
              width={28} 
              height={28} 
              className="object-contain"
            />
          </div>
        )}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="ml-auto text-slate-400 hover:text-white transition-colors hidden lg:block"
        >
          <ChevronRight size={16} className={`transition-transform duration-300 ${sidebarOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`admin-nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
              isActive(href) ? 'active' : ''
            }`}
          >
            <Icon size={18} className="flex-shrink-0" />
            {sidebarOpen && <span className="text-sm font-medium truncate">{label}</span>}
          </Link>
        ))}
      </nav>

      {/* User */}
      <div className="p-3 border-t border-white/10">
        <div className={`flex items-center gap-3 px-3 py-2 ${sidebarOpen ? '' : 'justify-center'}`}>
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400">
            <User size={18} />
          </div>
          {sidebarOpen && (
            <div className="flex-1 overflow-hidden">
              <div className="text-sm font-semibold text-white truncate">{admin?.name}</div>
              <div className="text-[10px] text-sky-400 font-bold uppercase tracking-wider">Administrator</div>
            </div>
          )}
        </div>
        <button
          onClick={logout}
          className={`mt-2 flex items-center gap-3 w-full px-3 py-2 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-400/10 transition-all duration-200 ${
            !sidebarOpen ? 'justify-center' : ''
          }`}
        >
          <LogOut size={16} className="flex-shrink-0" />
          {sidebarOpen && <span className="text-sm">Logout</span>}
        </button>
      </div>
    </aside>
  )
}

function AdminLayoutInner({ children }: { children: React.ReactNode }) {
  const { admin, logout, isLoading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!isLoading && !admin && pathname !== '/admin/secure-entry-44') {
      router.push('/admin/secure-entry-44')
    }
  }, [admin, isLoading, pathname, router])

  // Auto-logout after 5 minutes of inactivity
  useEffect(() => {
    if (!admin) return;

    let timeout: NodeJS.Timeout;

    const resetTimer = () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        logout();
        router.push('/admin/secure-entry-44');
      }, 5 * 60 * 1000); // 5 minutes
    };

    // Events to track activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => window.addEventListener(event, resetTimer));

    resetTimer();

    return () => {
      if (timeout) clearTimeout(timeout);
      events.forEach(event => window.removeEventListener(event, resetTimer));
    };
  }, [admin, logout, router]);

  if (pathname === '/admin/secure-entry-44') return <>{children}</>
  if (isLoading || !admin) return (
    <div className="min-h-screen admin-bg flex items-center justify-center">
      <div className="admin-loader"></div>
    </div>
  )

  const sidebarProps = { sidebarOpen, setSidebarOpen, pathname, admin, logout }

  return (
    <div className="admin-shell min-h-screen flex">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex">
        <Sidebar {...sidebarProps} />
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="relative z-50 flex">
            <Sidebar {...sidebarProps} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Top Bar */}
        <header className="admin-topbar flex items-center gap-4 px-6 py-4 border-b border-white/10">
          <button
            className="lg:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Menu size={20} />
          </button>
          <div className="flex-1">
            <div className="text-sm text-slate-400">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="admin-topbar-btn">
              <Bell size={16} />
            </button>
            <Link href="/" target="_blank" className="admin-topbar-btn text-xs font-medium px-3 py-1.5 flex items-center gap-2">
              View Site
              <ChevronRight size={12} />
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto admin-content-area">
          {children}
        </main>
      </div>
    </div>
  )
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Toaster position="top-right" toastOptions={{
        style: { background: '#1e293b', color: '#f1f5f9', border: '1px solid rgba(255,255,255,0.1)' },
        success: { iconTheme: { primary: '#38bdf8', secondary: '#0f172a' } },
        error: { iconTheme: { primary: '#f87171', secondary: '#0f172a' } },
      }} />
      <AdminLayoutInner>{children}</AdminLayoutInner>
    </AuthProvider>
  )
}
