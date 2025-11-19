export default function CTA() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm">
          <div className="grid lg:grid-cols-2 items-center gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Take Zagosa for a spin</h3>
              <p className="mt-2 text-slate-700">Create your workspace and invite your team in minutes. No credit card required.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <a href="https://app.zagosacrm.com/register" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white font-semibold shadow hover:bg-slate-800">
                Create free account
              </a>
              <a href="https://app.zagosacrm.com/login" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-slate-900 hover:bg-slate-50">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
