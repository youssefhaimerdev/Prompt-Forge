export type Category = 'chatgpt' | 'business' | 'social' | 'midjourney' | 'copywriting' | 'coding'
export type Tone = 'professional' | 'viral' | 'creative' | 'funny' | 'luxury' | 'minimal'
export type OutputType = 'strategy' | 'caption' | 'ideas' | 'script' | 'analysis' | 'code'

export interface CategoryConfig {
  id: Category
  label: string
  icon: string
  color: string
  description: string
  tones: Tone[]
  outputTypes: OutputType[]
  fields: FieldConfig[]
}

export interface FieldConfig {
  key: string
  label: string
  placeholder: string
  type: 'text' | 'select'
  options?: string[]
  required?: boolean
}

export const CATEGORIES: CategoryConfig[] = [
  {
    id: 'chatgpt',
    label: 'ChatGPT',
    icon: '◈',
    color: '#10B981',
    description: 'Deep reasoning & expert-level conversation prompts',
    tones: ['professional', 'creative', 'minimal'],
    outputTypes: ['strategy', 'analysis', 'ideas'],
    fields: [
      { key: 'role', label: 'Expert Role', placeholder: 'e.g. Senior growth strategist, PhD economist', type: 'text', required: true },
      { key: 'topic', label: 'Core Topic', placeholder: 'e.g. Bootstrapping a SaaS from $0 to $10k MRR', type: 'text', required: true },
      { key: 'audience', label: 'Who Benefits', placeholder: 'e.g. First-time founders with no funding', type: 'text' },
      { key: 'depth', label: 'Depth Level', placeholder: 'Select depth', type: 'select', options: ['Surface overview', 'Practical guide', 'Deep expert analysis', 'Step-by-step playbook', 'Contrarian deep dive'] },
      { key: 'format', label: 'Output Format', placeholder: 'Select format', type: 'select', options: ['Numbered action list', 'Detailed essay', 'Framework with examples', 'Table comparison', 'Q&A format', 'Executive summary'] },
    ],
  },
  {
    id: 'business',
    label: 'Business',
    icon: '◆',
    color: '#D4902A',
    description: 'Strategy, ideation, and operations prompts',
    tones: ['professional', 'minimal', 'luxury'],
    outputTypes: ['strategy', 'analysis', 'ideas'],
    fields: [
      { key: 'industry', label: 'Industry / Niche', placeholder: 'e.g. B2B SaaS, DTC skincare, fintech', type: 'text', required: true },
      { key: 'challenge', label: 'Business Challenge', placeholder: 'e.g. Churn is at 15%, need retention strategy', type: 'text', required: true },
      { key: 'stage', label: 'Company Stage', placeholder: 'Select stage', type: 'select', options: ['Pre-revenue / Idea', 'Early stage ($0-100k ARR)', 'Growth ($100k-$1M ARR)', 'Scale ($1M+ ARR)', 'Enterprise'] },
      { key: 'goal', label: 'Primary Goal', placeholder: 'Select goal', type: 'select', options: ['Increase revenue', 'Reduce costs', 'Scale operations', 'Enter new market', 'Raise funding', 'Improve retention'] },
      { key: 'constraint', label: 'Key Constraint', placeholder: 'e.g. Team of 3, $5k/month budget', type: 'text' },
    ],
  },
  {
    id: 'social',
    label: 'Social Media',
    icon: '◉',
    color: '#EC4899',
    description: 'Viral content, captions, and engagement prompts',
    tones: ['viral', 'funny', 'creative', 'professional'],
    outputTypes: ['caption', 'script', 'ideas'],
    fields: [
      { key: 'platform', label: 'Platform', placeholder: 'Select platform', type: 'select', options: ['Instagram', 'TikTok', 'LinkedIn', 'Twitter / X', 'YouTube', 'Pinterest', 'Facebook'], required: true },
      { key: 'niche', label: 'Niche / Brand', placeholder: 'e.g. Minimalist fashion brand for Gen Z women', type: 'text', required: true },
      { key: 'topic', label: 'Post Topic', placeholder: 'e.g. Launching our summer collection', type: 'text', required: true },
      { key: 'style', label: 'Content Style', placeholder: 'Select style', type: 'select', options: ['Educational carousel', 'Storytelling post', 'Viral hook reel', 'Product showcase', 'Behind-the-scenes', 'Controversy bait', 'Listicle'] },
      { key: 'cta', label: 'Desired Action', placeholder: 'e.g. Drive to link in bio, save this post', type: 'text' },
    ],
  },
  {
    id: 'midjourney',
    label: 'Midjourney',
    icon: '◐',
    color: '#8B5CF6',
    description: 'Cinematic, artistic, and photorealistic image prompts',
    tones: ['creative', 'luxury', 'minimal'],
    outputTypes: ['ideas'],
    fields: [
      { key: 'subject', label: 'Subject / Scene', placeholder: 'e.g. A lone astronaut in a neon-lit Tokyo alley', type: 'text', required: true },
      { key: 'style', label: 'Visual Style', placeholder: 'Select style', type: 'select', options: ['Cinematic photography', 'Oil painting', 'Hyperrealistic', 'Anime / Illustration', 'Minimalist design', 'Dark fantasy', 'Architectural render', 'Product photography', 'Abstract art', 'Vintage / Retro'], required: true },
      { key: 'lighting', label: 'Lighting Mood', placeholder: 'Select lighting', type: 'select', options: ['Golden hour glow', 'Neon city night', 'Soft studio light', 'Dramatic chiaroscuro', 'Overcast diffused', 'Backlit silhouette', 'Bioluminescent'] },
      { key: 'palette', label: 'Color Palette', placeholder: 'e.g. Deep teal, brass, and charcoal', type: 'text' },
      { key: 'details', label: 'Technical Details', placeholder: 'e.g. 8K, volumetric fog, lens flare', type: 'text' },
    ],
  },
  {
    id: 'copywriting',
    label: 'Copywriting',
    icon: '◇',
    color: '#F59E0B',
    description: 'High-converting ads, emails, and landing page copy',
    tones: ['professional', 'viral', 'luxury', 'minimal'],
    outputTypes: ['caption', 'script', 'strategy'],
    fields: [
      { key: 'type', label: 'Copy Format', placeholder: 'Select format', type: 'select', options: ['Facebook / Meta ad', 'Email sequence', 'Landing page hero', 'Product description', 'Cold outreach email', 'Video sales letter hook', 'SMS campaign', 'Push notification'], required: true },
      { key: 'product', label: 'Product / Service', placeholder: 'e.g. AI scheduling app for solopreneurs', type: 'text', required: true },
      { key: 'icp', label: 'Ideal Customer', placeholder: 'e.g. Overwhelmed freelancers juggling 5+ clients', type: 'text', required: true },
      { key: 'usp', label: 'Unique Selling Point', placeholder: 'e.g. Saves 2 hours daily, syncs with Notion', type: 'text' },
      { key: 'framework', label: 'Copywriting Framework', placeholder: 'Select framework', type: 'select', options: ['PAS (Problem → Agitate → Solve)', 'AIDA (Attention → Interest → Desire → Action)', 'BAB (Before → After → Bridge)', 'FAB (Features → Advantages → Benefits)', '4Ps (Promise → Picture → Proof → Push)', 'Freeform / Best fit'] },
    ],
  },
  {
    id: 'coding',
    label: 'Coding',
    icon: '◌',
    color: '#06B6D4',
    description: 'Architecture, debugging, and code generation prompts',
    tones: ['professional', 'minimal'],
    outputTypes: ['code', 'analysis', 'strategy'],
    fields: [
      { key: 'task', label: 'Coding Task', placeholder: 'e.g. Build a rate limiter for a REST API', type: 'text', required: true },
      { key: 'language', label: 'Language / Stack', placeholder: 'e.g. TypeScript, Node.js, PostgreSQL', type: 'text', required: true },
      { key: 'level', label: 'Skill Level', placeholder: 'Select level', type: 'select', options: ['Beginner (explain everything)', 'Intermediate (assume basics)', 'Senior engineer (no hand-holding)', 'Architect level (patterns & trade-offs)'] },
      { key: 'constraints', label: 'Constraints', placeholder: 'e.g. Must be production-ready, no external libs', type: 'text' },
      { key: 'format', label: 'Output Preference', placeholder: 'Select output', type: 'select', options: ['Full working code + comments', 'Step-by-step walkthrough', 'Code review & refactor', 'Architecture diagram (ASCII)', 'Pseudocode first, then code', 'Tests only (TDD)'] },
    ],
  },
]

