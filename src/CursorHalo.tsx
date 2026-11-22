import { useEffect, useState } from 'react'

export default function CursorHalo() {
  const [position, setPosition] = useState({ x: -200, y: -200 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only run on client with mouse pointer
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(pointer: fine)')
    if (!mq.matches) return

    let rafId: number
    let targetX = -200
    let targetY = -200
    let currentX = -200
    let currentY = -200

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const updateLoop = () => {
      // Smooth lerp (linear interpolation) for fluid spring-like halo lag
      currentX += (targetX - currentX) * 0.15
      currentY += (targetY - currentY) * 0.15
      setPosition({ x: currentX, y: currentY })
      rafId = requestAnimationFrame(updateLoop)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    rafId = requestAnimationFrame(updateLoop)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      cancelAnimationFrame(rafId)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div
        className="pointer-events-none absolute w-[420px] h-[420px] rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          background: 'radial-gradient(circle, rgba(32, 214, 238, 0.12) 0%, rgba(147, 51, 234, 0.06) 45%, transparent 70%)'
        }}
      />
    </div>
  )
}
