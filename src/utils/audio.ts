let audioContext: AudioContext | null = null;
let bgmAudio: HTMLAudioElement | null = null;
let audioUnlocked = false;
let pendingBgmPlay = false;

const getContext = () => {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  if (audioContext.state === 'suspended') {
    void audioContext.resume().catch(() => undefined);
  }
  return audioContext;
};

export const unlockAudio = () => {
  try {
    const ctx = getContext();
    if (ctx.state === 'suspended') {
      void ctx.resume();
    }
    audioUnlocked = true;
    if (bgmAudio && (bgmAudio.paused || pendingBgmPlay)) {
      pendingBgmPlay = false;
      void bgmAudio.play().catch(() => undefined);
    }
  } catch {
    audioUnlocked = false;
  }
};

export const playTone = (frequency: number, durationMs: number, volume = 0.2, type: OscillatorType = 'sine') => {
  if (!audioUnlocked) return;
  const ctx = getContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = frequency;
  gain.gain.value = volume;
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + durationMs / 1000);
};

export const startBgm = () => {
  if (!bgmAudio) {
    bgmAudio = new Audio(`${import.meta.env.BASE_URL}audio/Aetherium_Arena.mp3`);
    bgmAudio.loop = true;
    bgmAudio.volume = 0.35;
  }
  if (!audioUnlocked) {
    pendingBgmPlay = true;
    return;
  }
  void bgmAudio.play().catch(() => undefined);
};

export const stopBgm = () => {
  if (!bgmAudio) return;
  bgmAudio.pause();
};