export const TONES: Record<Tone, { label: string; icon: string; desc: string }> = {
  professional: { label: 'Professional', icon: '▲', desc: 'Authoritative & precise' },
  viral:        { label: 'Viral',        icon: '⚡', desc: 'Hook-first, share-worthy' },
  creative:     { label: 'Creative',     icon: '◈', desc: 'Unexpected & imaginative' },
  funny:        { label: 'Funny',        icon: '◎', desc: 'Wit, irony & humor' },
  luxury:       { label: 'Luxury',       icon: '◆', desc: 'Refined & aspirational' },
  minimal:      { label: 'Minimal',      icon: '○', desc: 'Clear, direct, no fluff' },
}

export const OUTPUT_TYPES: Record<OutputType, { label: string; icon: string }> = {
  strategy: { label: 'Strategy',  icon: '▲' },
  caption:  { label: 'Caption',   icon: '◉' },
  ideas:    { label: 'Ideas',     icon: '◈' },
  script:   { label: 'Script',    icon: '◇' },
  analysis: { label: 'Analysis',  icon: '◆' },
  code:     { label: 'Code',      icon: '◌' },
}

// ─── PROMPT ENGINE ──────────────────────────────────────────

interface BuildInput {
  category: Category
  tone: Tone
  outputType: OutputType
  fields: Record<string, string>
}

