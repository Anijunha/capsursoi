document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const nextArrow = document.getElementById("nextArrow");
    const prevArrow = document.getElementById("prevArrow");
    const finalText = document.getElementById("final-text");

    const pauseButton = document.getElementById("pauseButton");
    const pauseIcon = document.getElementById("pauseIcon");
    const musicButton = document.getElementById("musicButton");
    const musicIcon = document.getElementById("musicIcon");

    let isPaused = false;
    let isMuted = false;
    let audioStarted = false;
    let audio;

    if (!window.sharedAudio) {
        audio = new Audio("../assets/sounds/loneliness.wav");
        audio.loop = true;

        audio.volume = 0;

        const savedPosition = localStorage.getItem("audioPosition");
        if (savedPosition) {
            audio.currentTime = parseFloat(savedPosition);
        }

        window.sharedAudio = audio;
    } else {
        audio = window.sharedAudio;
    }

    setInterval(() => {
        if (!audio.paused) {
            localStorage.setItem("audioPosition", audio.currentTime);
        }
    }, 1000);

    function startAudioIfNeeded() {
        if (!audioStarted) {
            audio.play().then(() => {
                audioStarted = true;

                const targetVolume = 0.3;
                const step = 0.02;
                const interval = 100;

                const fadeIn = setInterval(() => {
                    if (audio.volume < targetVolume) {
                        audio.volume = Math.min(audio.volume + step, targetVolume);
                    } else {
                        clearInterval(fadeIn);
                    }
                }, interval);
            }).catch((e) => {
                console.warn("Audio play bloqué par le navigateur :", e);
            });
        }
    }

    let currentIndex = 0;

    function updateSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");


        finalText?.classList.toggle("visible", index === slides.length - 1);
    }

    updateSlide(currentIndex);

    nextArrow.addEventListener("click", () => {
        startAudioIfNeeded();
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlide(currentIndex);
        } else {
            window.location.href = "../Portes/porte4.html";
        }
    });

    prevArrow.addEventListener("click", () => {
        startAudioIfNeeded();
        if (currentIndex > 0) {
            currentIndex--;
            updateSlide(currentIndex);
        }
    });

    pauseButton.addEventListener("click", () => {
        isPaused = !isPaused;
        pauseIcon.src = isPaused
            ? "../assets/svg/pauseB2.svg"
            : "../assets/svg/pauseB.svg";
    });

    musicButton.addEventListener("click", () => {
        isMuted = !isMuted;
        audio.muted = isMuted;
        musicIcon.src = isMuted
            ? "../assets/svg/musicNX.svg"
            : "../assets/svg/musicB.svg";
    });
});
