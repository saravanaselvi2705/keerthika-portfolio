"use client"

import { useEffect, useRef } from "react"

interface Particle {
    x: number
    y: number
    originX: number
    originY: number
    vx: number
    vy: number
    size: number
    baseAlpha: number
    alpha: number
}

export function HeroBackgroundCanvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Accessibility check
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        if (prefersReducedMotion) return

        let animationFrameId: number
        let width = (canvas.width = window.innerWidth)
        let height = (canvas.height = window.innerHeight)

        const particles: Particle[] = []
        const particleCount = Math.min(Math.floor((width * height) / 18000), 75)
        const mouse = { x: -1000, y: -1000, radius: 160 }

        for (let i = 0; i < particleCount; i++) {
            const x = Math.random() * width
            const y = Math.random() * height
            particles.push({
                x,
                y,
                originX: x,
                originY: y,
                vx: (Math.random() - 0.5) * 0.45,
                vy: (Math.random() - 0.5) * 0.45,
                size: Math.random() * 2.2 + 0.8,
                baseAlpha: Math.random() * 0.45 + 0.15,
                alpha: 0.2,
            })
        }

        const handleResize = () => {
            width = canvas.width = window.innerWidth
            height = canvas.height = window.innerHeight
        }

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouse.x = e.clientX - rect.left
            mouse.y = e.clientY - rect.top
        }

        const handleMouseLeave = () => {
            mouse.x = -1000
            mouse.y = -1000
        }

        window.addEventListener("resize", handleResize)
        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseleave", handleMouseLeave)

        const render = () => {
            ctx.clearRect(0, 0, width, height)

            // 1. Draw connecting web between nearby points
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const dist = Math.hypot(dx, dy)

                    if (dist < 130) {
                        const opacity = (1 - dist / 130) * 0.14
                        ctx.strokeStyle = `rgba(253, 111, 0, ${opacity})`
                        ctx.lineWidth = 0.75
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.stroke()
                    }
                }
            }

            // 2. Update and draw nodes
            for (const p of particles) {
                p.x += p.vx
                p.y += p.vy

                // Gentle bounds bounce
                if (p.x < 0 || p.x > width) p.vx *= -1
                if (p.y < 0 || p.y > height) p.vy *= -1

                // Mouse displacement
                const dx = mouse.x - p.x
                const dy = mouse.y - p.y
                const dist = Math.hypot(dx, dy)

                if (dist < mouse.radius) {
                    const angle = Math.atan2(dy, dx)
                    const force = (mouse.radius - dist) / mouse.radius
                    p.x -= Math.cos(angle) * force * 2.5
                    p.y -= Math.sin(angle) * force * 2.5
                    p.alpha = Math.min(p.baseAlpha + 0.4, 0.9)
                } else {
                    p.alpha = p.baseAlpha
                }

                // Render point with subtle warm glow
                ctx.fillStyle = `rgba(253, 111, 0, ${p.alpha})`
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fill()
            }

            animationFrameId = requestAnimationFrame(render)
        }

        render()

        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseleave", handleMouseLeave)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0 w-full h-full"
            aria-hidden="true"
        />
    )
}