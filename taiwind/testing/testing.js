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
  
  document.documentElement.classList.toggle("dark");

  const isDark = html.classList.contains("dark");

}
