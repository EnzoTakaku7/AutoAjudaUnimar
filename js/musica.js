window.addEventListener('load', function() {
    // Define o estado inicial do checkbox com base no localStorage
    var checkbox = document.getElementById('checkbox_musica');
    checkbox.checked = localStorage.getItem('musicEnabled') === 'true';

    // Atualiza o estado do áudio com base no estado do checkbox
    updateAudio();
});

function toggleMusic() {
    var checkbox = document.getElementById('checkbox_musica');
    localStorage.setItem('musicEnabled', checkbox.checked);
    updateAudio();
}

function updateAudio() {
    var audioElements = document.querySelectorAll('audio');
    audioElements.forEach(function(audio) {
        if (localStorage.getItem('musicEnabled') === 'true') {
            audio.volume = 0;
        } else {
            audio.volume = 0.1;
        }
    });
}