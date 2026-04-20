import type { Metadata } from 'next'
import Link from 'next/link'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'AI Prompts for Marketing – Expert ChatGPT Prompts for Marketers',
  description: 'High-quality AI prompts for marketing strategy, campaign briefs, SEO content, email sequences, brand positioning, and more. Built for real marketers who need real output.',
  alternates: { canonical: 'https://promptforge.ai/ai-prompts-for-marketing' },
}

const prompts = [
  {
    title: 'Brand Positioning Statement',
    tag: 'Branding',
    text: `Act as a brand strategist who has positioned companies acquired for $50M+. My company is [describe product/service] serving [ICP]. My competitors are [list 2-3]. Write 3 distinct positioning statements using different strategic angles: (1) category creation, (2) competitor contrast, (3) customer identity. For each: one-sentence positioning statement, the underlying strategic logic, and the risk of choosing that position. Then recommend one and justify why.`,
  },
  {
    title: 'Email Sequence (5-Part)',
    tag: 'Email Marketing',
    text: `Act as an email marketing strategist with a 35%+ average open rate across campaigns. Write a 5-email welcome sequence for [product/service] targeting [ICP]. Email 1 (Day 0): welcome + one unexpected insight that reframes their problem. Email 2 (Day 2): the most common mistake people in their situation make. Email 3 (Day 4): a case study or specific result. Email 4 (Day 7): handle the most common objection. Email 5 (Day 10): soft pitch with urgency. Subject line + preview text for each. No fluff, every email earns its place.`,
  },
  {
    title: 'Campaign Brief',
    tag: 'Campaign Planning',
    text: `Act as a Head of Marketing who has run campaigns generating $5M+ in pipeline. Write a complete campaign brief for [campaign goal, e.g., product launch, demand gen, seasonal promotion]. Include: campaign objective and single success metric, target audience with psychographic detail (not just demographics), core message and proof point, channel mix with budget allocation rationale, 3 creative concepts with different angles, timeline with key milestones, and how to determine if this campaign is failing at the 2-week mark.`,
  },
  {
    title: 'SEO Content Brief',
    tag: 'Content / SEO',
    text: `Act as an SEO content strategist who has ranked B2B content in the top 3 positions for competitive keywords. Write a complete content brief for an article targeting the keyword "[target keyword]". Include: search intent analysis (what does someone searching this actually want?), recommended H1 and 5 H2 subheadings, primary and secondary keywords to include naturally, 3 competitor articles to beat and their weaknesses, content angle that differentiates from existing results, word count recommendation with justification, internal linking opportunities, and the one expert insight that would make this article genuinely better than anything currently ranking.`,
  },
  {
    title: 'Paid Ad Creative Brief',
    tag: 'Paid Media',
    text: `Act as a performance marketing creative director with a track record of sub-$15 CPAs. Write a creative brief for a Facebook/Instagram ad campaign for [product] targeting [audience]. Deliver: 3 ad concepts with different creative angles (problem-led, social proof-led, curiosity-led), for each: hook (first 3 seconds), body script under 30 seconds, static ad headline and description variants, the core emotion being leveraged and why it works for this audience. Include guidance on which concept to test first and what metric indicates a winner.`,
  },
  {
    title: 'Go-to-Market Strategy',
    tag: 'GTM',
    text: `Act as a GTM strategist who has launched 10+ B2B SaaS products. I am launching [product description] targeting [ICP] with a [price point] price. My distribution advantages are [list any existing assets: audience, partnerships, etc.]. Design a 90-day GTM plan: Week 1-2 (foundation: positioning, messaging, assets), Week 3-6 (launch: channels, content, outreach), Week 7-12 (scale: what to double down on based on early signals). Include the single most important metric for each phase and the decision criteria for moving from one phase to the next.`,
  },
  {
    title: 'Customer Testimonial Prompt',
    tag: 'Social Proof',
    text: `Act as a conversion copywriter. I have this raw customer testimonial: "[paste testimonial]". Transform it into 5 usable social proof assets: (1) a 15-word micro-testimonial for ads, (2) a 50-word website testimonial with bolded key phrase, (3) a case study headline and subheadline, (4) a tweet-length quote, (5) a video testimonial script prompt the customer could read in under 60 seconds. Preserve the customer voice — do not make it sound like marketing copy.`,
  },
  {
    title: 'Competitor Teardown',
    tag: 'Competitive Intel',
    text: `Act as a competitive intelligence analyst. Conduct a teardown of [competitor name] marketing strategy based on what is publicly observable: their website messaging, ad library, content strategy, and positioning. Identify: their primary ICP and what pain they lead with, their conversion strategy (what they want visitors to do and how they get there), 3 weaknesses in their current approach, and 2 tactics they are doing well that I should note. Conclude with one specific opportunity their strategy is leaving open for me to own.`,
  },
]

