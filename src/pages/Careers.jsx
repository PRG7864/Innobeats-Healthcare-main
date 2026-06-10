import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";

function Careers() {
  const [formStatus, setFormStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Clinical Engineer",
    experience: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Thank you for your application inquiry. The Innobeats HR team will review your details and contact you shortly.");
  };

  return (
    <main>
      <section className="page-hero">
        <ScrollReveal animation="fade-up" delay={50}>
          <p className="eyebrow text-brand-yellow">Careers</p>
          <h1>
            Shape the <span className="text-brand-green">Future</span> of Clinical <span className="text-brand-blue">Technology</span>.
          </h1>
          <p>
            Join a leading healthcare innovation company dedicated to deploying life-saving technologies, hospital infrastructure, and clinical rhythm systems across India.
          </p>
        </ScrollReveal>
        <ScrollReveal animation="scale-in" delay={150}>
          <img
            src="/assets/about-engineer-right.png"
            alt="Clinical specialist working with medical device interfaces"
            className="border-6 border-white/20 rounded-2xl shadow-premium"
          />
        </ScrollReveal>
      </section>

      <section className="section category-grid">
        <ScrollReveal as="aside" className="category-aside" animation="fade-up" delay={100}>
          <p className="eyebrow text-brand-yellow">Why Innobeats?</p>
          <h2>Professional Growth</h2>
          <p className="mt-4 leading-relaxed text-brand-navy/80">
            We value high-integrity professionals, biomedical engineers, and field experts who share our commitment to compliance, patient-centric quality, and clinical excellence.
          </p>

          <div className="mt-8 space-y-4">
            <div className="p-5 bg-white border border-brand-green/10 rounded-xl shadow-premium">
              <h4 className="font-bold text-brand-navy text-[15px] mb-1">Clinical Engineering</h4>
              <p className="text-[13px] text-brand-muted">Installing and calibrating high-complexity ventilation, monitoring, and modular systems.</p>
            </div>
            <div className="p-5 bg-white border border-brand-green/10 rounded-xl shadow-premium">
              <h4 className="font-bold text-brand-navy text-[15px] mb-1">Application Specialists</h4>
              <p className="text-[13px] text-brand-muted">Training clinicians, OT staffs, and surgeons on diagnostic imaging and electrophysiology platforms.</p>
            </div>
            <div className="p-5 bg-white border border-brand-green/10 rounded-xl shadow-premium">
              <h4 className="font-bold text-brand-navy text-[15px] mb-1">Field Support &amp; SLA Management</h4>
              <p className="text-[13px] text-brand-muted">Managing preventative maintenance schedules and immediate emergency clinical interventions.</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal as="div" className="bg-white border border-brand-green/10 rounded-2xl p-8 shadow-premium" animation="fade-up" delay={150}>
          <h2 className="mb-2">Application Inquiry</h2>
          <p className="text-brand-muted text-[14px] mb-6">Submit your details below to express interest in joining the Innobeats team.</p>
          
          {formStatus ? (
            <div className="p-6 bg-soft-green border border-brand-green/20 rounded-xl text-brand-green font-semibold text-[14px] leading-relaxed">
              {formStatus}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-brand-navy uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border border-brand-navy/15 rounded-lg p-3 text-[14px] focus:outline-none focus:border-brand-green"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-brand-navy uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border border-brand-navy/15 rounded-lg p-3 text-[14px] focus:outline-none focus:border-brand-green"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-bold text-brand-navy uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border border-brand-navy/15 rounded-lg p-3 text-[14px] focus:outline-none focus:border-brand-green"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="role" className="text-xs font-bold text-brand-navy uppercase tracking-wider">Preferred Field</label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="border border-brand-navy/15 rounded-lg p-3 text-[14px] bg-white focus:outline-none focus:border-brand-green"
                  >
                    <option value="Clinical Engineer">Clinical Engineering</option>
                    <option value="Application Specialist">Application Specialist</option>
                    <option value="Field Support Engineer">Field Support &amp; SLA Management</option>
                    <option value="Sales &amp; Business Development">Sales &amp; Business Development</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="experience" className="text-xs font-bold text-brand-navy uppercase tracking-wider">Years of Relevant Experience</label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 3"
                  className="border border-brand-navy/15 rounded-lg p-3 text-[14px] focus:outline-none focus:border-brand-green"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-bold text-brand-navy uppercase tracking-wider">Cover Note / Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Briefly describe your healthcare technology background..."
                  className="border border-brand-navy/15 rounded-lg p-3 text-[14px] focus:outline-none focus:border-brand-green"
                ></textarea>
              </div>

              <button type="submit" className="button primary w-full mt-2">
                Submit Application Inquiry
              </button>
            </form>
          )}
        </ScrollReveal>
      </section>
    </main>
  );
}

export default Careers;
