'use client';
import { ChevronDown } from 'lucide-react';

function Divider({ heart = false }: { heart?: boolean }) {
  return (
    <div className="divider">
      <div className="divider-line" />
      {heart ? (
        <span className="divider-heart">♥</span>
      ) : (
        <div className="divider-diamond" />
      )}
      <div className="divider-line right" />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="page-wrapper" style={{ textAlign: 'center' }}>
        <Divider />

        <p className="hero-header">
          WE ARE HONORED TO WELCOME YOU<br />
          TO THE WEDDING CEREMONY OF..
        </p>

        <h1 className="hero-name" style={{ marginBottom: 0 }}>Veer</h1>
        <p className="hero-details">
          Son of Mr. &amp; Mrs. Khan<br />
          M.Tech, Phd<br />
          Software Engineer
        </p>

        <Divider />

        <h2 className="hero-name" style={{ marginBottom: 0 }}>Zara</h2>
        <p className="hero-details">
          Daughter of Mr. &amp; Mrs. Pathan<br />
          B.Tech, MBA<br />
          Advocate, High Court
        </p>

        <Divider heart />

        <p className="hero-request">Request the honour of your presence</p>

        <Divider />
      </div>

      <div className="scroll-indicator">
        <span>SCROLL</span>
        <ChevronDown size={16} className="scroll-chevron" />
      </div>
    </section>
  );
}
