import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { playTone } from '../utils/audio';

const tips = [
  '答えは複数ある場合も！',
  '誰よりも早く正解せよ！',
  '選択肢はトグル式で複数選択可能。'
];

export default function Waiting() {
  const navigate = useNavigate();
  const players = useGameStore((s) => s.players);
  const seOn = useGameStore((s) => s.seOn);
  const [count, setCount] = useState(10);
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const tipTimer = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tips.length);
    }, 2000);
    return () => clearInterval(tipTimer);
  }, []);

  useEffect(() => {
    if (count <= 0) {
      navigate('/game');
      return;
    }
    const timer = setTimeout(() => {
      if (seOn) playTone(440, 80, 0.08, 'square');
      setCount((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [count, navigate, seOn]);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="font-display text-2xl text-gild-200">対戦準備</h2>
        <p className="text-xs text-gild-400">魔法陣に召喚中...</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {players.map((player) => (
          <motion.div
            key={player.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="fantasy-panel rounded-xl px-3 py-4 text-center"
          >
            <div className="text-xs text-gild-200">{player.name}</div>
            <div className="mt-2 text-[10px] text-emerald-400">READY</div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <div className="font-display text-5xl text-emerald-400 drop-shadow">{count}</div>
        <p className="mt-2 text-xs text-gild-400">{tips[tipIndex]}</p>
      </div>
    </div>
  );
}
