/* ==========================================
   RIA AGUSTIN PORTFOLIO
   script.js
========================================== */

/* ==========================================
   LOADING SCREEN
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 700);

});

/* ==========================================
   TYPING EFFECT
========================================== */

const typingText = [

    "Digital Marketing Specialist",

    "Social Media Specialist",

    "Content Marketing",

    "Performance Marketing",

    "SEO Enthusiast",

    "Growth Marketing"

];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typingEffect() {

    const current = typingText[textIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex);

        charIndex++;

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= typingText.length) {

                textIndex = 0;

            }

        }

    }

    setTimeout(typingEffect, deleting ? 40 : 90);

}

typingEffect();

/* ==========================================
   STICKY NAVBAR
========================================== */

const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});

/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const totalHeight =

        document.documentElement.scrollHeight -

        window.innerHeight;

    const progress =

        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =

            section.offsetTop - 120;

        const sectionHeight =

            section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (

            link.getAttribute("href") ===

            "#" + current

        ) {

            link.classList.add("active");

        }

    });

});

/* ==========================================
   DARK MODE
========================================== */

const darkModeBtn = document.getElementById("darkMode");

// Cek preferensi yang tersimpan
if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    darkModeBtn.textContent = "☀️";

}

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        darkModeBtn.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "light");

        darkModeBtn.textContent = "🌙";

    }

});

/* ==========================================
   REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(

    "section, .project-card, .skill-card, .timeline-item, .certificate-card"

);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const backButton = document.createElement("button");

backButton.innerHTML = "↑";

backButton.className = "back-top";

document.body.appendChild(backButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backButton.classList.add("show");

    } else {

        backButton.classList.remove("show");

    }

});

backButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================
   HAMBURGER MENU
========================================== */

const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    hamburger.classList.toggle("open");

});

// Tutup menu setelah klik

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        hamburger.classList.remove("open");

    });

});

