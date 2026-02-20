import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { playTone, unlockAudio } from '../utils/audio';
import { useGameStore } from '../store/gameStore';
import { questions } from '../data/questions';

const rooms = [
  { id: 1, name: 'アルカナ図書館(5問)', status: 'あと1枠' },
  { id: 2, name: '深層迷宮の間(5問選択肢ランダム)', status: '空きあり' },
  { id: 3, name: '星詠みの塔(10問)', status: '空きあり' },
  { id: 4, name: '蒼穹の書架(10問選択肢ランダム)', status: '空きあり' }
];

type RoomConfig = {
  id: number;
  questionCount: number;
  shuffleOptions?: boolean;
  filter?: (candidate: (typeof questions)[number]) => boolean;
};

const roomConfigs: Record<number, RoomConfig> = {
  1: { id: 1, questionCount: 5 },
  2: { id: 2, questionCount: 5, shuffleOptions: true },
  3: { id: 3, questionCount: 10 },
  4: { id: 4, questionCount: 10, shuffleOptions: true }
};

const pickRandomQuestions = (count: number, list: typeof questions) => {
  const pool = [...list];
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, Math.min(count, pool.length));
};

const optionIds = ['a', 'b', 'c', 'd', 'e'] as const;

const shuffleOptionsForQuestion = (question: (typeof questions)[number]) => {
  const pool = [...question.options];
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  const idMap = new Map<string, string>();
  pool.forEach((option, index) => {
    idMap.set(option.id, optionIds[index] ?? option.id);
  });
  const shuffledOptions = pool.map((option, index) => ({
    ...option,
    id: optionIds[index] ?? option.id
  }));
  const shuffledCorrect = question.correctAnswers
    .map((id) => idMap.get(id))
    .filter((id): id is string => Boolean(id));
  return { ...question, options: shuffledOptions, correctAnswers: shuffledCorrect };
};

export default function Lobby() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const seOn = useGameStore((s) => s.seOn);
  const setBgmTrack = useGameStore((s) => s.setBgmTrack);
  const setQuestionSet = useGameStore((s) => s.setQuestionSet);
  const setQuestionIndex = useGameStore((s) => s.setQuestionIndex);

  const handleEnter = (roomId: number) => {
    if (roomId === 4) {
      setBgmTrack('crimson');
    } else if (roomId === 1) {
      setBgmTrack('arcana');
    } else if (roomId === 2) {
      setBgmTrack('inquisitor');
    } else {
      setBgmTrack('arena');
    }
    unlockAudio();
    setLoading(true);
    if (seOn) playTone(520, 120, 0.12, 'triangle');
    const config = roomConfigs[roomId] ?? { id: roomId, questionCount: 5 };
    const filtered = config.filter ? questions.filter(config.filter) : questions;
    const picked = pickRandomQuestions(config.questionCount, filtered);
    const selected = config.shuffleOptions
      ? picked.map((question) => shuffleOptionsForQuestion(question))
      : picked;
    setQuestionSet(selected);
    setQuestionIndex(0);
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
            onClick={() => handleEnter(room.id)}
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
