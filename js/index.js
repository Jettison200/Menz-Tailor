let toggle = 0;
window.onscroll = changeNav;
document.getElementById("hamburger").onclick = hamburgerToggle;

window.addEventListener("load", () => {
  //Removes an element from the document

  tl.to("#loading-screen", {
    duration: 0.5,
  });
  tl.to("#loading-screen", {
    duration: 0.5,
    opacity: 0,
  });
  tl.to(
    "body",
    {
      overflowY: "auto",
    },
    "-=.5"
  );
  tl.to("#loading-screen", {
    display: "none",
  });
});

//*Sticky Nav bar
function changeNav() {
  if (
    document.documentElement.scrollTop > 300 ||
    document.body.scrollTop > 300
  ) {
    document.getElementById("main-nav").classList.add("change");
    document.getElementById("back-to-top").classList.add("change");
  } else {
    document.getElementById("main-nav").classList.remove("change");
    document.getElementById("back-to-top").classList.remove("change");
  }
}

//*Toggle hamburger menu and reveal mobile menu
function hamburgerToggle() {
  let hamburger = document.getElementById("hamburger");
  if (toggle == 0) {
    hamburger.classList.add("is-active");
    revealMenu();
    toggle++;
  } else {
    hamburger.classList.remove("is-active");
    hideMenu();
    toggle--;
  }
}

//*GSAP animations

let tl = gsap.timeline();

function revealMenu() {
  tl.to("#mobile-menu", {
    duration: 0.8,
    ease: Power1.easeInOut,
    y: "0%",
  });

  tl.to(
    ".mobile-nav-links",
    {
      duration: 0.5,
      opacity: 1,
      ease: Power4.ease,
      x: 0,
      stagger: 0.1,
    },
    "-=1.3"
  );

  tl.to(
    ".mobile-line",
    {
      duration: 0.8,
      height: "70vh",
      ease: Power1.easeInOut,
    },
    "-=.6"
  );
}

function hideMenu() {
  tl.to("#mobile-menu", {
    duration: 1,
    ease: Power2.easeOut,
    y: "-100%",
  });

  tl.to(
    ".mobile-nav-links",
    {
      duration: 0.5,
      opacity: 0,
      ease: Power4.ease,
      x: 100,
      stagger: 0.1,
    },
    "-=2.3"
  );

  tl.to(".mobile-line", {
    duration: 0.5,
    height: "0vh",
    ease: Power4.ease,
  });
}

//*Scroll Up