function toneInstruction(tone: Tone): string {
  const map: Record<Tone, string> = {
    professional: 'Maintain an authoritative, precise tone — no filler phrases, every sentence must carry weight.',
    viral:        'Write with a hook-first mindset: the opening must stop someone mid-scroll. Use pattern interrupts, bold claims, and emotional spikes.',
    creative:     'Embrace unexpected angles. Subvert the obvious. Use metaphor, contrast, and conceptual originality.',
    funny:        'Inject dry wit, irony, or absurdist humor where appropriate. Never forced — only land the joke if it earns it.',
    luxury:       'Every word must feel considered. Use elevated, aspirational language. Imply exclusivity and craft. No superlatives — show, never tell.',
    minimal:      'Ruthless clarity. Zero filler. Shortest path from question to answer. If a word can be cut, cut it.',
  }
  return map[tone]
}

function outputInstruction(type: OutputType): string {
  const map: Record<OutputType, string> = {
    strategy: 'Structure the output as a clear strategic framework: situation → insight → actions → metrics. Number each section.',
    caption:  'Produce 3 distinct caption variants. Label each: [Variant A] [Variant B] [Variant C]. Vary hook style, length, and energy level.',
    ideas:    'Generate exactly 7 ideas. For each: (1) name it boldly, (2) explain the core mechanism in one sentence, (3) state the biggest risk.',
    script:   'Format as a full script with [HOOK], [BODY], [CTA] sections clearly labeled. Include stage directions in brackets.',
    analysis: 'Structure as: Executive Summary → Key Findings (numbered) → Risks → Recommended Actions → One Contrarian Take.',
    code:     'Output clean, production-ready code. Include: brief architecture explanation, the code block, inline comments for non-obvious parts, and one paragraph on edge cases to handle.',
  }
  return map[type]
}

