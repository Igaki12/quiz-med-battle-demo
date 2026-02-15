import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';
import { playTone } from '../utils/audio';

export default function Result() {
  const navigate = useNavigate();
  const players = useGameStore((s) => s.players);
  const setQuestionIndex = useGameStore((s) => s.setQuestionIndex);
  const clearAnswers = useGameStore((s) => s.clearAnswers);
  const resetStatuses = useGameStore((s) => s.resetStatuses);
  const seOn = useGameStore((s) => s.seOn);

  const ranking = useMemo(
    () => [...players].sort((a, b) => b.score - a.score),
    [players]
  );

  const handleBack = () => {
    if (seOn) playTone(540, 140, 0.12, 'triangle');
    setQuestionIndex(0);
    resetStatuses();
    clearAnswers();
    navigate('/');
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="font-display text-3xl text-gild-200">結果発表</h2>
        <p className="text-xs text-gild-400">祝福の紋章が輝く</p>
      </div>

      {ranking[0] && (
        <div className="fantasy-panel rounded-2xl p-5 text-center">
          <p className="text-xs text-gild-200">WINNER</p>
          <p className="mt-2 font-display text-2xl text-emerald-400">{ranking[0].name}</p>
          <p className="text-sm text-gild-400">{ranking[0].score} pt</p>
        </div>
      )}

      <div className="space-y-2">
        {ranking.map((player, index) => (
          <div
            key={player.id}
            className="fantasy-panel flex items-center justify-between rounded-xl px-4 py-3 text-sm"
          >
            <span className="text-gild-200">{index + 1}位 {player.name}</span>
            <span className="text-emerald-400">{player.score} pt</span>
          </div>
        ))}
      </div>

      <button
        className="rune-button w-full rounded-xl py-4 text-sm font-semibold text-emerald-300"
        onClick={handleBack}
      >
        トップに戻る
      </button>
    </div>
  );
}
