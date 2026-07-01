'use client';
import { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: Date;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    };

    calc();
    const interval = setInterval(calc, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const pad = (n: number) => String(n).padStart(2, '0');

  const boxes = [
    { value: pad(timeLeft.days), label: 'DAYS' },
    { value: pad(timeLeft.hours), label: 'HOURS' },
    { value: pad(timeLeft.minutes), label: 'MINUTES' },
    { value: pad(timeLeft.seconds), label: 'SECONDS' },
  ];

  return (
    <section className="countdown-section fade-in" id="countdown">
      <p className="section-title">Counting Down to Forever</p>
      <div className="divider">
        <div className="divider-line" />
        <span className="divider-heart">♥</span>
        <div className="divider-line right" />
      </div>
      <div className="countdown-grid">
        {boxes.map(({ value, label }) => (
          <div key={label} className="countdown-box">
            <div className="countdown-num">{value}</div>
            <div className="countdown-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
