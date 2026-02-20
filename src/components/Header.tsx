import { useEffect } from 'react';
import { useGameStore } from '../store/gameStore';
import { startBgm, stopBgm, playTone, unlockAudio, setBgmSource, setBgmPlaylist } from '../utils/audio';

export default function Header() {
  const bgmOn = useGameStore((s) => s.bgmOn);
  const seOn = useGameStore((s) => s.seOn);
  const bgmTrack = useGameStore((s) => s.bgmTrack);
  const toggleBgm = useGameStore((s) => s.toggleBgm);
  const toggleSe = useGameStore((s) => s.toggleSe);

  useEffect(() => {
    const base = import.meta.env.BASE_URL;
    const map: Record<typeof bgmTrack, string> = {
      lobby: `${base}audio/Dawn_s_First_Ascent.mp3`,
      arena: `${base}audio/Aetherium_Arena.mp3`,
      crimson: `${base}audio/Crimson_Horizon.mp3`,
      arcana: `${base}audio/The_Gauntlet_of_Triumph.mp3`,
      inquisitor: `${base}audio/The_Grand_Inquisitor_s_Gambit.mp3`
    };
    if (bgmTrack === 'arena') {
      setBgmPlaylist([
        `${base}audio/The_Final_Question.mp3`,
        `${base}audio/The_Accordion_s_Anarchy.mp3`,
        `${base}audio/The_Final_Countdown.mp3`,
        `${base}audio/The_Grand_Gauntlet.mp3`,
        `${base}audio/The_Grand_Triumvirate.mp3`
      ]);
    } else if (bgmTrack === 'crimson') {
      setBgmPlaylist([
        `${base}audio/Crimson_Horizon.mp3`,
        `${base}audio/Aetherium_Arena.mp3`
      ]);
    } else {
      setBgmSource(map[bgmTrack]);
    }
    if (bgmOn) {
      startBgm();
    } else {
      stopBgm();
    }
  }, [bgmOn, bgmTrack]);

  const handleSeClick = () => {
    unlockAudio();
    if (seOn) {
      playTone(520, 120, 0.12, 'triangle');
    }
    toggleSe();
  };

  const handleBgmClick = () => {
    unlockAudio();
    if (seOn) {
      playTone(420, 120, 0.12, 'triangle');
    }
    toggleBgm();
  };

  return (
    <div className="flex justify-end gap-2">
      <button
        className="rounded-full border border-gild-400/70 bg-ink-900/70 px-3 py-1 text-xs text-gild-200"
        onClick={handleBgmClick}
      >
        BGM {bgmOn ? 'ON' : 'OFF'}
      </button>
      <button
        className="rounded-full border border-gild-400/70 bg-ink-900/70 px-3 py-1 text-xs text-gild-200"
        onClick={handleSeClick}
      >
        SE {seOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}
