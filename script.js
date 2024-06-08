function askKerangAjaib() {
    const answers = [
        { text: "Iya.", sound: "soundIya" },
        { text: "Kurasa tidak.", sound: "soundTidak" },
        { text: "Coba tanya lagi.", sound: "soundTanyaLagi" },
        { text: "Mungkin suatu hari.", sound: "soundMungkinSuatuHari" }
    ];

    const question = document.getElementById('question').value.trim();
    
    if (question) {
        const randomIndex = Math.floor(Math.random() * answers.length);
        const answer = answers[randomIndex];
        document.getElementById('answer').textContent = answer.text;

        // Memutar suara yang sesuai
        const audioElement = document.getElementById(answer.sound);
        if (audioElement) {
            audioElement.play();
        }
    } else {
        document.getElementById('answer').textContent = "Tanyakan sesuatu terlebih dahulu.";
    }
}
