import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[65vh] flex flex-col items-center justify-center px-4 text-center">
      <span className="text-6xl font-black text-amber/20 font-mono mb-6">404</span>
      <h1 className="text-2xl font-bold text-cream mb-3" style={{ fontFamily: 'var(--font-syne)' }}>Page Not Found</h1>
      <p className="text-zinc text-sm mb-8 max-w-sm">This page does not exist or has been moved.</p>
      <Link href="/" className="btn-amber px-6 py-2.5 rounded-full text-sm font-semibold" style={{ fontFamily: 'var(--font-syne)' }}>
        ← Back to Generator
      </Link>
    </div>
  )
}
