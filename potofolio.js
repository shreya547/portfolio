// ==============================
// Smooth Scrolling
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});

// ==============================
// Typing Effect
// ==============================

const roles = [

    "Full Stack Developer",

    "AI Enthusiast",

    "Web Developer",

    "CSE Student"

];

let roleIndex = 0;

let charIndex = 0;

const typingElement = document.querySelector(".hero-content h2");

function typeEffect() {

    if (!typingElement) return;

    if (charIndex < roles[roleIndex].length) {

        typingElement.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    }

    else {

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect() {

    if (charIndex > 0) {

        typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    }

    else {

        roleIndex++;

        if (roleIndex >= roles.length)

            roleIndex = 0;

        setTimeout(typeEffect, 300);

    }

}

typingElement.textContent = "";

typeEffect();


// ==============================
// Scroll Animation
// ==============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = window.scrollY;

        const offset = section.offsetTop - 250;

        if (top > offset) {

            section.style.opacity = "1";

            section.style.transform = "translateY(0px)";

        }

    });

});

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(40px)";

    section.style.transition = "1s";

});

// ==============================
// Active Navbar Link
// ==============================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==============================
// Contact Form
// ==============================

const form = document.getElementById("contact-form");

if (form) {

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you! Your message has been submitted.");

form.reset();

});

}

// ==============================
// Scroll To Top Button
// ==============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (document.documentElement.scrollTop > 300) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==============================
// Project Card Hover
// ==============================

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});

// ==============================
// Certificate Hover
// ==============================

const certificates = document.querySelectorAll(".certificate-card");

certificates.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// ==============================
// Welcome Message
// ==============================

window.onload = () => {

    console.log("Portfolio Loaded Successfully!");

};
const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const data = {

            name: document.getElementById("name").value,

            email: document.getElementById("email").value,

            message: document.getElementById("message").value

        };

        try {

            const response = await fetch("http://localhost:5000/contact", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)

            });

            const result = await response.json();

            alert(result.message);

            form.reset();

        }

        catch (error) {

            alert("Unable to connect to the server.");

        }

    });

}