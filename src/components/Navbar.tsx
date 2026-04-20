'use client'
import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '/chatgpt-prompts-for-business', label: 'Business' },
  { href: '/instagram-caption-prompts', label: 'Instagram' },
  { href: '/midjourney-prompts-realistic', label: 'Midjourney' },
  { href: '/ai-prompts-for-marketing', label: 'Marketing' },
  { href: '/coding-prompts', label: 'Coding' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-obsidian/90 backdrop-blur-xl">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="text-amber text-lg font-bold" style={{ fontFamily: 'var(--font-syne)' }}>◈</span>
          <span className="text-cream font-bold tracking-tight text-base" style={{ fontFamily: 'var(--font-syne)' }}>
            PromptForge
          </span>
          <span className="hidden sm:block text-xs text-zinc-dim border border-border px-1.5 py-0.5 rounded font-mono">v2</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="text-xs text-zinc hover:text-cream px-3 py-1.5 rounded-md hover:bg-surface-2 transition-all font-medium tracking-wide">
              {l.label}
            </Link>
          ))}
          <Link href="/#generator"
            className="ml-2 text-xs font-semibold btn-amber px-4 py-1.5 rounded-full"
            style={{ fontFamily: 'var(--font-syne)' }}>
            Generate Free →
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-zinc hover:text-cream" aria-label="Menu">
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <rect width="18" height="2" rx="1" fill="currentColor" className={`transition-all origin-center ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <rect y="6" width="18" height="2" rx="1" fill="currentColor" className={`transition-all ${open ? 'opacity-0' : ''}`} />
            <rect y="12" width="18" height="2" rx="1" fill="currentColor" className={`transition-all origin-center ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-obsidian px-4 py-3 space-y-1">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block text-sm text-zinc hover:text-cream py-2 px-3 rounded-lg hover:bg-surface-2 transition-all">
              {l.label}
            </Link>
          ))}
          <Link href="/#generator" onClick={() => setOpen(false)}
            className="block mt-2 text-center text-sm font-semibold btn-amber py-2.5 rounded-full">
            Generate Free →
          </Link>
        </div>
      )}
    </header>
  )
}
