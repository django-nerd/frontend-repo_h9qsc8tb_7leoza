import { CalendarCheck2, BarChart3, MessageSquare, Workflow, LockKeyhole, Users, Zap, Bot } from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="text-slate-900" size={22} />,
    title: "Pipeline analytics",
    desc: "Forecast revenue with real-time insights across every stage of your funnel.",
  },
  {
    icon: <Workflow className="text-slate-900" size={22} />,
    title: "Automations",
    desc: "Design multi-step workflows to qualify, route, and follow up automatically.",
  },
  {
    icon: <MessageSquare className="text-slate-900" size={22} />,
    title: "Omnichannel inbox",
    desc: "Email, SMS, and WhatsApp in one shared inbox so teams reply faster.",
  },
  {
    icon: <CalendarCheck2 className="text-slate-900" size={22} />,
    title: "Meetings",
    desc: "Book more demos with smart scheduling that respects time zones and buffers.",
  },
  {
    icon: <Users className="text-slate-900" size={22} />,
    title: "Contact management",
    desc: "Unified profiles, custom fields, segments, and activity timelines.",
  },
  {
    icon: <Zap className="text-slate-900" size={22} />,
    title: "Sequences",
    desc: "Multi-touch email and SMS sequences with rules and goals.",
  },
  {
    icon: <Bot className="text-slate-900" size={22} />,
    title: "AI assist",
    desc: "Auto-draft replies, summarize threads, and suggest next best actions.",
  },
  {
    icon: <LockKeyhole className="text-slate-900" size={22} />,
    title: "Enterprise security",
    desc: "SSO/SAML, audit logs, roles & permissions, and field-level controls.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Everything revenue teams need</h2>
          <p className="mt-3 text-slate-600">Modern tools that work beautifully together out of the box.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center">{f.icon}</div>
              <h3 className="mt-4 text-slate-900 font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
