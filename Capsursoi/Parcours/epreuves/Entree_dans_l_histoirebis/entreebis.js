document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const pauseButton = document.getElementById("pauseButton"); // il manquait cette ligne !
    const pauseIcon = document.getElementById("pauseIcon");
    const musicButton = document.getElementById("musicButton");
    const musicIcon = document.getElementById("musicIcon");    
    const nextButton = document.getElementById("nextButton");
    const prevButton = document.getElementById("prevButton");

    let currentIndex = 0;
    let canNavigate = false;
    let isPaused = false;
    let isMuted = false;
    let audio = new Audio();

    const audioSources = [
        null, // slide 0 : fond_noir.png, pas d'audio
        "../../../assets/sounds/BackgroundA.wav",
        "../../../assets/sounds/BackgroundB.wav",
        "../../../assets/sounds/BackgroundC.wav",
        null // slide 4 : gif final, pas d'audio
    ];

    // Afficher la première slide
    slides[currentIndex].classList.add("active");
    updateNavButtons();
    startNavigationDelay();
    playAudioForCurrentSlide();

    function showSlide(index) {
        if (index < 0 || index >= slides.length) return;

        // Pause l’audio actuel
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0;
        }

        slides[currentIndex].classList.remove("active");
        currentIndex = index;
        slides[currentIndex].classList.add("active");

        updateNavButtons();
        startNavigationDelay();
        playAudioForCurrentSlide();
    }

    function showNextSlide() {
        if (!canNavigate) return;
        if (currentIndex < slides.length - 1) {
            showSlide(currentIndex + 1);
        } else {
            window.location.href = "../../1/explications_1.html";
        }
    }

    function showPrevSlide() {
        if (!canNavigate) return;
        if (currentIndex > 0) {
            showSlide(currentIndex - 1);
        }
    }

    function playAudioForCurrentSlide() {
        const src = audioSources[currentIndex];
        if (src) {
            audio = new Audio(src);
            audio.muted = isMuted; // garde l'état mute même en changeant de slide
            if (!isPaused) {
                audio.play();
            }
        }
    }

    function updateNavButtons() {
        prevButton.style.display = currentIndex === 0 ? "none" : "block";
    }

    function startNavigationDelay() {
        canNavigate = false;
        setTimeout(() => {
            canNavigate = true;
        }, 2000);
    }

    // Boutons navigation
    nextButton.addEventListener("click", showNextSlide);
    prevButton.addEventListener("click", showPrevSlide);

    // Bouton pause/lecture
    pauseButton.addEventListener("click", () => {
        isPaused = !isPaused;

        pauseIcon.src = isPaused
            ? "../../../assets/svg/pauseB2.svg"
            : "../../../assets/svg/pauseB.svg";

        if (isPaused) {
            audio.pause();
        } else {
            audio.play();
        }
    });

    // Bouton mute/unmute
    musicButton.addEventListener("click", () => {
        isMuted = !isMuted;

        musicIcon.src = isMuted
            ? "../../../assets/svg/musicNX.svg"
            : "../../../assets/svg/musicB.svg";

        audio.muted = isMuted;
    });
});
