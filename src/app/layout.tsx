import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://promptforge.ai'),
  title: {
    default: 'AI Prompt Generator – Create Powerful ChatGPT, Midjourney & Business Prompts',
    template: '%s | PromptForge',
  },
  description:
    'Generate expert-quality AI prompts for ChatGPT, Midjourney, business strategy, copywriting, and coding. Free, instant, no signup. Stop getting generic AI output.',
  keywords: [
    'AI prompt generator',
    'ChatGPT prompts',
    'Midjourney prompts',
    'business prompts',
    'prompt engineering',
    'AI writing tool',
    'free prompt generator',
    'ChatGPT prompt builder',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://promptforge.ai',
    siteName: 'PromptForge',
    title: 'AI Prompt Generator – Create Powerful ChatGPT, Midjourney & Business Prompts',
    description: 'Expert-quality AI prompts generated instantly. Free, no signup required.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Prompt Generator – PromptForge',
    description: 'Expert-quality AI prompts for ChatGPT, Midjourney, business & more. Free.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'PromptForge',
              url: 'https://promptforge.ai',
              description: 'Expert-quality AI prompt generator for ChatGPT, Midjourney, business, and more.',
              applicationCategory: 'ProductivityApplication',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            }),
          }}
        />
      </head>
      <body className="noise min-h-screen flex flex-col bg-obsidian">
        {/* Google Analytics — replace G-XXXXXXXXXX with your Measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');`}
        </Script>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
