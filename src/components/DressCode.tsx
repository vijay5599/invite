'use client';
import { Shirt } from 'lucide-react';

export default function DressCode() {
  return (
    <section className="dresscode-section fade-in" id="dress-code">
      <div className="page-wrapper">
        <div className="section-icon" style={{ display: 'flex', justifyContent: 'center' }}>
          <Shirt size={28} strokeWidth={1.5} />
        </div>
        <h2 className="section-title">Dress Code</h2>
        <div className="divider">
          <div className="divider-line" />
          <span className="divider-heart">♥</span>
          <div className="divider-line right" />
        </div>
        <div className="dresscode-grid">
          <div className="dresscode-card">
            <div className="dresscode-title">Women</div>
            <div className="dresscode-desc">Elegant formal attire in pastel or jewel tones</div>
          </div>
          <div className="dresscode-card">
            <div className="dresscode-title">Men</div>
            <div className="dresscode-desc">Suit or traditional formal wear</div>
          </div>
        </div>
      </div>
    </section>
  );
}
