document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // intro

  // GSAP 파도 효과 적용
  gsap.from(".intro", {
    duration: 2,
  });
  gsap.fromTo(
    ".intro_top_text_1",
    {
      x: "-170%",
      y: "-400%",
      z: "-700px",
      scale: 2,
      opacity: 0,
    },
    {
      delay: 0.4,
      duration: 1,
      x: "0%",
      y: "0%",
      z: "0",
      ease: "power2.out",
      scale: 1,
      opacity: 1,
    }
  );
  gsap.fromTo(
    ".intro_top_text_2",
    {
      x: "60%",
      y: "400%",
      z: "-1200px",
      scale: 2,
      opacity: 0,
    },
    {
      delay: 0.7,
      duration: 1,
      x: "0%",
      y: "0%",
      z: "0",
      ease: "power2.out",
      scale: 1,
      opacity: 1,
    }
  );
  gsap.fromTo(
    ".intro_top_text_3",
    {
      x: "-50%",
      y: "300%",
      z: "-700px",
      scale: 2,
      opacity: 0,
    },
    {
      delay: 0.6,
      duration: 1,
      x: "0%",
      y: "0%",
      z: "0",
      ease: "power2.out",
      scale: 1,
      opacity: 1,
    }
  );
  gsap.fromTo(
    ".intro_bottom_text_1",
    {
      x: "50%",
      y: "-800%",
      z: "-700px",
      scale: 2,
      opacity: 0,
    },
    {
      delay: 0.4,
      duration: 1,
      x: "0%",
      y: "0%",
      z: "0",
      ease: "power2.out",
      scale: 1,
      opacity: 1,
    }
  );
  gsap.fromTo(
    ".intro_bottom_text_2",
    {
      x: "200%",
      y: "-300%",
      z: "-700px",
      scale: 2,
      opacity: 0,
    },
    {
      delay: 0.5,
      duration: 1,
      x: "0%",
      y: "0%",
      z: "0",
      ease: "power2.out",
      scale: 1,
      opacity: 1,
    }
  );
  gsap.to(".intro_top span,.intro_bottom span ", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.05,
    delay: 2,
    ease: "easeOut",
    repeat: 1,
    yoyo: true,
  });
});
