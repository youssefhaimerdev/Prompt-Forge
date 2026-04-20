import type { Metadata } from 'next'
import Link from 'next/link'
import Generator from '@/components/Generator'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'AI Prompt Generator – Turn Simple Ideas Into Powerful AI Prompts',
  description:
    'Generate expert-quality AI prompts for ChatGPT, Midjourney, business strategy, copywriting, and coding. Free, instant, no signup. Stop getting generic AI output — get prompts that actually work.',
  alternates: { canonical: 'https://promptforge.ai' },
}

const examples = [
  {
    cat: 'ChatGPT · Business',
    color: '#10B981',
    prompt: `Act as a McKinsey-tier strategist who has also built and sold two companies. My SaaS has 15% monthly churn among small business customers.\n\nDiagnose the root cause (it's rarely what it appears to be), present 3 strategic options ordered by risk/reward with effort estimates, recommend one path with specific reasoning tied to early-stage constraints, and give me one 30-day quick win I can execute this week.`,
  },
  {
    cat: 'Midjourney · Cinematic',
    color: '#8B5CF6',
    prompt: `A lone jazz musician playing saxophone on a rain-slicked New York rooftop at 2am, steam rising from street vents below, cinematic photography, neon reflections in puddles, Blade Runner atmosphere, golden-amber key light from a distant window, volumetric fog, extreme detail, Hasselblad quality --ar 16:9 --v 6.1 --q 2 --s 750 --style raw`,
  },
  {
    cat: 'Instagram · Fitness',
    color: '#EC4899',
    prompt: `Act as a world-class social media strategist who has grown fitness accounts to 500K+. Create 3 Instagram caption variants for a post about overcoming workout fear as a beginner.\n\nEach must: open with a scroll-stopping hook (label the mechanism), deliver real value in the body, end with a CTA that drives saves. Tone: empowering and direct — never toxic positivity. Include hashtag recommendations.`,
  },
  {
    cat: 'Copywriting · Ad',
    color: '#F59E0B',
    prompt: `Act as a direct-response copywriter with campaigns generating $2M+ in revenue. Write a Facebook ad for an AI scheduling tool for freelancers using PAS framework.\n\nICP: freelancers juggling 5+ clients who miss deadlines. USP: fully automated — reads your emails and books your calendar. Deliver: primary copy, 50-word variant, 5 headline alternatives (curiosity / fear / desire / specific / contrarian).`,
  },
  {
    cat: 'Coding · Architecture',
    color: '#06B6D4',
    prompt: `Act as a Staff Engineer at Stripe caliber. Design a rate limiting system for a multi-tenant REST API handling 50K req/s.\n\nBefore coding: state the core technical challenge, your approach and one rejected alternative with reasoning. Deliver: full production code with inline comments, edge case handling, security vulnerabilities to address, and 3 critical test cases.`,
  },
  {
    cat: 'Business · Strategy',
    color: '#D4902A',
    prompt: `Act as a revenue growth consultant. I run a B2B SaaS at $80k MRR with a 3-person team. Primary bottleneck: lead generation — we close 40% of demos but only book 8/month.\n\nDiagnose the root cause, give me 3 growth levers ordered by effort vs. impact, recommend one path, and design a 30-day experiment I can run with zero budget to validate the approach.`,
  },
]

