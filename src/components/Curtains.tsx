'use client';

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
        <div className="curtain-ornament">❧</div>
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
        <div className="curtain-ornament">❦</div>
      </div>
    </>
  );
}
