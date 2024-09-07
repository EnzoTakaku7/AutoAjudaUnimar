window.addEventListener('load', function() {
    var audio = document.getElementById('background-music');

    // Define o volume


    // Atualiza o estado do áudio com base no localStorage
    if (localStorage.getItem('musicEnabled') === 'true') {
        audio.volume = 0;
        } else {
            audio.volume = 0.1;
    }
});