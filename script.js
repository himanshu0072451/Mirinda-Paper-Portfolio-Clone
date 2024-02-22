document.addEventListener("DOMContentLoaded", function () {
  const mainScroll = document.querySelector(".main");

  const navTemp = document.getElementById("temp");
  const nav = document.getElementById("navbar");

  const scroll = new LocomotiveScroll({
    el: mainScroll,
    smooth: true,
  });

  mainScroll.addEventListener("scroll", () => {
    navTemp.style.display = "flex";
    nav.style.display = "none";

    if (mainScroll.offsetWidth === 480) {
      alert("hello!");
    }
  });

  const rotate = () => {
    gsap
      .timeline()
      .to(".page-1", { y: "100vh", scale: 0.2, duration: 1 })
      .to(".page-1", { y: "-100vh", duration: 1, delay: 1, scale: 1 })
      .to(".page-1", { y: "0vh", rotate: 360, scale: 1, duration: 0.8 });
  };

  rotate();

  gsap.set(".main-ani h1, .main-ani img", { x: 0 });

  const mainAnimation = gsap
    .timeline({ paused: true })
    .to(".main-ani h1", { x: "200vh", duration: 1.5 }, "labelName")
    .to(".main-ani img", { x: "60vh", duration: 1 }, "labelName");

  const container = document.querySelector(".main-ani");
  container.addEventListener("mouseenter", () => mainAnimation.play());
  container.addEventListener("mouseleave", () => mainAnimation.reverse());

  const setLeft = (elem, left) => {
    elem.style.left = left;
  };

  const slideAnimation = () => {
    const elem1 = document.getElementById("elem-1");
    const elem2 = document.getElementById("elem-2");
    const elem3 = document.getElementById("elem-3");
    const elem4 = document.getElementById("elem-4");

    elem1.addEventListener("mouseenter", () => {
      setLeft(elem2, "41%");
      setLeft(elem3, "52%");
      setLeft(elem4, "70%");
    });

    elem1.addEventListener("mouseleave", () => {
      setLeft(elem2, "20%");
      setLeft(elem3, "37%");
      setLeft(elem4, "54%");
    });

    elem2.addEventListener("mouseenter", () => {
      setLeft(elem3, "61%");
      setLeft(elem4, "81%");
    });

    elem2.addEventListener("mouseleave", () => {
      setLeft(elem3, "41%");
      setLeft(elem4, "53%");
    });

    elem3.addEventListener("mouseenter", () => {
      setLeft(elem4, "84%");
    });

    elem3.addEventListener("mouseleave", () => {
      setLeft(elem4, "54%");
    });
  };

  slideAnimation();
});
