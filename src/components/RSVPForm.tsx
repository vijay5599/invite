'use client';
import { useState } from 'react';
import { Mail, User, Users } from 'lucide-react';

export default function RSVPForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    attending: '',
    guests: '1',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="rsvp-section fade-in" id="rsvp">
      <div className="page-wrapper">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Mail size={28} strokeWidth={1.5} style={{ color: 'var(--gold)' }} />
        </div>
        <h2 className="section-title">Send a Message</h2>
        <div className="divider">
          <div className="divider-line" />
          <span className="divider-heart">♥</span>
          <div className="divider-line right" />
        </div>

        {submitted ? (
          <div className="success-message">
            <h3>Thank You! ♥</h3>
            <p>Your message has been received. We can&apos;t wait to celebrate with you!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                <User size={14} />
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-input"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">
                <Mail size={14} />
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="attending">
                <Users size={14} />
                Will you be attending?
              </label>
              <div className="form-select-wrapper">
                <select
                  id="attending"
                  name="attending"
                  className="form-select"
                  value={form.attending}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select...</option>
                  <option value="yes">Yes, I&apos;ll be there! 🎉</option>
                  <option value="no">Sorry, I can&apos;t make it</option>
                  <option value="maybe">Maybe — I&apos;ll confirm later</option>
                </select>
              </div>
            </div>

            {form.attending === 'yes' && (
              <div className="form-group">
                <label className="form-label" htmlFor="guests">
                  How many guests?
                </label>
                <input
                  id="guests"
                  name="guests"
                  type="number"
                  min={1}
                  max={10}
                  className="form-input"
                  value={form.guests}
                  onChange={handleChange}
                />
              </div>
            )}

            <div className="form-group">
              <label className="form-label" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Write your wishes..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              id="send-message-btn"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
