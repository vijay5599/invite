'use client';
import { useEffect, useRef, useState } from 'react';

interface ScratchCardProps {
  date: string;
  day: string;
  time: string;
}

export default function ScratchCard({ date, day, time }: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScratching, setIsScratching] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const scratched = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const initCanvas = () => {
      canvas.width = canvas.offsetWidth || 300;
      canvas.height = canvas.offsetHeight || 150;

      // Fill with gradient scratch overlay
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, '#3a2a0a');
      grad.addColorStop(0.5, '#5a4010');
      grad.addColorStop(1, '#3a2a0a');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add text hint on overlay
      ctx.fillStyle = 'rgba(201, 168, 76, 0.85)';
      ctx.font = 'italic 16px "EB Garamond", serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('✦ Scratch to Reveal ✦', canvas.width / 2, canvas.height / 2);
    };

    // Ensure layout is settled
    const handle = requestAnimationFrame(initCanvas);
    window.addEventListener('resize', initCanvas);

    return () => {
      cancelAnimationFrame(handle);
      window.removeEventListener('resize', initCanvas);
    };
  }, []);

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || revealed) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const cx = clientX - rect.left;
    const cy = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(cx, cy, 24, 0, Math.PI * 2);
    ctx.fill();

    scratched.current += 1;
    if (scratched.current > 80) {
      setRevealed(true);
      setTimeout(() => {
        if (canvas) canvas.style.opacity = '0';
      }, 300);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isScratching) return;
    scratch(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isScratching) return;
    if (e.touches.length > 0) {
      scratch(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  return (
    <div className="scratch-section fade-in" id="scratch">
      <p className="scratch-instruction">✦ Scratch to reveal your special invite ✦</p>
      <div className="scratch-card-wrapper">
        {/* Content underneath */}
        <div className="scratch-card-content">
          <div className="surprise-label">You&apos;re Invited!</div>
          <div className="surprise-date">{date}</div>
          <div className="surprise-day">{day}</div>
          <div className="surprise-day" style={{ fontSize: '0.85rem', opacity: 0.7 }}>{time}</div>
        </div>
        {/* Canvas overlay */}
        <canvas
          ref={canvasRef}
          className="scratch-canvas"
          style={{ 
            transition: 'opacity 0.5s ease',
            pointerEvents: revealed ? 'none' : 'auto'
          }}
          onMouseDown={() => setIsScratching(true)}
          onMouseUp={() => setIsScratching(false)}
          onMouseLeave={() => setIsScratching(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsScratching(true)}
          onTouchEnd={() => setIsScratching(false)}
          onTouchMove={handleTouchMove}
        />
      </div>
    </div>
  );
}
