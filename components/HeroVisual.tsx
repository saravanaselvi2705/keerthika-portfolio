"use client"

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none flex justify-center items-center">
      {/* Background ambient glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-amber-500/10 blur-3xl rounded-full pointer-events-none" />

      {/* Main Showcase Card */}
      <div className="relative w-full rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur-xl p-6 shadow-2xl overflow-hidden">
        {/* Card Header: Window Controls + Availability */}
        <div className="flex items-center justify-between pb-5 border-b border-neutral-800/80">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            <span className="text-xs text-neutral-500 font-mono ml-2">selected-works.art</span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            Available for Projects
          </span>
        </div>

        {/* Dynamic Visual Content Stack */}
        <div className="mt-5 space-y-3">
          {/* Item 1 */}
          <div className="group flex items-center justify-between p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800/80 hover:border-orange-500/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center font-bold text-orange-400 text-sm">
                01
              </div>
              <div>
                <p className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors">
                  Packaging &amp; Dielines
                </p>
                <p className="text-xs text-neutral-400">Structural precision &amp; print finishes</p>
              </div>
            </div>
            <span className="text-xs font-mono text-neutral-500">Vector / CAD</span>
          </div>

          {/* Item 2 */}
          <div className="group flex items-center justify-between p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800/80 hover:border-orange-500/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-bold text-amber-400 text-sm">
                02
              </div>
              <div>
                <p className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                  Visual Identity Systems
                </p>
                <p className="text-xs text-neutral-400">Brand guidelines, logo craft &amp; typography</p>
              </div>
            </div>
            <span className="text-xs font-mono text-neutral-500">Branding</span>
          </div>

          {/* Item 3 */}
          <div className="group flex items-center justify-between p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800/80 hover:border-orange-500/40 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-neutral-300 text-sm">
                03
              </div>
              <div>
                <p className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors">
                  Fine Art Commissions
                </p>
                <p className="text-xs text-neutral-400">Classical intuition &amp; mixed media</p>
              </div>
            </div>
            <span className="text-xs font-mono text-neutral-500">Originals</span>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
          <span>Based in Kozhikode, Kerala</span>
          <span className="text-neutral-500">4+ Years Exp</span>
        </div>
      </div>
    </div>
  )
}
