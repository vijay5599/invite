'use client';
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicButtonProps {
  autoPlay?: boolean;
}

export default function MusicButton({ autoPlay = false }: MusicButtonProps) {
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const initAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(
        'https://archive.org/download/100ClassicalMusicMasterpieces/1698%20Pachelbel%20%2C%20Canon%20in%20D.mp3'
      );
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
    }
  };

  useEffect(() => {
    initAudio();
    const audio = audioRef.current;
    if (!audio) return;

    if (autoPlay) {
      audio.play().catch((err) => {
        console.log('Autoplay play error (normal browser restriction):', err);
      });
    }

    return () => {
      audio.pause();
    };
  }, [autoPlay]);

  const toggleMute = () => {
    initAudio();
    const audio = audioRef.current;
    if (!audio) return;

    // If audio is paused (e.g., autoplay blocked), play it
    if (audio.paused) {
      audio.play().catch(() => {});
    }

    const nextMutedState = !audio.muted;
    audio.muted = nextMutedState;
    setMuted(nextMutedState);
  };

  return (
    <button
      className={`music-btn ${!muted ? 'playing' : ''}`}
      onClick={toggleMute}
      aria-label={muted ? 'Unmute music' : 'Mute music'}
      id="music-toggle-btn"
      title={muted ? 'Play background music' : 'Mute music'}
    >
      {!muted ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </button>
  );
}
