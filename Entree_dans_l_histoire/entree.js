document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const pauseButton = document.getElementById("pauseButton");
    const nextButton = document.getElementById("nextButton");
    const prevButton = document.getElementById("prevButton");

    let currentIndex = 0;
    let canNavigate = false;
    let isPaused = false;
    let audio = new Audio();

    const audioSources = [
        null, // slide 0 : fond_noir.png, pas d'audio
        "../assets/sounds/Background.wav",
        "../assets/sounds/Background_1.wav",
        "../assets/sounds/Background_2.wav",
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
            window.location.href = "../Entree_dans_le_manoir/reveil.html";
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
            audio.play();
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

    // Boutons
    nextButton.addEventListener("click", showNextSlide);
    prevButton.addEventListener("click", showPrevSlide);

    pauseButton.addEventListener("click", () => {
        isPaused = !isPaused;
        pauseButton.textContent = isPaused ? "▶" : "⏸";

        if (isPaused) {
            audio.pause();
        } else {
            audio.play();
        }
    });
});
