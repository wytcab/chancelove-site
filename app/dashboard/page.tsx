'use client'

import { useEffect, useState, useRef } from 'react'

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

function pad(n: number) { return String(n).padStart(3, '0') }
function pad2(n: number) { return String(n).padStart(2, '0') }

// ─── FLIP CLOCK ───────────────────────────────────────────────────────────────
function FlipCard({ value, label }: { value: string; label: string }) {
  const [flipping, setFlipping] = useState(false)
  const prevRef = useRef(value)

  useEffect(() => {
    if (prevRef.current !== value) {
      setFlipping(true)
      const t = setTimeout(() => {
        setFlipping(false)
        prevRef.current = value
      }, 300)
      return () => clearTimeout(t)
    }
  }, [value])

  return (
    <div className="flex flex-col items-center">
      {/* Label */}
      <p className="font-body text-[10px] text-white/40 tracking-[0.2em] uppercase mb-2">{label}</p>

      {/* Card */}
      <div
        className="relative w-16 h-20 rounded-lg overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #2a1f08 0%, #1a1204 100%)',
          boxShadow: '0 6px 20px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,220,100,0.15), inset 0 -1px 0 rgba(0,0,0,0.6)',
          border: '1px solid rgba(201,168,76,0.25)',
        }}
      >
        {/* Top half (darker) */}
        <div
          className="absolute left-0 right-0 top-0 h-[calc(50%-1px)] rounded-t-lg overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #1f1708 0%, #1a1204 100%)' }}
        >
          <div
            className="flex items-center justify-center h-full"
            style={{
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: '52px',
              fontWeight: '700',
              color: '#C9A84C',
              lineHeight: 1,
              textShadow: '0 0 20px rgba(201,168,76,0.5), 0 2px 4px rgba(0,0,0,0.8)',
            }}
          >
            {value}
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-10"
          style={{
            height: '2px',
            background: 'rgba(0,0,0,0.7)',
            boxShadow: '0 1px 0 rgba(201,168,76,0.1)',
          }}
        />

        {/* Bottom half (lighter) */}
        <div
          className="absolute left-0 right-0 bottom-0 h-[calc(50%-1px)] rounded-b-lg overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #2a1f08 0%, #1f1806 100%)' }}
        >
          <div
            className="flex items-center justify-center h-full"
            style={{
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: '52px',
              fontWeight: '700',
              color: '#C9A84C',
              lineHeight: 1,
              textShadow: '0 0 20px rgba(201,168,76,0.5), 0 2px 4px rgba(0,0,0,0.8)',
            }}
          >
            {value}
          </div>
        </div>

        {/* Glossy overlay */}
        <div
          className="absolute inset-x-0 top-0 h-4 rounded-t-lg opacity-30"
          style={{ background: 'linear-gradient(180deg, rgba(255,220,120,0.15) 0%, transparent 100%)' }}
        />
      </div>
    </div>
  )
}

function FlipUnit({ value, label }: { value: number; label: string }) {
  const s = String(value).padStart(3, '0')
  return (
    <div className="flex gap-1.5 items-start">
      {[...s].map((char, i) => (
        <FlipCard key={i} value={char} label={i === 0 ? label : ''} />
      ))}
    </div>
  )
}

function Separator() {
  return (
    <div className="flex flex-col justify-center gap-3 px-2 pt-5">
      <div className="w-2 h-2 rounded-full bg-white/20" />
      <div className="w-2 h-2 rounded-full bg-white/20" />
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

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-off-white mb-8">
            Operations Dashboard
          </h1>

          {/* Day counter + flip countdown side by side */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* Day counter */}
            <div className="bg-black/50 border border-maroon/30 rounded-2xl px-8 py-6">
              <p className="font-body text-sm text-maroon tracking-widest uppercase mb-2">The Experiment</p>
              <p className="font-sans text-3xl text-off-white font-semibold">
                Today is Day -6 — March 25, 2026
              </p>
            </div>

            {/* Flip Clock — only show when not done */}
            {!cd.done && (
              <div
                className="rounded-2xl px-8 py-6"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(40,30,10,0.6) 0%, rgba(10,8,2,0.9) 100%)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  boxShadow: '0 0 60px rgba(201,168,76,0.05), 0 20px 60px rgba(0,0,0,0.8)',
                }}
              >
                <p className="font-body text-[10px] text-white/30 tracking-[0.25em] uppercase mb-4 text-center">
                  Countdown to $500K Donated
                </p>
                <div className="flex items-center gap-1">
                  <FlipUnit value={cd.days} label="Days" />
                  <Separator />
                  <FlipUnit value={cd.hours} label="Hours" />
                  <Separator />
                  <FlipUnit value={cd.mins} label="Mins" />
                  <Separator />
                  <FlipUnit value={cd.secs} label="Secs" />
                </div>
                <p className="font-body text-[10px] text-white/25 mt-3 text-center tracking-widest">
                  October 1, 2027
                </p>
              </div>
            )}
          </div>
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
                  {goal.label === 'Charity' ? 'Donation' : goal.label === 'Community' ? 'Chancers' : 'Patrons served'}
                </p>
                <p className="font-body text-xs text-gold mt-4">Target: {goal.target}</p>
                <ProgressBar current={goal.current} end={goal.end} color={goal.color} />
                <p className="font-body text-xs text-baby-blue mt-3">{goal.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mb-24">
          <h2 className="font-display text-3xl md:text-4xl text-off-white mb-4 text-center">Service Status</h2>
          <p className="font-body text-lg text-soft-gray max-w-2xl mx-auto mb-12 text-center">
            Skramme x402 Services — Real-time status and discovery
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
