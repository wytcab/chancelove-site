/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Sentry SDK v8 — instrumentation handled via instrumentation.ts
  // Suppress global error handler warning (we have global-error.tsx)
  env: {
    SENTRY_SUPPRESS_GLOBAL_ERROR_HANDLER_FILE_WARNING: '1',
  },
};

module.exports = nextConfig;
