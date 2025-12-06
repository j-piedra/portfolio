const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

//  Store color theme for future visits
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

// Save user preference on load
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

//Adding date
let myDate = document.querySelector("#date");
const yes = new Date().getFullYear();

// ========================================
// TYPEWRITER + LETRAS INTERACTIVAS
// ========================================

// document.addEventListener("DOMContentLoaded", () => {
//   const h1 = document.getElementById("typewriter-h1");
//   const h2 = document.getElementById("typewriter-h2");

//   if (!h1 || !h2) {
//     console.error("Typewriter: No se encontró h1 o h2");
//     return;
//   }

//   const text1 = h1.textContent.trim();
//   const text2 = h2.textContent.trim();

//   h1.textContent = "";
//   h2.textContent = "";

//   function typeWriter(element, text, speed = 70, callback = null) {
//     let i = 0;

//     function typer() {
//       if (i < text.length) {
//         element.textContent += text.charAt(i);
//         i++;
//         setTimeout(typer, speed);
//       } else {
//         if (callback) callback();
//       }
//     }

//     typer();
//   }

//   // Start animation
//   typeWriter(h1, text1, 80, () => {
//     typeWriter(h2, text2, 60, () => {
//       h2.style.borderRight = "none";

//       // 👉 Cuando termina TODO, recién aplicamos wrapLetters
//       wrapLetters(h1);
//       wrapLetters(h2);
//     });
//   });
//   wrapLetters(h1);
//   wrapLetters(h2);
// });

const h1 = document.getElementById("typewriter-h1");
const h2 = document.getElementById("typewriter-h2");
const t1 = document.getElementById("projects-title");
const t2 = document.getElementById("techstack-title");
const t3 = document.getElementById("about-title");

wrapLetters(h1);
wrapLetters(h2);
// wrapLetters(t1);
// wrapLetters(t2);
// wrapLetters(t3);

document.addEventListener("DOMContentLoaded", () => {
  wrapLetters(h1);
  wrapLetters(h2);
});

function wrapLetters(element) {
  const text = element.textContent;
  element.innerHTML = "";

  text.split("").forEach((char) => {
    const span = document.createElement("span");

    if (char === " ") {
      span.classList.add("space");
      span.innerHTML = "&nbsp;";
    } else {
      span.textContent = char;
    }

    element.appendChild(span);
  });

  element.classList.add("animated-title");
}

// ---- Efecto de zoom dinámico ----
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".animated-title span").forEach((span) => {
    const rect = span.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    const dist = Math.sqrt(x * x + y * y);
    const maxDist = 140;

    if (dist < maxDist) {
      const scale = 1 + (1 - dist / maxDist) * 0.2; // máx 1.8
      span.style.transform = `scale(${scale})`;
    } else {
      span.style.transform = "scale(1)";
    }
  });
});
