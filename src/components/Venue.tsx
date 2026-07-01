'use client';
import { MapPin } from 'lucide-react';

export default function Venue() {
  return (
    <section className="venue-section fade-in" id="venue">
      <div className="page-wrapper">
        <div className="section-icon" style={{ display: 'flex', justifyContent: 'center' }}>
          <MapPin size={28} strokeWidth={1.5} />
        </div>
        <h2 className="section-title">Venue</h2>
        <div className="divider">
          <div className="divider-line" />
          <span className="divider-heart">♥</span>
          <div className="divider-line right" />
        </div>

        <div className="venue-name">The Taj Mahal Palace</div>
        <div className="venue-address">Apollo Bandar, Colaba, Mumbai, Maharashtra 400001</div>

        {/* Palace SVG illustration */}
        <div className="venue-illustration">
          <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="250" width="600" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"></rect><path d="M350 250 V160 Q350 80 400 60 Q450 80 450 160 V250" stroke="currentColor" strokeWidth="1.5" fill="none"></path><circle cx="400" cy="55" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"></circle><rect x="150" y="180" width="200" height="70" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"></rect><path d="M200 180 V140 Q200 110 250 100 Q300 110 300 140 V180" stroke="currentColor" strokeWidth="1.5" fill="none"></path><circle cx="250" cy="96" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"></circle><rect x="450" y="180" width="200" height="70" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"></rect><path d="M500 180 V140 Q500 110 550 100 Q600 110 600 140 V180" stroke="currentColor" strokeWidth="1.5" fill="none"></path><circle cx="550" cy="96" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"></circle><rect x="130" y="150" width="20" height="100" stroke="currentColor" strokeWidth="1.5" fill="none"></rect><path d="M125 150 L140 120 L155 150" stroke="currentColor" strokeWidth="1.5" fill="none"></path><rect x="650" y="150" width="20" height="100" stroke="currentColor" strokeWidth="1.5" fill="none"></rect><path d="M645 150 L660 120 L675 150" stroke="currentColor" strokeWidth="1.5" fill="none"></path><rect x="375" y="180" width="20" height="30" rx="10" stroke="currentColor" strokeWidth="1" fill="none"></rect><rect x="405" y="180" width="20" height="30" rx="10" stroke="currentColor" strokeWidth="1" fill="none"></rect><path d="M180 250 V220 Q180 200 210 200 Q240 200 240 220 V250" stroke="currentColor" strokeWidth="1" fill="none"></path><path d="M270 250 V220 Q270 200 300 200 Q330 200 330 220 V250" stroke="currentColor" strokeWidth="1" fill="none"></path><path d="M470 250 V220 Q470 200 500 200 Q530 200 530 220 V250" stroke="currentColor" strokeWidth="1" fill="none"></path><path d="M560 250 V220 Q560 200 590 200 Q620 200 620 220 V250" stroke="currentColor" strokeWidth="1" fill="none"></path><path d="M375 250 V210 Q375 185 400 180 Q425 185 425 210 V250" stroke="currentColor" strokeWidth="1.5" fill="none"></path><circle cx="150" cy="265" r="1.5" fill="currentColor" opacity="0.4"></circle><circle cx="200" cy="265" r="1.5" fill="currentColor" opacity="0.4"></circle><circle cx="250" cy="265" r="1.5" fill="currentColor" opacity="0.4"></circle><circle cx="300" cy="265" r="1.5" fill="currentColor" opacity="0.4"></circle><circle cx="350" cy="265" r="1.5" fill="currentColor" opacity="0.4"></circle><circle cx="400" cy="265" r="1.5" fill="currentColor" opacity="0.4"></circle><circle cx="450" cy="265" r="1.5" fill="currentColor" opacity="0.4"></circle><circle cx="500" cy="265" r="1.5" fill="currentColor" opacity="0.4"></circle><circle cx="550" cy="265" r="1.5" fill="currentColor" opacity="0.4"></circle><circle cx="600" cy="265" r="1.5" fill="currentColor" opacity="0.4"></circle><circle cx="650" cy="265" r="1.5" fill="currentColor" opacity="0.4"></circle></svg>
        </div>

        <a
          href="https://maps.google.com/?q=The+Taj+Mahal+Palace+Mumbai"
          target="_blank"
          rel="noopener noreferrer"
          className="maps-btn"
          id="maps-btn"
        >
          <MapPin size={14} />
          View on Google Maps
        </a>
      </div>
    </section>
  );
}
