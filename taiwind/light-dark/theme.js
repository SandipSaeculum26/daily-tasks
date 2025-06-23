document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const sunIcon = document.getElementById("sunIcon");
  const moonIcon = document.getElementById("moonIcon");

  // On page load: set theme from localStorage
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    html.classList.add("dark");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  } else {
    html.classList.remove("dark");
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  }

  // Theme toggle function
  window.toggleTheme = function () {
    const isDark = html.classList.toggle("dark");

    // Save theme to localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Toggle icon visibility
    sunIcon.classList.toggle("hidden", isDark);
    moonIcon.classList.toggle("hidden", !isDark);
  };
});

// Theme on load
if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
}

// Toggle dark mode
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.toggle("dark");
  localStorage.theme = isDark ? "dark" : "light";

  const sunIcon = document.getElementById("sunIcon");
  const moonIcon = document.getElementById("moonIcon");

  sunIcon.style.display = isDark ? "none" : "inline";
  moonIcon.style.display = isDark ? "inline" : "none";
}

// Toggle mobile menu
function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuu = document.getElementById("menuIcon");
  const ab = document.getElementById("ab");
  mobileMenu.classList.toggle("max-h-0");
  mobileMenu.classList.toggle("min-h-screen");
  menuu.classList.toggle("fa-x");
  ab.classList.toggle("absolute");
  ab.classList.toggle("fixed");
}

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
  const menu = document.getElementById("mobileMenu");
  const menuButton = document.querySelector(".fa-bars");

  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
    menu.classList.add("max-h-0");
    menu.classList.remove("max-h-[500px]");
  }
});

function scrollCarsLeft() {
  const container = document.getElementById("carScroll");
  container.scrollBy({ left: -265, behavior: "smooth" });
}

function scrollCarsRight() {
  const container = document.getElementById("carScroll");
  container.scrollBy({ left: 265, behavior: "smooth" });
}

function closeModal() {
  const modal = document.getElementById("modalWrapper");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function openModal() {
  const modal = document.getElementById("modalWrapper");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
}

// function scrollCarsLeft() {
//   const container = document.getElementById("carScroll");
//   container.scrollBy({ left: -265, behavior: "smooth" });
// }

// function scrollCarsRight() {
//   const container = document.getElementById("carScroll");
//   container.scrollBy({ left: 265, behavior: "smooth" });
// }

// // Optional: Auto-scroll
// setInterval(() => {
//   scrollCarsRight();
// }, 3000); // Scrolls every 3 seconds

function scrolCarsLeft() {
  const container = document.getElementById("carScrol");
  container.scrollBy({ left: -210, behavior: "smooth" });
}

function scrolCarsRight() {
  const container = document.getElementById("carScrol");
  container.scrollBy({ left: 210, behavior: "smooth" });
}

// Auto-scroll with pause on hover
let autoScrollInterval;
function startAutoScroll() {
  autoScrollInterval = setInterval(scrollCarsRight, 3000);
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

window.onload = startAutoScroll;

if (typeof autoScrollInterval === "undefined") {
  let autoScrollInterval;
}
