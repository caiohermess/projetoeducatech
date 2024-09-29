// Função de reprodução de áudio
let currentAudio = null;

function playAudio(audioElement) {
    if (currentAudio && currentAudio !== audioElement) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    
    audioElement.play();
    currentAudio = audioElement;
}

// Adicionando um event listener para o botãodo professor
document.getElementById('play-audio-btn').addEventListener('click', () => {
    const audioInst = document.getElementById('audioInst');
    playAudio(audioInst);
});

// Adicionando event listeners para os botões de áudio
const audioCount = 27;

for (let i = 0; i <= audioCount; i++) {
    const button = document.getElementById(`play-audio-btn${i}`);
    if (button) {
        const audio = document.getElementById(i === 27 ? 'audioAgrad' : `audio${i}`); // Específico para o botão 27
        button.addEventListener('click', () => {
            playAudio(audio);
        });
    }
}