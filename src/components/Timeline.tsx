'use client';
import { Clock } from 'lucide-react';

const events = [
  {
    title: 'Guest Arrival',
    date: 'Jun 30, 2026, 10:00 AM',
    desc: 'We Warmly welcome you.. !',
  },
  {
    title: 'Wedding Ceremony',
    date: 'Jun 30, 2026, 10:30 AM',
    desc: 'Your gracious presence is requested ♥',
  },
  {
    title: 'Reception',
    date: 'Jul 2, 2026, 7:30 PM',
    desc: 'Your gracious presence is requested at the Reception at 7:30 PM onwards.',
  },
];

export default function Timeline() {
  return (
    <section className="info-section fade-in" id="timeline" style={{ paddingBottom: 20 }}>
      <div className="page-wrapper" style={{ textAlign: 'center' }}>
        <div className="section-icon" style={{ display: 'flex', justifyContent: 'center' }}>
          <Clock size={28} strokeWidth={1.5} />
        </div>
        <h2 className="section-title">Program Timeline</h2>
        <div className="divider">
          <div className="divider-line" />
          <span className="divider-heart">♥</span>
          <div className="divider-line right" />
        </div>

        <div className="timeline">
          {events.map((ev, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-event">{ev.title}</div>
              <div className="timeline-date">{ev.date}</div>
              <div className="timeline-desc">{ev.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
