'use client'

import { useState, useCallback, useRef } from 'react'
import {
  CATEGORIES, TONES, OUTPUT_TYPES, PROMPT_LIBRARY,
  buildPrompt, enhancePrompt,
  type Category, type Tone, type OutputType, type LibraryPrompt,
} from '@/lib/engine'
import { track } from '@/lib/analytics'

type Mode = 'generate' | 'enhance'

export default function Generator() {
  const [mode, setMode] = useState<Mode>('generate')

  // Generate mode state
  const [category, setCategory] = useState<Category>('chatgpt')
  const [tone, setTone]         = useState<Tone>('professional')
  const [outputType, setOutputType] = useState<OutputType>('strategy')
  const [fields, setFields]     = useState<Record<string, string>>({})

  // Enhance mode state
  const [rawPrompt, setRawPrompt] = useState('')

  // Shared output state
  const [prompt, setPrompt]     = useState('')
  const [loading, setLoading]   = useState(false)
  const [copied, setCopied]     = useState(false)
  const [generated, setGenerated] = useState(false)

  // Library state
  const [showLibrary, setShowLibrary] = useState(false)
  const [libCopied, setLibCopied] = useState<string | null>(null)

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
    }, 700)
  }, [category, tone, outputType, fields])

  const handleEnhance = useCallback(() => {
    if (!rawPrompt.trim()) return
    setLoading(true)
    setGenerated(false)
    track('enhance_click', { label: 'enhance_mode' })
    setTimeout(() => {
      const result = enhancePrompt(rawPrompt.trim())
      setPrompt(result)
      setLoading(false)
      setGenerated(true)
      setTimeout(() => outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
    }, 700)
  }, [rawPrompt])

  const handleRegenerate = () => {
    setLoading(true)
    setGenerated(false)
    track('regenerate_click', { label: mode === 'generate' ? category : 'enhance' })
    setTimeout(() => {
      const result = mode === 'generate'
        ? buildPrompt({ category, tone, outputType, fields })
        : enhancePrompt(rawPrompt.trim())
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
    track('copy_click', { label: mode })
    setTimeout(() => setCopied(false), 2500)
  }

  const handleLibraryCopy = async (p: LibraryPrompt) => {
    try { await navigator.clipboard.writeText(p.prompt) }
    catch { const t = document.createElement('textarea'); t.value = p.prompt; document.body.appendChild(t); t.select(); document.execCommand('copy'); document.body.removeChild(t) }
    setLibCopied(p.id)
    track('library_copy', { label: p.category })
    setTimeout(() => setLibCopied(null), 2000)
  }

  const handleSwitchMode = (m: Mode) => {
    setMode(m)
    setPrompt('')
    setGenerated(false)
    track('mode_switch', { label: m })
  }

  const filledCount = currentCat.fields.filter(f => fields[f.key]?.trim()).length
  const totalFields = currentCat.fields.length

  return (
    <div id="generator" className="w-full">

      {/* ── MODE TOGGLE ─────────────────────────────── */}
      <div className="flex items-center gap-1 p-1 bg-surface border border-border rounded-2xl mb-8 w-full sm:w-auto sm:inline-flex">
        <button
          onClick={() => handleSwitchMode('generate')}
          className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
            mode === 'generate'
              ? 'bg-amber text-obsidian shadow-md'
              : 'text-zinc hover:text-zinc-light'
          }`}
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          <span className="font-mono text-base">◈</span>
          Generate Prompt
        </button>
        <button
          onClick={() => handleSwitchMode('enhance')}
          className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
            mode === 'enhance'
              ? 'bg-amber text-obsidian shadow-md'
              : 'text-zinc hover:text-zinc-light'
          }`}
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          <span className="font-mono text-base">⚡</span>
          Enhance My Prompt
        </button>
      </div>

      {mode === 'generate' ? (
        <>
          {/* ── STEP 1: CATEGORY ─────────────────────── */}
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

          {/* ── STEP 2: TONE + OUTPUT ─────────────────── */}
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

          {/* ── STEP 3: FIELDS ───────────────────────── */}
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
                ◎ Fill required fields for best results. Optional fields add depth and specificity.
              </p>
            </div>
          </div>

          {/* ── GENERATE BUTTON ──────────────────────── */}
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
        </>
      ) : (
        /* ── ENHANCE MODE ─────────────────────────── */
        <div className="mb-6">
          <div className="bg-surface border border-amber/20 rounded-2xl p-5 sm:p-6 mb-4">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber/10 border border-amber/20 flex items-center justify-center flex-shrink-0">
                <span className="text-amber font-mono text-sm">⚡</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-cream" style={{ fontFamily: 'var(--font-syne)' }}>
                  Prompt Enhancement Mode
                </p>
                <p className="text-xs text-zinc-dim mt-0.5 leading-relaxed">
                  Paste any basic prompt below. The engine will upgrade it with full ROLE + CONTEXT + OBJECTIVE + CONSTRAINTS + FORMAT structure.
                </p>
              </div>
            </div>

            <label className="block text-xs font-semibold text-zinc-dim uppercase tracking-wider mb-2 font-mono">
              Your Basic Prompt
            </label>
            <textarea
              value={rawPrompt}
              onChange={e => setRawPrompt(e.target.value)}
              placeholder={'e.g. "Write me a marketing email for my app"\nor: "Help me improve my Instagram content"\nor: "Give me tips for coding interviews"'}
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-border text-zinc-light text-sm placeholder:text-zinc-dim focus:outline-none focus:border-amber transition-all resize-none leading-relaxed"
            />

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                '"Help me grow my SaaS"',
                '"Write a cold email for my product"',
                '"Explain how to learn to code"',
              ].map(ex => (
                <button
                  key={ex}
                  onClick={() => setRawPrompt(ex.replace(/"/g, ''))}
                  className="text-xs text-zinc-dim hover:text-amber border border-border hover:border-amber/30 rounded-lg px-3 py-2 transition-all text-left truncate"
                >
                  Try: {ex}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleEnhance}
            disabled={loading || !rawPrompt.trim()}
            className="w-full btn-amber rounded-xl py-4 text-sm tracking-wide font-semibold disabled:pointer-events-none"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                  <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-90" />
                </svg>
                Upgrading your prompt…
              </span>
            ) : (
              '⚡  Enhance to Expert Level'
            )}
          </button>
        </div>
      )}

      {/* ── OUTPUT ──────────────────────────────────── */}
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
                {mode === 'enhance' ? 'Enhanced Prompt' : 'Expert Prompt'}
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
              {[100, 85, 70, 95, 60, 80, 75, 90].map((w, i) => (
                <div key={i} className="h-3 bg-surface-3 rounded" style={{ width: `${w}%` }} />
              ))}
            </div>
          ) : (
            <>
              <div className="prompt-output">{prompt}</div>
              <div className="mt-5 pt-4 border-t border-border flex items-center justify-between flex-wrap gap-3">
                <p className="text-xs text-zinc-dim font-mono">
                  Paste into ChatGPT, Claude, Gemini, or Midjourney.
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

      {/* ── PROMPT LIBRARY TOGGLE ────────────────────── */}
      <div className="mt-10 pt-8 border-t border-border">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs font-semibold text-amber uppercase tracking-widest font-mono mb-1">
              Prompt Library
            </p>
            <p className="text-sm font-bold text-cream" style={{ fontFamily: 'var(--font-syne)' }}>
              Popular Expert Prompts
            </p>
          </div>
          <button
            onClick={() => setShowLibrary(!showLibrary)}
            className="text-xs text-zinc hover:text-amber font-mono border border-border hover:border-amber/30 px-4 py-2 rounded-lg transition-all"
          >
            {showLibrary ? '▲ Hide Library' : '▼ Browse 12 Prompts'}
          </button>
        </div>

        {showLibrary && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fade-in">
            {PROMPT_LIBRARY.map(p => (
              <div
                key={p.id}
                className="bg-surface border border-border rounded-2xl p-4 hover:border-border-bright transition-all group"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="text-xs font-bold font-mono px-2 py-0.5 rounded-full border"
                      style={{ color: p.categoryColor, borderColor: `${p.categoryColor}40`, backgroundColor: `${p.categoryColor}10` }}
                    >
                      {p.category}
                    </span>
                    <span className="text-xs text-zinc-dim font-mono">· {p.tag}</span>
                  </div>
                  <button
                    onClick={() => handleLibraryCopy(p)}
                    className={`flex-shrink-0 text-xs font-mono px-3 py-1 rounded-lg transition-all border ${
                      libCopied === p.id
                        ? 'bg-green-500/15 text-green-400 border-green-500/30'
                        : 'border-border text-zinc hover:border-amber/40 hover:text-amber'
                    }`}
                  >
                    {libCopied === p.id ? '✓' : '⎘'}
                  </button>
                </div>
                <p className="text-xs font-semibold text-cream mb-2" style={{ fontFamily: 'var(--font-syne)' }}>
                  {p.title}
                </p>
                <p className="prompt-output text-xs leading-relaxed line-clamp-3 opacity-70">
                  {p.prompt}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
