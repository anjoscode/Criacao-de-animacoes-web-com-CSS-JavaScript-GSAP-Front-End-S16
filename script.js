document.addEventListener("DOMContentLoaded", () => {
  gsap.to("form input, #entrar", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
  });

  const button = document.querySelector("#entrar");

  button.onclick = function (event) {
    event.preventDefault();
    button.textContent = "Carregando...";
    button.classList.add("loading");

    setTimeout(() => {
      button.textContent = "Entrar";
      button.classList.remove("loading");
    }, 3000);
  };

  button.onmouseover = () => {
    gsap.to(button, {
      scale: 1.1,
      duration: 0.2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  };

  button.onmouseout = () => {
    gsap.killTweensOf(button);
    gsap.to(button, { scale: 1, duration: 0.2 });
  };
});