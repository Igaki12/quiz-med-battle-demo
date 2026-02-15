let audioContext: AudioContext | null = null;
let audioUnlocked = false;
let bgmNodes: { osc: OscillatorNode; gain: GainNode; lfo: OscillatorNode; lfoGain: GainNode } | null = null;

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
  if (!audioUnlocked) return;
  if (bgmNodes) return;
  const ctx = getContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const lfo = ctx.createOscillator();
  const lfoGain = ctx.createGain();

  osc.type = 'triangle';
  osc.frequency.value = 110;
  gain.gain.value = 0.04;

  lfo.frequency.value = 0.18;
  lfoGain.gain.value = 20;

  lfo.connect(lfoGain);
  lfoGain.connect(osc.frequency);
  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  lfo.start();

  bgmNodes = { osc, gain, lfo, lfoGain };
};

export const stopBgm = () => {
  if (!bgmNodes) return;
  bgmNodes.osc.stop();
  bgmNodes.lfo.stop();
  bgmNodes.osc.disconnect();
  bgmNodes.lfo.disconnect();
  bgmNodes.gain.disconnect();
  bgmNodes.lfoGain.disconnect();
  bgmNodes = null;
};
