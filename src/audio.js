// 音效
export function playSound(newRandomNumber) {
    const audioPath = `./audio/spvoice_${newRandomNumber}.mp3`;
    const audio = new Audio(audioPath);
    audio.play();
}