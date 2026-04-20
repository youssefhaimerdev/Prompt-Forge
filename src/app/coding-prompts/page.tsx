import type { Metadata } from 'next'
import Link from 'next/link'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'Coding Prompts – Expert AI Prompts for Developers & Engineers',
  description: 'High-quality AI prompts for software engineers: architecture design, code review, debugging, API design, testing strategy, performance optimization, and more.',
  alternates: { canonical: 'https://promptforge.ai/coding-prompts' },
}

const prompts = [
  {
    title: 'System Architecture Review',
    tag: 'Architecture',
    text: `Act as a Staff Engineer at a company like Stripe or Linear — someone who reviews systems for correctness, scalability, and operational simplicity. Review this architecture: [describe your system]. Evaluate: (1) the biggest scalability bottleneck at 10x current load, (2) the single point of failure most likely to cause an incident, (3) the operational complexity burden on the team, (4) one architectural change that would have the highest risk/reward for the next 12 months. Be direct — this is a technical design review, not a code compliment.`,
  },
  {
    title: 'API Design Review',
    tag: 'API Design',
    text: `Act as a senior API designer who has built developer-facing APIs used by thousands of companies. Review this API design: [paste your API spec or describe it]. Evaluate against REST/GraphQL best practices: naming conventions, resource modeling, versioning strategy, error response consistency, authentication approach, and pagination design. For each issue: state why it matters to the developers consuming this API and provide the specific corrected version. End with the one change that would most improve developer experience.`,
  },
  {
    title: 'Code Review & Refactor',
    tag: 'Code Quality',
    text: `Act as a Principal Engineer conducting a code review. Your standard is production code at a tier-1 tech company. Review this code: [paste code]. Provide feedback in 4 categories: (1) Correctness — bugs, edge cases, logic errors; (2) Security — vulnerabilities, injection risks, auth issues; (3) Performance — unnecessary complexity, N+1 queries, memory issues; (4) Maintainability — naming, abstraction, test coverage gaps. For each issue: severity (P1/P2/P3), explanation of the risk, and the corrected code snippet.`,
  },
  {
    title: 'Debugging Session',
    tag: 'Debugging',
    text: `Act as a senior engineer who specializes in debugging production incidents. I have this bug: [describe the bug behavior]. Stack trace or error: [paste if available]. Relevant code: [paste relevant section]. Lead me through a structured diagnosis: (1) What are the 3 most likely root causes based on this evidence? (2) What would I add to confirm or eliminate each hypothesis? (3) What is the minimal reproduction case I should create? (4) Once confirmed, what is the fix and what test would prevent this regression?`,
  },
  {
    title: 'Database Schema Design',
    tag: 'Database',
    text: `Act as a database architect who has designed schemas for systems handling 100M+ records. I need to design a database schema for [describe your application and its data relationships]. Requirements: [list key requirements — read/write ratio, expected scale, consistency requirements]. Deliver: (1) the schema design with all tables, columns, types, and constraints; (2) index strategy with justification for each index; (3) the query pattern this schema is optimized for; (4) the query pattern it is NOT optimized for and what the trade-off cost is; (5) one migration you would need to run at 10x scale and how to do it with zero downtime.`,
  },
  {
    title: 'Performance Optimization',
    tag: 'Performance',
    text: `Act as a performance engineering specialist. I have a performance problem in [language/stack]: [describe the problem — slow endpoint, high memory, etc.]. Relevant code or query: [paste]. Current metrics: [response time, memory usage, etc.]. Diagnose the bottleneck systematically: (1) identify where time/memory is actually being spent (do not assume), (2) present the top 3 optimization approaches ordered by effort vs. impact, (3) provide the specific code change for the highest-impact optimization, (4) what profiling tool would you use to validate the improvement, and (5) what regression risk does this optimization introduce?`,
  },
  {
    title: 'Test Strategy',
    tag: 'Testing',
    text: `Act as a senior engineer who believes in pragmatic testing — enough coverage to ship with confidence, not 100% coverage theater. For this codebase/feature: [describe what you are testing], design a test strategy. Specify: (1) the test pyramid recommendation (unit/integration/e2e ratio) for this specific case and why; (2) the 5 most critical test cases to write first; (3) what I should NOT bother testing; (4) the testing antipatterns I should avoid for this type of code; (5) a specific example of a unit test and an integration test for the most complex part of this feature.`,
  },
  {
    title: 'Technical Documentation',
    tag: 'Docs',
    text: `Act as a technical writer with engineering background who has documented developer-facing APIs and internal systems. Write documentation for: [describe what needs documenting]. Audience: [junior engineers / senior engineers / external developers / non-technical stakeholders]. Include: (1) a one-paragraph overview that answers "what is this and why does it exist"; (2) a quick start section with the minimal working example; (3) the key concepts section covering the 3 most important abstractions; (4) a common patterns section with 2-3 real use cases; (5) a troubleshooting section covering the top 3 errors people encounter. Use the same tone as Stripe Docs.`,
  },
]