const faqs = [
  {
    q: `What makes PromptForge different from just typing in ChatGPT?`,
    a: `When you type directly into ChatGPT, you're asking a world-class system to help you with almost no context. The AI fills all the blanks with safe, average assumptions — which produces safe, average output. PromptForge builds prompts that assign a precise expert role, provide deep context, set quality standards, specify output format, and include tone direction. The difference in output quality is immediate and significant.`,
  },
  {
    q: `What is the Enhance Prompt mode?`,
    a: `Enhance mode takes any basic prompt you've already written — even just a sentence — and upgrades it into a full expert-level prompt with ROLE + CONTEXT + OBJECTIVE + CONSTRAINTS + FORMAT structure. Paste "help me grow my SaaS" and get back a 400-word strategic brief that tells an AI exactly how to think, what to produce, and what quality bar to meet. It's the fastest way to level up any existing prompt.`,
  },
  {
    q: `Are the generated prompts better than what I write myself?`,
    a: `For most people, yes — substantially. PromptForge prompts incorporate prompt engineering best practices that took the field years to develop: role-priming, constraint layering, output format specification, quality bars, and few-shot examples. Unless you actively study prompt engineering, these techniques are non-obvious. The templates are written at the level of a professional prompt engineer, not a casual user.`,
  },
  {
    q: `Is this tool free? Do I need to create an account?`,
    a: `Completely free, no account required. Generate unlimited prompts right now without entering an email address or credit card. PromptForge is built on the principle that better AI prompts should be accessible to everyone.`,
  },
  {
    q: `Which AI tools work with these prompts?`,
    a: `All of them. The prompts work with ChatGPT (any version), Claude, Gemini, Llama, Mistral, and other text models. The Midjourney-specific prompts work with Midjourney v6, DALL·E 3, Stable Diffusion, and Ideogram. Good prompt structure is model-agnostic — it's about communicating clearly with any AI system.`,
  },
  {
    q: `Why do regenerated prompts look different each time?`,
    a: `PromptForge's variability system intentionally rotates structure formats, instruction boosters, and output directives on each generation. This prevents the repetitive, templated feel that most prompt generators produce. The same inputs can yield a numbered-list structure, a narrative format, or a section-header format — each emphasizing different quality criteria. The core expert content stays the same; the emphasis and structure varies for fresh results.`,
  },
]

