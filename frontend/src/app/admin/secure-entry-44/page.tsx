'use client'
import { useState } from 'react'
import { useAuth } from '@/contexts/AdminAuthContext'
import { Eye, EyeOff, Lock } from 'lucide-react'
import Image from 'next/image'

export default function AdminLogin() {
  const { login } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await login(username, password)
    } catch {
      // error handled in context
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="admin-login-page min-h-screen flex items-center justify-center relative bg-[#040c18]">
      <div className="relative z-10 w-full max-w-md px-6">
        {/* Logo */}
        <div className="text-center mb-10 flex flex-col items-center">
          <Image
            src="/images/whitelogo.png"
            alt="XenonEdge Logo"
            width={180}
            height={40}
            className="mb-6 object-contain"
          />
          <h1 className="text-2xl font-bold text-white mb-1">Admin Portal</h1>
          <p className="text-slate-400 text-sm">Management System</p>
        </div>

        {/* Login Card */}
        <div className="admin-login-card rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Username / Email
              </label>
              <input
                type="text"
                id="admin-username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
                className="admin-input w-full px-4 py-3 rounded-lg text-sm bg-slate-900/50 border border-slate-700 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="admin-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="admin-input w-full pl-4 pr-12 py-3 rounded-lg text-sm bg-slate-900/50 border border-slate-700 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors flex items-center justify-center h-full"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              id="admin-login-btn"
              className="admin-btn-primary w-full py-3 rounded-xl font-semibold text-sm mt-2 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Authenticating...
                </>
              ) : (
                <>
                  <Lock size={16} />
                  Sign In to Dashboard
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-white/10 text-center">
            <p className="text-xs text-slate-500">
              Protected area — Authorized personnel only
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <a href="/" className="text-xs text-slate-500 hover:text-sky-400 transition-colors">
            ← Back to Website
          </a>
        </div>
      </div>
    </div>
  )
}
