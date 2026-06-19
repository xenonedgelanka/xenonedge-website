'use client'

import { useState, useEffect, useRef } from 'react'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

interface ThemeConfig {
  greeting: string
  badgeBg: string
}

const THEME_MAP: Record<string, ThemeConfig> = {
  christmas: {
    greeting: 'Merry Christmas! 🎄',
    badgeBg: 'from-rose-600 to-green-700'
  },
  halloween: {
    greeting: 'Happy Halloween! 👻',
    badgeBg: 'from-orange-600 to-purple-800'
  }
}

interface Particle {
  x: number
  y: number
  size: number
  speedY: number
  speedX: number
  char?: string
  rotation: number
  spin: number
  opacity: number
  driftFreq: number
}

export default function FestiveThemeEffects() {
  const [activeTheme, setActiveTheme] = useState<string>('default')
  const [dismissed, setDismissed] = useState<boolean>(false)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationFrameId = useRef<number | null>(null)
  const particles = useRef<Particle[]>([])

  useEffect(() => {
    fetch(`${API_URL}/settings`)
      .then((res) => res.json())
      .then((res) => {
        if (res.success && res.data && res.data.activeThemeMode) {
          const mode = res.data.activeThemeMode
          if (mode === 'christmas' || mode === 'halloween') {
            setActiveTheme(mode)
          }
        }
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (activeTheme === 'default' || !THEME_MAP[activeTheme]) {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const maxParticles = activeTheme === 'christmas' ? 120 : 40
    particles.current = Array.from({ length: maxParticles }).map(() =>
      createParticle(canvas.width, canvas.height, true)
    )

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current.forEach((p, idx) => {
        ctx.save()

        if (activeTheme === 'christmas') {
          ctx.translate(p.x, p.y)
          ctx.globalAlpha = p.opacity
          ctx.beginPath()
          ctx.arc(0, 0, p.size, 0, Math.PI * 2)
          ctx.fillStyle = '#ffffff'
          ctx.fill()
        } else {
          ctx.translate(p.x, p.y)
          ctx.rotate(p.rotation)
          ctx.globalAlpha = p.opacity
          ctx.font = `${p.size}px Arial`
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          if (p.char) ctx.fillText(p.char, 0, 0)
        }

        ctx.restore()

        p.y += p.speedY
        p.x += p.speedX + Math.sin(p.y * p.driftFreq) * 0.3
        p.rotation += p.spin

        if (p.y > canvas.height + 40 || p.x < -40 || p.x > canvas.width + 40) {
          particles.current[idx] = createParticle(canvas.width, canvas.height, false)
        }
      })

      animationFrameId.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
    }
  }, [activeTheme])

  const createParticle = (width: number, height: number, isInitial: boolean): Particle => {
    if (activeTheme === 'christmas') {
      const size = Math.random() * 2.8 + 1.2
      return {
        x: Math.random() * width,
        y: isInitial ? Math.random() * height : -10,
        size,
        speedY: (size / 4) * 2.6 + 1.6,
        speedX: Math.random() * 0.8 - 0.4,
        rotation: 0,
        spin: 0,
        opacity: Math.random() * 0.5 + 0.35,
        driftFreq: Math.random() * 0.02 + 0.005
      }
    } else {
      const emojis = ['🕸️']
      const size = Math.random() * 10 + 16
      return {
        x: Math.random() * width,
        y: isInitial ? Math.random() * height : -40,
        size,
        speedY: (size / 26) * 4.5 + 3.5,
        speedX: Math.random() * 0.8 - 0.4,
        char: emojis[Math.floor(Math.random() * emojis.length)],
        rotation: Math.random() * Math.PI * 2,
        spin: Math.random() * 0.02 - 0.01,
        opacity: Math.random() * 0.3 + 0.3,
        driftFreq: Math.random() * 0.015 + 0.005
      }
    }
  }

  if (activeTheme === 'default' || !THEME_MAP[activeTheme]) return null

  const config = THEME_MAP[activeTheme]

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9999] select-none"
      />

      {!dismissed && (
        <div className="fixed bottom-5 right-5 z-[99999]">
          <div className={`flex items-center gap-3 pl-4 pr-2 py-2.5 rounded-full bg-gradient-to-r ${config.badgeBg} text-white shadow-lg border border-white/15`}>
            <span className="text-xs font-semibold tracking-wide whitespace-nowrap">
              {config.greeting}
            </span>
            <button
              onClick={() => setDismissed(true)}
              className="w-6 h-6 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors shrink-0"
              aria-label="Dismiss"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
