'use client'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

export function track(event: string, params?: Record<string, string | number>) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', event, { event_category: 'engagement', ...params })
}