export default function HomePage() {
  return (
    <>
      {/* Top Ad Slot */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <AdSlot id="home-top" size="banner" />
      </div>

      {/* ── HERO ──────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber/4 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 border border-amber/25 bg-amber/5 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse-amber" />
              <span className="text-xs font-semibold text-amber font-mono tracking-widest uppercase">
                Free · No Signup · Expert-Engineered
              </span>
            </div>
          </div>

          {/* H1 — stronger headline */}
          <h1
            className="text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cream leading-tight mb-5 tracking-tight"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Turn Simple Ideas Into<br />
            <span className="text-amber">Powerful AI Prompts</span>
          </h1>

          <p className="text-center text-zinc text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            Stop settling for generic AI output. PromptForge builds expert-engineered prompts with
            role assignment, deep context, quality standards, and structured output — the difference between
            a mediocre answer and one that actually solves your problem.
          </p>

          <p className="text-center text-zinc-dim text-sm max-w-xl mx-auto leading-relaxed mb-10">
            Two modes: <span className="text-amber font-semibold">Generate</span> a prompt from scratch across 6 categories,
            or <span className="text-amber font-semibold">Enhance</span> any prompt you already have into an expert-level brief.
          </p>

          {/* Trust row */}
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-2 mb-14 text-sm">
            {[
              { icon: '◈', text: '6 prompt categories' },
              { icon: '⚡', text: 'Enhance any prompt' },
              { icon: '◆', text: '12 expert templates' },
              { icon: '○', text: 'Copy with one click' },
            ].map(item => (
              <span key={item.text} className="flex items-center gap-1.5 text-zinc-dim font-mono text-xs">
                <span className="text-amber text-xs">{item.icon}</span>
                {item.text}
              </span>
            ))}
          </div>

          {/* Generator */}
          <div className="max-w-3xl mx-auto">
            <Generator />
          </div>
        </div>
      </section>

      {/* Mid Ad Slot */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSlot id="home-mid" size="leaderboard" />
      </div>

      {/* ── EXAMPLE PROMPTS ──────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20" aria-labelledby="examples-h2">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-amber uppercase tracking-widest font-mono mb-3">Output Quality</p>
          <h2
            id="examples-h2"
            className="text-2xl sm:text-3xl font-bold text-cream mb-3"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            What Expert Prompts Look Like
          </h2>
          <p className="text-zinc text-sm max-w-xl mx-auto">
            Real prompts generated by PromptForge. Compare them to what you normally type — the structure alone changes what you get back.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {examples.map((ex, i) => (
            <div
              key={i}
              className="bg-surface border border-border rounded-2xl p-5 hover:border-border-bright transition-all group"
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-xs font-bold font-mono px-2.5 py-1 rounded-full border"
                  style={{ color: ex.color, borderColor: `${ex.color}40`, backgroundColor: `${ex.color}10` }}
                >
                  {ex.cat}
                </span>
              </div>
              <p className="prompt-output text-xs leading-relaxed line-clamp-6">{ex.prompt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SEO CONTENT ──────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-border">
        <div className="prose-forge">

          <h2>What Is an AI Prompt Generator?</h2>
          <p>
            An AI prompt generator is a tool that helps you write better instructions for artificial intelligence models. The idea is simple: the quality of what any AI produces is almost entirely determined by what you put in. A weak prompt gets a generic response. A structured, expert-crafted prompt gets output that is genuinely useful — specific, deep, and tailored to your exact situation.
          </p>
          <p>
            PromptForge takes the craft of prompt engineering — a discipline that serious AI practitioners spend months developing — and makes it accessible in seconds. You select a category, choose a tone, fill in a few details, and the system assembles a prompt that includes everything a professional prompt engineer would write: a precise expert role, clear context, quality standards, output format specifications, tone direction, and few-shot examples that calibrate the AI to your expected output style.
          </p>

          <h2>Turn Simple Ideas Into Powerful AI Prompts</h2>
          <p>
            Most people type something vague into ChatGPT and get something vague back. This is not a failure of the AI — it is a failure of communication. When you type &quot;help me with my marketing,&quot; you are asking a system that knows everything to advise someone who gave it almost nothing. The AI fills in every blank with a statistical average and delivers an average response.
          </p>
          <p>
            PromptForge is built on one insight: if you tell the AI exactly who it is, exactly what you need, exactly what quality bar to meet, and exactly how to format the output — you get dramatically better results. Every time. With any model. The difference between &quot;help me with my marketing&quot; and a 400-word expert-structured prompt is not complexity. It is specificity. PromptForge handles the specificity for you.
          </p>

          <h2>Why High-Quality AI Prompts Matter</h2>
          <p>
            Here is what most people figure out after weeks of frustrating AI experiences: the model is almost never the problem. ChatGPT-4, Claude 3, Gemini — these are extraordinary systems. The bottleneck is almost always communication quality. When you type a vague sentence into an AI chat, the model has to make hundreds of assumptions about what you actually want. It fills those gaps with statistical averages. And averages produce generic output.
          </p>
          <p>
            Consider the difference between two requests. The first: &quot;Give me advice on growing my business.&quot; The second: &quot;Act as a revenue growth consultant who has worked with 50+ B2B SaaS companies. My business is at $80k MRR with 15% monthly churn. Diagnose the root cause of the churn, present three strategic options ordered by risk/reward with specific effort estimates, and recommend one path with reasoning tied to my stage constraints.&quot; The first prompt gets you a listicle. The second gets you a strategic roadmap. Same AI, completely different output.
          </p>
          <p>
            That gap — between a vague request and an expert-structured brief — is what PromptForge closes.
          </p>

          <h2>How the Prompt Engine Works</h2>
          <p>
            Every prompt PromptForge generates is built on a professional prompt engineering framework. Each output includes layers that most users never think to add:
          </p>
          <ul>
            <li><strong>Role assignment</strong> — The AI is given a specific expert identity with real credentials, not just asked to &quot;help.&quot; A McKinsey strategist who has also built companies thinks differently than a generic assistant.</li>
            <li><strong>Context depth</strong> — The prompt includes your specific situation: industry, stage, constraints, and goal. The AI stops making assumptions.</li>
            <li><strong>Quality standards</strong> — Every prompt includes explicit quality bars. &quot;If your response could have been written by someone who has never worked in this field, rewrite it&quot; sets a standard that generic prompts never establish.</li>
            <li><strong>Output format specification</strong> — The AI is told exactly how to structure its response. This eliminates the common problem of getting a wall of text when you needed a framework.</li>
            <li><strong>Tone directive</strong> — Tone is not just style. A Viral tone instructs the AI to think about scroll-stopping mechanics. A Luxury tone requires elevated, aspirational language. These change the cognitive approach, not just the surface register.</li>
            <li><strong>Few-shot examples</strong> — Each generated prompt includes calibration examples that show the AI the expected quality level, dramatically improving output consistency.</li>
          </ul>

          <h2>The Enhance Prompt Feature</h2>
          <p>
            Beyond generating prompts from scratch, PromptForge includes a second mode: prompt enhancement. Paste any basic prompt you have already written — even a single sentence — and the engine upgrades it into a full expert-level brief using the complete ROLE + CONTEXT + OBJECTIVE + CONSTRAINTS + FORMAT framework. This is useful when you have a working prompt that gives mediocre results and you want to understand exactly what it is missing. The enhanced version also includes an explanation of what changed and why, making it a learning tool as much as a productivity tool.
          </p>

          <h2>Who Uses PromptForge</h2>
          <p>
            The tool is used by a wide range of people who share one thing in common: they take AI seriously as a working tool rather than a novelty. Founders use it for business strategy prompts that function like having a consultant on call. Marketers use it to generate copy briefs and campaign frameworks. Designers use it to create Midjourney prompts that produce client-ready concept images. Developers use it to get architecture advice and code reviews from a virtual Staff Engineer. Content creators use it to generate social media content that consistently outperforms what they write manually.
          </p>
          <p>
            What these users have in common is that they tried AI tools, got underwhelming results, and eventually realized that prompt quality was the variable they needed to change. PromptForge is the shortcut to that realization — without spending months studying prompt engineering from scratch.
          </p>

        </div>
      </section>

      {/* ── RELATED PAGES ────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-border" aria-labelledby="related-h2">
        <h2
          id="related-h2"
          className="text-sm font-semibold text-zinc-dim uppercase tracking-widest font-mono mb-6"
        >
          Explore Prompt Libraries
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { href: '/chatgpt-prompts-for-business', icon: '◆', label: 'ChatGPT for Business', color: '#D4902A' },
            { href: '/instagram-caption-prompts', icon: '◉', label: 'Instagram Captions', color: '#EC4899' },
            { href: '/midjourney-prompts-realistic', icon: '◐', label: 'Midjourney Realistic', color: '#8B5CF6' },
            { href: '/ai-prompts-for-marketing', icon: '◇', label: 'Marketing Prompts', color: '#F59E0B' },
            { href: '/coding-prompts', icon: '◌', label: 'Coding Prompts', color: '#06B6D4' },
          ].map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="flex flex-col items-center gap-2 p-4 bg-surface border border-border rounded-xl hover:border-border-bright transition-all group text-center"
            >
              <span className="text-2xl font-mono" style={{ color: l.color }}>{l.icon}</span>
              <span className="text-xs font-semibold text-zinc group-hover:text-zinc-light transition-colors" style={{ fontFamily: 'var(--font-syne)' }}>
                {l.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16" aria-labelledby="faq-h2">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold text-amber uppercase tracking-widest font-mono mb-3">FAQ</p>
          <h2
            id="faq-h2"
            className="text-2xl font-bold text-cream"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Common Questions
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-surface border border-border rounded-2xl p-5 hover:border-border-bright transition-all">
              <h3 className="font-semibold text-cream text-sm mb-2" style={{ fontFamily: 'var(--font-syne)' }}>{faq.q}</h3>
              <p className="text-sm text-zinc leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Ad Slot */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <AdSlot id="home-bottom" size="leaderboard" />
      </div>
    </>
  )
}
