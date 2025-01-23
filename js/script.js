

// GSAP Animations
gsap.from(".bg-txt", {
  duration: 1.5,
  y: -100,
  opacity: 0,
  stagger: 0.05, // Reduced stagger for smoother animation
  scrollTrigger: {
    trigger: "#courses",
    start: "top bottom",
    
  },
});

gsap.from("#cor-top h1", {
  duration: 1,
  y: 100,
  opacity: 0,
  stagger: 0.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#cor",
    start: "top bottom",
  },
});
