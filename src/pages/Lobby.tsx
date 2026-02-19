import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { playTone, unlockAudio } from '../utils/audio';
import { useGameStore } from '../store/gameStore';

const rooms = [
  { id: 1, name: 'アルカナ図書館', status: '満員' },
  { id: 2, name: '深層迷宮の間', status: '空きあり' },
  { id: 3, name: '星詠みの塔', status: '満員' },
  { id: 4, name: '蒼穹の書架', status: '空きあり' }
];

export default function Lobby() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const seOn = useGameStore((s) => s.seOn);
  const setBgmTrack = useGameStore((s) => s.setBgmTrack);

  const handleEnter = (roomName: string) => {
    setBgmTrack(roomName === '蒼穹の書架' ? 'crimson' : 'arena');
    unlockAudio();
    setLoading(true);
    if (seOn) playTone(520, 120, 0.12, 'triangle');
    setTimeout(() => {
      setLoading(false);
      navigate('/waiting');
    }, 1800);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="font-display text-2xl text-gild-200">ロビー選択</h2>
        <p className="text-xs text-gild-400">魔導書の目次から部屋を選択</p>
      </div>

      <div className="space-y-3">
        {rooms.map((room) => (
          <motion.button
            key={room.id}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleEnter(room.name)}
            className="fantasy-panel w-full rounded-xl px-4 py-3 text-left"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-gild-200">{room.name}</span>
              <span
                className={`text-xs ${
                  room.status === '満員' ? 'text-burgundy-500' : 'text-emerald-400'
                }`}
              >
                {room.status}
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {loading && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/60 p-6">
          <div className="fantasy-panel w-full max-w-sm rounded-2xl p-5 text-center">
            <p className="text-sm text-gild-200">通信環境チェック中...</p>
            <p className="mt-2 text-xs text-gild-400">Ping: 12ms / 同期確立</p>
          </div>
        </div>
      )}
    </div>
  );
}
