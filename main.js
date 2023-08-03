let element = document.body;
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");

color1.value = localStorage.getItem("color1");
color2.value = localStorage.getItem("color2");
let value =
  "linear-gradient(to bottom right, " +
  color1.value +
  ", " +
  color2.value +
  ")";
element.style.backgroundImage = value;

function setBackground() {
  localStorage.setItem("color1", color1.value);
  localStorage.setItem("color2", color2.value);
  color1.value = localStorage.getItem("color1");
  color2.value = localStorage.getItem("color2");
  let value =
    "linear-gradient(to bottom right, " +
    color1.value +
    ", " +
    color2.value +
    ")";
  element.style.backgroundImage = value;
}

color1.addEventListener("change", setBackground);
color2.addEventListener("change", setBackground);
