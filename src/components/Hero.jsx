import { ArrowRight, CheckCircle2, Shield, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-200/70 blur-3xl" />
        <div className="absolute top-20 -right-20 h-[28rem] w-[28rem] rounded-full bg-cyan-200/60 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm">
              <Sparkles size={14} className="text-slate-900" /> New: AI-powered sales assistant
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Close more deals with a CRM your team will love
            </h1>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed">
              Zagosa brings your leads, workflows, and conversations together so revenue teams move faster and never drop the ball.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="https://app.zagosacrm.com/register" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-white font-medium shadow hover:bg-slate-800 transition">
                Start free trial
                <ArrowRight className="ml-2" size={18} />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-slate-800 hover:bg-slate-50 transition">
                See features
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-700">
              <div className="flex items-center gap-2"><CheckCircle2 className="text-slate-900" size={18}/> No credit card required</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-slate-900" size={18}/> Setup in minutes</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-slate-900" size={18}/> Cancel anytime</div>
              <div className="flex items-center gap-2"><Shield className="text-slate-900" size={18}/> SOC2 & GDPR ready</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 -z-10 bg-gradient-to-tr from-indigo-300/30 via-sky-300/30 to-cyan-200/30 rounded-3xl blur-2xl"/>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">
              <img src="/dashboard-hero.png" alt="Zagosa CRM dashboard" className="rounded-lg ring-1 ring-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
