const enter = document.querySelector('.js-enter')
const stickSound = new Audio('../audio/stick.mp3');

//Sound for enter
enter.addEventListener('click', () => {
    stickSound.play()
})