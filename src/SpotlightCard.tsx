import { useRef, useState, type ReactNode, type MouseEvent } from 'react'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
  spotlightColor?: string
  isHighlighted?: boolean
  highlightLabel?: string
}

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(32, 214, 238, 0.14)',
  isHighlighted = false,
  highlightLabel
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseEnter = () => setOpacity(1)
  const handleMouseLeave = () => setOpacity(0)

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
        isHighlighted
          ? 'border-primary ring-1 ring-primary/40 shadow-xl shadow-primary/10 bg-card/95'
          : 'border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5'
      } ${className}`}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 45%)`,
        }}
        aria-hidden="true"
      />

      {/* Recommended for Persona Floating Pill */}
      {isHighlighted && highlightLabel && (
        <div className="absolute top-3.5 right-3.5 z-20">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-primary/20 text-primary border border-primary/40 backdrop-blur-md animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {highlightLabel}
          </span>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </div>
  )
}
