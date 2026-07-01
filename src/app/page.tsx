'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Envelope from '@/components/Envelope';
import Curtains from '@/components/Curtains';
import HeroSection from '@/components/HeroSection';
import DateSection from '@/components/DateSection';
import PhotoCarousel from '@/components/PhotoCarousel';
import Countdown from '@/components/Countdown';
import Timeline from '@/components/Timeline';
import Venue from '@/components/Venue';
import DressCode from '@/components/DressCode';
import InfoSections from '@/components/InfoSections';
import RSVPForm from '@/components/RSVPForm';
import Footer from '@/components/Footer';
import MusicButton from '@/components/MusicButton';
import Confetti from '@/components/Confetti';
import { useFadeIn } from '@/hooks/useFadeIn';

// Dynamic import for scratch card to avoid SSR canvas issues
const ScratchCard = dynamic(() => import('@/components/ScratchCard'), { ssr: false });
const Particles = dynamic(() => import('@/components/Particles'), { ssr: false });

// Wedding date: June 30, 2026, 10:30 AM IST
const WEDDING_DATE = new Date('2026-06-30T10:30:00+05:30');

export default function HomePage() {
  const [opened, setOpened] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useFadeIn();

  const handleOpen = () => {
    setOpened(true);
    setTimeout(() => {
      setShowContent(true);
      document.body.classList.remove('no-scroll');
    }, 200);
  };

  useEffect(() => {
    // Prevent scroll on envelope screen
    if (!opened) {
      document.body.classList.add('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [opened]);

  return (
    <>
      {/* Envelope opening screen */}
      {!opened && <Envelope onOpen={handleOpen} />}

      {/* Music toggle */}
      {showContent && <MusicButton autoPlay />}

      {/* Ambient particles */}
      {showContent && <Particles />}

      {/* Celebration Confetti Burst */}
      {showContent && <Confetti />}

      {/* Curtain drapes on sides */}
      {showContent && <Curtains />}

      {/* Main invitation content */}
      <main className={`main-content ${showContent ? 'visible' : ''}`}>
        <HeroSection />

        <ScratchCard
          date="June 30, 2026"
          day="Monday"
          time="10:30 AM onwards"
        />

        <DateSection />

        <PhotoCarousel />

        <Countdown targetDate={WEDDING_DATE} />

        <Timeline />

        <Venue />

        <DressCode />

        <InfoSections />

        <RSVPForm />

        <Footer />
      </main>
    </>
  );
}
