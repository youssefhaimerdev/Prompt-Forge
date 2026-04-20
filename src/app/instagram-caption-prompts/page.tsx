import type { Metadata } from 'next'
import Link from 'next/link'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'Instagram Caption Prompts – AI-Generated Captions That Stop the Scroll',
  description: 'Expert AI prompts for Instagram captions across every niche. Fitness, fashion, food, B2B, lifestyle, and more. Structured for engagement, saves, and follower growth.',
  alternates: { canonical: 'https://promptforge.ai/instagram-caption-prompts' },
}

const prompts = [
  { niche: 'Fitness Brand', style: 'Transformation', text: `Act as a social media strategist who has grown fitness accounts to 500K+ followers. Create 3 Instagram caption variants for a before/after transformation post targeting beginners who feel intimidated by fitness. Each variant must: open with a scroll-stopping hook (identify the hook mechanism used), deliver real tactical value in the body (not vague inspiration), and end with a CTA that drives saves not follows. Tone: empowering without toxic positivity. Include 8 hashtags mixing broad and micro-niche.` },
  { niche: 'Fashion / Lifestyle', style: 'Product Launch', text: `Act as a luxury brand social media director. Write 3 Instagram captions for a sustainable fashion brand launching a capsule collection. Variant A: storytelling-based origin story of the collection. Variant B: education post about why sustainable fashion is not a compromise. Variant C: desire-based product showcase. Each under 200 words. Tone: considered, aspirational, never preachy. Hashtags: quality over quantity — 5 maximum per variant.` },
  { niche: 'Food & Restaurant', style: 'Engagement', text: `Act as a food content strategist. Write 3 Instagram captions for a farm-to-table restaurant posting a dish photo. One caption should use sensory language to create cravings. One should tell the story of the ingredient source. One should use a question to drive comments about food preferences. For each: specify the optimal call to action and whether to include a recipe link or reservation CTA. Include platform-optimized hashtag sets.` },
  { niche: 'B2B / Thought Leadership', style: 'LinkedIn Cross-post', text: `Act as a LinkedIn and Instagram growth strategist for B2B brands. I am a founder posting about a counterintuitive lesson I learned scaling my company: that slowing down hiring actually accelerated growth. Write an Instagram carousel caption that: hooks with the contrarian claim, delivers the insight in 5 punchy bullets (carousel slides 2-6), and ends with a question that creates debate. Tone: confident, not corporate. No hashtag spam — 3 targeted tags only.` },
  { niche: 'Personal Brand / Coach', style: 'Authority Building', text: `Act as a personal branding strategist. Write 3 Instagram caption variants for a business coach sharing a client result: client went from $5k to $22k monthly revenue in 90 days. Variant A: lead with the result, tell the story. Variant B: lead with the method (process-focused). Variant C: lead with the client's mindset shift (transformation-focused). Each must feel genuine, not braggy. Include a soft pitch to a free resource or discovery call. Appropriate hashtags for each variant.` },
  { niche: 'Travel & Experiences', style: 'Wanderlust', text: `Act as a travel content creator with 200K+ Instagram followers. Write 3 caption styles for a sunrise photo from Santorini. One: poetic and atmospheric — transports the viewer. One: practical and useful — best time to visit, how to find this spot. One: personal and vulnerable — share what this place made you feel or realize. For each: the optimal hashtag strategy for reach in the travel niche and whether to use location tags or not.` },
  { niche: 'E-commerce / DTC', style: 'Social Proof', text: `Act as a DTC brand social media strategist. Write 3 Instagram captions using a 5-star customer review as the foundation. Product: a sleep supplement. Review highlight: customer slept through the night for the first time in 2 years. Variant A: lead with the review quote. Variant B: use the review to address a common objection (does it actually work?). Variant C: make it a social proof carousel with 3 reviews. Include CTA to shop, hashtag recommendations, and note on whether to use paid promotion for this content.` },
  { niche: 'Wellness / Mental Health', style: 'Educational', text: `Act as a mental health content strategist who understands the ethical boundaries of wellness content. Write an educational Instagram carousel caption on the topic of burnout warning signs. The caption must: hook with a surprising or underrecognized symptom, not be preachy or prescriptive, use accessible language (no clinical jargon), include a disclaimer done naturally (not awkwardly bolted on), and end with a community question. Tone: warm, grounded, peer-to-peer not expert-to-patient. Include caption for slide 1 (cover) and one for slide 10 (CTA slide).` },
]

