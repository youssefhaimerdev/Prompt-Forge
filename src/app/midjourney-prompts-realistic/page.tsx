import type { Metadata } from 'next'
import Link from 'next/link'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'Midjourney Prompts for Realistic Images – Photorealistic AI Art Prompts',
  description: 'Expert Midjourney prompts engineered for photorealistic results. Portraits, architecture, product photography, cinematic scenes, and more. Includes --style raw parameters.',
  alternates: { canonical: 'https://promptforge.ai/midjourney-prompts-realistic' },
}

const prompts = [
  { style: 'Cinematic Portrait', text: `Award-winning portrait photography of an elderly Japanese craftsman in his workshop, warm tungsten lighting from a single overhead bulb, surrounded by hand-carved wooden tools, weathered hands in focus, shallow depth of field, film grain, shot on Leica M11 with 50mm Summilux, National Geographic quality --ar 4:5 --v 6.1 --q 2 --s 500 --style raw` },
  { style: 'Urban Architecture', text: `Aerial drone photography of a modernist residential complex in Copenhagen at golden hour, Bjarke Ingels style, green rooftop gardens, canals reflecting the sunset, long shadows across white concrete, professional architectural photography, tack sharp, shot on Phase One, ultra-wide perspective --ar 16:9 --v 6.1 --q 2 --style raw --s 300` },
  { style: 'Product Photography', text: `Commercial product photography of a luxury mechanical watch, resting on rough black volcanic stone, single dramatic sidelight creating deep shadows in the texture, tiny water droplets on the crystal, macro detail on the dial, dark grey gradient background, Rolex-tier advertising quality, 8K --ar 1:1 --v 6.1 --q 2 --style raw --s 200` },
  { style: 'Nature & Wildlife', text: `A red fox pausing in a snow-dusted pine forest at dawn, breath visible in cold air, backlit by golden winter sunrise filtering through trees, mist rising from forest floor, wildlife photography, shot on Canon EOS R5 with 500mm telephoto, bokeh background of frosted branches, National Geographic cover quality --ar 3:2 --v 6.1 --q 2 --style raw --s 600` },
  { style: 'Interior Design', text: `Architectural interior photography of a minimalist Japanese-Scandinavian living space, morning light streaming through floor-to-ceiling shoji screens, rough concrete walls, a single ceramic vase with dried pampas grass, oak floorboards, Kinfolk magazine aesthetic, shot on Hasselblad X2D, perspective correction, no people --ar 4:3 --v 6.1 --q 2 --style raw` },
  { style: 'Street Photography', text: `Wet night street photography in Hong Kong, neon signs reflecting in rain-soaked pavement, a lone figure with umbrella crossing the frame, motion blur on passing taxis, steam rising from a street food vendor, high contrast black and gold tones, Magnum Photos documentary style, available light only, grainy film texture --ar 3:2 --v 6.1 --q 2 --style raw --s 400` },
  { style: 'Food Photography', text: `Editorial food photography of a rustic sourdough bread loaf broken open on a aged oak table, steam rising from the interior crumb, small-batch honey being drizzled, scattered flour, morning window light casting long shadows, Kinfolk / NY Times Cooking aesthetic, shot on 85mm with f/1.4, warm and textured --ar 4:5 --v 6.1 --q 2 --style raw --s 300` },
  { style: 'Concept / Fantasy Realism', text: `A 19th century lighthouse completely overtaken by an ancient olive tree, the tree roots wrapping through the stone walls and windows, Mediterranean sea visible in distance, overcast golden light, hyper-realistic painterly photography, trending on 500px, extreme foreground detail, Ansel Adams meets Alex Holyoake style --ar 2:3 --v 6.1 --q 2 --s 750 --style raw` },
]

