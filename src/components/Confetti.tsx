'use client';
import { useEffect, useRef } from 'react';

export default function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      shape: 'circle' | 'rect' | 'diamond';
      rotation: number;
      rotationSpeed: number;
      opacity: number;
      gravity: number;
      drag: number;
      decay: number;

      constructor(x: number, y: number, angle: number) {
        this.x = x;
        this.y = y;
        
        // Shoot upward and inward with velocity
        const speed = 12 + Math.random() * 14;
        const rad = (angle * Math.PI) / 180;
        this.vx = Math.cos(rad) * speed + (Math.random() - 0.5) * 3;
        this.vy = Math.sin(rad) * speed + (Math.random() - 0.5) * 3;
        
        this.size = 6 + Math.random() * 8;
        
        // Luxury wedding color palette
        const colors = [
          '#BF953F', // Gold
          '#FCF6BA', // Light Champagne Gold
          '#B38728', // Dark Gold
          '#D11A3E', // Crimson
          '#800020', // Burgundy
          '#FFC0CB', // Soft Rose Pink
          '#FDF6C7', // Champagne Cream
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        const shapes: ('circle' | 'rect' | 'diamond')[] = ['circle', 'rect', 'diamond'];
        this.shape = shapes[Math.floor(Math.random() * shapes.length)];
        
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 8;
        this.opacity = 1;
        this.gravity = 0.2 + Math.random() * 0.08;
        this.drag = 0.96 + Math.random() * 0.015;
        this.decay = 0.007 + Math.random() * 0.006;
      }

      update() {
        this.vx *= this.drag;
        this.vy *= this.drag;
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;
        this.opacity -= this.decay;
      }

      draw(c: CanvasRenderingContext2D) {
        c.save();
        c.globalAlpha = this.opacity;
        c.translate(this.x, this.y);
        c.rotate((this.rotation * Math.PI) / 180);
        c.fillStyle = this.color;

        c.beginPath();
        if (this.shape === 'circle') {
          c.arc(0, 0, this.size / 2, 0, Math.PI * 2);
          c.fill();
        } else if (this.shape === 'rect') {
          c.fillRect(-this.size / 2, -this.size / 4, this.size, this.size / 2);
        } else if (this.shape === 'diamond') {
          c.moveTo(0, -this.size / 2);
          c.lineTo(this.size / 2, 0);
          c.lineTo(0, this.size / 2);
          c.lineTo(-this.size / 2, 0);
          c.closePath();
          c.fill();
        }
        c.restore();
      }
    }

    const particles: Particle[] = [];

    // Left corner burst (angles from 280 to 320 degrees shoot up-right)
    for (let i = 0; i < 80; i++) {
      particles.push(new Particle(0, height, 280 + Math.random() * 40));
    }

    // Right corner burst (angles from 220 to 260 degrees shoot up-left)
    for (let i = 0; i < 80; i++) {
      particles.push(new Particle(width, height, 220 + Math.random() * 40));
    }

    const loop = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);

        if (p.opacity <= 0 || p.y > height + 20) {
          particles.splice(i, 1);
        }
      }

      if (particles.length > 0) {
        animationFrameId = requestAnimationFrame(loop);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    };

    loop();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 99,
      }}
    />
  );
}
