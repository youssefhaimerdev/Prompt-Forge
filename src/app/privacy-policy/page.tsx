import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy – PromptForge',
  description: 'PromptForge privacy policy. How we collect, use, and protect your information.',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/" className="text-xs text-zinc-dim hover:text-amber font-mono transition-colors mb-8 block">← Back to Home</Link>
      <h1 className="text-3xl font-extrabold text-cream mb-2" style={{ fontFamily: 'var(--font-syne)' }}>Privacy Policy</h1>
      <p className="text-xs text-zinc-dim font-mono mb-12">Last updated: January 1, 2025</p>

      <div className="space-y-8 text-sm text-zinc leading-relaxed">
        {[
          { h: '1. Introduction', p: `PromptForge ("we," "us," or "our") operates promptforge.ai. This Privacy Policy explains how we collect, use, and protect information when you visit our website. By using the site, you agree to the practices described here.` },
          { h: '2. Information We Collect', p: `We collect usage data automatically through analytics tools (including Google Analytics), such as pages visited, browser type, device type, and referring URLs. We do not collect or store the text you enter into the prompt generator — all generation happens client-side. We do not require account creation or collect email addresses.` },
          { h: '3. How We Use Information', p: `We use collected analytics data solely to understand how the site is used, improve the user experience, and measure performance. We do not sell, rent, or share this data with third parties for marketing purposes.` },
          { h: '4. Cookies', p: `We use cookies for analytics purposes (Google Analytics). These cookies collect anonymous usage data. You can disable cookies in your browser settings; the core functionality of the site will continue to work without them.` },
          { h: '5. Advertising', p: `We may display third-party advertisements in the future through networks such as Google AdSense. These networks may use cookies to serve relevant ads. We will update this policy when advertising is activated. Currently, no advertising is active on this site.` },
          { h: '6. Third-Party Services', p: `We use Google Analytics (analytics), Google Fonts (typography), and Vercel (hosting). Each of these services has its own privacy policy. We encourage you to review them.` },
          { h: '7. Data Retention', p: `Analytics data is retained according to Google Analytics default retention settings (26 months). We do not retain any prompt inputs you generate, as this data is never transmitted to our servers.` },
          { h: '8. Your Rights', p: `You may opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on. For any other privacy requests, contact us at the email below.` },
          { h: '9. Changes', p: `We may update this policy periodically. Changes will be reflected in the "Last updated" date above. Continued use of the site constitutes acceptance of any changes.` },
          { h: '10. Contact', p: `For privacy questions: privacy@promptforge.ai` },
        ].map((s, i) => (
          <div key={i}>
            <h2 className="text-base font-bold text-cream mb-2" style={{ fontFamily: 'var(--font-syne)' }}>{s.h}</h2>
            <p>{s.p}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