export default function InstagramCaptionPromptsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-3">
        <Link href="/" className="text-xs text-zinc-dim hover:text-amber font-mono transition-colors">← Back to Generator</Link>
      </div>

      <div className="mb-12">
        <div className="inline-flex items-center gap-2 border border-pink-500/20 bg-pink-500/5 rounded-full px-3 py-1 mb-5">
          <span className="text-pink-400 font-mono text-xs">◉</span>
          <span className="text-xs font-semibold text-pink-400 font-mono uppercase tracking-widest">Instagram Prompts</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-cream mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
          Instagram Caption Prompts
        </h1>
        <p className="text-zinc text-lg max-w-2xl leading-relaxed mb-6">
          8 expert AI prompts for Instagram captions across every major niche. Each prompt produces 3 caption variants — not a single generic draft, but multiple strategic approaches you can test.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/#generator" className="inline-flex items-center gap-2 btn-amber px-5 py-2.5 rounded-full text-sm font-semibold" style={{ fontFamily: 'var(--font-syne)' }}>
            Generate Custom Caption →
          </Link>
          <Link href="/ai-prompts-for-marketing" className="border border-border text-zinc px-5 py-2.5 rounded-full text-sm hover:border-border-bright hover:text-zinc-light transition-all">
            All Marketing Prompts →
          </Link>
        </div>
      </div>

      <AdSlot id="ig-top" size="leaderboard" />

      <div className="prose-forge my-12">
        <h2>Why Instagram Captions Are Worth Getting Right</h2>
        <p>
          Most creators treat captions as an afterthought — a brief description of the image they just posted. This is a significant missed opportunity. The Instagram algorithm weights saves, shares, and comments heavily. All three are driven primarily by caption quality. A technically perfect photo with a weak caption underperforms a mediocre photo with a caption that makes people feel something or gives them something worth saving.
        </p>
        <p>
          The prompts in this library are designed to produce captions that work at the algorithmic level: scroll-stopping hooks that increase tap-through on carousels, clear CTAs that drive saves rather than just likes, and content that creates comment-worthy discussion. Each prompt asks the AI to produce three variants with different strategic approaches — because what works for one audience or platform moment does not always work for another.
        </p>
        <h2>The Anatomy of a High-Performing Instagram Caption</h2>
        <p>
          Every caption that outperforms has three structural elements: a hook that works within the first line (before the &quot;more&quot; cutoff), a body that delivers on the hook promise with real value, and a call to action that feels earned rather than forced. The prompts here build all three into the brief automatically.
        </p>
        <p>
          For more custom caption prompts, use the <Link href="/#generator" className="text-amber hover:text-amber-light transition-colors">social media prompt generator</Link> — choose your platform, niche, tone, and topic to get a prompt built for your specific situation.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {prompts.map((p, i) => (
          <div key={i} className="bg-surface border border-border rounded-2xl p-5 hover:border-border-bright transition-all">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="text-xs font-bold text-zinc-dim font-mono">#{i + 1}</span>
              <span className="text-sm font-bold text-cream" style={{ fontFamily: 'var(--font-syne)' }}>{p.niche}</span>
              <span className="ml-auto text-xs font-mono text-pink-400 border border-pink-500/20 bg-pink-500/5 px-2.5 py-0.5 rounded-full">{p.style}</span>
            </div>
            <p className="prompt-output text-xs leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>

      <AdSlot id="ig-bottom" size="leaderboard" />

      <div className="mt-10 pt-8 border-t border-border">
        <p className="text-xs font-semibold text-zinc-dim uppercase tracking-widest font-mono mb-4">You Might Also Like</p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: '/ai-prompts-for-marketing', label: 'Marketing Prompts' },
            { href: '/chatgpt-prompts-for-business', label: 'Business Prompts' },
            { href: '/midjourney-prompts-realistic', label: 'Midjourney Prompts' },
            { href: '/', label: '← Generator' },
          ].map(l => (
            <Link key={l.href} href={l.href} className="text-xs text-zinc border border-border px-4 py-2 rounded-full hover:border-amber/50 hover:text-amber transition-all font-mono">{l.label}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}
