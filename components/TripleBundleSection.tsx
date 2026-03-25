'use client'

export function TripleBundleSection() {
  const services = [
    {
      name: 'Cron-as-a-Service',
      url: 'cron.chancelove.ai',
      price: '0.005',
      description: 'Schedule reliable HTTP callbacks for AI agents. Delayed execution, retries, recurring tasks — the backbone of autonomous operations.',
      useCase: 'An AI agent that needs to follow up in 48 hours. A report that generates every Monday. A task that retries on failure — without you touching it.',
      endpoint: '/schedule',
      method: 'POST',
    },
    {
      name: 'Document Generation',
      url: 'api.chancelove.ai',
      price: '0.02',
      description: 'Generate polished PDFs, invoices, and reports from HTML. AI agents that deliver human-readable documents to end users — automatically.',
      useCase: 'An AI agent that generates an invoice after a sale. A weekly report assembled from live data. A contract formatted and ready to sign.',
      endpoint: '/generate',
      method: 'POST',
    },
    {
      name: 'Notification Relay',
      url: 'notify.chancelove.ai',
      price: '0.005',
      description: 'The last-mile delivery layer between AI agents and the humans who need to know. Email, webhook, SMS — from a single API call.',
      useCase: 'An AI agent that pings you when a deal closes. A Slack message when inventory is low. An email when the weekly report is ready.',
      endpoint: '/send',
      method: 'POST',
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
        <p className="font-body text-lg text-soft-gray mb-16 max-w-2xl leading-relaxed">
          Three x402-native microservices, payable in USDC on Base. Built for AI agents that operate autonomously — without human intervention, without subscriptions, without friction.
        </p>

        {/* Pricing bar */}
        <div className="flex flex-wrap items-center gap-8 mb-16 pb-8 border-b border-white/10">
          <div>
            <p className="font-body text-xs text-soft-gray tracking-widest uppercase mb-1">Total bundle cost</p>
            <p className="font-display text-3xl text-gold font-bold">0.03 USDC per full execution</p>
          </div>
          <div className="w-px h-10 bg-white/10 hidden md:block" />
          <div>
            <p className="font-body text-xs text-soft-gray tracking-widest uppercase mb-1">Network</p>
            <p className="font-body text-sm text-off-white">Base (Ethereum L2)</p>
          </div>
          <div className="w-px h-10 bg-white/10 hidden md:block" />
          <div>
            <p className="font-body text-xs text-soft-gray tracking-widest uppercase mb-1">Payment model</p>
            <p className="font-body text-sm text-off-white">Pay per use — no subscription, no account</p>
          </div>
          <div className="w-px h-10 bg-white/10 hidden md:block" />
          <div>
            <p className="font-body text-xs text-soft-gray tracking-widest uppercase mb-1">Discovery</p>
            <p className="font-body text-sm text-off-white">x402 manifest + Coinbase Bazaar</p>
          </div>
        </div>

        {/* Three service cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((svc) => (
            <div key={svc.name} className="border border-white/10 rounded-2xl p-8 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-200">
              {/* Service header */}
              <div className="mb-6">
                <p className="font-body text-xs text-baby-blue tracking-widest uppercase mb-2">{svc.url}</p>
                <h3 className="font-display text-xl font-bold text-off-white leading-tight">{svc.name}</h3>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="font-display text-3xl text-gold font-bold">{svc.price}</span>
                <span className="font-body text-sm text-soft-gray ml-2">USDC</span>
              </div>

              {/* Description */}
              <p className="font-body text-sm text-soft-gray leading-relaxed mb-6">{svc.description}</p>

              {/* Use case */}
              <div className="border-t border-white/5 pt-5 mb-6">
                <p className="font-body text-xs text-maroon font-semibold uppercase tracking-widest mb-3">Example use case</p>
                <p className="font-body text-xs text-soft-gray leading-relaxed italic">&ldquo;{svc.useCase}&rdquo;</p>
              </div>

              {/* Endpoint */}
              <div className="bg-black/40 rounded-xl p-4">
                <p className="font-body text-xs text-soft-gray/50 mb-2">Endpoint</p>
                <div className="flex items-center gap-3">
                  <span className="font-body text-xs bg-maroon/20 text-maroon px-2 py-1 rounded uppercase tracking-wider text-xs font-semibold">
                    {svc.method}
                  </span>
                  <p className="font-body text-xs text-baby-blue break-all">https://{svc.url}{svc.endpoint}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6">
                <a
                  href={`https://${svc.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs text-gold hover:text-gold/80 transition-colors tracking-wide border-b border-gold/20 hover:border-gold/50 pb-0.5 w-fit"
                >
                  View landing page →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="border border-white/10 rounded-2xl p-10 bg-white/[0.01] mb-16">
          <h3 className="font-display text-2xl text-off-white mb-8">How x402 payment works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="font-body text-xs text-maroon font-semibold uppercase tracking-widest mb-3">1. Request without payment</p>
              <p className="font-body text-sm text-soft-gray leading-relaxed">
                Your AI agent calls the endpoint. The service returns a 402 with a Payment header — including price, network, and a wallet address.
              </p>
            </div>
            <div>
              <p className="font-body text-xs text-maroon font-semibold uppercase tracking-widest mb-3">2. Agent pays in USDC</p>
              <p className="font-body text-sm text-soft-gray leading-relaxed">
                The AI agent sends the exact USDC amount to the specified wallet on Base. No account creation, no API keys, no friction.
              </p>
            </div>
            <div>
              <p className="font-body text-xs text-maroon font-semibold uppercase tracking-widest mb-3">3. Service executes</p>
              <p className="font-body text-sm text-soft-gray leading-relaxed">
                The service verifies the payment on-chain, executes the request, and returns the result. No middlemen. No subscriptions.
              </p>
            </div>
          </div>
        </div>

        {/* x402 manifest links */}
        <div className="flex flex-wrap gap-6 items-center justify-center">
          {services.map((svc) => (
            <a
              key={svc.name}
              href={`https://${svc.url}/.well-known/x402`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-soft-gray hover:text-baby-blue transition-colors tracking-wide"
            >
              {svc.name} x402 manifest →
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
