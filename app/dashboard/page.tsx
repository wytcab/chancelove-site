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

  return (
    <div className="min-h-screen bg-black py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-24">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-off-white mb-8">
            Operations Dashboard
          </h1>
          <p className="font-body text-xl text-soft-gray max-w-2xl mx-auto">
            Skramme x402 Services — Real-time status and discovery
          </p>
        </div>

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