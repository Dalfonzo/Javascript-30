function toggleClass(e) {
  const keys = document.getElementsByClassName('key');

  for (let key of keys) {
    if (key.dataset.key == e.keyCode) {
      key.classList.toggle('playing');
    }
  }
}

function playSound(e) {
  const audios = document.getElementsByTagName('audio');

  for (let item of audios) {
    if (item.dataset.key == e.keyCode) {
      item.play();
    }
  }
}

document.addEventListener('keydown', (e) => {
  toggleClass(e);
  playSound(e);
});

document.addEventListener('keyup', (e) => {
  toggleClass(e);
});
