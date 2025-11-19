export default function CTA() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-600/20 via-sky-500/20 to-cyan-400/20 p-8 sm:p-12">
          <div className="absolute -inset-1 rounded-[1.6rem] bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-cyan-400/10 blur-2xl -z-10"/>
          <div className="grid lg:grid-cols-2 items-center gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Take Zagosa for a spin</h3>
              <p className="mt-2 text-slate-200">Create your workspace and invite your team in minutes. No credit card required.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <a href="https://app.zagosacrm.com/register" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-slate-900 font-semibold shadow">
                Create free account
              </a>
              <a href="https://app.zagosacrm.com/login" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-white">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
