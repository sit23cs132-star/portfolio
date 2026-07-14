// Web Audio Synth Helper for Easter Eggs & UI sound feedback
let sharedCtx: AudioContext | null = null;

export function playUiBlip(frequency = 800, duration = 0.08) {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    
    // Lazily instantiate a single shared AudioContext to prevent hitting browser limits
    if (!sharedCtx) {
      sharedCtx = new AudioContextClass();
    }

    const ctx = sharedCtx;

    // Resume context if suspended by browser autoplay policy
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    
    // Smooth decay to prevent clicking, set slightly louder (0.12) to be audible
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Fail silently if browser blocks audio
  }
}
