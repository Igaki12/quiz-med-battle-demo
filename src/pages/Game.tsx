import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { questions } from '../data/questions';
import { useGameStore } from '../store/gameStore';
import { playTone, unlockAudio } from '../utils/audio';

type CpuPlan = {
  timeMs: number;
  isCorrect: boolean;
};

const TOTAL_TIME = 30;

const arraysEqual = (a: string[], b: string[]) => {
  if (a.length !== b.length) return false;
  const sortedA = [...a].sort();
  const sortedB = [...b].sort();
  return sortedA.every((value, index) => value === sortedB[index]);
};

export default function Game() {
  const navigate = useNavigate();
  const players = useGameStore((s) => s.players);
  const updatePlayer = useGameStore((s) => s.updatePlayer);
  const resetStatuses = useGameStore((s) => s.resetStatuses);
  const selectedAnswers = useGameStore((s) => s.selectedAnswers);
  const toggleAnswer = useGameStore((s) => s.toggleAnswer);
  const clearAnswers = useGameStore((s) => s.clearAnswers);
  const questionIndex = useGameStore((s) => s.questionIndex);
  const setQuestionIndex = useGameStore((s) => s.setQuestionIndex);
  const setPhase = useGameStore((s) => s.setPhase);
  const seOn = useGameStore((s) => s.seOn);

  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [judging, setJudging] = useState(false);
  const [typedText, setTypedText] = useState('');
  const startTimeRef = useRef<number>(Date.now());
  const cpuPlansRef = useRef<Record<string, CpuPlan>>({});
  const playerAnswerRef = useRef<string[]>([]);
  const hasJudgedRef = useRef(false);

  const question = questions[questionIndex];

  useEffect(() => {
    if (players.length === 0) {
      navigate('/');
      return;
    }

    resetStatuses();
    clearAnswers();
    setPhase('answering');
    setJudging(false);
    setTimeLeft(TOTAL_TIME);
    startTimeRef.current = Date.now();
    playerAnswerRef.current = [];
    hasJudgedRef.current = false;
    setTypedText('');

    const plans: Record<string, CpuPlan> = {};
    players
      .filter((player) => player.isCpu)
      .forEach((cpu) => {
        const timeMs = (10 + Math.random() * 15) * 1000;
        const isCorrect = Math.random() < 0.6;
        plans[cpu.id] = { timeMs, isCorrect };
      });
    cpuPlansRef.current = plans;
  }, [questionIndex, players.length, clearAnswers, navigate, resetStatuses, setPhase]);

  useEffect(() => {
    setTypedText('');
    if (!question) return;
    let index = 0;
    const timer = setInterval(() => {
      index += 1;
      setTypedText(question.text.slice(0, index));
      if (index >= question.text.length) {
        clearInterval(timer);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [question]);

  useEffect(() => {
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const remaining = Math.max(0, TOTAL_TIME - elapsed / 1000);
      setTimeLeft(remaining);

      const statePlayers = useGameStore.getState().players;
      statePlayers
        .filter((player) => player.isCpu && player.status === 'idle')
        .forEach((cpu) => {
          const plan = cpuPlansRef.current[cpu.id];
          if (plan && elapsed >= plan.timeMs) {
            updatePlayer(cpu.id, {
              status: 'answered',
              answerTimeMs: plan.timeMs,
              wasCorrect: plan.isCorrect
            });
          }
        });
    }, 200);

    return () => clearInterval(timer);
  }, [updatePlayer]);

  const player = useMemo(() => players.find((p) => !p.isCpu), [players]);

  const handleSubmit = () => {
    if (!player || player.status === 'answered') return;
    unlockAudio();
    const elapsed = Date.now() - startTimeRef.current;
    playerAnswerRef.current = selectedAnswers;
    updatePlayer(player.id, {
      status: 'answered',
      answerTimeMs: elapsed
    });
    if (seOn) playTone(560, 120, 0.12, 'triangle');
  };

  const shouldJudge =
    !judging &&
    (timeLeft <= 0 || players.every((p) => p.status === 'answered'));

  useEffect(() => {
    if (!shouldJudge || hasJudgedRef.current) return;
    hasJudgedRef.current = true;

    setJudging(true);
    setPhase('judging');

    const correctSet = question.correctAnswers;
    const playerIsCorrect =
      player && player.status === 'answered'
        ? arraysEqual(playerAnswerRef.current, correctSet)
        : false;

    players.forEach((p) => {
      if (p.status !== 'answered') {
        updatePlayer(p.id, {
          status: 'answered',
          answerTimeMs: TOTAL_TIME * 1000,
          wasCorrect: false
        });
      }
    });

    if (player) {
      updatePlayer(player.id, { wasCorrect: playerIsCorrect });
    }

    const correctPlayers = players
      .map((p) => ({ ...p }))
      .filter((p) => (p.id === 'player' ? playerIsCorrect : p.wasCorrect === true));

    const fastest = Math.min(...correctPlayers.map((p) => p.answerTimeMs ?? Infinity));

    players.forEach((p) => {
      const isCorrect = p.id === 'player' ? playerIsCorrect : p.wasCorrect;
      if (!isCorrect) return;
      const isFastest = (p.answerTimeMs ?? Infinity) === fastest;
      const delta = isFastest ? 20 : 10;
      updatePlayer(p.id, { score: p.score + delta });
    });

    if (seOn) {
      playTone(playerIsCorrect ? 880 : 220, 220, 0.15, 'square');
    }

    const timeout = setTimeout(() => {
      if (questionIndex >= questions.length - 1) {
        setPhase('result');
        navigate('/result');
      } else {
        setQuestionIndex(questionIndex + 1);
      }
    }, 2400);

    return () => clearTimeout(timeout);
  }, [
    shouldJudge,
    navigate,
    player,
    players,
    question,
    questionIndex,
    seOn,
    setPhase,
    setQuestionIndex,
    updatePlayer
  ]);

  if (!question) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs text-gild-200">
        <span>Round {questionIndex + 1} / {questions.length}</span>
        <span>残り {timeLeft.toFixed(1)} 秒</span>
      </div>
      <div className="h-2 w-full rounded-full bg-ink-700">
        <div
          className="h-2 rounded-full bg-emerald-400"
          style={{ width: `${(timeLeft / TOTAL_TIME) * 100}%` }}
        />
      </div>

      <motion.div
        className="scroll-bg rounded-2xl border border-gild-400/50 p-4 text-sm leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {typedText || question.text}
      </motion.div>

      <div className="space-y-2">
        {question.options.map((option) => {
          const selected = selectedAnswers.includes(option.id);
          return (
            <button
              key={option.id}
              onClick={() => toggleAnswer(option.id)}
              disabled={player?.status === 'answered'}
              className={`w-full rounded-xl px-4 py-3 text-left text-sm transition ${
                selected
                  ? 'rune-button text-emerald-300'
                  : 'fantasy-panel text-gild-200'
              }`}
            >
              {option.text}
            </button>
          );
        })}
      </div>

      <button
        className="rune-button w-full rounded-xl py-4 text-sm font-semibold text-emerald-300"
        onClick={handleSubmit}
        disabled={player?.status === 'answered'}
      >
        解答する！
      </button>

      <div className="flex items-center justify-between text-[11px] text-gild-200">
        {players.map((p) => (
          <div key={p.id} className="text-center">
            <div>{p.name}</div>
            <div className={p.status === 'answered' ? 'text-emerald-400' : 'text-gild-400'}>
              {p.status === 'answered' ? '回答済み' : '待機'}
            </div>
          </div>
        ))}
      </div>

      {judging && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70">
          <div className="fantasy-panel rounded-2xl px-6 py-5 text-center">
            <p className="font-display text-2xl text-gild-200">判定中...</p>
            <p className="mt-2 text-xs text-gild-400">魔法陣が答えを照合しています</p>
          </div>
        </div>
      )}
    </div>
  );
}
