import { CalendarCheck2, ChartNoAxesCombined, MessageSquare, Workflow } from "lucide-react";

const features = [
  {
    icon: <ChartNoAxesCombined className="text-cyan-300" size={22} />,
    title: "Pipeline analytics",
    desc: "Forecast revenue with real-time insights across every stage of your funnel.",
  },
  {
    icon: <Workflow className="text-cyan-300" size={22} />,
    title: "Automations",
    desc: "Design multi-step workflows to qualify, route, and follow up automatically.",
  },
  {
    icon: <MessageSquare className="text-cyan-300" size={22} />,
    title: "Omnichannel inbox",
    desc: "Email, SMS, and WhatsApp in one shared inbox so teams reply faster.",
  },
  {
    icon: <CalendarCheck2 className="text-cyan-300" size={22} />,
    title: "Meetings",
    desc: "Book more demos with smart scheduling that respects time zones and buffers.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Everything revenue teams need</h2>
          <p className="mt-3 text-slate-300">Modern tools that work beautifully together out of the box.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg hover:shadow-cyan-500/10 transition shadow-black/20">
              <div className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center">{f.icon}</div>
              <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
