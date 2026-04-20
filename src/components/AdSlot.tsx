interface AdSlotProps {
  id?: string
  size?: 'banner' | 'leaderboard' | 'rectangle'
  className?: string
}

export default function AdSlot({ id = 'ad', size = 'leaderboard', className = '' }: AdSlotProps) {
  const dims = {
    banner:      { h: '60px',  label: 'Ad Space · 970×60' },
    leaderboard: { h: '90px',  label: 'Ad Space · 728×90' },
    rectangle:   { h: '250px', label: 'Ad Space · 300×250' },
  }
  const d = dims[size]
  return (
    <div
      className={`ad-slot w-full max-w-full my-6 ${className}`}
      style={{ height: d.h, minHeight: d.h }}
      data-ad-slot={id}
      aria-label="Advertisement placeholder"
    >
      <span className="text-xs text-zinc-dim font-mono">{d.label}</span>
    </div>
  )
}