export function buildPrompt(input: BuildInput): string {
  const { category, tone, outputType, fields } = input
  const toneGuide = toneInstruction(tone)
  const outputGuide = outputInstruction(outputType)

  const generators: Record<Category, () => string> = {

    chatgpt: () => {
      const role   = fields.role   || 'world-class expert in this domain'
      const topic  = fields.topic  || 'the topic at hand'
      const who    = fields.audience || 'a smart professional seeking real insight'
      const depth  = fields.depth  || 'Deep expert analysis'
      const format = fields.format || 'Framework with examples'
      return `Act as a ${role} with 15+ years of hands-on experience — not academic theory, real-world pattern recognition.

TASK:
Provide a ${depth.toLowerCase()} on: "${topic}"

AUDIENCE:
This is for ${who}. Calibrate your language accordingly — no condescension, no oversimplification.

DEPTH MANDATE:
Go beyond surface-level explanations. I want the insight that separates someone who has done this from someone who has only read about it. Include:
— The counterintuitive truth most people miss about this topic
— The most common mistake and why smart people still make it
— One mental model or framework that unlocks clarity
— Specific, concrete examples (name real companies, real numbers, real situations where possible)

OUTPUT FORMAT:
Structure your response as: ${format}

TONE DIRECTIVE:
${toneGuide}

QUALITY BAR:
If your response could have been written by someone who has never actually worked in this field, rewrite it. The goal is insight density, not word count.`
    },

    business: () => {
      const industry  = fields.industry  || 'the relevant industry'
      const challenge = fields.challenge || 'the core business challenge'
      const stage     = fields.stage     || 'Growth stage'
      const goal      = fields.goal      || 'Increase revenue'
      const constraint = fields.constraint || 'Standard resource constraints'
      return `Act as a McKinsey-tier business strategist who has also built and sold two companies. You combine analytical rigor with builder pragmatism.

COMPANY CONTEXT:
— Industry: ${industry}
— Stage: ${stage}
— Primary goal: ${goal}
— Constraint: ${constraint}

THE CHALLENGE:
"${challenge}"

YOUR MANDATE:
Solve this challenge at the highest possible level. Do not give generic business advice. Give the specific, actionable insight that this exact company at this exact stage needs.

FRAMEWORK REQUIREMENTS:
1. ROOT CAUSE DIAGNOSIS — What is actually causing this problem (it is rarely what it appears to be)?
2. STRATEGIC OPTIONS — Present exactly 3 approaches, ordered by risk/reward. For each: estimated effort, estimated impact, biggest assumption to validate.
3. RECOMMENDED PATH — Pick one. Justify the choice with specific reasoning tied to their stage and constraints.
4. 30-DAY QUICK WIN — One action they can complete this month that creates momentum toward the solution.
5. WARNING FLAGS — Two signals that would indicate the chosen path is failing and they should pivot.

TONE:
${toneGuide}

${outputGuide}`
    },

    social: () => {
      const platform = fields.platform || 'Instagram'
      const niche    = fields.niche    || 'the brand'
      const topic    = fields.topic    || 'the post topic'
      const style    = fields.style    || 'Storytelling post'
      const cta      = fields.cta      || 'drive engagement'
      return `Act as a world-class social media strategist who has grown accounts from 0 to 1M+ followers across multiple niches. You understand the algorithm, human psychology, and scroll-stopping mechanics at a deep level.

BRAND CONTEXT:
— Platform: ${platform}
— Brand / Niche: ${niche}
— Post Topic: "${topic}"
— Content Style: ${style}
— Desired Action: ${cta}

YOUR TASK:
Create high-performing ${platform} content about "${topic}" for ${niche}.

CONTENT REQUIREMENTS:
Each piece of content must contain:
— A HOOK that stops the scroll in under 3 seconds (state the hook mechanism you are using: curiosity gap / bold claim / pattern interrupt / emotional spike)
— BODY content that delivers on the hook promise and builds toward the CTA
— A CALL TO ACTION that feels natural, not salesy, and achieves: ${cta}

PLATFORM-SPECIFIC RULES FOR ${platform.toUpperCase()}:
— Optimize sentence length for thumb-scroll readability
— Use white space and line breaks strategically
— Include 7-10 hashtag recommendations (mix: 2 broad, 4 niche, 3 micro-niche)
— Note optimal posting time window

TONE DIRECTIVE:
${toneGuide}

${outputGuide}`
    },

    midjourney: () => {
      const subject  = fields.subject  || 'an evocative scene'
      const style    = fields.style    || 'Cinematic photography'
      const lighting = fields.lighting || 'Golden hour glow'
      const palette  = fields.palette  || 'rich, intentional tones'
      const details  = fields.details  || 'ultra-detailed, 8K'
      return `${subject}, ${style.toLowerCase()}, ${lighting.toLowerCase()} lighting${palette ? `, color palette: ${palette}` : ''}, ${details || 'ultra-detailed'}, masterful composition, award-winning photography, hyper-realistic textures, atmospheric depth, professional color grading --ar 16:9 --v 6.1 --q 2 --s 750 --style raw

---

PROMPT VARIANTS (for iteration):

[VARIANT A — Wider, more cinematic]
${subject}, extreme wide shot, ${style.toLowerCase()}, ${lighting.toLowerCase()}, epic scale, ${palette ? palette + ', ' : ''}${details || 'ultra-detailed, 8K'}, IMAX quality, cinematic color grade, shallow depth of field --ar 21:9 --v 6.1 --q 2 --s 500 --style raw

[VARIANT B — Intimate, detailed]
Close-up perspective of ${subject}, ${style.toLowerCase()}, ${lighting.toLowerCase()}, macro detail, ${palette ? palette + ', ' : ''}fine texture work, museum-quality render, ${details || 'ultra-detailed'} --ar 4:5 --v 6.1 --q 2 --style raw

[VARIANT C — Abstract interpretation]
${subject}, abstract artistic reinterpretation, ${style.toLowerCase()}, surreal elements, ${palette ? palette + ', ' : ''}dreamlike atmosphere, conceptual art, trending on ArtStation --ar 1:1 --v 6.1 --s 1000

---
NEGATIVE PROMPT (add to avoid common issues):
--no ugly, deformed, blurry, low quality, watermark, signature, text, oversaturated, plastic skin`
    },

    copywriting: () => {
      const type      = fields.type      || 'Facebook / Meta ad'
      const product   = fields.product   || 'the product'
      const icp       = fields.icp       || 'the target customer'
      const usp       = fields.usp       || 'the core value proposition'
      const framework = fields.framework || 'PAS (Problem → Agitate → Solve)'
      return `Act as a direct-response copywriter with a proven track record of writing campaigns that generated $1M+ in revenue. You have the strategic mind of David Ogilvy and the conversion instincts of Gary Halbert.

ASSIGNMENT: Write a high-converting ${type}

PRODUCT / SERVICE:
${product}

IDEAL CUSTOMER PROFILE:
${icp}
— What keeps them up at night (the real problem beneath the surface problem)?
— What have they already tried that failed?
— What is their dream outcome in specific, vivid terms?

UNIQUE SELLING POINT:
${usp}

COPYWRITING FRAMEWORK: ${framework}

EXECUTION REQUIREMENTS:
1. PRIMARY COPY — Full-length, conversion-optimized version
   — Open with the reader's deepest pain (not your product)
   — Use "you" language throughout (never "our customers")
   — Include one specific, credible proof element (stat, case study, name)
   — CTA must be action-first: "Get," "Start," "Claim" — never "Learn more"

2. SHORT VARIANT — Under 50 words. Same energy, ruthlessly compressed.

3. SUBJECT LINE / HEADLINE OPTIONS — Write 5 alternatives:
   — One curiosity-driven
   — One fear-based
   — One desire-based  
   — One ultra-specific (include a number)
   — One contrarian / surprising

TONE DIRECTIVE:
${toneGuide}

QUALITY CHECK:
Before finalizing, ask: does every sentence earn its place? Does the CTA feel inevitable? Would the ideal customer feel seen?`
    },

    coding: () => {
      const task        = fields.task        || 'solve the coding challenge'
      const stack       = fields.language    || 'the specified tech stack'
      const level       = fields.level       || 'Senior engineer (no hand-holding)'
      const constraints = fields.constraints || 'production-ready standards'
      const format      = fields.format      || 'Full working code + comments'
      return `Act as a Staff Engineer at a top-tier tech company (think Stripe, Linear, or Vercel caliber). You write code that other senior engineers use as a reference.

TASK:
${task}

TECH STACK:
${stack}

ENGINEER LEVEL TO CALIBRATE FOR:
${level}

CONSTRAINTS & REQUIREMENTS:
${constraints}

YOUR APPROACH:
Before writing a single line of code, briefly state:
1. THE CORE CHALLENGE — What is the technically interesting part of this problem?
2. YOUR CHOSEN APPROACH — And why (mention 1 alternative you rejected and why)
3. ASSUMPTIONS — What you are assuming about the environment, scale, and usage pattern

IMPLEMENTATION:
${format}

CODE QUALITY STANDARDS:
— Type-safe where applicable
— Handle the happy path AND the 3 most likely failure modes
— If using a pattern, name it (factory, observer, etc.) and briefly justify it
— Optimize for readability first, performance second (unless performance is the explicit goal)

AFTER THE CODE:
— One paragraph: what would you change if this needed to scale to 10x the current requirement?
— Security consideration: one potential vulnerability and how to address it
— Test strategy: what are the 3 most important test cases for this implementation?

TONE:
${toneGuide}`
    },
  }

  return generators[category]()
}