export default function CodingPromptsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-3">
        <Link href="/" className="text-xs text-zinc-dim hover:text-amber font-mono transition-colors">← Back to Generator</Link>
      </div>

      <div className="mb-12">
        <div className="inline-flex items-center gap-2 border border-cyan-500/20 bg-cyan-500/5 rounded-full px-3 py-1 mb-5">
          <span className="text-cyan-400 font-mono text-xs">◌</span>
          <span className="text-xs font-semibold text-cyan-400 font-mono uppercase tracking-widest">Coding Prompts</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-cream mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
          AI Coding Prompts for Engineers
        </h1>
        <p className="text-zinc text-lg max-w-2xl leading-relaxed mb-6">
          8 expert-structured AI prompts for software engineers and architects. Architecture reviews, code quality, debugging, database design, performance, and testing — structured for real engineering output.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/#generator" className="inline-flex items-center gap-2 btn-amber px-5 py-2.5 rounded-full text-sm font-semibold" style={{ fontFamily: 'var(--font-syne)' }}>
            Build Custom Coding Prompt →
          </Link>
        </div>
      </div>

      <AdSlot id="code-top" size="leaderboard" />

      <div className="prose-forge my-12">
        <h2>Using AI as a Senior Engineer on Demand</h2>
        <p>
          The best use of AI for software engineers is not code generation — it is code review, architecture validation, and systematic debugging. These are the tasks where having a senior engineer available makes the biggest difference to output quality, and where most developers have no one to ask.
        </p>
        <p>
          The critical mistake most developers make when using AI for technical work is asking vague questions and getting vague answers. &quot;How do I optimize this query?&quot; gets you generic database advice. A prompt that assigns the AI a specific engineering caliber, gives it your actual code and constraints, asks for structured analysis with severity ratings, and requires concrete code examples gets you something you can act on.
        </p>
        <h2>What Makes These Coding Prompts Different</h2>
        <p>
          Each prompt in this library establishes the AI as a specific type of senior engineer — not just &quot;an expert&quot; but a Staff Engineer with a specific caliber of judgment. They require structured output (not a stream of consciousness), concrete code examples, explicit trade-off analysis, and severity prioritization. The goal is output that functions like a real engineering review, not a tutorial.
        </p>
        <p>
          For a custom coding prompt built around your specific task, stack, and level, use the <Link href="/#generator" className="text-amber hover:text-amber-light transition-colors">coding prompt generator</Link> on the homepage.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {prompts.map((p, i) => (
          <div key={i} className="bg-surface border border-border rounded-2xl p-5 hover:border-border-bright transition-all">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="text-xs font-bold text-zinc-dim font-mono">#{i + 1}</span>
              <span className="text-sm font-bold text-cream" style={{ fontFamily: 'var(--font-syne)' }}>{p.title}</span>
              <span className="ml-auto text-xs font-mono text-cyan-400 border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-0.5 rounded-full">{p.tag}</span>
            </div>
            <p className="prompt-output text-xs leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>

      <AdSlot id="code-bottom" size="leaderboard" />

      <div className="mt-10 pt-8 border-t border-border">
        <p className="text-xs font-semibold text-zinc-dim uppercase tracking-widest font-mono mb-4">You Might Also Like</p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: '/chatgpt-prompts-for-business', label: 'Business Prompts' },
            { href: '/ai-prompts-for-marketing', label: 'Marketing Prompts' },
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
