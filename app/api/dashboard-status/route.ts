import { NextResponse } from 'next/server';

const SERVICES = [
  { name: 'Cron-as-a-Service', url: 'https://cron.chancelove.ai' },
  { name: 'Document Generation', url: 'https://api.chancelove.ai' },
  { name: 'Notification Relay', url: 'https://notify.chancelove.ai' },
] as const;

interface ServiceStatus {
  status: 'ok';
}

interface WellKnownData {
  services: Array<{
    url: string;
    description: string;
    price: string;
    currency: string;
    network: string;
  }>;
}

interface DashboardService {
  name: string;
  url: string;
  status: 'ok' | 'error';
  latency: number;
  lastChecked: string;
  wellKnownData: WellKnownData | null;
}

export async function GET() {
  const results: DashboardService[] = await Promise.all(
    SERVICES.map(async (service) => {
      const start = Date.now();
      try {
        const [statusRes, wellKnownRes] = await Promise.allSettled([
          fetch(`${service.url}/status`, {
            signal: AbortSignal.timeout(2000),
          }).then((res) => {
            if (!res.ok) throw new Error('Status fetch failed');
            return res.json() as Promise<ServiceStatus>;
          }),
          fetch(`${service.url}/.well-known/x402`, {
            signal: AbortSignal.timeout(2000),
          }).then((res) => {
            if (!res.ok) return null;
            return res.json() as Promise<WellKnownData>;
          }),
        ]);

        const status = statusRes.status === 'fulfilled' ? 'ok' : 'error';
        let wellKnownData: WellKnownData | null = null;
        if (wellKnownRes.status === 'fulfilled' && wellKnownRes.value !== null) {
          wellKnownData = wellKnownRes.value;
        }

        return {
          ...service,
          status,
          latency: Date.now() - start,
          lastChecked: new Date().toISOString(),
          wellKnownData,
        };
      } catch {
        return {
          ...service,
          status: 'error' as const,
          latency: Date.now() - start,
          lastChecked: new Date().toISOString(),
          wellKnownData: null,
        };
      }
    })
  );

  return NextResponse.json({ services: results });
}