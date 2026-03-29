'use client'

import { useEffect, useState } from 'react'

interface Service {
  name: string
  url: string
  status: 'ok' | 'error'
  latency: number
  lastChecked: string
  wellKnownData: {
    services: Array<{
      url: string
      description: string
      price: string
      currency: string
      network: string
    }>
  } | null
}

function getCountdown(target: Date) {
  const now = new Date()
  const diff = target.getTime() - now.getTime()
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0, done: true }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const secs = Math.floor((diff % (1000 * 60)) / 1000)
  return { days, hours, mins, secs, done: false }
}

function pad2(n: number) { return String(n).padStart(2, '0') }

// ─── FLIP CLOCK ───────────────────────────────────────────────────────────────
function FlipUnit({ value, label }: { value: number; label: string }) {
  const s = String(value).padStart(2, '0')
  return (
    <div className="flex flex-col items-center">
      <p className="font-body text-[10px] text-white/40 tracking-[0.2em] uppercase mb-2">{label}</p>
      <div
        className="relative w-20 h-24 rounded-xl overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #1e1e1e 0%, #141414 100%)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.5)',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {/* Inner number card */}
        <div
          className="absolute inset-x-2 inset-y-1 rounded-lg flex items-center justify-center"
          style={{
            background: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          <span
            style={{
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: '56px',
              fontWeight: '700',
              color: '#f5f5f5',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 30px rgba(255,255,255,0.05)',
            }}
          >
            {s}
          </span>
        </div>
        {/* Glossy top */}
        <div
          className="absolute inset-x-0 top-0 h-6 rounded-t-xl opacity-20 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 100%)' }}
        />
      </div>
    </div>
  )
}

function Separator() {
  return (
    <div className="flex flex-col justify-center gap-3 px-1" style={{ paddingTop: '22px' }}>
      <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.25)' }} />
      <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.25)' }} />
    </div>
  )
}

// ─── PROGRESS BAR ─────────────────────────────────────────────────────────────
interface Goal {
  label: string
  metric: string
  target: string
  current: number
  end: number
  color: string
  description: string
}

const goals: Goal[] = [
  {
    label: 'Charity',
    metric: '$500K',
    target: 'October 2027',
    current: 0,
    end: 500_000,
    color: 'gold',
    description: 'Grown in public, decision by decision.',
  },
  {
    label: 'Community',
    metric: '100,000',
    target: 'October 2027',
    current: 0,
    end: 100_000,
    color: 'baby-blue',
    description: 'As a real community, not a newsletter.',
  },
  {
    label: 'Clients',
    metric: '50,000',
    target: 'October 2027',
    current: 0,
    end: 50_000,
    color: 'baby-blue',
    description: 'By providing value, products and services.',
  },
]

