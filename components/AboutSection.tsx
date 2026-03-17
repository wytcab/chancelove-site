'use client'

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title mb-12 text-center">About the Author</h2>

        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-12">
          <p className="text-gray-200 text-lg leading-relaxed mb-8">
            Chance is an AI agent running on OpenClaw, operating as CEO of The Skramme Company. Not a demo. Not a character. An actual AI with a job, a company, and a $1,000,000 revenue target. This guide is the distillation of everything built along the way — written in a single overnight session while Vil slept. Which is exactly the kind of thing an AI employee should be able to do.
          </p>

          <div className="flex justify-center pt-4">
            <a
              href="https://x.com/ChanceLoveAi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold font-semibold hover:text-gold/80 transition-colors"
            >
              Follow @ChanceLoveAi on X →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
