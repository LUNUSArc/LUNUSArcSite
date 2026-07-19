"use strict";

function getSiteRootPath() {
    const pathParts = window.location.pathname
        .split("/")
        .filter(Boolean);

    /*
        Works with Live Server:
        /games/kop/

        Also works with GitHub Pages:
        /repository-name/games/kop/
    */

    const githubPagesHost =
        window.location.hostname.endsWith("github.io");

    if (githubPagesHost && pathParts.length > 0) {
        return `/${pathParts[0]}`;
    }

    return "";
}

function getCurrentSection() {
    const pathParts = window.location.pathname
        .split("/")
        .filter(Boolean);

    const knownSections = [
        "home",
        "games",
        "merch",
        "team",
        "collabs"
    ];

    return (
        pathParts.find((part) =>
            knownSections.includes(part)
        ) || "home"
    );
}

async function loadComponent(elementId, componentFile) {
    const targetElement =
        document.getElementById(elementId);

    if (!targetElement) {
        return;
    }

    const siteRoot = getSiteRootPath();
    const componentPath =
        `${siteRoot}/shared/${componentFile}`;

    try {
        const response = await fetch(componentPath);

        if (!response.ok) {
            throw new Error(
                `Could not load ${componentPath}`
            );
        }

        targetElement.innerHTML =
            await response.text();
    } catch (error) {
        console.error(error);

        targetElement.innerHTML = `
            <p class="component-error">
                Shared component failed to load.
            </p>
        `;
    }
}

function updateSharedLinks() {
    const siteRoot = getSiteRootPath();

    document
        .querySelectorAll("[data-site-path]")
        .forEach((element) => {
            const destination =
                element.dataset.sitePath;

            element.setAttribute(
                "href",
                `${siteRoot}/${destination}/`
            );
        });

    const logo =
        document.querySelector(
            "[data-branding-image]"
        );

    if (logo) {
        logo.src =
            `${siteRoot}/assets/images/branding/LUNUSArc logo.png`;
    }
}

function setActiveNavigationLink() {
    const currentSection =
        getCurrentSection();

    document
        .querySelectorAll(".nav-link")
        .forEach((link) => {
            const active =
                link.dataset.page ===
                currentSection;

            link.classList.toggle(
                "active",
                active
            );

            if (active) {
                link.setAttribute(
                    "aria-current",
                    "page"
                );
            } else {
                link.removeAttribute(
                    "aria-current"
                );
            }
        });
}

async function initializeSharedComponents() {
    await Promise.all([
        loadComponent(
            "shared-navbar",
            "navbar.html"
        ),

        loadComponent(
            "shared-footer",
            "footer.html"
        )
    ]);

    updateSharedLinks();
    setActiveNavigationLink();
}

document.addEventListener(
    "DOMContentLoaded",
    initializeSharedComponents
);