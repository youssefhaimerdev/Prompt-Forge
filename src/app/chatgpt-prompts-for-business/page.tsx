import type { Metadata } from 'next'
import Link from 'next/link'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'Best ChatGPT Prompts for Business (Marketing, Sales & Growth)',
  description:
    'Discover the best ChatGPT prompts for business. Improve marketing, sales, and strategy with expert-level, copy-ready prompts that deliver real results.',
  alternates: { canonical: 'https://prompt-forge-mauve.vercel.app/chatgpt-prompts-for-business' },
}

const prompts = [
  {
    title: 'Churn Diagnosis',
    tag: 'Retention',
    text: `Act as a SaaS growth expert who has reduced churn for 20+ companies. My B2B SaaS has [X%] monthly churn among [customer segment]. Diagnose the root cause beyond the obvious surface explanation. Present 3 intervention strategies ordered by speed of impact. For the fastest one, give me a 14-day execution plan with specific daily actions.`,
    why: 'Forces deep analysis and actionable output instead of surface-level explanations.'
  },
  {
    title: 'Competitive Positioning',
    tag: 'Strategy',
    text: `Act as a brand strategist and competitive intelligence expert. My company is [describe company] competing against [list 2-3 competitors]. Conduct a positioning analysis: where each player wins, where they are vulnerable, and the uncontested positioning territory available to me. Output a positioning statement I can use immediately.`,
    why: 'Pushes the AI to think strategically and identify real competitive advantages.'
  },
  {
    title: 'Cold Email Sequence',
    tag: 'Sales',
    text: `Act as a B2B sales expert with a 35%+ reply rate track record. Write a 3-email cold outreach sequence targeting [job title] at [company type]. I solve [specific pain point]. Email 1: hook, no pitch. Email 2: insight, soft ask. Email 3: breakup email. Each under 100 words.`,
    why: 'Creates structured, high-converting messaging instead of generic outreach.'
  },
  {
    title: 'Pricing Strategy Audit',
    tag: 'Revenue',
    text: `Act as a SaaS pricing strategist. My product costs [amount] to deliver and sells at [price]. Competitors charge [range]. My best customers value [outcome]. Audit pricing, suggest 3 alternatives, recommend one, and identify a quick win to increase revenue.`,
    why: 'Generates actionable pricing insights instead of vague recommendations.'
  },
  {
    title: 'Investor Pitch Email',
    tag: 'Fundraising',
    text: `Act as a founder who has raised $5M+. Write a cold investor email for my [business type]. Traction: [metric]. Market: [size]. Ask: [amount]. Under 180 words, confident, not salesy.`,
    why: 'Produces realistic investor communication that sounds credible.'
  }
]

export default function ChatGPTBusinessPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      <h1 className="text-3xl font-bold mb-6">
        Best ChatGPT Prompts for Business (Marketing, Sales & Growth)
      </h1>

      <p className="mb-6">
        Using ChatGPT for business can be incredibly powerful — but only if you use the right prompts.
        Most people get generic answers because they ask vague questions. The prompts below are designed
        to generate high-quality outputs for marketing, sales, strategy, and growth.
      </p>

      <AdSlot id="top" size="leaderboard" />

      <h2 className="text-2xl font-semibold mt-10 mb-4">Top ChatGPT Prompts for Business</h2>

      {prompts.map((p, i) => (
        <div key={i} className="mb-8">
          <h3 className="font-semibold mb-2">{p.title}</h3>

          <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
{p.text}
          </pre>

          <p className="text-sm mt-2 text-gray-600">
            <strong>Why it works:</strong> {p.why}
          </p>
        </div>
      ))}

      <AdSlot id="bottom" size="leaderboard" />

      <h2 className="text-2xl font-semibold mt-10 mb-4">Frequently Asked Questions</h2>

      <h3>What are the best ChatGPT prompts for business?</h3>
      <p>
        The best prompts clearly define the role, context, and expected output. They avoid vague instructions
        and instead guide the AI toward structured, actionable results.
      </p>

      <h3>How do I get better results from ChatGPT?</h3>
      <p>
        Use detailed prompts, specify the format of the output, and provide real context. The more precise
        your input, the better the output.
      </p>

      <p className="mt-8">
        👉 Want custom prompts? <Link href="/">Use our AI Prompt Generator</Link>
      </p>

    </div>
  )
}
