'use client';

function FlourishIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 48 96"
      width="48"
      height="96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <defs>
        <linearGradient id="goldOrn" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BF953F" />
          <stop offset="25%" stopColor="#FCF6BA" />
          <stop offset="50%" stopColor="#B38728" />
          <stop offset="75%" stopColor="#FBF5B7" />
          <stop offset="100%" stopColor="#AA771C" />
        </linearGradient>
      </defs>
      
      {/* Vertical line segment */}
      <line x1="2" y1="0" x2="2" y2="96" stroke="url(#goldOrn)" strokeWidth="1.5" />
      
      {/* Outer leaf motif curving up and inward */}
      <path
        d="M 2 48 C 16 48, 26 38, 26 26 C 26 15, 12 15, 8 24 C 6 28, 9 32, 12 32 C 16 32, 18 26, 14 22"
        stroke="url(#goldOrn)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Outer leaf motif curving down and inward */}
      <path
        d="M 2 48 C 16 48, 26 58, 26 70 C 26 81, 12 81, 8 72 C 6 68, 9 64, 12 64 C 16 64, 18 70, 14 74"
        stroke="url(#goldOrn)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Central horizontal spear pointing inwards (right) */}
      <path d="M 2 48 H 32" stroke="url(#goldOrn)" strokeWidth="2" strokeLinecap="round" />
      <path d="M 32 44 L 44 48 L 32 52 Z" fill="url(#goldOrn)" />
      
      {/* Inner diamond accents */}
      <path d="M 12 48 L 16 44 L 20 48 L 16 52 Z" fill="url(#goldOrn)" />
    </svg>
  );
}

export default function Curtains() {
  return (
    <>
      <div className="curtain-left">
        <div className="curtain-fabric" />
        <div className="curtain-edge" />
        <div className="curtain-tassel">
          <div className="tassel-head" />
          <div className="tassel-rope" />
          <div className="tassel-fringe">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="tassel-strand"
                style={{ height: `${30 + Math.sin(i) * 10}px`, opacity: 0.7 + i * 0.06 }}
              />
            ))}
          </div>
        </div>
        <div className="curtain-ornament">
          <FlourishIcon />
        </div>
      </div>
      <div className="curtain-right">
        <div className="curtain-fabric" />
        <div className="curtain-edge" />
        <div className="curtain-tassel">
          <div className="tassel-head" />
          <div className="tassel-rope" />
          <div className="tassel-fringe">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="tassel-strand"
                style={{ height: `${30 + Math.sin(i) * 10}px`, opacity: 0.7 + i * 0.06 }}
              />
            ))}
          </div>
        </div>
        <div className="curtain-ornament">
          <FlourishIcon style={{ transform: 'scaleX(-1)' }} />
        </div>
      </div>
    </>
  );
}
