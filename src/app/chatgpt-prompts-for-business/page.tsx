import type { Metadata } from 'next'
import Link from 'next/link'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'ChatGPT Prompts for Business – 15 Expert Templates That Actually Work',
  description: 'Tested ChatGPT prompts for founders and operators: strategy, sales emails, market research, hiring, pricing, investor pitches, and more. Copy-ready and structured for real results.',
  alternates: { canonical: 'https://promptforge.ai/chatgpt-prompts-for-business' },
}

const prompts = [
  { title: 'Churn Diagnosis', tag: 'Retention', text: `Act as a SaaS growth expert who has reduced churn for 20+ companies. My B2B SaaS has ${String.fromCharCode(91)}X%${String.fromCharCode(93)} monthly churn among ${String.fromCharCode(91)}customer segment${String.fromCharCode(93)}. Diagnose the root cause beyond the obvious surface explanation. Present 3 intervention strategies ordered by speed of impact. For the fastest one, give me a 14-day execution plan with specific daily actions.` },
  { title: 'Competitive Positioning', tag: 'Strategy', text: `Act as a brand strategist and competitive intelligence expert. My company is ${String.fromCharCode(91)}describe company${String.fromCharCode(93)} competing against ${String.fromCharCode(91)}list 2-3 competitors${String.fromCharCode(93)}. Conduct a positioning analysis: where each player wins, where they are vulnerable, and the uncontested positioning territory available to me. Output a positioning statement I can use in sales and marketing immediately.` },
  { title: 'Cold Email Sequence', tag: 'Sales', text: `Act as a B2B sales expert with a 35%+ reply rate track record. Write a 3-email cold outreach sequence targeting ${String.fromCharCode(91)}job title${String.fromCharCode(93)} at ${String.fromCharCode(91)}company type${String.fromCharCode(93)}. I solve ${String.fromCharCode(91)}specific pain point${String.fromCharCode(93)}. Email 1: pattern interrupt hook, no pitch. Email 2: one insight or case study, soft ask. Email 3: graceful breakup with final value. Each under 100 words.` },
  { title: 'Pricing Strategy Audit', tag: 'Revenue', text: `Act as a SaaS pricing strategist. My product costs ${String.fromCharCode(91)}amount${String.fromCharCode(93)} to deliver and sells at ${String.fromCharCode(91)}price${String.fromCharCode(93)}. Competitors charge ${String.fromCharCode(91)}range${String.fromCharCode(93)}. My best customers value ${String.fromCharCode(91)}primary outcome${String.fromCharCode(93)} most. Audit my current pricing model, present 3 alternatives (value-based, usage-based, tiered), recommend one with specific reasoning, and identify the single price change I could make tomorrow that would increase revenue without losing customers.` },
  { title: 'Investor Pitch Email', tag: 'Fundraising', text: `Act as a founder who has raised $5M+ in seed funding. Write a cold investor email for my ${String.fromCharCode(91)}type of business${String.fromCharCode(93)}. Traction: ${String.fromCharCode(91)}key metric${String.fromCharCode(93)}. Market: ${String.fromCharCode(91)}market size/opportunity${String.fromCharCode(93)}. Ask: ${String.fromCharCode(91)}amount and use${String.fromCharCode(93)}. Under 180 words. Confident, specific, and ends with a single low-friction ask. Not salesy — sound like someone worth meeting.` },
  { title: 'Market Entry Analysis', tag: 'Expansion', text: `Act as a market research analyst and startup strategist. I want to expand into ${String.fromCharCode(91)}new market/geography/segment${String.fromCharCode(93)}. My current product is ${String.fromCharCode(91)}describe${String.fromCharCode(93)}. Provide: market size estimate with source reasoning, 3 incumbent players and their weaknesses, the single biggest risk to my entry, and a minimum viable entry strategy I could execute in 90 days with a small team.` },
  { title: 'OKR Framework', tag: 'Operations', text: `Act as a COO who has implemented OKRs at 10+ companies. My company is in ${String.fromCharCode(91)}stage${String.fromCharCode(93)} with ${String.fromCharCode(91)}team size${String.fromCharCode(93)} people. Our top priority this quarter is ${String.fromCharCode(91)}main goal${String.fromCharCode(93)}. Write a complete OKR set: 3 Objectives with 3 Key Results each. For each KR: current baseline, 90-day target, and the leading indicator that tells me if I am on track before the quarter ends.` },
  { title: 'Hiring Framework', tag: 'Hiring', text: `Act as a Head of People at a fast-growing startup. I am hiring a ${String.fromCharCode(91)}role${String.fromCharCode(93)} for the first time at a ${String.fromCharCode(91)}stage${String.fromCharCode(93)} company. Give me: the 3 must-have attributes that matter most at this stage (not generic skills), 5 interview questions that reveal each attribute, the red flags to watch for, and a compensation benchmark for the current market.` },
  { title: 'Content Strategy', tag: 'Marketing', text: `Act as a content strategist who has built SEO-driven content engines for B2B SaaS companies. My company is ${String.fromCharCode(91)}describe${String.fromCharCode(93)} targeting ${String.fromCharCode(91)}ICP${String.fromCharCode(93)}. Design a 90-day content plan: 3 content pillars, 2 posts per pillar per month with specific working titles, the distribution channel for each, and the one piece of content I should create first based on fastest path to organic traffic.` },
  { title: 'Customer Success Playbook', tag: 'Retention', text: `Act as a Customer Success leader who has reduced churn and increased NRR at SaaS companies. I have ${String.fromCharCode(91)}number${String.fromCharCode(93)} customers, a CS team of ${String.fromCharCode(91)}size${String.fromCharCode(93)}, and my biggest CS problem is ${String.fromCharCode(91)}problem${String.fromCharCode(93)}. Build a customer health scoring system: the 5 signals that predict churn 60 days before it happens, the intervention playbook for each signal, and the single process change that would have the highest impact on retention this quarter.` },
]

