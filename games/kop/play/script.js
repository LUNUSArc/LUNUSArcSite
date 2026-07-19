"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const gameShell =
        document.querySelector(".game-shell");

    const fullscreenButton =
        document.getElementById("fullscreen-button");

    if (!gameShell || !fullscreenButton) {
        return;
    }

    fullscreenButton.addEventListener("click", async () => {
        try {
            if (!document.fullscreenElement) {
                await gameShell.requestFullscreen();
            } else {
                await document.exitFullscreen();
            }
        } catch (error) {
            console.error(
                "Fullscreen could not be activated:",
                error
            );
        }
    });

    document.addEventListener("fullscreenchange", () => {
        fullscreenButton.textContent =
            document.fullscreenElement
                ? "Exit Fullscreen"
                : "Fullscreen";
    });
});