import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("Thanks. The Innobeats team will review your request and respond with the next steps.");
  };

  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Request medical equipment information.</h1>
          <p>
            Share the product, category, or hospital project you are evaluating. The Innobeats team can follow up with
            documentation, consultation, and next-step coordination.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1000&q=82"
          alt="Clinician speaking with a patient in a hospital"
        />
      </section>

      <section className="section contact-section">
        <article className="contact-card">
          <p className="eyebrow">Product inquiries</p>
          <h2>Tell us what your team needs.</h2>
          <p>
            Use this form for pacemaker information, OT module planning, distributor conversations, service support, or
            hospital procurement questions.
          </p>
        </article>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Organization
            <input type="text" name="organization" placeholder="Hospital, clinic, or company" />
          </label>
          <label>
            Inquiry type
            <select name="inquiry">
              <option>Pacemaker product information</option>
              <option>OT module project planning</option>
              <option>Category catalog request</option>
              <option>Service and support</option>
            </select>
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about the product, project timeline, or documentation you need"
            ></textarea>
          </label>
          <button className="button primary" type="submit">
            Send Request
          </button>
          <p className="form-status" aria-live="polite">
            {status}
          </p>
        </form>
      </section>
    </main>
  );
}

export default Contact;
