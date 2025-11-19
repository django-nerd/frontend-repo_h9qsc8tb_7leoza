export default function Pricing() {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Start free, upgrade when your team is ready.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Starter", "Growth", "Scale"].map((name, i) => (
            <div key={i} className={`rounded-2xl border ${i===1?"border-slate-900":"border-slate-200"} bg-white p-6 shadow-sm relative` }>
              {i===1 && (<span className="absolute -top-3 right-6 rounded-full bg-slate-900 px-3 py-1 text-xs text-white border border-slate-900">Most popular</span>)}
              <h3 className="text-slate-900 font-semibold">{name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-bold text-slate-900">{i===0?"$0":i===1?"$29":"$79"}</span>
                <span className="text-slate-500">/user/mo</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>Unlimited contacts</li>
                <li>Shared inbox</li>
                <li>Automations</li>
                <li>Bookings</li>
                <li>Analytics</li>
              </ul>
              <a href="https://app.zagosacrm.com/register" className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-medium ${i===1?"bg-slate-900 text-white":"bg-slate-100 text-slate-900 hover:bg-slate-200"}`}>{i===0?"Get started":"Choose plan"}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
