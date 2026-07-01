'use client';
import { Bus, Building2, Gift } from 'lucide-react';

function InfoBlock({
  icon,
  title,
  children,
  id,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  id: string;
}) {
  return (
    <section className="info-section fade-in" id={id}>
      <div className="page-wrapper">
        <div className="section-icon" style={{ display: 'flex', justifyContent: 'center' }}>
          {icon}
        </div>
        <h2 className="section-title">{title}</h2>
        <div className="divider">
          <div className="divider-line" />
          <span className="divider-heart">♥</span>
          <div className="divider-line right" />
        </div>
        <p className="info-text">{children}</p>
      </div>
    </section>
  );
}

export default function InfoSections() {
  return (
    <>
      <InfoBlock icon={<Bus size={28} strokeWidth={1.5} />} title="Transportation" id="transportation">
        Shuttle service will be available from the city center to the venue.
        Pickup point: Central Station at 3:30 PM.
      </InfoBlock>

      <InfoBlock icon={<Building2 size={28} strokeWidth={1.5} />} title="Accommodation" id="accommodation">
        Special rates at The Taj Mahal Palace (5 min from venue).
        Use code <strong style={{ color: 'var(--gold)' }}>WEDDING2026</strong> when booking.
      </InfoBlock>

      <InfoBlock icon={<Gift size={28} strokeWidth={1.5} />} title="Gifts" id="gifts">
        Your love, blessings, and presence are the greatest gifts we could ever ask for.
      </InfoBlock>
    </>
  );
}
