'use client'

export function CostillerySection() {
  return (
    <section className="py-20 px-8 bg-black border-t border-white/5">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-4">Flagship Product</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-off-white mb-5 leading-tight">
            Costillery
          </h2>
          <p className="font-body text-lg text-soft-gray max-w-2xl mx-auto leading-relaxed">
            Receipt intelligence for AI agents. Every AI API call costs something — Costillery captures it, enriches it, and makes it reportable.
          </p>
        </div>

        {/* Core features */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
            </div>
            <h3 className="font-display text-base text-off-white mb-2">Auto-capture receipts</h3>
            <p className="font-body text-xs text-soft-gray leading-relaxed">
              Every POST /v1/receipts call becomes a line item. x402 payments, API keys, MPP — all tracked automatically.
            </p>
          </div>
          <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            </div>
            <h3 className="font-display text-base text-off-white mb-2">Real-time dashboards</h3>
            <p className="font-body text-xs text-soft-gray leading-relaxed">
              See your AI spend across services. Weekly summaries, per-agent breakdowns, exportable reports.
            </p>
          </div>
          <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 className="font-display text-base text-off-white mb-2">Audit-proof records</h3>
            <p className="font-body text-xs text-soft-gray leading-relaxed">
              Every receipt includes payment metadata, timestamp, and service info. Built for agent-native businesses.
            </p>
          </div>
        </div>

        {/* How it works — tight */}
        <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.01] mb-10">
          <p className="font-body text-xs text-gold tracking-widest uppercase mb-6 text-center">How it works</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-soft-gray">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs bg-maroon/20 text-maroon px-2 py-1 rounded">POST</span>
              <span>AI agent calls your API</span>
            </div>
            <span className="text-white/20">→</span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs bg-gold/20 text-gold px-2 py-1 rounded">Costillery</span>
              <span>receipt captured</span>
            </div>
            <span className="text-white/20">→</span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs bg-baby-blue/20 text-baby-blue px-2 py-1 rounded">Dashboard</span>
              <span>visible in real time</span>
            </div>
          </div>
        </div>

        {/* SDKs + links */}
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <a
            href="https://costillery.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-semibold px-6 py-3 rounded-xl text-center"
            style={{
              background: 'linear-gradient(180deg, #dc2626 0%, #991b1b 60%, #7f1d1d 100%)',
              color: '#f5f0eb',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.3), 0 4px 12px rgba(139,26,26,0.5)',
              border: '1px solid rgba(127,29,29,0.6)',
            }}
          >
            costillery.com →
          </a>
          <a
            href="https://docs.costillery.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-soft-gray hover:text-baby-blue transition-colors px-4 py-3 rounded-xl"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            Documentation →
          </a>
          <a
            href="https://pypi.org/project/costillery/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-soft-gray hover:text-baby-blue transition-colors px-4 py-3 rounded-xl"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            pip install costillery
          </a>
        </div>

      </div>
    </section>
  )
}
