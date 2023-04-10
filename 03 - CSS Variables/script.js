document.querySelector(":root").style.setProperty("--color", "blue");
document.querySelector(":root").style.setProperty("--border", "5px");

let blurAmount = 0;
let border = 0;
let color = "yellow";

document.getElementById("blur").addEventListener("change", (e) => {
  blurAmount = e.target.value;
  document
    .querySelector(":root")
    .style.setProperty("--blur", `${blurAmount}px`);
});

document.getElementById("spacing").addEventListener("change", (e) => {
  borderAmount = e.target.value;
  document
    .querySelector(":root")
    .style.setProperty("--border", `${borderAmount}px`);
});

document.getElementById("base").addEventListener("change", (e) => {
  colorValue = e.target.value;
  document.querySelector(":root").style.setProperty("--color", `${colorValue}`);
});
