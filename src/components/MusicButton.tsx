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
    if (typeof window !== 'undefined') {
      const win = window as any;
      if (!win.__audio_instance__) {
        win.__audio_instance__ = new Audio('/track.mp3');
        win.__audio_instance__.loop = true;
        win.__audio_instance__.volume = 0.4;
      }
      audioRef.current = win.__audio_instance__;
    }
  };

  const userMutedRef = useRef(muted);

  useEffect(() => {
    userMutedRef.current = muted;
  }, [muted]);

  useEffect(() => {
    initAudio();
    const audio = audioRef.current;
    if (!audio) return;

    if (autoPlay) {
      audio.play().catch((err) => {
        console.log('Autoplay play error (normal browser restriction):', err);
      });
    }

    const handleVisibilityChange = () => {
      if (!audio) return;
      if (document.hidden) {
        audio.muted = true;
      } else {
        audio.muted = userMutedRef.current;
      }
    };

    const handleUnload = () => {
      if (audio) {
        audio.pause();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleUnload);

    return () => {
      if (audio) {
        audio.pause();
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, [autoPlay]);

  const toggleMute = () => {
    initAudio();
    const audio = audioRef.current;
    if (!audio) return;

    // If audio is paused (e.g., autoplay blocked), play it
    if (audio.paused) {
      audio.play().catch(() => { });
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
