import Link from 'next/link'

const cols = [
  {
    title: 'Prompt Libraries',
    links: [
      { href: '/chatgpt-prompts-for-business', label: 'ChatGPT for Business' },
      { href: '/instagram-caption-prompts', label: 'Instagram Captions' },
      { href: '/midjourney-prompts-realistic', label: 'Midjourney Realistic' },
      { href: '/ai-prompts-for-marketing', label: 'Marketing Prompts' },
      { href: '/coding-prompts', label: 'Coding Prompts' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms-of-service', label: 'Terms of Service' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-amber text-lg" style={{ fontFamily: 'var(--font-syne)' }}>◈</span>
              <span className="text-cream font-bold text-base" style={{ fontFamily: 'var(--font-syne)' }}>PromptForge</span>
            </div>
            <p className="text-zinc-dim text-sm leading-relaxed max-w-xs">
              Expert-quality AI prompt generation for professionals who demand more than generic output.
            </p>
            <div className="flex gap-2 mt-5">
              {['Free forever', 'No signup', 'Instant'].map(b => (
                <span key={b} className="text-xs text-amber border border-amber/20 bg-amber/5 px-2.5 py-1 rounded-full font-mono">
                  {b}
                </span>
              ))}
            </div>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold text-zinc-dim uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-zinc hover:text-amber transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-dim font-mono">© {new Date().getFullYear()} PromptForge. All rights reserved.</p>
          <p className="text-xs text-zinc-dim">Built for people who take AI seriously.</p>
        </div>
      </div>
    </footer>
  )
}
