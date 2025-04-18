const doorSound = new Audio('../assets/sounds/door.wav');

function playSound() {
    doorSound.currentTime = 0;
    doorSound.play();
}

const portes = document.querySelectorAll('.porte');

portes.forEach(porte => {
    porte.addEventListener('mouseover', playSound);
});
