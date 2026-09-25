// MOBILE MENU

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuButton.textContent = "CLOSE";
    } else {
        menuButton.textContent = "MENU";
    }
});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

const links = navLinks.querySelectorAll("a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuButton.textContent = "MENU";
    });
});


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".about-content, .statement p, .project-card, .process-item, .feedback blockquote, .service, .resource, .contact h2"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {
    element.classList.add("reveal");
    observer.observe(element);
});


// PROJECT IMAGE MOUSE EFFECT

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {

    card.addEventListener("mousemove", function (event) {

        const image = card.querySelector(".project-image");

        if (!image) return;

        const rect = image.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const moveX = (x - rect.width / 2) * 0.015;
        const moveY = (y - rect.height / 2) * 0.015;

        image.style.transform =
            `translate(${moveX}px, ${moveY}px)`;

    });


    card.addEventListener("mouseleave", function () {

        const image = card.querySelector(".project-image");

        if (!image) return;

        image.style.transform = "translate(0, 0)";

    });

});
// SERVICE BUTTON INTERACTION

const serviceButtons = document.querySelectorAll(".service-button");

serviceButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const service = button.closest(".service");

        service.classList.toggle("active");

        if (service.classList.contains("active")) {

            button.textContent = "CLOSE ↑";

        } else {

            button.textContent = "CLICK →";

        }

    });

});