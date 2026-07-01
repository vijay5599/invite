'use client';
import { Calendar } from 'lucide-react';

export default function DateSection() {
  return (
    <section className="date-section fade-in" id="date">
      <div className="page-wrapper" style={{ textAlign: 'center' }}>
        <div className="section-icon" style={{ display: 'flex', justifyContent: 'center' }}>
          <Calendar size={28} strokeWidth={1.5} />
        </div>
        <p className="date-tagline">Save the Date</p>

        <div className="date-card">
          <div className="date-badge">WEDDING CEREMONY</div>
          <div className="date-main">June 30, 2026</div>
          <div className="date-day">Monday</div>
          <div className="date-time">10:30 AM onwards</div>
        </div>

        <div className="date-card" style={{ marginTop: 12 }}>
          <div className="date-badge">RECEPTION</div>
          <div className="date-main">July 2, 2026</div>
          <div className="date-day">Wednesday</div>
          <div className="date-time">7:30 PM onwards</div>
        </div>
      </div>
    </section>
  );
}
