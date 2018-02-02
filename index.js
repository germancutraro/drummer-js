function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0; // rewind to the start (for multiple tight's)
  audio.play();
  key.classList.add('playing');
}
// get all key square div
const keys = [...document.querySelectorAll('.key')];
// function
function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // if not a transition, skip
  this.classList.remove('playing');
}
keys.map(key => key.addEventListener('transitionend', removeTransition));
// listener  
window.addEventListener('keyup', playSound);