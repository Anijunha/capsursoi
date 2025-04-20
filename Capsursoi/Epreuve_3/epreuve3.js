document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const nextArrow = document.getElementById("nextArrow");
    const prevArrow = document.getElementById("prevArrow");
    const pauseButton = document.getElementById("pauseButton");
    const musicButton = document.getElementById("musicButton");
    const pauseIcon = document.getElementById("pauseIcon");
    const musicIcon = document.getElementById("musicIcon");

    let currentIndex = 0;
    let isPaused = false;
    let isMuted = false;
    let audioStarted = false;

    localStorage.removeItem("audioPosition");

    const audio = new Audio("../assets/sounds/loneliness.wav");
    audio.loop = true;
    audio.volume = 0;
    audio.currentTime = 0;
    window.sharedAudio = audio;

    const fadeIn = () => {
        const targetVolume = 0.3;
        const step = 0.01;
        const interval = 200;
        const fade = setInterval(() => {
            if (audio.volume < targetVolume) {
                audio.volume = Math.min(audio.volume + step, targetVolume);
            } else {
                clearInterval(fade);
            }
        }, interval);
    };

    const startAudioIfNeeded = () => {
        if (!audioStarted) {
            audio.play()
                .then(() => {
                    fadeIn();
                    audioStarted = true;
                })
                .catch(err => console.warn("Audio play bloqué :", err));
        }
    };

    function updateSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");

        prevArrow.style.display = index === 0 ? "none" : "block";  
        nextArrow.style.display = index === slides.length - 1 ? "none" : "block";  
    }

    updateSlide(currentIndex);

    nextArrow.addEventListener("click", () => {
        startAudioIfNeeded();
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlide(currentIndex);
        } else {
            localStorage.setItem("audioPosition", audio.currentTime);
            window.location.href = "../Portes/porte3.html";
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
        musicIcon.src = isMuted
            ? "../assets/svg/musicNX.svg"
            : "../assets/svg/musicB.svg";
        audio.muted = isMuted;
    });
});
