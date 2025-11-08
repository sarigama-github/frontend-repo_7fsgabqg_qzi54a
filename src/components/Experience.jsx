import React from 'react';
import { Briefcase, Building2, Award, LineChart } from 'lucide-react';

const experiences = [
  {
    role: 'Operations Manager',
    company: 'Boutique Seaside Hotel',
    period: '2022 — Present',
    results: [
      'RevPAR up 18% within 12 months',
      'Guest satisfaction +24% (post-stay NPS)',
      'Labor cost optimized by 12% with SOP redesign'
    ]
  },
  {
    role: 'Restaurant General Manager',
    company: 'Urban Dining Group',
    period: '2020 — 2022',
    results: [
      'Turnaround of underperforming outlet in 6 months',
      'Table turns +1.2x on weekends through pacing & floor plan',
      'Food cost variance reduced from 7% to 2.5%'
    ]
  },
  {
    role: 'Front Office & Rooms Supervisor',
    company: 'City Business Hotel',
    period: '2018 — 2020',
    results: [
      'Streamlined check-in flow, AWT down by 35%',
      'Implemented upsell playbook, ADR +9%',
      'Launched cross-training for FO & HK teams'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-emerald-900/5 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-start justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-emerald-600">Track Record</p>
            <h2 className="mt-2 text-3xl font-bold text-emerald-900 md:text-4xl">Proven Impact in Hotels & Restaurants</h2>
            <p className="mt-3 max-w-2xl text-emerald-700/80">
              From front-of-house excellence to multi-department leadership, delivering measurable outcomes across revenue, service, and efficiency.
            </p>
          </div>
          <div className="hidden md:grid grid-cols-3 gap-4 text-center">
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <LineChart className="mx-auto h-5 w-5 text-emerald-600" />
              <p className="mt-1 text-sm text-emerald-700">RevPAR Growth</p>
              <p className="text-lg font-semibold text-emerald-900">+18%</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <Award className="mx-auto h-5 w-5 text-emerald-600" />
              <p className="mt-1 text-sm text-emerald-700">NPS Increase</p>
              <p className="text-lg font-semibold text-emerald-900">+24%</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <Building2 className="mx-auto h-5 w-5 text-emerald-600" />
              <p className="mt-1 text-sm text-emerald-700">Outlets Managed</p>
              <p className="text-lg font-semibold text-emerald-900">5+</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="grid grid-cols-1 items-start gap-4 rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm md:grid-cols-5">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Briefcase className="h-5 w-5" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-emerald-900">{exp.role}</h3>
                <p className="text-emerald-700/80">{exp.company}</p>
              </div>
              <ul className="md:col-span-3 list-disc space-y-2 pl-5 text-emerald-800/90">
                {exp.results.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
