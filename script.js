// Create floating particles
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 20;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 2 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.bottom = `-10px`;
    const duration = Math.random() * 10 + 10;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;

    particlesContainer.appendChild(particle);
  }
}

// Simulate loading progress
function updateProgress() {
  const progressText = document.querySelector('.progress-text');
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 10;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
    }
    progressText.textContent = `Loading your cinematic experience... ${Math.min(progress, 100).toFixed(0)}%`;
  }, 300);
}

// Audio toggle
function setupAudio() {
  const audio = document.getElementById('loadingAudio');
  const audioControl = document.getElementById('audioControl');
  let audioPlaying = false;

  function tryPlayAudio() {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          audioPlaying = true;
          audioControl.innerHTML = '<i class="fas fa-volume-up"></i>';
        })
        .catch(() => {
          audioPlaying = false;
          audioControl.innerHTML = '<i class="fas fa-volume-mute"></i>';
        });
    }
  }

  tryPlayAudio();

  audioControl.addEventListener('click', () => {
    if (audioPlaying) {
      audio.pause();
      audioPlaying = false;
      audioControl.innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else {
      tryPlayAudio();
    }
  });

  return audio;
}

document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  updateProgress();
  const audio = setupAudio();

  setTimeout(() => {
    audio.pause();
    window.location.href = "https://genuine-mandazi-57d984.netlify.app/";
  }, 5000);
});
