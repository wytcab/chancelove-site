'use client';

import * as Sentry from '@sentry/nextjs';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ background: '#000', color: '#fff', fontFamily: 'system-ui', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', margin: 0 }}>
        <div style={{ textAlign: 'center', maxWidth: 480, padding: 32 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Something went wrong.</h1>
          <p style={{ color: '#9ca3af', marginBottom: 24 }}>An unexpected error occurred. The team has been notified.</p>
          <button
            onClick={reset}
            style={{
              background: '#b91c1c',
              color: '#fff',
              border: 'none',
              padding: '10px 24px',
              borderRadius: 8,
              cursor: 'pointer',
              fontSize: 14,
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
