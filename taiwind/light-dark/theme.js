// function toggleTheme() {
//   document.documentElement.classList.toggle("dark");
//   console.log("btn is CLICKED");
// }

// On load
if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.theme = isDark ? "dark" : "light";
}


function toggleTheme() {
//   const html = document.documentElement;

  // Toggle the 'dark' class on the root <html> tag
  document.documentElement.classList.toggle("dark");

  // Switch icons
  const sunIcon = document.getElementById("sunIcon");
  const moonIcon = document.getElementById("moonIcon");

  const isDark = html.classList.contains("dark");

  sunIcon.style.display = isDark ? "none" : "inline";
  moonIcon.style.display = isDark ? "inline" : "none";
}