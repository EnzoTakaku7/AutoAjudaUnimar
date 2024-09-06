window.addEventListener('load', function() {
    var audio = document.getElementById('background-music');

    // Define o volume
    audio.volume = 0.1;

    // Atualiza o estado do áudio com base no localStorage
    if (localStorage.getItem('musicEnabled') === 'true') {
        audio.play();
    } else {
        audio.pause();
    }
});