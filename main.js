// Buttons Section
let count = 0;

function updateCounter() {
   document.getElementById("count-display").textContent = count;  
}

function increase() {
    count++;
    updateCounter();
}

function reset() {
    count = 0;
    updateCounter();
}

// Focus Sounds Section
// Rain Sound Section
function toggleRainSound() {
    const icon = document.getElementById("rain-sound-icon");
    const audio = document.getElementById("rain-sound-audio");
    
    if (audio.paused) {
        audio.play();
        icon.classList.replace("bi-cloud-drizzle", "bi-music-note-beamed");
    } else {
        audio.pause();
        icon.classList.replace("bi-music-note-beamed", "bi-cloud-drizzle");
    }
}

// Thunder Sound Section
function toggleThunderSound() {
    const icon = document.getElementById("thunder-sound-icon");
    const audio = document.getElementById("thunder-sound-audio");
    
    if (audio.paused) {
        audio.play();
        icon.classList.replace("bi-cloud-lightning-rain", "bi-music-note-beamed");
    } else {
        audio.pause();
        icon.classList.replace("bi-music-note-beamed", "bi-cloud-lightning-rain");
    }
}

// Waves Sound Section
function toggleWavesSound() {
    const icon = document.getElementById("waves-sound-icon");
    const audio = document.getElementById("waves-sound-audio");
    
    if (audio.paused) {
        audio.play();
        icon.classList.replace("bi-tsunami", "bi-music-note-beamed");
    } else {
        audio.pause();
        icon.classList.replace("bi-music-note-beamed", "bi-tsunami");
    }
}

// Wind Sound Section
function toggleWindSound() {
    const icon = document.getElementById("wind-sound-icon");
    const audio = document.getElementById("wind-sound-audio");
    
    if (audio.paused) {
        audio.play();
        icon.classList.replace("bi-wind", "bi-music-note-beamed");
    } else {
        audio.pause();
        icon.classList.replace("bi-music-note-beamed", "bi-wind");
    }
}

// Fire Sound Section
function toggleFireSound() {
    const icon = document.getElementById("fire-sound-icon");
    const audio = document.getElementById("fire-sound-audio");
    
    if (audio.paused) {
        audio.play();
        icon.classList.replace("bi-fire", "bi-music-note-beamed");
    } else {
        audio.pause();
        icon.classList.replace("bi-music-note-beamed", "bi-fire");
    }
}
























