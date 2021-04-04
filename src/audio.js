import { tones } from "./CONSTANTS";
const context = new (window.AudioContext || window.webkitAudioContext)();

const _createOscillator = (ctx, toneType, type = "triangle") => {
  const oscillator = ctx.createOscillator();
  oscillator.connect(ctx.destination);
  oscillator.type = type;
  oscillator.frequency.value = tones[toneType];

  return oscillator;
};


export function soundButton(color) {
  let oscillator = _createOscillator(context, color);

  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + 1);
}

export function soundError() {
  let oscillator = _createOscillator(context, "error", "sawtooth");

  oscillator.start();
  oscillator.stop(context.currentTime + 1);
}
