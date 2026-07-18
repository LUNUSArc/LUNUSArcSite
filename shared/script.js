"use strict";

/*
    Returns the name of the current page folder.

    Examples:
    /home/ becomes "home"
    /games/ becomes "games"
*/

function getCurrentPageName() {
    const pathParts = window.location.pathname
        .split("/")
        .filter(Boolean);

    return pathParts[pathParts.length - 1] || "home";
}

/*
    Loads an external HTML file into an element.
*/

async function loadComponent(elementId, filePath) {
    const targetElement = document.getElementById(elementId);

    if (!targetElement) {
        console.error(`Element #${elementId} was not found.`);
        return;
    }

    try {
        const response = await fetch(filePath);

        if (!response.ok) {
            throw new Error(
                `Could not load ${filePath}. Status: ${response.status}`
            );
        }

        targetElement.innerHTML = await response.text();
    } catch (error) {
        console.error(error);

        targetElement.innerHTML = `
            <p class="component-error">
                Shared component failed to load.
            </p>
        `;
    }
}

/*
    Highlights the navigation link belonging
    to the current page.
*/

function setActiveNavigationLink() {
    const currentPage = getCurrentPageName();

    const navigationLinks =
        document.querySelectorAll(".nav-link");

    navigationLinks.forEach((link) => {
        const isCurrentPage =
            link.dataset.page === currentPage;

        link.classList.toggle(
            "active",
            isCurrentPage
        );

        if (isCurrentPage) {
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

/*
    Loads all shared site components.
*/

async function initializeSharedComponents() {
    await Promise.all([
        loadComponent(
            "shared-navbar",
            "../shared/navbar.html"
        ),

        loadComponent(
            "shared-footer",
            "../shared/footer.html"
        )
    ]);

    setActiveNavigationLink();

    console.log(
        "LUNUS Arc shared components loaded."
    );
}

document.addEventListener(
    "DOMContentLoaded",
    initializeSharedComponents
);