export default function MarketingPromptsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-3">
        <Link href="/" className="text-xs text-zinc-dim hover:text-amber font-mono transition-colors">← Back to Generator</Link>
      </div>

      <div className="mb-12">
        <div className="inline-flex items-center gap-2 border border-yellow-500/20 bg-yellow-500/5 rounded-full px-3 py-1 mb-5">
          <span className="text-yellow-400 font-mono text-xs">◇</span>
          <span className="text-xs font-semibold text-yellow-400 font-mono uppercase tracking-widest">Marketing Prompts</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-cream mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
          AI Prompts for Marketing
        </h1>
        <p className="text-zinc text-lg max-w-2xl leading-relaxed mb-6">
          8 expert-structured AI prompts for marketers who need real strategic output. Brand positioning, campaign briefs, email sequences, SEO content, GTM strategy, and more.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/#generator" className="inline-flex items-center gap-2 btn-amber px-5 py-2.5 rounded-full text-sm font-semibold" style={{ fontFamily: 'var(--font-syne)' }}>
            Build Custom Marketing Prompt →
          </Link>
          <Link href="/chatgpt-prompts-for-business" className="border border-border text-zinc px-5 py-2.5 rounded-full text-sm hover:border-border-bright hover:text-zinc-light transition-all">
            Business Prompts →
          </Link>
        </div>
      </div>

      <AdSlot id="mktg-top" size="leaderboard" />

      <div className="prose-forge my-12">
        <h2>Why AI Is Transforming Marketing — When Used Correctly</h2>
        <p>
          The marketers getting the most leverage from AI are not using it to automate mediocre work at scale. They are using it as a thinking partner for the hard strategic problems: positioning, campaign architecture, message development, and competitive analysis. The difference is in how they prompt.
        </p>
        <p>
          A generic prompt gets a generic marketing plan. A prompt that assigns the AI the role of a Head of Marketing with specific experience, gives it your real company context, and asks for output structured around your actual decision, produces something you can actually use. The prompts in this library are built around that principle: every one is designed to produce a specific, actionable marketing deliverable — not a listicle of tips.
        </p>
        <h2>How to Get the Most from These Prompts</h2>
        <p>
          Replace every bracketed element with your specific context before running the prompt. The more precise your inputs, the more useful the output. If you want a prompt built exactly for your marketing situation, use the <Link href="/#generator" className="text-amber hover:text-amber-light transition-colors">copywriting prompt generator</Link> on the homepage — it produces custom prompts based on your product, audience, and goal in seconds.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {prompts.map((p, i) => (
          <div key={i} className="bg-surface border border-border rounded-2xl p-5 hover:border-border-bright transition-all">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="text-xs font-bold text-zinc-dim font-mono">#{i + 1}</span>
              <span className="text-sm font-bold text-cream" style={{ fontFamily: 'var(--font-syne)' }}>{p.title}</span>
              <span className="ml-auto text-xs font-mono text-yellow-400 border border-yellow-500/20 bg-yellow-500/5 px-2.5 py-0.5 rounded-full">{p.tag}</span>
            </div>
            <p className="prompt-output text-xs leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>

      <AdSlot id="mktg-bottom" size="leaderboard" />

      <div className="mt-10 pt-8 border-t border-border">
        <p className="text-xs font-semibold text-zinc-dim uppercase tracking-widest font-mono mb-4">You Might Also Like</p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: '/chatgpt-prompts-for-business', label: 'Business Prompts' },
            { href: '/instagram-caption-prompts', label: 'Instagram Captions' },
            { href: '/coding-prompts', label: 'Coding Prompts' },
            { href: '/', label: '← Generator' },
          ].map(l => (
            <Link key={l.href} href={l.href} className="text-xs text-zinc border border-border px-4 py-2 rounded-full hover:border-amber/50 hover:text-amber transition-all font-mono">{l.label}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}
