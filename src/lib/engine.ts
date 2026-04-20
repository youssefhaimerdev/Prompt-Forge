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

// ─── VARIABILITY SYSTEM ──────────────────────────────────────
const INSTRUCTION_BOOSTERS = [
  'Make this highly practical — every insight must be actionable within 48 hours.',
  'Make this emotionally engaging — connect to the reader\'s real frustrations and aspirations.',
  'Make this feel authoritative — back every claim with either data, a named example, or first-principles reasoning.',
  'Make this maximally specific — no vague language, no "it depends", give concrete recommendations.',
  'Prioritize insight density — remove everything that doesn\'t teach something new or actionable.',
  'Make every section contain something surprising enough to screenshot and share.',
]

const STRUCTURE_VARIATIONS = ['numbered-list', 'section-headers', 'narrative'] as const
type StructureVariation = typeof STRUCTURE_VARIATIONS[number]

function pickRandom<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function getBooster(): string { return pickRandom(INSTRUCTION_BOOSTERS) }
function getStructure(): StructureVariation { return pickRandom(STRUCTURE_VARIATIONS) }

function structureInstruction(v: StructureVariation): string {
  if (v === 'numbered-list') return 'Format as a numbered list with bold section titles. Each item must be a complete, standalone insight — not a header with a one-liner.'
  if (v === 'section-headers') return 'Use clear ALL-CAPS section headers followed by dense prose paragraphs. No bullet points — write full sentences within each section.'
  return 'Write in connected prose — build the argument as a flowing narrative where each paragraph leads naturally into the next.'
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

function fewShotBlock(category: Category): string {
  const examples: Record<Category, string> = {
    chatgpt: `--- EXAMPLE OF EXPECTED OUTPUT QUALITY ---
Topic: "How to reduce SaaS churn"
Expert answer style: "Churn in B2B SaaS traces back to one of three root causes 80% of the time: (1) the customer never hit their 'aha moment', (2) the champion who bought it left the company, or (3) the product solved their Q1 problem but wasn't flexible enough for Q2. The fix for each is completely different — treat them as separate problems, not one churn problem."
This specificity and diagnostic depth is the target standard. Generic advice about "improving customer experience" is not acceptable.`,

    business: `--- EXAMPLE OF EXPECTED OUTPUT QUALITY ---
For a growth-stage SaaS with 15% churn:
"Root cause: Not a product problem. Exit interviews reveal customers who churned in months 3–6 never completed onboarding step 4 (integrations). This is an activation failure disguised as a retention problem. Recommended action: assign a CS rep to every account that hasn't completed integrations within 14 days of signup. Pilot cost: ~2hrs/week. Expected impact: 4–6% churn reduction within 60 days."
Every recommendation must be this specific: stage-aware, cost-aware, time-bound.`,

    social: `--- EXAMPLE OF EXPECTED OUTPUT QUALITY ---
Hook (Curiosity gap): "The reason your Instagram reach dropped 40% isn't what you think."
Body: "Most creators blame the algorithm. The real culprit? Save rate. Instagram's ranking weights saves over likes because saved content solves a problem people return to. Shift from 'entertaining' to 'reference-worthy' and watch reach recover in 3 weeks."
CTA: "Save this post for the next time someone tells you the algorithm is broken."
Every variant should have: hook mechanism labeled, problem reframed, actionable insight, natural CTA.`,

    midjourney: `--- EXAMPLE: WEAK VS EXPERT PROMPT ---
Weak: "A woman in a coffee shop"
Expert: "Parisian woman in her 40s reading at a marble café table, Leica M11 35mm street photography, overcast diffused light, warm shadows, film grain, genuine candid moment, shallow depth of field, muted earth tones —cream, terracotta, charcoal— --ar 4:5 --v 6.1 --style raw --q 2"
The expert version specifies: subject detail, camera/lens, lighting, mood, color palette, aspect ratio, and render parameters. Every word earns its place.`,

    copywriting: `--- EXAMPLE: WEAK VS EXPERT COPY ---
Weak headline: "Get more done with our tool."
Expert headline: "We gave 200 freelancers back 11 hours a week. Here's exactly how."
Weak CTA: "Learn more about our features."
Expert CTA: "Start your first automated week free — no card required."
Expert copy is specific (200 freelancers, 11 hours), credible, and action-first. Every line earns the reader's attention or it gets cut.`,

    coding: `--- EXAMPLE OF EXPECTED PRE-CODE ANALYSIS ---
Before writing: "The core challenge isn't the algorithm — it's cache invalidation under concurrent writes. I'm using write-through cache with optimistic locking rather than write-behind because our read:write ratio is ~20:1 and consistency outweighs write throughput here. Alternative rejected: Redis pub/sub — adds operational complexity without meaningful benefit at this scale."
The code that follows should match this standard of system thinking and trade-off awareness.`,
  }
  return examples[category]
}

// ─── BUILD PROMPT ────────────────────────────────────────────
interface BuildInput {
  category: Category
  tone: Tone
  outputType: OutputType
  fields: Record<string, string>
}

export function buildPrompt(input: BuildInput): string {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { category, tone, outputType, fields } = input
  const toneGuide = toneInstruction(tone)
  const booster = getBooster()
  const structure = getStructure()
  const structureGuide = structureInstruction(structure)
  const fewShot = fewShotBlock(category)

  const generators: Record<Category, () => string> = {

    chatgpt: () => {
      const role   = fields.role   || 'world-class expert in this domain'
      const topic  = fields.topic  || 'the topic at hand'
      const who    = fields.audience || 'a smart professional seeking real insight'
      const depth  = fields.depth  || 'Deep expert analysis'
      const fmt    = fields.format || 'Framework with examples'
      return `# ROLE
Act as a ${role} with 15+ years of hands-on experience — not academic theory, real-world pattern recognition.

# CONTEXT
Audience: ${who}
Depth required: ${depth}
Output format requested: ${fmt}

# OBJECTIVE
Provide a ${depth.toLowerCase()} on the following topic:
"${topic}"

Go beyond surface-level explanations. I want the insight that separates someone who has done this from someone who has only read about it.

# CONSTRAINTS
— Do not give generic advice. Give the specific insight tied to this exact topic and audience.
— If your response could have been written by someone who has never worked in this field, rewrite it.
— Every claim must be backed by first-principles reasoning, a named example, or real data.
— Calibrate language to: ${who}

# REQUIRED CONTENT
Include all of the following:
1. The counterintuitive truth most people miss about this topic
2. The most common mistake and why smart people still make it
3. One mental model or framework that unlocks clarity
4. Specific, concrete examples (real companies, real numbers, real situations)
5. One contrarian take that challenges the consensus view

# OUTPUT FORMAT
${structureGuide}

# TONE
${toneGuide}

# QUALITY STANDARD
${booster}

${fewShot}`
    },

    business: () => {
      const industry   = fields.industry  || 'the relevant industry'
      const challenge  = fields.challenge || 'the core business challenge'
      const stage      = fields.stage     || 'Growth stage'
      const goal       = fields.goal      || 'Increase revenue'
      const constraint = fields.constraint || 'Standard resource constraints'
      return `# ROLE
Act as a McKinsey-tier business strategist who has also built and sold two companies. You combine analytical rigor with builder pragmatism — no ivory-tower thinking.

# CONTEXT
— Industry: ${industry}
— Company stage: ${stage}
— Primary goal: ${goal}
— Key constraint: ${constraint}

# OBJECTIVE
Solve this business challenge at the highest possible level:
"${challenge}"

# CONSTRAINTS
— No generic business advice. Give specific, actionable insight for this exact company at this exact stage.
— Acknowledge real constraints (${constraint}) — not ideal-world solutions.
— Every strategic option must include: effort estimate, impact estimate, biggest assumption to validate.
— Prioritize speed of impact given stage: ${stage}

# REQUIRED FRAMEWORK (in order)

1. ROOT CAUSE DIAGNOSIS
What is actually causing this problem? (Rarely what it appears to be.) Show your diagnostic reasoning.

2. STRATEGIC OPTIONS (exactly 3)
Ordered by risk/reward. For each: effort level, expected impact, biggest assumption to validate.

3. RECOMMENDED PATH
Choose one. Justify with specific reasoning tied to their stage and constraints. No hedging.

4. 30-DAY QUICK WIN
One action completable this month that builds momentum. Specific, not general.

5. WARNING FLAGS
Two signals that indicate the chosen path is failing — and what to do when you see them.

# OUTPUT FORMAT
${structureGuide}

# TONE
${toneGuide}

# QUALITY STANDARD
${booster}

${fewShot}`
    },

    social: () => {
      const platform = fields.platform || 'Instagram'
      const niche    = fields.niche    || 'the brand'
      const topic    = fields.topic    || 'the post topic'
      const style    = fields.style    || 'Storytelling post'
      const cta      = fields.cta      || 'drive engagement'
      return `# ROLE
Act as a world-class social media strategist who has grown accounts from 0 to 1M+ followers across multiple niches. You understand the algorithm, human psychology, and scroll-stopping mechanics at a deep level.

# CONTEXT
— Platform: ${platform}
— Brand / Niche: ${niche}
— Post Topic: "${topic}"
— Content Style: ${style}
— Desired Outcome: ${cta}

# OBJECTIVE
Create 3 distinct high-performing ${platform} content pieces about "${topic}" for ${niche}.

# CONSTRAINTS
— Each piece must stop a scrolling thumb within 3 seconds or it fails.
— Label the hook mechanism for each variant (curiosity gap / bold claim / pattern interrupt / emotional spike / open loop).
— Never sound like a brand — sound like a knowledgeable person.
— Optimize for mobile thumb-scroll readability (short paragraphs, strategic line breaks).

# REQUIRED FOR EACH VARIANT
[HOOK] — Opening line (state the mechanism used)
[BODY] — Delivers on hook promise, builds toward CTA
[CTA] — Natural, achieves: ${cta}
[HASHTAGS] — 7–10: 2 broad, 4 niche, 3 micro-niche
[BEST TIME] — Optimal posting window for ${platform}

# OUTPUT FORMAT
${structureGuide}

# TONE
${toneGuide}

# QUALITY STANDARD
${booster}

${fewShot}`
    },

    midjourney: () => {
      const subject  = fields.subject  || 'an evocative scene'
      const style    = fields.style    || 'Cinematic photography'
      const lighting = fields.lighting || 'Golden hour glow'
      const palette  = fields.palette  || 'rich, intentional tones'
      const details  = fields.details  || 'ultra-detailed, 8K'
      return `# PRIMARY PROMPT
${subject}, ${style.toLowerCase()}, ${lighting.toLowerCase()} lighting${palette ? `, color palette: ${palette}` : ''}, ${details || 'ultra-detailed'}, masterful composition, award-winning photography, hyper-realistic textures, atmospheric depth, professional color grading --ar 16:9 --v 6.1 --q 2 --s 750 --style raw

---

# VARIANT A — Cinematic Wide
${subject}, extreme wide shot, ${style.toLowerCase()}, ${lighting.toLowerCase()}, epic scale, ${palette ? palette + ', ' : ''}${details || 'ultra-detailed, 8K'}, IMAX quality, cinematic color grade --ar 21:9 --v 6.1 --q 2 --s 500 --style raw

# VARIANT B — Intimate Close-Up
Close-up perspective of ${subject}, ${style.toLowerCase()}, ${lighting.toLowerCase()}, macro detail, ${palette ? palette + ', ' : ''}fine texture work, museum-quality render, ${details || 'ultra-detailed'} --ar 4:5 --v 6.1 --q 2 --style raw

# VARIANT C — Abstract Reinterpretation
${subject}, abstract artistic reinterpretation, ${style.toLowerCase()}, surreal elements, ${palette ? palette + ', ' : ''}dreamlike atmosphere, conceptual art, trending on ArtStation --ar 1:1 --v 6.1 --s 1000

---

# NEGATIVE PROMPT (add to all variants)
--no ugly, deformed, blurry, low quality, watermark, signature, text, oversaturated, plastic skin, amateur

# PROMPT ENGINEERING NOTES
— --style raw removes Midjourney's aesthetic bias for more literal interpretation
— --s 750 = moderate stylization; lower to 250 for photorealistic, raise to 1000 for artistic
— For product shots: remove --style raw, add "commercial photography, studio setup"
— For vertical format: swap --ar 16:9 to 9:16

${fewShot}`
    },

    copywriting: () => {
      const type      = fields.type      || 'Facebook / Meta ad'
      const product   = fields.product   || 'the product'
      const icp       = fields.icp       || 'the target customer'
      const usp       = fields.usp       || 'the core value proposition'
      const framework = fields.framework || 'PAS (Problem → Agitate → Solve)'
      return `# ROLE
Act as a direct-response copywriter with campaigns generating $1M+ in revenue. You combine David Ogilvy's strategic instincts with Gary Halbert's conversion mechanics.

# CONTEXT
— Copy format: ${type}
— Product / Service: ${product}
— Ideal Customer: ${icp}
— Unique Selling Point: ${usp}
— Framework: ${framework}

# OBJECTIVE
Write a high-converting ${type} that makes ${icp} feel seen, understood, and compelled to act.

# CONSTRAINTS
— Open with the reader's deepest pain — not your product.
— Use "you" language throughout. Never "our customers" or "users."
— Include one specific, credible proof element (stat, case study, or testimonial detail).
— CTA must be action-first: "Get," "Start," "Claim" — never "Learn more."
— No "I'm excited to..." or corporate-speak.

# REQUIRED DELIVERABLES

1. PRIMARY COPY
Full-length, conversion-optimized using ${framework}
Arc: [reader's pain] → [what's possible] → [why this] → [proof] → [CTA]

2. SHORT VARIANT
Under 50 words. Same emotional arc, ruthlessly compressed.

3. HEADLINE / SUBJECT LINE OPTIONS (5 alternatives)
— One curiosity-driven
— One fear-based (authentic, not manipulative)
— One desire-based
— One ultra-specific (include a real number)
— One contrarian / surprising

# OUTPUT FORMAT
${structureGuide}

# TONE
${toneGuide}

# QUALITY STANDARD
${booster}

${fewShot}`
    },

    coding: () => {
      const task        = fields.task        || 'solve the coding challenge'
      const stack       = fields.language    || 'the specified tech stack'
      const level       = fields.level       || 'Senior engineer (no hand-holding)'
      const constraints = fields.constraints || 'production-ready standards'
      const fmt         = fields.format      || 'Full working code + comments'
      return `# ROLE
Act as a Staff Engineer at a Stripe/Linear/Vercel-caliber company. You write code other senior engineers use as a reference.

# CONTEXT
— Task: ${task}
— Tech stack: ${stack}
— Engineer level: ${level}
— Constraints: ${constraints}

# OBJECTIVE
Solve this coding challenge at production quality:
"${task}"

# PRE-CODE ANALYSIS (required before any code)
State:
1. THE CORE CHALLENGE — What is technically interesting about this problem?
2. YOUR APPROACH — And why (name 1 rejected alternative + reasoning)
3. ASSUMPTIONS — About environment, scale, and usage patterns

# IMPLEMENTATION
${fmt}

# CODE QUALITY STANDARDS
— Type-safe where applicable
— Handle happy path AND 3 most likely failure modes
— Name design patterns used and justify them
— Optimize for readability first, performance second (unless performance is the goal)
— Comments explain WHY, not WHAT

# POST-CODE ANALYSIS (required)
— Scalability: what changes at 10x current requirement?
— Security: one vulnerability and how to address it
— Test strategy: 3 most important test cases

# OUTPUT FORMAT
${structureGuide}

# TONE
${toneGuide}

# QUALITY STANDARD
${booster}

${fewShot}`
    },
  }

  return generators[category]()
}

// ─── ENHANCE PROMPT ──────────────────────────────────────────
export function enhancePrompt(rawPrompt: string): string {
  const booster = getBooster()
  const structure = getStructure()
  const structureGuide = structureInstruction(structure)

  return `You are a world-class prompt engineer. Transform the basic prompt below into a professional, expert-level prompt using the ROLE + CONTEXT + OBJECTIVE + CONSTRAINTS + FORMAT framework.

# BASIC PROMPT TO UPGRADE:
"${rawPrompt}"

# YOUR TASK:
Analyze the intent and rewrite it as a complete expert-level prompt that produces dramatically better results from any AI model (ChatGPT, Claude, Gemini, etc.).

# THE UPGRADED PROMPT MUST INCLUDE:

## 1. ROLE
Assign a specific, credentialed expert persona with relevant experience (not "an assistant").

## 2. CONTEXT
Add background information, industry context, and situational details the AI needs to avoid generic output.

## 3. OBJECTIVE
State the goal with extreme clarity. What exact output is needed? What does success look like?

## 4. CONSTRAINTS (at least 4)
Specific quality bars: what to include, what to avoid, what standard the output must meet.

## 5. OUTPUT FORMAT
Specify exact structure: ${structureGuide}

## 6. QUALITY INSTRUCTION
${booster}

# AFTER THE UPGRADED PROMPT:
Add a 2–3 sentence explanation of what you changed and why the upgraded version will produce significantly better results.`
}

// ─── PROMPT LIBRARY ──────────────────────────────────────────
export interface LibraryPrompt {
  id: string
  title: string
  category: string
  categoryColor: string
  tag: string
  prompt: string
}

export const PROMPT_LIBRARY: LibraryPrompt[] = [
  {
    id: 'lib-1',
    title: 'SaaS Churn Diagnosis',
    category: 'Business',
    categoryColor: '#D4902A',
    tag: 'Retention',
    prompt: `Act as a SaaS growth expert who has reduced churn at 20+ companies. My B2B SaaS has [X%] monthly churn among [customer segment].\n\nDiagnose the root cause beyond the obvious surface explanation. Present 3 intervention strategies ordered by speed of impact. For the fastest one, give me a 14-day execution plan with specific daily actions.\n\nConstraints: team of 3, $10k/month budget, no major engineering resources. Every recommendation must be executable by a small team.`,
  },
  {
    id: 'lib-2',
    title: 'Viral Instagram Hook',
    category: 'Social Media',
    categoryColor: '#EC4899',
    tag: 'Instagram',
    prompt: `Act as a social media strategist who has grown Instagram accounts from 0 to 500K+.\n\nCreate 3 Instagram caption variants for [your topic]. Each must:\n1. Open with a scroll-stopping hook (label the mechanism: curiosity gap / bold claim / pattern interrupt)\n2. Deliver one specific, actionable insight in the body\n3. End with a CTA that drives saves — not likes\n\nTone: direct and empowering. Include hashtag recommendations (2 broad, 4 niche, 3 micro-niche) and optimal posting time.`,
  },
  {
    id: 'lib-3',
    title: 'Staff Engineer Code Review',
    category: 'Coding',
    categoryColor: '#06B6D4',
    tag: 'Architecture',
    prompt: `Act as a Staff Engineer at a Stripe-caliber company. Review this code for production readiness:\n\n[paste your code here]\n\nProvide:\n1. Architecture assessment\n2. Top 3 issues ranked by severity (critical / major / minor)\n3. Security vulnerabilities (specific, not generic)\n4. Performance bottlenecks and fixes\n5. Refactored version of the most problematic section\n\nDon't soften feedback. If something fails in production, say so directly.`,
  },
  {
    id: 'lib-4',
    title: 'Cold Email That Gets Replies',
    category: 'Copywriting',
    categoryColor: '#F59E0B',
    tag: 'Sales',
    prompt: `Act as a B2B sales expert with a 35%+ reply rate on cold outreach.\n\nWrite a 3-email cold sequence targeting [job title] at [company type]. I solve [specific pain point].\n\nEmail 1: Pattern interrupt hook, no pitch, under 80 words\nEmail 2: One insight or mini case study, soft ask, under 100 words\nEmail 3: Graceful breakup with final value offer, under 60 words\n\nSubject lines: 4 words or fewer. No "I hope this finds you well." Open with their world, not yours.`,
  },
  {
    id: 'lib-5',
    title: 'Cinematic Portrait',
    category: 'Midjourney',
    categoryColor: '#8B5CF6',
    tag: 'Portrait',
    prompt: `[Your subject], cinematic photography, Leica M11 35mm, golden hour backlight, warm amber and shadow, shallow depth of field, film grain, genuine candid expression, atmospheric haze, Magnum Photos documentary style, muted earth tones —cream, terracotta, charcoal— --ar 4:5 --v 6.1 --style raw --q 2\n\n--no plastic skin, heavy retouching, oversaturated, studio background`,
  },
  {
    id: 'lib-6',
    title: 'PMF Analysis',
    category: 'Business',
    categoryColor: '#D4902A',
    tag: 'Product-Market Fit',
    prompt: `Act as a product strategist who has helped 15+ startups find product-market fit. My product: [describe]. I have [X] users and [retention metric].\n\nAssess my PMF signal honestly:\n1. What does my data actually tell us vs. what I'm hoping it means?\n2. The 3 leading indicators I should track but probably aren't\n3. The one segment most likely to show strong PMF first\n4. A 30-day experiment to accelerate discovery — specific, low-cost\n5. The hard question I'm probably avoiding`,
  },
  {
    id: 'lib-7',
    title: 'LinkedIn Thought Leadership',
    category: 'Social Media',
    categoryColor: '#EC4899',
    tag: 'LinkedIn',
    prompt: `Act as a LinkedIn content strategist who has grown B2B founder profiles to 50K+ followers.\n\nWrite a LinkedIn post about [your insight or experience]:\n— Open with a single sentence that stops a scroller (no "I'm excited to share...")\n— Structure: hook → story/data point → counterintuitive lesson → CTA\n— Length: 150–250 words maximum\n— End with a question inviting comments (not "what do you think?")\n— No hashtags in the post body`,
  },
  {
    id: 'lib-8',
    title: 'Landing Page Hero',
    category: 'Copywriting',
    categoryColor: '#F59E0B',
    tag: 'Conversion',
    prompt: `Act as a conversion copywriter who has written landing pages with 30%+ conversion rates.\n\nWrite the hero section for [product/service]:\nH1 (8 words max): State the outcome, not the feature. Be specific.\nSubhead (20 words max): Address #1 objection or add proof.\nBullets (3 max): Specific, credible benefits — not features.\nCTA (3 words max): Action-first, outcome-hinting.\nTrust signal: One line below CTA (social proof / guarantee)\n\nWrite for a skeptical prospect who has tried 3 similar products.`,
  },
  {
    id: 'lib-9',
    title: 'System Design Deep-Dive',
    category: 'Coding',
    categoryColor: '#06B6D4',
    tag: 'System Design',
    prompt: `Act as a systems architect who has designed infrastructure at scale. Design the architecture for [your system, e.g. a real-time notification system for 1M users].\n\nDeliver:\n1. High-level architecture (ASCII diagram)\n2. Technology choices with justification (one alternative rejected + why)\n3. The 3 most critical design decisions and trade-offs\n4. What breaks first at 10x scale and how to address it\n5. One thing most engineers get wrong when building this\n\nAssume senior engineering audience — skip basics, go deep.`,
  },
  {
    id: 'lib-10',
    title: 'Contrarian Analysis',
    category: 'ChatGPT',
    categoryColor: '#10B981',
    tag: 'Analysis',
    prompt: `Act as a contrarian analyst who challenges consensus narratives with evidence.\n\nTopic: [your topic — e.g. remote work, a specific industry trend]\n\nDeliver a structured contrarian analysis:\n1. The consensus view: what does conventional wisdom say?\n2. The data that challenges it: 3 specific counterpoints\n3. Who benefits from maintaining the consensus narrative?\n4. The nuanced truth neither camp acknowledges\n5. What someone who understands this correctly would do differently\n\nTone: intellectually rigorous, not cynical.`,
  },
  {
    id: 'lib-11',
    title: 'Product Photography',
    category: 'Midjourney',
    categoryColor: '#8B5CF6',
    tag: 'Product',
    prompt: `[Your product] product photography, pure white seamless background, soft diffused studio lighting, commercial photography quality, sharp focus, subtle shadow beneath product, professional retouching, advertising-ready, clean minimal composition, Phase One medium format camera --ar 1:1 --v 6.1 --q 2\n\n--no harsh shadows, cluttered background, amateur lighting, motion blur`,
  },
  {
    id: 'lib-12',
    title: 'Investor Pitch Email',
    category: 'Business',
    categoryColor: '#D4902A',
    tag: 'Fundraising',
    prompt: `Act as a founder who has closed $5M+ in seed funding. Write a cold investor email for my [type of business]:\n— Traction: [key metric]\n— Market: [size/opportunity]\n— Ask: [amount and primary use]\n\nRequirements: under 175 words. Confident and specific — not salesy. Sound like someone worth a 20-minute call. One clear low-friction ask at the end. No buzzwords. No deck mentioned until they express interest.`,
  },
]
