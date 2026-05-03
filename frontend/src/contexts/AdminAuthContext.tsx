'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

interface Admin {
  id: string
  username: string
  name: string
  email: string
  avatar: string
  role: string
}

interface AuthContextType {
  admin: Admin | null
  token: string | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [admin, setAdmin] = useState<Admin | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const savedToken = localStorage.getItem('admin_token')
    const savedAdmin = localStorage.getItem('admin_data')
    if (savedToken && savedAdmin) {
      setToken(savedToken)
      setAdmin(JSON.parse(savedAdmin))
      axios.defaults.headers.common['Authorization'] = `Bearer ${savedToken}`
    }
    setIsLoading(false)
  }, [])

  const login = async (username: string, password: string) => {
    try {
      const { data } = await axios.post(`${API_URL}/auth/login`, { username, password })
      if (data.success) {
        setToken(data.token)
        setAdmin(data.admin)
        localStorage.setItem('admin_token', data.token)
        localStorage.setItem('admin_data', JSON.stringify(data.admin))
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
        toast.success(`Welcome back, ${data.admin.name}!`)
        router.push('/admin')
      }
    } catch (error: any) {
      const message = error.response?.data?.message || 'Login failed'
      toast.error(message)
      throw error
    }
  }

  const logout = () => {
    setAdmin(null)
    setToken(null)
    localStorage.removeItem('admin_token')
    localStorage.removeItem('admin_data')
    delete axios.defaults.headers.common['Authorization']
    toast.success('Logged out successfully')
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ admin, token, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
export { API_URL }
