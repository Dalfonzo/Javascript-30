function toggleClass(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.toggle('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
}

document.addEventListener('keydown', (e) => {
  toggleClass(e);
  playSound(e);
});

document.addEventListener('keyup', (e) => {
  toggleClass(e);
});
