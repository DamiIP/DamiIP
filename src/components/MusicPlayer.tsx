import React, { useEffect, useRef, useState } from 'react';

// Set the authorized audio file's relative URL when it is supplied.
const backgroundMusicSource = '';

export const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>('开启音乐');

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !backgroundMusicSource) return;

    audio.src = backgroundMusicSource;
    audio.volume = 0.15;

    const handlePause = () => {
      setIsPlaying(false);
      setButtonText('开启音乐');
    };

    const handleError = () => {
      audio.pause();
      setIsPlaying(false);
      setButtonText('音乐暂时无法播放');
    };

    const handleVideoPlay = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target && target.tagName === 'VIDEO') {
        audio.pause();
      }
    };

    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);
    document.addEventListener('play', handleVideoPlay, true);

    return () => {
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
      document.removeEventListener('play', handleVideoPlay, true);
    };
  }, []);

  const handleToggle = async () => {
    const audio = audioRef.current;
    if (!audio || !backgroundMusicSource) return;

    if (!audio.paused) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
      setButtonText('暂停音乐');
    } catch {
      setButtonText('点击重试音乐');
    }
  };

  return (
    <>
      <audio id="backgroundmusic" ref={audioRef} loop preload="none" />
      <button
        id="musictoggle"
        className="music-toggle"
        type="button"
        aria-pressed={isPlaying ? 'true' : 'false'}
        hidden={!backgroundMusicSource}
        onClick={handleToggle}
      >
        {buttonText}
      </button>
    </>
  );
};
