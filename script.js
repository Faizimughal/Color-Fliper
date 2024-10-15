function changeColor() {
  let color = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
    "Purple",
    "Pink",
    "Cyan",
    "Magenta",
    "Green",
    "YellowGreen",
    "Darkgreen",
    "Brown",
    "Black",
    "White",
    "LightBlue",
    "LightGreen",
    "Lavender",
    "LightCoral",
    "LightYellow",
  ];
  let colorname = document.getElementById("colorname");
  colorname.innerHTML = color[Math.floor(Math.random() * color.length)];
  document.body.style.backgroundColor = colorname.innerHTML;
  let span = document.getElementById("colorname");
  span.style.color = colorname.innerHTML;
  if (colorname.innerHTML == "Black") {
    document.getElementById("colorname").style.color = "white";
  }
  let button = document.getElementById("btn");
  button.style.backgroundColor = colorname.innerHTML;
}
