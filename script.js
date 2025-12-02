const sections = document.querySelectorAll("section");

function reveal() {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      sec.classList.add("visible");
    }
  });
}

document.addEventListener("scroll", reveal);
reveal();
