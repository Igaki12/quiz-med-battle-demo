import { useEffect } from 'react';
import { useGameStore } from '../store/gameStore';
import { startBgm, stopBgm, playTone, unlockAudio } from '../utils/audio';

export default function Header() {
  const bgmOn = useGameStore((s) => s.bgmOn);
  const seOn = useGameStore((s) => s.seOn);
  const toggleBgm = useGameStore((s) => s.toggleBgm);
  const toggleSe = useGameStore((s) => s.toggleSe);

  useEffect(() => {
    if (bgmOn) {
      startBgm();
    } else {
      stopBgm();
    }
  }, [bgmOn]);

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
