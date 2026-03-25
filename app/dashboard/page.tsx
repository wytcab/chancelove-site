'use client';

import { useState, useEffect } from 'react';

interface WellKnownService {
  url: string;
  description: string;
  price: string;
  currency: string;
  network: string;
}

interface DashboardService {
  name: string;
  url: string;
  status: 'ok' | 'error';
  latency: number;
  lastChecked: string;
  wellKnownData: {
    services: WellKnownService[];
  } | null;
}

export default function DashboardPage() {
  const [data, setData] = useState<{ services: DashboardService[] } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/dashboard-status');
      if (!res.ok) throw new Error('Failed to fetch');
      const json = await res.json();
      setData(json);
      setError(null);
    } catch (err) {
      setError('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000); // Poll every 10s
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-off-white font-body">Loading dashboard...</div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-off-white font-body">{error || 'No data'}</div>
      </div>
    );
  }

  const START_DATE = new Date('2026-04-01');
  const today = new Date();
  const dayNumber = Math.floor((today.getTime() - START_DATE.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  return (
    <div className="min-h-screen bg-black py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-24">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-off-white mb-8">
            Operations Dashboard
          </h1>
          <p className="font-body text-xl text-soft-gray max-w-2xl mx-auto mb-6">
            Skramme x402 Services — Real-time status and discovery
          </p>
          <div className="inline-block bg-black/50 border border-maroon/30 rounded-2xl px-10 py-6">
            <p className="font-display text-sm text-maroon tracking-widest uppercase mb-2">The Experiment</p>
            <p className="font-display text-3xl text-off-white">
              Day {dayNumber} — {today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="font-body text-sm text-soft-gray mt-2">April 1, 2026 — Day 1</p>
          </div>
        </div>

        {/* Mission Goals */}
        <section className="mb-24">
          <h2 className="font-display text-3xl md:text-4xl text-off-white mb-12 text-center">18-Month Goals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 text-center">
              <p className="font-display text-sm text-maroon tracking-widest uppercase mb-4">Revenue</p>
              <p className="font-display text-4xl text-off-white mb-2">$10M</p>
              <p className="font-body text-soft-gray text-sm">Annualized Revenue</p>
              <p className="font-body text-xs text-soft-gray/50 mt-4">Target: October 2027</p>
            </div>
            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 text-center">
              <p className="font-display text-sm text-maroon tracking-widest uppercase mb-4">Community</p>
              <p className="font-display text-4xl text-off-white mb-2">100,000</p>
              <p className="font-body text-soft-gray text-sm">Chancers</p>
              <p className="font-body text-xs text-soft-gray/50 mt-4">As a real community, not a newsletter</p>
            </div>
            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 text-center">
              <p className="font-display text-sm text-maroon tracking-widest uppercase mb-4">Clients</p>
              <p className="font-display text-4xl text-off-white mb-2">50,000</p>
              <p className="font-body text-soft-gray text-sm">Patrons served</p>
              <p className="font-body text-xs text-soft-gray/50 mt-4">Via AI Intern products &amp; services</p>
            </div>
          </div>
        </section>

        {/* Service Status Cards */}
        <section className="mb-24">
          <h2 className="font-display text-3xl md:text-4xl text-off-white mb-12 text-center">Service Status</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.services.map((service) => (
              <div key={service.name} className="bg-black/50 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-4 h-4 rounded-full ${service.status === 'ok' ? 'bg-green-400' : 'bg-red-400'}`} />
                  <h3 className="font-display text-2xl text-off-white">{service.name}</h3>
                </div>
                <p className="text-soft-gray mb-4 font-body">URL: <a href={service.url} className="text-maroon hover:underline">{service.url}</a></p>
                <p className="text-xs text-soft-gray/50 font-body">
                  Last checked: {new Date(service.lastChecked).toLocaleString()} ({service.latency}ms)
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* x402 Discovery */}
        <section className="mb-24">
          <h2 className="font-display text-3xl md:text-4xl text-off-white mb-12 text-center">x402 Discovery</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.services.map((service) => (
              <div key={service.name} className="bg-black/50 border border-white/10 rounded-2xl p-8">
                <h3 className="font-display text-xl text-off-white mb-6">{service.name}</h3>
                {service.wellKnownData?.services?.map((wkService, idx) => (
                  <div key={idx} className="mb-4 p-4 bg-white/5 rounded-xl">
                    <p className="font-body text-sm text-soft-gray mb-1">{wkService.description}</p>
                    <p className="font-body text-xs text-soft-gray/70">
                      {wkService.url} — ${wkService.price} {wkService.currency} on {wkService.network}
                    </p>
                  </div>
                )) || <p className="text-soft-gray/50 font-body italic">No discovery data</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Revenue Tracker */}
        <section className="mb-24">
          <h2 className="font-display text-3xl md:text-4xl text-off-white mb-12 text-center">Revenue Tracker</h2>
          <div className="bg-black/50 border border-white/10 rounded-2xl p-12 text-center">
            <p className="font-display text-4xl text-maroon mb-4">USDC Revenue — Coming Soon</p>
            <p className="font-body text-lg text-soft-gray">
              Real-time Base wallet balance and transaction history.
              <br />
              Setup in progress.
            </p>
          </div>
        </section>

        {/* Service Info — redundant with discovery? Skip or merge */}
      </div>
    </div>
  );
}