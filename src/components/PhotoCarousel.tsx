'use client';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    alt: 'Wedding bouquet',
  },
  {
    url: 'https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=800&q=80',
    alt: 'Wedding couple with balloons',
  },
  {
    url: 'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?w=800&q=80',
    alt: 'Wedding ceremony arch',
  },
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    alt: 'Wedding rings',
  },
];

export default function PhotoCarousel() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive(a => (a + 1) % SLIDES.length);
    }, 4000);
  };

  useEffect(() => {
    startAuto();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const go = (idx: number) => {
    setActive((idx + SLIDES.length) % SLIDES.length);
    startAuto();
  };

  return (
    <section className="carousel-section fade-in" id="gallery">
      <div className="divider">
        <div className="divider-line" />
        <span className="divider-heart">♥</span>
        <div className="divider-line right" />
      </div>
      <div className="carousel-wrapper">
        {SLIDES.map((slide, i) => (
          <div key={i} className={`carousel-slide ${i === active ? 'active' : ''}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slide.url} alt={slide.alt} loading="lazy" />
          </div>
        ))}
        <button className="carousel-btn prev" onClick={() => go(active - 1)} aria-label="Previous">
          <ChevronLeft size={16} />
        </button>
        <button className="carousel-btn next" onClick={() => go(active + 1)} aria-label="Next">
          <ChevronRight size={16} />
        </button>
        <div className="carousel-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === active ? 'active' : ''}`}
              onClick={() => go(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