export default function ChatGPTBusinessPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="mb-3">
        <Link href="/" className="text-xs text-zinc-dim hover:text-amber font-mono transition-colors">
          ← Back to Generator
        </Link>
      </div>

      <div className="mb-12">
        <div className="inline-flex items-center gap-2 border border-amber/20 bg-amber/5 rounded-full px-3 py-1 mb-5">
          <span className="text-amber font-mono text-xs">◆</span>
          <span className="text-xs font-semibold text-amber font-mono uppercase tracking-widest">Business Prompts</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-cream mb-4 leading-tight" style={{ fontFamily: 'var(--font-syne)' }}>
          ChatGPT Prompts for Business
        </h1>
        <p className="text-zinc text-lg max-w-2xl leading-relaxed mb-6">
          10 expert-engineered prompts for founders, operators, and strategists. Each is structured to produce a real strategic output — not a listicle of generic advice.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/#generator" className="inline-flex items-center gap-2 btn-amber px-5 py-2.5 rounded-full text-sm font-semibold" style={{ fontFamily: 'var(--font-syne)' }}>
            Build Custom Business Prompt →
          </Link>
          <Link href="/ai-prompts-for-marketing" className="inline-flex items-center gap-2 border border-border text-zinc px-5 py-2.5 rounded-full text-sm hover:border-border-bright hover:text-zinc-light transition-all">
            Marketing Prompts →
          </Link>
        </div>
      </div>

      <AdSlot id="biz-top" size="leaderboard" />

      <div className="prose-forge my-12">
        <h2>Why Most Business ChatGPT Prompts Fail</h2>
        <p>
          The majority of business professionals using ChatGPT are getting a fraction of its potential value — and the gap is almost always in how they structure their prompts. When you ask an AI to &quot;help with your business strategy,&quot; you are essentially asking a world-class consultant to advise you based on almost no information. The AI makes safe, generic assumptions and delivers safe, generic output.
        </p>
        <p>
          The prompts in this library are built differently. Each one establishes an expert role with specific credentials, provides real business context (stage, constraints, goal), sets explicit quality standards, and specifies the exact format of the output. The result is the difference between getting a blog post and getting a strategic recommendation you can act on.
        </p>
        <h2>How to Use These Prompts</h2>
        <p>
          Copy any prompt below, paste it into ChatGPT (GPT-4 or later recommended), and replace the bracketed text with your specific details. The more precisely you fill in the context, the more useful the output. These prompts work equally well with Claude, Gemini, and other frontier models.
        </p>
        <p>
          Want a prompt tailored exactly to your situation? Use the <Link href="/#generator" className="text-amber hover:text-amber-light transition-colors">business prompt generator</Link> on the homepage — fill in your specific industry, challenge, and stage, and it builds a custom expert prompt in seconds.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {prompts.map((p, i) => (
          <div key={i} className="bg-surface border border-border rounded-2xl p-5 hover:border-border-bright transition-all">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="text-xs font-bold text-zinc-dim font-mono">#{i + 1}</span>
              <span className="text-sm font-bold text-cream" style={{ fontFamily: 'var(--font-syne)' }}>{p.title}</span>
              <span className="ml-auto text-xs font-mono text-amber border border-amber/20 bg-amber/5 px-2.5 py-0.5 rounded-full">{p.tag}</span>
            </div>
            <p className="prompt-output text-xs leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>

      <AdSlot id="biz-bottom" size="leaderboard" />

      <div className="mt-10 pt-8 border-t border-border">
        <p className="text-xs font-semibold text-zinc-dim uppercase tracking-widest font-mono mb-4">You Might Also Like</p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: '/ai-prompts-for-marketing', label: 'Marketing Prompts' },
            { href: '/coding-prompts', label: 'Coding Prompts' },
            { href: '/instagram-caption-prompts', label: 'Instagram Captions' },
            { href: '/', label: '← Generator' },
          ].map(l => (
            <Link key={l.href} href={l.href} className="text-xs text-zinc border border-border px-4 py-2 rounded-full hover:border-amber/50 hover:text-amber transition-all font-mono">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
