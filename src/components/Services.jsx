import React from 'react';
import { CheckCircle, Users, TrendingUp, Shield, Calendar } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Revenue & Yield Management',
    desc: 'Dynamic pricing, channel optimization, and forecasting to increase RevPAR and occupancy.'
  },
  {
    icon: Users,
    title: 'Guest Experience Design',
    desc: 'End-to-end service journeys, SOPs, and training that lift satisfaction scores and reviews.'
  },
  {
    icon: Shield,
    title: 'Operational Audits & SOPs',
    desc: 'Standards, compliance, and back-of-house optimization for hotels and restaurants.'
  },
  {
    icon: Calendar,
    title: 'Pre-opening & Turnarounds',
    desc: 'From concept to launch, or revitalizing underperforming properties with measurable KPIs.'
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">Core Services</p>
            <h2 className="mt-2 text-3xl font-bold text-emerald-900 md:text-4xl">Operational Excellence for Hospitality</h2>
            <p className="mt-3 max-w-2xl text-emerald-700/80">
              Tailored solutions for independent hotels, boutique brands, and restaurant groups seeking scalable operations and better margins.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
            <CheckCircle className="h-4 w-4" /> 5+ Years Proven Impact
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div key={i} className="group rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-emerald-900">{s.title}</h3>
              <p className="mt-2 text-sm text-emerald-700/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
