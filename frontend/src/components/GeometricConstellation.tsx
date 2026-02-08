"use client"
import { useEffect, useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

export default function GeometricConstellation() {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -30])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -70])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
            drawConstellation()
        }

        const drawConstellation = () => {
            if (!ctx || !canvas) return

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Create a grid of nodes
            const cols = 12
            const rows = 6
            const spacingX = canvas.width / (cols - 1)
            const spacingY = canvas.height / (rows - 1)

            const nodes: { x: number; y: number }[] = []

            // Generate nodes in a grid pattern
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    const x = col * spacingX
                    const y = row * spacingY
                    nodes.push({ x, y })
                }
            }

            // Draw connections between nearby nodes
            ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)' // Darker light gray for lines
            ctx.lineWidth = 0.5

            nodes.forEach((node, i) => {
                nodes.forEach((otherNode, j) => {
                    if (i >= j) return

                    const dx = node.x - otherNode.x
                    const dy = node.y - otherNode.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    // Only connect nodes within a certain distance
                    if (distance < spacingX * 1.5 && distance < spacingY * 2) {
                        ctx.beginPath()
                        ctx.moveTo(node.x, node.y)
                        ctx.lineTo(otherNode.x, otherNode.y)
                        ctx.stroke()
                    }
                })
            })

            // Draw nodes
            nodes.forEach((node) => {
                ctx.fillStyle = 'rgba(148, 163, 184, 0.6)' // Darker light gray for nodes
                ctx.beginPath()
                ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
                ctx.fill()
            })
        }

        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        return () => {
            window.removeEventListener('resize', resizeCanvas)
        }
    }, [])

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden">
            {/* Static canvas layer */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />

            {/* Parallax geometric shapes */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-10 left-10 w-32 h-32 border border-sky-400/60 rounded-lg rotate-12"
            />

            <motion.div
                style={{ y: y2 }}
                className="absolute top-1/3 right-20 w-24 h-24 border border-purple-400/60 rounded-full"
            />

            <motion.div
                style={{ y: y3 }}
                className="absolute bottom-20 left-1/4 w-40 h-40 border border-emerald-400/60 rotate-45"
            />

            <motion.div
                style={{ y: y1 }}
                className="absolute top-1/2 right-1/3 w-20 h-20 border border-rose-400/60 rounded-lg -rotate-12"
            />

            <motion.div
                style={{ y: y2 }}
                className="absolute top-[10%] right-[15%] w-16 h-16 border border-indigo-400/60 rotate-12"
            />
        </div>
    )
}
