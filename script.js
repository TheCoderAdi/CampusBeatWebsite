const navbar = document.querySelector(".nav");
const btn = document.querySelector(".home-btn");
const downloadBtn = document.querySelector(".download-btn");
const bar = document.querySelector(".bar");
const navSecond = document.querySelector(".nav-second");
const lists = document.querySelectorAll(".nav-second > a");

btn.addEventListener("click", () => {
  window.location.href = "https://campusbeat.vercel.app/#preview";
});
downloadBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const downloadURL = downloadBtn.querySelector("a").href;
  window.location.href = downloadURL;
});

function handleScroll() {
  const scrollY = window.scrollY;

  const scrollThreshold = 25;

  if (scrollY > scrollThreshold) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// Attach the scroll event listener to the window
window.addEventListener("scroll", handleScroll);
const movePointer = (e) => {
  const pointer = document.getElementById("pointer");
  const x = e.clientX;
  const y = e.clientY;
  gsap.to(pointer, {
    x: x,
    y: y,
    duration: 0.2,
  });
};
window.addEventListener("load", function () {
  const typewriter = document.querySelector(".typewriter");
  setTimeout(function () {
    typewriter.style.animationPlayState = "running";
  }, 2000);
});
document.addEventListener("mousemove", movePointer);

bar.addEventListener("click", function () {
  navSecond.classList.toggle("active");
});
lists.forEach((list) => {
  list.addEventListener("click", function () {
    navSecond.classList.remove("active");
  });
});
