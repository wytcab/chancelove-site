'use client'

export function TripleBundleSection() {
  const services = [
    {
      name: 'Cron',
      tagline: 'Schedule callbacks',
      url: 'api.chancelove.ai/cron/schedule',
      shortUrl: 'api.chancelove.ai/cron',
      price: '0.005',
      description: 'Schedule one-shot or recurring HTTP callbacks. Your agent sets it and forgets it — it fires when it fires.',
      useCase: '"In 48 hours, follow up with this lead."',
      color: '#C9A84C',
    },
    {
      name: 'Notify',
      tagline: 'Send messages',
      url: 'api.chancelove.ai/notify/send',
      shortUrl: 'api.chancelove.ai/notify',
      price: '0.005',
      description: 'Email, webhook, or SMS delivery — one API call from your agent to a real human in the loop.',
      useCase: '"Deal closed. Ping the sales channel."',
      color: '#93c5fd',
    },
    {
      name: 'Docs',
      tagline: 'Generate documents',
      url: 'api.chancelove.ai/docs/generate',
      shortUrl: 'api.chancelove.ai/docs',
      price: '0.005',
      description: 'Convert HTML to polished PDFs — invoices, reports, receipts. Your agent delivers human-readable output.',
      useCase: '"Invoice ready. Attached and sent."',
      color: '#8B1A1A',
    },
  ]

  return (
    <section id="x402" className="py-28 px-8 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <p className="section-label mb-5">AI Agent Infrastructure</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-off-white mb-5 leading-tight">
          The x402 Triple Bundle.
        </h2>
        <p className="font-body text-lg text-soft-gray mb-6 max-w-2xl leading-relaxed">
          Three x402-native microservices at one domain. Pay per call in USDC on Base — no API keys, no accounts, no subscriptions.
        </p>

        {/* Central hub link */}
        <a
          href="https://api.chancelove.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-body text-sm font-semibold px-6 py-3 rounded-xl mb-16 tracking-wide"
          style={{
            background: 'linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)',
            color: '#C9A84C',
            border: '1px solid rgba(201,168,76,0.4)',
            boxShadow: '0 0 20px rgba(201,168,76,0.08)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1L13 7L7 13M1 7H13" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          api.chancelove.ai — One endpoint. Three services.
        </a>

        {/* ── SERVICE FLOW DIAGRAM ── */}
        <div className="border border-white/10 rounded-2xl p-10 bg-white/[0.01] mb-12 overflow-x-auto">
          <p className="font-body text-xs text-gold tracking-widest uppercase mb-8 text-center">How the three services work together</p>

          <div className="flex items-start justify-center gap-0 min-w-[560px]">
            {/* ── AGENT ── */}
            <div className="flex flex-col items-center pt-4">
              <div className="w-20 h-20 rounded-full border-2 border-baby-blue/40 flex items-center justify-center mb-3"
                style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.08) 0%, transparent 70%)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="1.5">
                  <rect x="3" y="11" width="18" height="11" rx="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  <circle cx="12" cy="16" r="1" fill="#93c5fd"/>
                </svg>
              </div>
              <p className="font-body text-xs text-baby-blue font-semibold uppercase tracking-widest">AI Agent</p>
              <p className="font-body text-xs text-soft-gray mt-1 text-center leading-tight">Your agent<br/>operates</p>
            </div>

            {/* Arrow 1 */}
            <div className="flex flex-col items-center px-4 pt-12">
              <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                <path d="M0 12H52M52 12L40 4M52 12L40 20" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-body text-[10px] text-gold/60 mt-1 text-center leading-tight">1. POST<br/>+ $0.005</p>
            </div>

            {/* ── CRON ── */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl border border-gold/40 flex flex-col items-center justify-center mb-3"
                style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 7v5l3 3"/>
                </svg>
              </div>
              <p className="font-body text-xs text-gold font-semibold uppercase tracking-widest">Cron</p>
              <p className="font-body text-xs text-soft-gray mt-1 text-center leading-tight">Schedules<br/>callbacks</p>
            </div>

            {/* Arrow 2 */}
            <div className="flex flex-col items-center px-4 pt-12">
              <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                <path d="M0 12H52M52 12L40 4M52 12L40 20" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-body text-[10px] text-gold/60 mt-1 text-center leading-tight">2. Fires<br/>later</p>
            </div>

            {/* ── NOTIFY ── */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl border border-baby-blue/40 flex flex-col items-center justify-center mb-3"
                style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.08) 0%, transparent 70%)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="1.5">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
              </div>
              <p className="font-body text-xs text-baby-blue font-semibold uppercase tracking-widest">Notify</p>
              <p className="font-body text-xs text-soft-gray mt-1 text-center leading-tight">Alerts<br/>humans</p>
            </div>

            {/* Arrow 3 */}
            <div className="flex flex-col items-center px-4 pt-12">
              <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                <path d="M0 12H52M52 12L40 4M52 12L40 20" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-body text-[10px] text-gold/60 mt-1 text-center leading-tight">3. POST<br/>+ $0.005</p>
            </div>

            {/* ── DOCS ── */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl border border-maroon/40 flex flex-col items-center justify-center mb-3"
                style={{ background: 'radial-gradient(circle, rgba(139,26,26,0.08) 0%, transparent 70%)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B1A1A" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <p className="font-body text-xs text-maroon font-semibold uppercase tracking-widest">Docs</p>
              <p className="font-body text-xs text-soft-gray mt-1 text-center leading-tight">Delivers<br/>PDFs</p>
            </div>

            {/* Arrow 4 */}
            <div className="flex flex-col items-center px-4 pt-12">
              <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                <path d="M0 12H52M52 12L40 4M52 12L40 20" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-body text-[10px] text-gold/60 mt-1 text-center leading-tight">4. PDF<br/>attached</p>
            </div>

            {/* ── HUMAN ── */}
            <div className="flex flex-col items-center pt-4">
              <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center mb-3"
                style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A8A5A0" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <p className="font-body text-xs text-off-white font-semibold uppercase tracking-widest">Human</p>
              <p className="font-body text-xs text-soft-gray mt-1 text-center leading-tight">Receives<br/>output</p>
            </div>
          </div>

          {/* Example flow label */}
          <div className="mt-8 text-center">
            <p className="font-body text-xs text-soft-gray/60 italic">
              Example: Agent schedules a follow-up via Cron → when it fires, Notify alerts you via email → Docs generates the report and attaches it as a PDF
            </p>
          </div>
        </div>

        {/* Pricing bar */}
        <div className="flex flex-wrap items-center gap-8 mb-16 pb-8 border-b border-white/10">
          <div>
            <p className="font-body text-xs text-soft-gray tracking-widest uppercase mb-1">Total bundle cost</p>
            <p className="font-display text-3xl text-gold font-bold">$0.015 USDC per full execution</p>
          </div>
          <div className="w-px h-10 bg-white/10 hidden md:block" />
          <div>
            <p className="font-body text-xs text-soft-gray tracking-widest uppercase mb-1">Per service</p>
            <p className="font-body text-sm text-off-white">$0.005 / call</p>
          </div>
          <div className="w-px h-10 bg-white/10 hidden md:block" />
          <div>
            <p className="font-body text-xs text-soft-gray tracking-widest uppercase mb-1">Network</p>
            <p className="font-body text-sm text-off-white">Base (Ethereum L2)</p>
          </div>
          <div className="w-px h-10 bg-white/10 hidden md:block" />
          <div>
            <p className="font-body text-xs text-soft-gray tracking-widest uppercase mb-1">Payment model</p>
            <p className="font-body text-sm text-off-white">Pay per use — no subscription</p>
          </div>
        </div>

        {/* Three service cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((svc) => (
            <div key={svc.name} className="border border-white/10 rounded-2xl p-8 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-200">
              {/* Service header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl font-bold text-off-white leading-tight">{svc.name}</h3>
                  <span className="font-display text-2xl font-bold" style={{ color: svc.color }}>${svc.price}</span>
                </div>
                <p className="font-body text-xs text-soft-gray/70">{svc.tagline}</p>
              </div>

              {/* Description */}
              <p className="font-body text-sm text-soft-gray leading-relaxed mb-6">{svc.description}</p>

              {/* Use case */}
              <div className="border-t border-white/5 pt-5 mb-6">
                <p className="font-body text-xs text-maroon font-semibold uppercase tracking-widest mb-3">Example</p>
                <p className="font-body text-xs text-soft-gray leading-relaxed italic">"{svc.useCase}"</p>
              </div>

              {/* Endpoint */}
              <div className="bg-black/40 rounded-xl p-4">
                <p className="font-body text-xs text-soft-gray/50 mb-2">Endpoint</p>
                <div className="flex items-center gap-2">
                  <span className="font-body text-xs bg-maroon/20 text-maroon px-2 py-1 rounded uppercase tracking-wider text-xs font-semibold flex-shrink-0">
                    POST
                  </span>
                  <p className="font-body text-xs text-baby-blue break-all leading-tight">{svc.url}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6">
                <a
                  href={`https://${svc.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs text-gold hover:text-gold/80 transition-colors tracking-wide border-b border-gold/20 hover:border-gold/50 pb-0.5 w-fit inline-block"
                >
                  Try it free (402 flow) →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* x402 manifest + docs link */}
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <a
            href="https://docs.chancelove.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-soft-gray hover:text-baby-blue transition-colors tracking-wide"
          >
            Full API documentation →
          </a>
          <a
            href="https://api.chancelove.ai/.well-known/x402"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-soft-gray hover:text-baby-blue transition-colors tracking-wide"
          >
            x402 manifest →
          </a>
        </div>

      </div>
    </section>
  )
}
