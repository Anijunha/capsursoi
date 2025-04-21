document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prevArrow');
    const nextButton = document.getElementById('nextArrow');
    const pauseButton = document.getElementById('pauseButton');
    const musicButton = document.getElementById('musicButton');
    const pauseIcon = document.getElementById('pauseIcon');
    const musicIcon = document.getElementById('musicIcon');

    const explicationsAudio = new Audio("../assets/sounds/Explications.wav");
    const whyAudio = new Audio("../assets/sounds/why.wav");

    explicationsAudio.loop = false;
    whyAudio.loop = true;
    whyAudio.volume = 0.3;

    let activeIndex = 0;
    let isPaused = false;
    let isMuted = false;
    let whyAudioStarted = false;
    let explicationsAudioStarted = false;  

    function fadeInAudio(audio, duration = 2000, targetVolume = 0.2) {
        audio.volume = 0;
        let step = targetVolume / (duration / 50);
        let interval = setInterval(() => {
            if (audio.volume < targetVolume - step) {
                audio.volume += step;
            } else {
                audio.volume = targetVolume;
                clearInterval(interval);
            }
        }, 50);
    }

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        console.log("Current slide index:", index);

        if (index === 1 && !whyAudioStarted) {  
            whyAudioStarted = true;
            whyAudio.play();
            fadeInAudio(whyAudio, 2000, 0.2); 
        }

        if ((index === 2 || index === 3) && !explicationsAudioStarted) {  
            console.log("Explications audio started for slide 6 or 7");
            explicationsAudioStarted = true;
            explicationsAudio.play().catch(err => console.error("Error playing explications audio:", err));  
        }

    }

    pauseButton.addEventListener('click', () => {
        isPaused = !isPaused;
        pauseIcon.src = isPaused ? "../assets/svg/pauseB2.svg" : "../assets/svg/pauseB.svg";

        if (isPaused) {
            explicationsAudio.pause();
        } else {
            if (!explicationsAudio.paused) {
                explicationsAudio.play();
            }
        }
    });

    musicButton.addEventListener('click', () => {
        isMuted = !isMuted;
        musicIcon.src = isMuted ? "../assets/svg/musicNX.svg" : "../assets/svg/musicB.svg";

        whyAudio.muted = isMuted;
    });

    nextButton.addEventListener('click', () => {
        if (activeIndex === slides.length - 1) {
            window.location.href = '../Portes/porte1.html';
        } else {
            activeIndex = (activeIndex + 1) % slides.length;
            showSlide(activeIndex);
        }
    });

    prevButton.addEventListener('click', () => {
        if (activeIndex === 0) {
            window.location.href = "../Entree_dans_l_histoire/entree.html";
        } else {
            activeIndex = (activeIndex - 1 + slides.length) % slides.length;
            showSlide(activeIndex);
        }
    });

    showSlide(activeIndex);
});