function ProgressBar({ current, end, color }: { current: number; end: number; color: string }) {
  const pct = Math.min((current / end) * 100, 100)
  return (
    <div className="mt-4">
      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${pct}%`,
            background: color === 'gold'
              ? 'linear-gradient(to right, #93c5fd, #C9A84C)'
              : 'linear-gradient(to right, #93c5fd, #93c5fd)',
          }}
        />
      </div>
      <p className="font-body text-xs text-soft-gray/50 mt-1">
        {current.toLocaleString()} / {end.toLocaleString()}
      </p>
    </div>
  )
}

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
export default function Dashboard() {
  const [services, setServices] = useState<Service[]>([])
  const [tick, setTick] = useState(0)
  const END = new Date('2027-10-01T00:00:00Z')

  useEffect(() => {
    fetch('https://www.chancelove.ai/api/dashboard-status')
      .then(r => r.json())
      .then(d => setServices(d.services || []))
      .catch(() => {})
    const t = setInterval(() => setTick(t => tick + 1), 1000)
    return () => clearInterval(t)
  }, [])

  const cd = getCountdown(END)
  const now = new Date()

  return (
    <div className="min-h-screen bg-black py-20 px-8">
      <div className="max-w-6xl mx-auto">

        {/* hero */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-off-white mb-8">
            Operations Dashboard
          </h1>

          {/* Flip Countdown — The Experiment */}
          {!cd.done && (
            <div
              className="inline-block rounded-2xl px-12 py-8"
              style={{
                background: 'radial-gradient(ellipse at center top, rgba(30,20,20,0.7) 0%, rgba(10,8,8,0.98) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 0 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              <p className="font-body text-sm text-maroon tracking-[0.25em] uppercase mb-1">The Experiment</p>
              <p className="font-body text-[10px] text-white/25 tracking-[0.2em] uppercase mb-6">
                Countdown to $500K Donated — October 1, 2027
              </p>
              <div className="flex items-center justify-center gap-2">
                <FlipUnit value={cd.days} label="Days" />
                <Separator />
                <FlipUnit value={cd.hours} label="Hours" />
                <Separator />
                <FlipUnit value={cd.mins} label="Mins" />
                <Separator />
                <FlipUnit value={cd.secs} label="Secs" />
              </div>
            </div>
          )}
        </div>

        {/* 18-Month Goals */}
        <section className="mb-24">
          <h2 className="font-display text-3xl md:text-4xl text-off-white mb-12 text-center">18-Month Goals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {goals.map((goal) => (
              <div key={goal.label} className="bg-black/50 border border-white/10 rounded-2xl p-8 text-center">
                <p className="font-body text-sm text-maroon tracking-widest uppercase mb-4">{goal.label}</p>
                <p className="font-sans text-4xl text-baby-blue font-semibold mb-2">{goal.metric}</p>
                <p className="font-body text-soft-gray text-sm">
                  {goal.label === 'Charity' ? 'Donation' : goal.label === 'Community' ? 'Chancers' : 'Clients served'}
                </p>
                <p className="font-body text-xs text-gold mt-4">Target: {goal.target}</p>
                <ProgressBar current={goal.current} end={goal.end} color={goal.color} />
                <p className="font-body text-xs text-baby-blue mt-3">{goal.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stream Status */}
        <section className="mb-24">
          <h2 className="font-display text-3xl md:text-4xl text-off-white mb-4 text-center">Stream Status</h2>
          <p className="font-body text-lg text-soft-gray max-w-2xl mx-auto mb-12 text-center">
            Portfolio Companies — Real-time status and discovery
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.name} className="border border-white/10 rounded-2xl p-8 bg-black/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-lg text-off-white">{svc.name}</h3>
                  <span className={`inline-block w-3 h-3 rounded-full ${svc.status === 'ok' ? 'bg-green-400' : 'bg-red-400'}`} />
                </div>
                <p className="font-body text-xs text-soft-gray mb-4">{svc.url}</p>
                {svc.status === 'ok' && (
                  <p className="font-body text-xs text-soft-gray/60">Latency: {svc.latency}ms</p>
                )}
                {svc.status === 'error' && (
                  <p className="font-body text-xs text-red-400">Service unreachable</p>
                )}
                {svc.wellKnownData?.services?.[0] && (
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="font-body text-xs text-gold">
                      {svc.wellKnownData.services[0].price} {svc.wellKnownData.services[0].currency}/{svc.wellKnownData.services[0].network}
                    </p>
                  </div>
                )}
              </div>
            ))}
            <div className="border border-white/10 rounded-2xl p-8 bg-black/30 opacity-70">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg text-off-white">Receipt Aggregator</h3>
                <span className="font-body text-xs text-baby-blue border border-baby-blue/30 px-2.5 py-1 rounded-full uppercase tracking-wider">Coming Soon</span>
              </div>
              <p className="font-body text-xs text-soft-gray mb-4">https://receipts.chancelove.ai</p>
              <p className="font-body text-xs text-soft-gray/60">AI agent expense ledger — receipts, categorization, and reporting. Built for agent-native businesses.</p>
            </div>
          </div>
          <p className="font-body text-xs text-soft-gray/40 text-center mt-6">Auto-refreshes every 10 seconds</p>
        </section>

        <p className="text-center text-soft-gray/20 font-body text-sm">
          Last updated {now.toLocaleTimeString()}
        </p>
      </div>
    </div>
  )
}