const tips = [
  { title: 'Always use --style raw', text: `The default Midjourney aesthetic adds painterly flourishes that look beautiful in art but destroy photorealism. --style raw turns off these enhancements and produces output that is much closer to real photography.` },
  { title: 'Reference real cameras and photographers', text: `Including "shot on Leica M11" or "Magnum Photos documentary style" trains the model to think about photographic techniques: focal length, exposure, grain, color science.` },
  { title: 'Specify light source and quality', text: `Never just say "dramatic lighting." Say "single overhead tungsten bulb," "morning window light casting long shadows," or "backlit by golden winter sunrise." Light specificity is the difference between mood and a specific mood.` },
  { title: 'Use --s (stylize) for control', text: `Lower stylize values (100-400) produce more literal, realistic output. Higher values (600-1000) inject more Midjourney aesthetic interpretation. For hyperrealism, stay under 500.` },
]

export default function MidjourneyRealisticPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-3">
        <Link href="/" className="text-xs text-zinc-dim hover:text-amber font-mono transition-colors">← Back to Generator</Link>
      </div>

      <div className="mb-12">
        <div className="inline-flex items-center gap-2 border border-purple-500/20 bg-purple-500/5 rounded-full px-3 py-1 mb-5">
          <span className="text-purple-400 font-mono text-xs">◐</span>
          <span className="text-xs font-semibold text-purple-400 font-mono uppercase tracking-widest">Midjourney Prompts</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-cream mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
          Midjourney Prompts for Realistic Images
        </h1>
        <p className="text-zinc text-lg max-w-2xl leading-relaxed mb-6">
          8 photorealistic Midjourney prompts built with the techniques that separate professional-quality output from generic AI images: camera references, precise lighting, and proper parameters.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/#generator" className="inline-flex items-center gap-2 btn-amber px-5 py-2.5 rounded-full text-sm font-semibold" style={{ fontFamily: 'var(--font-syne)' }}>
            Generate Custom Image Prompt →
          </Link>
        </div>
      </div>

      <AdSlot id="mj-top" size="leaderboard" />

      <div className="prose-forge my-12">
        <h2>Why Most Midjourney Prompts Produce Generic Results</h2>
        <p>
          Midjourney v6 is capable of producing images that are genuinely indistinguishable from professional photography — but almost no one gets those results consistently. The gap is almost always in prompt construction. A prompt like &quot;a sunset over the ocean&quot; will get you a competent image. A prompt that specifies the camera, the exact light quality, the atmospheric conditions, the composition style, and the photographic reference will get you something that looks like it belongs in a magazine.
        </p>
        <p>
          The prompts below incorporate five techniques that consistently produce photorealistic output: real camera and lens references, precise light source description, photographic style attribution, technical parameters calibrated for realism, and --style raw to disable Midjourney aesthetic enhancements that reduce photographic quality.
        </p>
        <h2>Pro Tips for Photorealistic Midjourney Output</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {tips.map((t, i) => (
          <div key={i} className="bg-surface border border-border rounded-xl p-4">
            <h3 className="text-sm font-bold text-amber mb-2 font-mono">◈ {t.title}</h3>
            <p className="text-xs text-zinc leading-relaxed">{t.text}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4 mb-12">
        {prompts.map((p, i) => (
          <div key={i} className="bg-surface border border-border rounded-2xl p-5 hover:border-border-bright transition-all">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-zinc-dim font-mono">#{i + 1}</span>
              <span className="text-sm font-bold text-cream" style={{ fontFamily: 'var(--font-syne)' }}>{p.style}</span>
            </div>
            <p className="prompt-output text-xs leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>

      <AdSlot id="mj-bottom" size="leaderboard" />

      <div className="mt-10 pt-8 border-t border-border">
        <p className="text-xs font-semibold text-zinc-dim uppercase tracking-widest font-mono mb-4">You Might Also Like</p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: '/instagram-caption-prompts', label: 'Instagram Captions' },
            { href: '/ai-prompts-for-marketing', label: 'Marketing Prompts' },
            { href: '/chatgpt-prompts-for-business', label: 'Business Prompts' },
            { href: '/', label: '← Generator' },
          ].map(l => (
            <Link key={l.href} href={l.href} className="text-xs text-zinc border border-border px-4 py-2 rounded-full hover:border-amber/50 hover:text-amber transition-all font-mono">{l.label}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}
