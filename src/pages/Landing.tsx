import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { playTone, unlockAudio } from '../utils/audio';

export default function Landing() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const initPlayers = useGameStore((s) => s.initPlayers);
  const setBgmTrack = useGameStore((s) => s.setBgmTrack);
  const seOn = useGameStore((s) => s.seOn);

  useEffect(() => {
    setBgmTrack('lobby');
  }, [setBgmTrack]);

  const handleStart = () => {
    unlockAudio();
    initPlayers(name.trim() || 'あなた');
    if (seOn) playTone(640, 140, 0.15, 'triangle');
    navigate('/lobby');
  };

  return (
    <div className="space-y-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-display text-3xl text-gild-200">みんなで早押し！</h1>
        <p className="font-display text-lg text-gild-400">医師国家試験クイズ 体験版</p>
      </motion.div>

      <div className="fantasy-panel rounded-2xl p-5 space-y-4">
        <label className="text-sm text-gild-200">プレイヤーネーム</label>
        <input
          className="w-full rounded-xl border border-gild-400/50 bg-ink-900/70 px-4 py-3 text-sm text-white focus:outline-none"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="あなたの名前"
        />
        <motion.button
          whileTap={{ scale: 0.97 }}
          className="rune-button w-full rounded-xl py-4 text-sm font-semibold text-emerald-400"
          onClick={handleStart}
        >
          START
        </motion.button>
      </div>
    </div>
  );
}
