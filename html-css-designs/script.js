function darkmode() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
}
function lightmode() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
}

document.querySelector(".dark").setAttribute("onclick", "darkmode()");
document.querySelector(".light").addEventListener("click", lightmode);