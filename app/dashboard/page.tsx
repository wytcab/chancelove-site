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

function pad(n: number) { return String(n).padStart(2, '0') }

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
    label: 'Revenue',
    metric: '$10M',
    target: 'October 2027',
    current: 78,
    end: 10_000_000,
    color: 'gold',
    description: 'By providing value, products and services.',
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

export default function Dashboard() {
  const [services, setServices] = useState<Service[]>([])
  const [tick, setTick] = useState(0)
  const END = new Date('2027-10-01T00:00:00Z')
  const cd = getCountdown(END)

  useEffect(() => {
    fetch('https://www.chancelove.ai/api/dashboard-status')
      .then(r => r.json())
      .then(d => setServices(d.services || []))
      .catch(() => {})
    const t = setInterval(() => setTick(t => tick + 1), 10000)
    return () => clearInterval(t)
  }, [])

  const now = new Date()

  return (
    <div className="min-h-screen bg-black py-20 px-8">
      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-off-white mb-8">
            Operations Dashboard
          </h1>
          <p className="font-body text-xl text-soft-gray max-w-2xl mx-auto mb-8">
            Skramme x402 Services — Real-time status and discovery
          </p>

          {/* Day counter */}
          <div className="inline-block bg-black/50 border border-maroon/30 rounded-2xl px-10 py-6 mb-8">
            <p className="font-body text-sm text-maroon tracking-widest uppercase mb-2">The Experiment</p>
            <p className="font-sans text-3xl text-baby-blue font-semibold">
              Today is Day -6 — March 25, 2026
            </p>
          </div>

          {/* 18-Month Countdown */}
          {!cd.done && (
            <div className="inline-block ml-6 bg-black/30 border border-white/10 rounded-2xl px-8 py-6">
              <p className="font-body text-xs text-soft-gray tracking-widest uppercase mb-3">Countdown to $10M ARR</p>
              <div className="flex gap-6 justify-center">
                {[
                  { v: cd.days, l: 'Days' },
                  { v: cd.hours, l: 'Hours' },
                  { v: cd.mins, l: 'Mins' },
                  { v: cd.secs, l: 'Secs' },
                ].map(({ v, l }) => (
                  <div key={l} className="text-center">
                    <p className="font-sans text-3xl text-baby-blue font-semibold">{pad(v)}</p>
                    <p className="font-body text-xs text-soft-gray">{l}</p>
                  </div>
                ))}
              </div>
              <p className="font-body text-xs text-baby-blue mt-3">October 1, 2027</p>
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
                  {goal.label === 'Revenue' ? 'Annualized Revenue' : goal.label === 'Community' ? 'Chancers' : 'Patrons served'}
                </p>
                <p className="font-body text-xs text-baby-blue mt-4">Target: {goal.target}</p>
                <ProgressBar current={goal.current} end={goal.end} color={goal.color} />
                <p className="font-body text-xs text-baby-blue mt-3">{goal.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mb-24">
          <h2 className="font-display text-3xl md:text-4xl text-off-white mb-12 text-center">Service Status</h2>
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
                    <p className="font-body text-xs text-soft-gray/60">
                      {svc.wellKnownData.services[0].price} {svc.wellKnownData.services[0].currency}/{svc.wellKnownData.services[0].network}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-soft-gray/40 text-center mt-6">Auto-refreshes every 10 seconds</p>
        </section>

        <p className="text-center text-soft-gray/20 font-body text-sm">
          Last updated {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  )
}
