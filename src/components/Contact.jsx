import React, { useState } from 'react';
import { Mail, Phone, Send, Linkedin } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent! I will get back to you shortly.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="bg-emerald-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-300">Get in Touch</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Let’s Elevate Your Property</h2>
          <p className="mt-3 max-w-2xl text-white/80">Share your goals—pre-opening, turnaround, or scaling operations—and I’ll propose a tailored approach.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input className="w-full rounded-md border border-white/10 bg-transparent px-4 py-3 outline-none placeholder:text-white/60 focus:border-emerald-300" placeholder="Full name" required />
              <input type="email" className="w-full rounded-md border border-white/10 bg-transparent px-4 py-3 outline-none placeholder:text-white/60 focus:border-emerald-300" placeholder="Email address" required />
            </div>
            <input className="mt-4 w-full rounded-md border border-white/10 bg-transparent px-4 py-3 outline-none placeholder:text-white/60 focus:border-emerald-300" placeholder="Company / Property" />
            <textarea className="mt-4 h-32 w-full rounded-md border border-white/10 bg-transparent px-4 py-3 outline-none placeholder:text-white/60 focus:border-emerald-300" placeholder="Your message" required />
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400">
              <Send className="h-5 w-5" /> Send Message
            </button>
            {status && <p className="mt-3 text-emerald-200">{status}</p>}
          </form>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-300" />
                <a href="mailto:contact@sradhawijaya.com" className="hover:underline">contact@sradhawijaya.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-300" />
                <a href="tel:+0000000000" className="hover:underline">+00 000 0000</a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-emerald-300" />
                <a href="#" className="hover:underline">LinkedIn Profile</a>
              </div>
            </div>
            <div className="mt-8 rounded-xl bg-emerald-950/50 p-4">
              <p className="text-sm text-emerald-200">Availability</p>
              <p className="text-white">Open for consulting and interim leadership engagements worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
