const discordButton = document.querySelector("[data-discord-copy]");

if (discordButton) {
    const discordLabel = discordButton.querySelector(
        "[data-discord-label]"
    );

    const originalLabel = discordLabel.textContent;

    discordButton.addEventListener("click", async () => {
        const username = discordButton.dataset.discordUsername;

        try {
            await navigator.clipboard.writeText(username);

            discordLabel.textContent = "Copied";
        } catch {
            discordLabel.textContent = username;
        }

        window.setTimeout(() => {
            discordLabel.textContent = originalLabel;
        }, 1800);
    });
}