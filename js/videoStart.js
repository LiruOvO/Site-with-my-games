//Запускає відео лише при наведенні курсора на блок
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".main.rectangle");
    const video = container.querySelector("video");

    // Зупинити відео при старті
    video.pause();

    container.addEventListener("mouseenter", () => {
        video.currentTime = 0; // Почати спочатку
        video.play();
    });

    container.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0; // Скинути на початок
    });
});
