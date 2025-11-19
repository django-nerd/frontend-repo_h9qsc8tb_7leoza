export default function Testimonials() {
  const logos = ["/logo-1.svg", "/logo-2.svg", "/logo-3.svg", "/logo-4.svg", "/logo-5.svg"];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Chosen by fast-growing teams</h2>
            <p className="mt-3 text-slate-600">From startups to enterprises, Zagosa helps teams streamline sales and support.</p>
            <div className="mt-6 flex items-center gap-6 opacity-80">
              {logos.map((src, i) => (
                <img key={i} src={src} alt="logo" className="h-8" />
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <blockquote className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-slate-800">“We replaced 4 tools with Zagosa and sped up response times by 40%.”</p>
              <footer className="mt-4 text-sm text-slate-500">Head of Sales, Fintech</footer>
            </blockquote>
            <blockquote className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-slate-800">“The workflows are incredibly flexible. Our handoffs are finally smooth.”</p>
              <footer className="mt-4 text-sm text-slate-500">RevOps Lead, SaaS</footer>
            </blockquote>
            <blockquote className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">
              <p className="text-slate-800">“Our team adopted it instantly. The shared inbox with WhatsApp is a game changer.”</p>
              <footer className="mt-4 text-sm text-slate-500">Support Manager, E‑commerce</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
