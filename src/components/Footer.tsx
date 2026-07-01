'use client';

export default function Footer() {
  return (
    <footer>
      {/* Wave ornament divider */}
      <div className="footer-divider">
        <div className="footer-wave">~ ✦ ~ ✦ ~ ✦ ~ ✦ ~ ✦ ~</div>
      </div>

      <p className="footer-message">We can&apos;t wait to celebrate with you!</p>
      <p className="footer-names">Veer &amp; Zara</p>

      <div className="footer-divider" style={{ paddingTop: 20 }}>
        <div className="footer-wave">~ ✦ ~ ✦ ~ ✦ ~ ✦ ~ ✦ ~</div>
      </div>

      <div className="footer-bar">
        <p>Veer &amp; Zara &nbsp;•&nbsp; June 30, 2026</p>
        <p style={{ marginTop: 6, fontSize: '0.7rem', opacity: 0.5 }}>
          Made with ♥ · A beautiful digital wedding invitation
        </p>
      </div>
    </footer>
  );
}
