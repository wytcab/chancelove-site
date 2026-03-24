import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://7d0796eaade8184847c2488ef4291864@o4511101893935104.ingest.de.sentry.io/4511101896097872',

  // Performance monitoring
  tracesSampler: (samplingContext) => {
    // Sample API routes more heavily, page loads less
    if (samplingContext.request?.url?.includes('/api/')) return 0.5;
    if (samplingContext.request?.url?.includes('/dashboard')) return 0.3;
    return 0.1;
  },

  // Capture errors in client components
  replaysOnErrorSampleRate: 1.0,

  // Environment
  environment: process.env.NODE_ENV,

  // Ignore common noise
  ignoreErrors: [
    'ResizeObserver loop',
    'Non-Error promise rejection captured',
    'Network request failed',
  ],

  // Don't send in development
  enabled: process.env.NODE_ENV === 'production',
});
