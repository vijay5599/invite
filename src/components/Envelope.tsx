'use client';
import { useState } from 'react';

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(onOpen, 1100);
  };

  return (
    <div
      className={`envelope-wrapper ${opening ? 'opening' : ''}`}
      onClick={handleOpen}
    >
      <div className="envelope">
        <div className="envelope-body">
          <div className="envelope-line" />

          {/* Top decorative curves */}
          <svg
            style={{ position: 'absolute', top: 0, left: 0, right: 0, width: '100%', height: '180px', opacity: 0.25 }}
            viewBox="0 0 700 200"
            fill="none"
          >
            <path d="M340 0 Q350 60 340 80 Q330 60 340 0Z" stroke="#c9a84c" strokeWidth="1" fill="none" />
            <path d="M355 0 Q365 60 355 80 Q345 60 355 0Z" stroke="#c9a84c" strokeWidth="1" fill="none" />
            <path d="M350 70 Q380 120 350 160" stroke="#c9a84c" strokeWidth="0.5" fill="none" />
            <path d="M350 70 Q320 120 350 160" stroke="#c9a84c" strokeWidth="0.5" fill="none" />
          </svg>

          {/* Bottom decorative curves */}
          <svg
            style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', height: '180px', opacity: 0.25, transform: 'scaleY(-1)' }}
            viewBox="0 0 700 200"
            fill="none"
          >
            <path d="M340 0 Q350 60 340 80 Q330 60 340 0Z" stroke="#c9a84c" strokeWidth="1" fill="none" />
            <path d="M355 0 Q365 60 355 80 Q345 60 355 0Z" stroke="#c9a84c" strokeWidth="1" fill="none" />
          </svg>

          {/* Seal */}
          <div className="envelope-seal">
            <div className="envelope-pulse" />
            <span className="seal-letter">Z</span>
            <span className="seal-text">TAP TO OPEN</span>
          </div>
        </div>
      </div>
    </div>
  );
}
