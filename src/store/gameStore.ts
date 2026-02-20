import { create } from 'zustand';
import type { Question } from '../data/questions';

export type PlayerStatus = 'idle' | 'answered';

export type Player = {
  id: string;
  name: string;
  isCpu: boolean;
  score: number;
  status: PlayerStatus;
  answerTimeMs?: number;
  wasCorrect?: boolean;
};

export type GamePhase = 'setup' | 'answering' | 'judging' | 'result';

type GameState = {
  playerName: string;
  players: Player[];
  questionIndex: number;
  selectedAnswers: string[];
  phase: GamePhase;
  bgmOn: boolean;
  seOn: boolean;
  bgmTrack: 'lobby' | 'arena' | 'crimson' | 'arcana' | 'inquisitor';
  questionSet: Question[];
  setPlayerName: (name: string) => void;
  initPlayers: (name: string) => void;
  updatePlayer: (id: string, data: Partial<Player>) => void;
  resetStatuses: () => void;
  setQuestionIndex: (index: number) => void;
  setQuestionSet: (questions: Question[]) => void;
  toggleAnswer: (id: string) => void;
  clearAnswers: () => void;
  setPhase: (phase: GamePhase) => void;
  toggleBgm: () => void;
  toggleSe: () => void;
  setBgmTrack: (track: 'lobby' | 'arena' | 'crimson' | 'arcana' | 'inquisitor') => void;
};

const cpuNames = ['リオ', 'セシル', 'アリス', 'ユウキ', 'サラ'];

export const useGameStore = create<GameState>((set, get) => ({
  playerName: '',
  players: [],
  questionIndex: 0,
  selectedAnswers: [],
  phase: 'setup',
  bgmOn: true,
  seOn: true,
  bgmTrack: 'arena',
  questionSet: [],
  setPlayerName: (name) => set({ playerName: name }),
  initPlayers: (name) => {
    const basePlayers: Player[] = [
      { id: 'player', name: name || 'あなた', isCpu: false, score: 0, status: 'idle' },
      ...cpuNames.map((cpu, index) => ({
        id: `cpu-${index}`,
        name: cpu,
        isCpu: true,
        score: 0,
        status: 'idle' as PlayerStatus
      }))
    ];
    set({ players: basePlayers, playerName: name || 'あなた' });
  },
  updatePlayer: (id, data) =>
    set({
      players: get().players.map((player) =>
        player.id === id ? { ...player, ...data } : player
      )
    }),
  resetStatuses: () =>
    set({
      players: get().players.map((player) => ({
        ...player,
        status: 'idle',
        answerTimeMs: undefined,
        wasCorrect: undefined
      }))
    }),
  setQuestionIndex: (index) => set({ questionIndex: index }),
  setQuestionSet: (questions) => set({ questionSet: questions }),
  toggleAnswer: (id) => {
    const current = get().selectedAnswers;
    if (current.includes(id)) {
      set({ selectedAnswers: current.filter((item) => item !== id) });
      return;
    }
    set({ selectedAnswers: [...current, id] });
  },
  clearAnswers: () => set({ selectedAnswers: [] }),
  setPhase: (phase) => set({ phase }),
  toggleBgm: () => set({ bgmOn: !get().bgmOn }),
  toggleSe: () => set({ seOn: !get().seOn }),
  setBgmTrack: (track) => set({ bgmTrack: track })
}));
