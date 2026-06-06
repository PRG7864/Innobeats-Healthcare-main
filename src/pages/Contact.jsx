import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("Thanks. The Innobeats team will review your request and respond with the next steps.");
  };

  return (
    <main>
      <section className="page-hero">
        <ScrollReveal animation="fade-up" delay={50}>
          <p className="eyebrow text-brand-yellow">Contact</p>
          <h1>
            Request Medical <span className="text-brand-green">Equipment Information</span> &amp; <span className="text-brand-blue">Consultation</span>.
          </h1>
          <p>
            Share the product, category, or hospital project you are evaluating. The Innobeats team can follow up with
            documentation, consultation, and next-step coordination.
          </p>
        </ScrollReveal>
        <ScrollReveal animation="scale-in" delay={150}>
          <img
            src="/assets/about-engineer-right.png"
            alt="Clinician speaking with a patient in a hospital"
            className="border-6 border-white/20 rounded-2xl shadow-premium"
          />
        </ScrollReveal>
      </section>

      <section className="section contact-section">
        <ScrollReveal as="article" className="contact-card bg-white border border-brand-blue/16 rounded-2xl p-8 shadow-card" animation="fade-up" delay={100}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-soft-green text-brand-green flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <strong className="text-brand-navy">Product inquiries</strong>
          </div>
          <h2>Tell us what your team needs.</h2>
          <p className="mt-4 text-brand-muted font-medium">
            Use this form for pacemaker information, OT module planning, distributor conversations, service support, or
            hospital procurement questions.
          </p>
        </ScrollReveal>

        <ScrollReveal as="form" className="contact-form bg-white border border-brand-blue/10 rounded-2xl p-8 shadow-card" animation="fade-up" delay={200} onSubmit={handleSubmit}>
          <label className="block mb-4 text-brand-navy font-semibold">
            Name
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="mt-1.5 block w-full px-4 py-3 bg-brand-wash border border-brand-blue/20 rounded-xl focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all duration-200"
            />
          </label>
          <label className="block mb-4 text-brand-navy font-semibold">
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="mt-1.5 block w-full px-4 py-3 bg-brand-wash border border-brand-blue/20 rounded-xl focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all duration-200"
            />
          </label>
          <label className="block mb-4 text-brand-navy font-semibold">
            Organization
            <input
              type="text"
              name="organization"
              placeholder="Hospital, clinic, or company"
              className="mt-1.5 block w-full px-4 py-3 bg-brand-wash border border-brand-blue/20 rounded-xl focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all duration-200"
            />
          </label>
          <label className="block mb-4 text-brand-navy font-semibold">
            Inquiry type
            <select
              name="inquiry"
              className="mt-1.5 block w-full px-4 py-3 bg-brand-wash border border-brand-blue/20 rounded-xl focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all duration-200"
            >
              <option>Pacemaker product information</option>
              <option>OT module project planning</option>
              <option>Category catalog request</option>
              <option>Service and support</option>
            </select>
          </label>
          <label className="block mb-6 text-brand-navy font-semibold">
            Message
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about the product, project timeline, or documentation you need"
              className="mt-1.5 block w-full px-4 py-3 bg-brand-wash border border-brand-blue/20 rounded-xl focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all duration-200 resize-y"
            ></textarea>
          </label>
          <button className="button primary w-full" type="submit">
            Send Request
          </button>
          {status && (
            <p className="form-status mt-4 text-center text-brand-green font-semibold" aria-live="polite">
              {status}
            </p>
          )}
        </ScrollReveal>
      </section>
    </main>
  );
}

export default Contact;
