import React from 'react';
import { Star, Briefcase, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-900 text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-emerald-500 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-teal-400 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur">
              <Star className="h-4 w-4 text-yellow-300" />
              Proven Operational Excellence in Hospitality
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Sradha Wijaya
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Hotel and Restaurant Operations Specialist with 5+ years driving revenue, elevating guest experience, and building high-performing teams.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-3 font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
              >
                Book a Consultation
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                <Briefcase className="h-5 w-5" />
                View Experience
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Based in Southeast Asia • Available Worldwide
              </div>
              <div className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-300" />
                Guest Satisfaction +20% Avg. YoY
              </div>
            </div>
          </div>
          <div className="relative mt-10 w-full max-w-md flex-1 md:mt-0">
            <div className="aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-white/10 ring-2 ring-white/20" />
                  <p className="text-xl font-semibold">Hospitality Leadership</p>
                  <p className="mt-1 text-white/80">Operations • Revenue • Service Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
