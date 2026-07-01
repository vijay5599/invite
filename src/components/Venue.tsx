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
          <svg viewBox="0 0 300 120" width="260" height="100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main dome */}
            <ellipse cx="150" cy="45" rx="22" ry="28" stroke="#c9a84c" strokeWidth="1" fill="none" />
            <line x1="150" y1="17" x2="150" y2="10" stroke="#c9a84c" strokeWidth="1" />
            <circle cx="150" cy="8" r="3" fill="#c9a84c" opacity="0.6" />
            {/* Side domes */}
            <ellipse cx="100" cy="60" rx="14" ry="18" stroke="#c9a84c" strokeWidth="0.8" fill="none" opacity="0.7" />
            <ellipse cx="200" cy="60" rx="14" ry="18" stroke="#c9a84c" strokeWidth="0.8" fill="none" opacity="0.7" />
            {/* Small domes */}
            <ellipse cx="65" cy="72" rx="9" ry="12" stroke="#c9a84c" strokeWidth="0.6" fill="none" opacity="0.5" />
            <ellipse cx="235" cy="72" rx="9" ry="12" stroke="#c9a84c" strokeWidth="0.6" fill="none" opacity="0.5" />
            {/* Base walls */}
            <rect x="30" y="73" width="240" height="30" stroke="#c9a84c" strokeWidth="0.8" fill="none" opacity="0.5" />
            {/* Arches */}
            {[50, 80, 110, 140, 160, 190, 220].map((x, i) => (
              <path key={i} d={`M${x} 103 Q${x+10} 88 ${x+20} 103`} stroke="#c9a84c" strokeWidth="0.6" fill="none" opacity="0.5" />
            ))}
            {/* Center arch */}
            <path d="M128 103 Q150 78 172 103" stroke="#c9a84c" strokeWidth="1" fill="none" opacity="0.8" />
            {/* Base */}
            <line x1="20" y1="103" x2="280" y2="103" stroke="#c9a84c" strokeWidth="0.8" opacity="0.4" />
          </svg>
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
