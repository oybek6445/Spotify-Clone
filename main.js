// script.js

document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.player-btn:nth-child(2)');
    let isPlaying = false;
  
    playButton.addEventListener('click', () => {
      isPlaying = !isPlaying;
      playButton.textContent = isPlaying ? '⏸' : '⏯';
    });
  });
  // script.js

document.addEventListener('DOMContentLoaded', () => {
    const playButtons = document.querySelectorAll('.play-song-btn');
    const currentSongDisplay = document.getElementById('current-song');
    const audioPlayer = new Audio();
  
    playButtons.forEach(button => {
      button.addEventListener('click', () => {
        const songElement = button.parentElement;
        const songSrc = songElement.getAttribute('data-src');
        const songName = songElement.querySelector('p').textContent;
  
        // Agar boshqa qo'shiqni o'ynashni bosilsa, yangisini o'ynatadi
        if (audioPlayer.src.includes(songSrc)) {
          if (!audioPlayer.paused) {
            audioPlayer.pause();
            button.textContent = '▶️';
          } else {
            audioPlayer.play();
            button.textContent = '⏸';
          }
        } else {
          audioPlayer.src = songSrc;
          audioPlayer.play();
          currentSongDisplay.textContent = `Now playing: ${songName}`;
          playButtons.forEach(btn => (btn.textContent = '▶️')); // Hamma tugmalarni reset qilish
          button.textContent = '⏸';
        }
  
        // Qo'shiq tugagandan keyin avtomatik to'xtash
        audioPlayer.onended = () => {
          button.textContent = '▶️';
          currentSongDisplay.textContent = 'No song playing';
        };
      });
    });
  });
  