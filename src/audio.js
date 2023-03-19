// 音效

export const playSound = (soundName) => {
    const sound = new Audio(`/sounds/${soundName}.mp3`);
    sound.play();
}
