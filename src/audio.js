// 音效
export function playSound(newRandomNumber) {
    if (newRandomNumber < 7) {
        const audioPath = `./audio/spvoice_${newRandomNumber}.mp3`;
        const audio = new Audio(audioPath);
        audio.play();
    }
    else {
        const noraudio = newRandomNumber - 6;
        const audioPath = `./audio/norvoice_${noraudio}.mp3`;
        const audio = new Audio(audioPath);
        audio.play();
    }
}