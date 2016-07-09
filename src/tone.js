
const context = new (window.AudioContext || window.webkitAudioContext)();
const gain = context.createGain();

export default function Tone(waveform, freq){
  const now = context.currentTime;
  this.oscillator = context.createOscillator();
  this.oscillator.connect(gain);
  gain.connect(context.destination);
  gain.gain.setValueAtTime(2, now);
  gain.gain.linearRampToValueAtTime(1.5, now + 1);
  this.oscillator.type = waveform;
  this.oscillator.frequency.value = freq;
  return this.oscillator
}