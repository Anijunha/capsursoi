const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prevArrow');
const nextButton = document.getElementById('nextArrow');
const pauseButton = document.getElementById('pauseButton');
const musicButton = document.getElementById('musicButton');
const pauseIcon = document.getElementById('pauseIcon');
const musicIcon = document.getElementById('musicIcon');

const audio = new Audio("../assets/sounds/Explications.wav");
audio.loop = false;  
let isPaused = false; 
let isMuted = false; 

let activeIndex = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));

    slides[index].classList.add('active');

    const backgroundImage = slides[index].style.backgroundImage;

    if (backgroundImage && backgroundImage.includes("7.jpg") && !audio.playing) {
        audio.play();
    }
}

pauseButton.addEventListener('click', () => {
    isPaused = !isPaused;
    pauseIcon.src = isPaused ? "../assets/svg/pauseB2.svg" : "../assets/svg/pauseB.svg";

    if (isPaused) {
        audio.pause();  
    } else {
        audio.play();
    }
});

musicButton.addEventListener('click', () => {
    isMuted = !isMuted;
    musicIcon.src = isMuted ? "../assets/svg/musicNX.svg" : "../assets/svg/musicB.svg";

    audio.muted = isMuted; 
});

showSlide(activeIndex);

nextButton.addEventListener('click', () => {
    if (activeIndex === slides.length - 1) {
        window.location.href = '../Portes/porte1.html'; 
    } else {
        activeIndex = (activeIndex + 1) % slides.length;
    }
});

prevButton.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + slides.length) % slides.length; 
});
