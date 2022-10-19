const root = document.documentElement;

function setOffsets(x, y) {
  root.style.setProperty('--offset-x', x + '%');
  root.style.setProperty('--offset-y', y + '%');
}

root.addEventListener('mousemove', e => {
  const x = e.clientX / 75;
  const y = e.clientY / 75;
  setOffsets(x, y);
});
