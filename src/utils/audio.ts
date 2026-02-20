let audioContext: AudioContext | null = null;
let bgmAudio: HTMLAudioElement | null = null;
let audioUnlocked = false;
let pendingBgmPlay = false;
let playlistSources: string[] = [];
let playlistIndex = 0;
let handleEnded: (() => void) | null = null;

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
    bgmAudio = new Audio();
    bgmAudio.loop = true;
    bgmAudio.volume = 0.35;
  }
  if (!audioUnlocked) {
    pendingBgmPlay = true;
    return;
  }
  void bgmAudio.play().catch(() => undefined);
};

export const setBgmSource = (src: string) => {
  if (!bgmAudio) {
    bgmAudio = new Audio();
    bgmAudio.loop = true;
    bgmAudio.volume = 0.35;
  }
  if (handleEnded) {
    bgmAudio.removeEventListener('ended', handleEnded);
    handleEnded = null;
  }
  playlistSources = [];
  if (bgmAudio.src === src) return;
  const wasPlaying = !bgmAudio.paused;
  bgmAudio.loop = true;
  bgmAudio.src = src;
  if (wasPlaying) {
    void bgmAudio.play().catch(() => undefined);
  }
};

export const setBgmPlaylist = (sources: string[]) => {
  if (!bgmAudio) {
    bgmAudio = new Audio();
    bgmAudio.loop = false;
    bgmAudio.volume = 0.35;
  }
  playlistSources = sources;
  playlistIndex = 0;
  if (handleEnded) {
    bgmAudio.removeEventListener('ended', handleEnded);
  }
  handleEnded = () => {
    if (playlistSources.length === 0) return;
    playlistIndex = (playlistIndex + 1) % playlistSources.length;
    bgmAudio!.src = playlistSources[playlistIndex];
    if (audioUnlocked) {
      void bgmAudio!.play().catch(() => undefined);
    } else {
      pendingBgmPlay = true;
    }
  };
  bgmAudio.addEventListener('ended', handleEnded);
  bgmAudio.loop = false;
  const nextSrc = playlistSources[0];
  if (!nextSrc) return;
  const wasPlaying = !bgmAudio.paused;
  bgmAudio.src = nextSrc;
  if (wasPlaying && audioUnlocked) {
    void bgmAudio.play().catch(() => undefined);
  } else if (!audioUnlocked) {
    pendingBgmPlay = true;
  }
};

export const stopBgm = () => {
  if (!bgmAudio) return;
  bgmAudio.pause();
};
