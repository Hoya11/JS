let bodyColor = document.querySelector("body");

function colorChange() {
  let boxwidth = window.innerWidth;
  console.log(boxwidth);

  if (boxwidth <= 500) {
    bodyColor.classList.contains("bodyblue");
  } else if (boxwidth > 500 && boxwidth <= 950) {
    bodyColor.classList.remove("bodyblue");
    bodyColor.classList.add("bodyteal");
  } else if (boxwidth > 950) {
    bodyColor.classList.remove("bodyteal");
    bodyColor.classList.add("bodyorange");
  }
  else{
    bodyColor.classList.remove("bodyorange");
  }
}

window.addEventListener("resize", colorChange);
