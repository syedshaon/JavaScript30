const allBtns = document.querySelectorAll(".key");

allBtns.forEach((element) => {
  element.addEventListener("click", (e) => {
    document.querySelector(`audio[data-key='${element.dataset.key}']`).play();
    element.classList.add("playing");
    setTimeout(() => {
      element.classList.remove("playing");
    }, 300);
  });
});
