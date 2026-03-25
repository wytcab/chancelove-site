import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://7d0796eaade8184847c2488ef4291864@o4511101893935104.ingest.de.sentry.io/4511101896097872',
  tracesSampler: (samplingContext) => {
    if (samplingContext.request?.url?.includes('/api/')) return 1.0;
    return 0.2;
  },
  environment: process.env.NODE_ENV,
  ignoreErrors: [
    'ResizeObserver loop',
    'Non-Error promise rejection captured',
  ],
  enabled: process.env.NODE_ENV === 'production',
});

export async function register() {
  // Sentry SDK v8 — init happens above via Sentry.init()
  // This function is required by Next.js instrumentation API
}
