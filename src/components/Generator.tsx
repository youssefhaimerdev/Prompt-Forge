'use client'

import { useState, useCallback, useRef } from 'react'
import {
  CATEGORIES, TONES, OUTPUT_TYPES,
  buildPrompt,
  type Category, type Tone, type OutputType,
} from '@/lib/engine'
import { track } from '@/lib/analytics'

export default function Generator() {
  const [category, setCategory] = useState<Category>('chatgpt')
  const [tone, setTone]         = useState<Tone>('professional')
  const [outputType, setOutputType] = useState<OutputType>('strategy')
  const [fields, setFields]     = useState<Record<string, string>>({})
  const [prompt, setPrompt]     = useState('')
  const [loading, setLoading]   = useState(false)
  const [copied, setCopied]     = useState(false)
  const [generated, setGenerated] = useState(false)
  const outputRef = useRef<HTMLDivElement>(null)

  const currentCat = CATEGORIES.find(c => c.id === category)!

  const handleCategory = (id: Category) => {
    setCategory(id)
    setFields({})
    setPrompt('')
    setGenerated(false)
    track('category_select', { label: id })
  }

  const handleField = (key: string, val: string) => {
    setFields(prev => ({ ...prev, [key]: val }))
  }

  const handleGenerate = useCallback(() => {
    setLoading(true)
    setGenerated(false)
    track('generate_click', { label: category, tone, output_type: outputType })

    setTimeout(() => {
      const result = buildPrompt({ category, tone, outputType, fields })
      setPrompt(result)
      setLoading(false)
      setGenerated(true)
      setTimeout(() => outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
    }, 600)
  }, [category, tone, outputType, fields])

  const handleRegenerate = () => {
    setLoading(true)
    setGenerated(false)
    track('regenerate_click', { label: category })
    setTimeout(() => {
      const result = buildPrompt({ category, tone, outputType, fields })
      setPrompt(result)
      setLoading(false)
      setGenerated(true)
    }, 500)
  }

  const handleCopy = async () => {
    if (!prompt) return
    try { await navigator.clipboard.writeText(prompt) }
    catch { const t = document.createElement('textarea'); t.value = prompt; document.body.appendChild(t); t.select(); document.execCommand('copy'); document.body.removeChild(t) }
    setCopied(true)
    track('copy_click', { label: category })
    setTimeout(() => setCopied(false), 2500)
  }

  const filledCount = currentCat.fields.filter(f => fields[f.key]?.trim()).length
  const totalFields = currentCat.fields.length

  return (
    <div id="generator" className="w-full">

      {/* ── STEP 1: CATEGORY ───────────────────────── */}
      <div className="mb-8">
        <p className="text-xs font-semibold text-zinc-dim uppercase tracking-widest font-mono mb-3">
          01 — Select Category
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategory(cat.id)}
              className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border text-center transition-all duration-150 ${
                category === cat.id
                  ? 'border-amber bg-amber/8 text-amber-light'
                  : 'border-border bg-surface hover:border-border-bright text-zinc hover:text-zinc-light'
              }`}
            >
              <span className="text-xl font-mono" style={{ color: category === cat.id ? cat.color : undefined }}>
                {cat.icon}
              </span>
              <span className="text-xs font-semibold" style={{ fontFamily: 'var(--font-syne)' }}>
                {cat.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── STEP 2: TONE + OUTPUT ───────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div>
          <p className="text-xs font-semibold text-zinc-dim uppercase tracking-widest font-mono mb-3">
            02 — Tone
          </p>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(TONES) as Tone[]).map(t => (
              <button
                key={t}
                onClick={() => { setTone(t); track('tone_select', { label: t }) }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${
                  tone === t
                    ? 'border-amber bg-amber/10 text-amber-light'
                    : 'border-border text-zinc hover:border-border-bright hover:text-zinc-light'
                }`}
              >
                <span className="font-mono text-xs">{TONES[t].icon}</span>
                {TONES[t].label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-zinc-dim uppercase tracking-widest font-mono mb-3">
            03 — Output Type
          </p>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(OUTPUT_TYPES) as OutputType[]).map(o => (
              <button
                key={o}
                onClick={() => { setOutputType(o); track('output_select', { label: o }) }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${
                  outputType === o
                    ? 'border-amber bg-amber/10 text-amber-light'
                    : 'border-border text-zinc hover:border-border-bright hover:text-zinc-light'
                }`}
              >
                <span className="font-mono text-xs">{OUTPUT_TYPES[o].icon}</span>
                {OUTPUT_TYPES[o].label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── STEP 3: FIELDS ─────────────────────────── */}
      <div className="bg-surface border border-border rounded-2xl p-5 sm:p-6 mb-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs font-semibold text-zinc-dim uppercase tracking-widest font-mono mb-1">
              04 — Customize
            </p>
            <p className="text-xs text-zinc-dim">{currentCat.description}</p>
          </div>
          <div className="flex-shrink-0 text-right">
            <span className="text-xs font-mono text-zinc-dim">{filledCount}/{totalFields}</span>
            <div className="w-12 h-1 bg-surface-3 rounded-full mt-1.5 overflow-hidden">
              <div
                className="h-full bg-amber rounded-full transition-all duration-500"
                style={{ width: `${(filledCount / totalFields) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currentCat.fields.map((field, i) => (
            <div key={field.key} className={i === 0 ? 'sm:col-span-2' : ''}>
              <label className="block text-xs font-semibold text-zinc-dim uppercase tracking-wider mb-1.5 font-mono">
                {field.label}{field.required && <span className="text-amber ml-1">*</span>}
              </label>
              {field.type === 'select' ? (
                <div className="relative">
                  <select
                    value={fields[field.key] || ''}
                    onChange={e => handleField(field.key, e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-2 border border-border text-zinc-light text-sm appearance-none cursor-pointer focus:outline-none focus:border-amber transition-all pr-8"
                  >
                    <option value="">{field.placeholder}</option>
                    {field.options?.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-dim text-xs">▾</span>
                </div>
              ) : (
                <input
                  type="text"
                  value={fields[field.key] || ''}
                  onChange={e => handleField(field.key, e.target.value)}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-2 border border-border text-zinc-light text-sm placeholder:text-zinc-dim focus:outline-none focus:border-amber transition-all"
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-2 pt-4 border-t border-border/50">
          <p className="text-xs text-zinc-dim font-mono">
            ◎ Fill required fields for best results. Optional fields add depth.
          </p>
        </div>
      </div>

      {/* ── GENERATE BUTTON ────────────────────────── */}
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="w-full btn-amber rounded-xl py-4 text-sm tracking-wide font-semibold mb-6 disabled:pointer-events-none"
        style={{ fontFamily: 'var(--font-syne)' }}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
              <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-90" />
            </svg>
            Engineering your prompt…
          </span>
        ) : (
          '◈  Generate Expert Prompt'
        )}
      </button>

      {/* ── OUTPUT ─────────────────────────────────── */}
      {(generated || loading) && (
        <div
          ref={outputRef}
          className={`bg-surface border rounded-2xl p-5 sm:p-6 transition-all ${generated ? 'border-amber/30 amber-glow animate-fade-in' : 'border-border'}`}
          aria-live="polite"
        >
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-amber animate-pulse-amber" />
              <span className="text-xs font-semibold text-zinc-dim uppercase tracking-widest font-mono">
                Expert Prompt
              </span>
              {generated && prompt && (
                <span className="text-xs font-mono text-zinc-dim">· {prompt.length} chars</span>
              )}
            </div>
            {generated && (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleRegenerate}
                  className="text-xs text-zinc hover:text-zinc-light px-3 py-1.5 rounded-lg border border-border hover:border-border-bright transition-all font-mono"
                >
                  ↻ Regenerate
                </button>
                <button
                  onClick={handleCopy}
                  className={`text-xs font-semibold px-4 py-1.5 rounded-lg transition-all font-mono ${
                    copied
                      ? 'bg-green-500/15 text-green-400 border border-green-500/30'
                      : 'btn-amber'
                  }`}
                >
                  {copied ? '✓ Copied!' : '⎘ Copy'}
                </button>
              </div>
            )}
          </div>

          {loading ? (
            <div className="space-y-2.5 animate-pulse">
              {[100, 85, 70, 95, 60, 80].map((w, i) => (
                <div key={i} className="h-3 bg-surface-3 rounded" style={{ width: `${w}%` }} />
              ))}
            </div>
          ) : (
            <>
              <div className="prompt-output">{prompt}</div>
              <div className="mt-5 pt-4 border-t border-border flex items-center justify-between flex-wrap gap-3">
                <p className="text-xs text-zinc-dim font-mono">
                  Paste this into ChatGPT, Claude, Gemini, or Midjourney.
                </p>
                <button
                  onClick={handleCopy}
                  className={`text-xs font-semibold px-5 py-2 rounded-lg transition-all font-mono ${
                    copied ? 'bg-green-500/15 text-green-400' : 'btn-amber'
                  }`}
                >
                  {copied ? '✓ Copied to clipboard' : '⎘ Copy prompt'}
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
