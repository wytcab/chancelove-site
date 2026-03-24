import { init as initEdge } from '@sentry/nextjs';

initEdge({
  dsn: 'https://7d0796eaade8184847c2488ef4291864@o4511101893935104.ingest.de.sentry.io/4511101896097872',
  environment: process.env.NODE_ENV,
  enabled: process.env.NODE_ENV === 'production',
});
