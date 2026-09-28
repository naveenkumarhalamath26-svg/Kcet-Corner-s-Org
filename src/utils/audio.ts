// Offline Web Audio API Synthesizer (Zero permissions, zero network, 100% private)
let audioCtx: AudioContext | null = null;
let noiseNode: AudioNode | null = null;
let gainNode: GainNode | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playTimerCompletionChime(): void {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    
    // Play a gentle two-tone chime (E5 -> B5)
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const g = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(659.25, now); // E5
    osc1.frequency.exponentialRampToValueAtTime(880, now + 0.3); // A5

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(987.77, now + 0.15); // B5

    g.gain.setValueAtTime(0.15, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

    osc1.connect(g);
    osc2.connect(g);
    g.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now + 0.15);
    osc1.stop(now + 1.2);
    osc2.stop(now + 1.2);
  } catch {
    // Audio context may be restricted by browser policy before user interaction
  }
}

export function playClickSound(success = true): void {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(success ? 520 : 260, now);
    g.gain.setValueAtTime(0.04, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(g);
    g.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.08);
  } catch {
    // Ignore
  }
}

export function startAmbientNoise(type: 'whitenoise' | 'binaural'): void {
  stopAmbientNoise();
  try {
    const ctx = getAudioContext();
    gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.03, ctx.currentTime);

    if (type === 'whitenoise') {
      // 2 seconds buffer of pink/white filtered noise
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Simple low-pass filter for soft rain/brownish noise
        data[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = data[i];
        data[i] *= 3.5;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;
      noise.connect(gainNode);
      gainNode.connect(ctx.destination);
      noise.start();
      noiseNode = noise;
    } else {
      // Binaural alpha waves (200Hz and 210Hz = 10Hz alpha rhythm)
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      osc1.frequency.setValueAtTime(200, ctx.currentTime);
      osc2.frequency.setValueAtTime(210, ctx.currentTime);
      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(ctx.destination);
      osc1.start();
      osc2.start();
      noiseNode = osc1; // Will stop via ctx on stopAmbientNoise
    }
  } catch (err) {
    console.error('Ambient audio error:', err);
  }
}

export function stopAmbientNoise(): void {
  try {
    if (noiseNode) {
      if ('stop' in noiseNode && typeof (noiseNode as AudioScheduledSourceNode).stop === 'function') {
        (noiseNode as AudioScheduledSourceNode).stop();
      }
      noiseNode.disconnect();
      noiseNode = null;
    }
    if (gainNode) {
      gainNode.disconnect();
      gainNode = null;
    }
  } catch {
    // Ignore
  }
}
