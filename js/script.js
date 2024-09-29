gsap.registerPlugin(ScrollTrigger);

// DOMContentLoaded Event to ensure all elements are loaded before manipulating them
window.addEventListener('DOMContentLoaded', () => {

  /* === GSAP Animations === */

  // Continuous text animation along the path (for "#lntxt")
  gsap.to("#lntxt", {
    duration: 10,
    ease: "linear",
    attr: { startOffset: "-110%" },  // Moves text along the path from 0% to -110%
    repeat: -1  // Infinite loop
  });

  // Circular text animation with ScrollTrigger (for "#cir")
  gsap.to("#cir", {
    duration: 2,  // Rotation speed
    ease: "sine.inOut",
    attr: { startOffset: "-100%" },  // Moves the text continuously
    scrollTrigger: {
      trigger: '#ac-btm',  // Triggers when #ac-btm reaches the viewport
      start: 'top 95%',
      end: 'bottom center',
      scrub: 3
    }
  });

  /* === Mouse Tracking and 3D Rotation (For Page 1) === */

  const page1 = document.querySelector('#page1');
  page1.addEventListener('mousemove', (e) => {
    const svg1 = page1.querySelector('.svg1');
    const rect = page1.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * 25;
    const rotateY = ((rect.width / 2 - x) / (rect.width / 2)) * 25;

    svg1.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  page1.addEventListener('mouseleave', () => {
    page1.querySelector('.svg1').style.transform = 'rotateX(0deg) rotateY(0deg)';
  });

  /* === GSAP Scroll Animations === */

  // Hero section animation (h1 in #hero-center)
  gsap.from("#hero-center h1", {
    duration: 1,
    filter: 'blur(2px)',
    y: 20,
    ease: "fade in"
  });

  // SVG animation in .svg3
  gsap.from(".svg3", {
    duration: 1,
    x: 100,
    ease: "fade in"
  });

  // Scroll-triggered animation for #ac-top
  gsap.from("#ac-top", {
    duration: 1,
    filter: 'blur(5px)',
    y: 100,
    ease: "power2",
    scrollTrigger: {
      trigger: "#ac-top",
      start: "top 100%",
      end: "top 20%",
      scrub: 2
    }
  });

  // Scroll-triggered CTA section animation
  gsap.from(".cta *", {
    y: 50,
    duration: 1,
    ease: "none",
    filter: 'blur(2px)',
    scrollTrigger: {
      trigger: ".cta",
      start: "top 80%",
      end: "bottom 90%",
      scrub: 2,
    }
  });

  /* === Button and Link Hover Animations === */

  // Function to split text into spans for each character
  function splitText(element) {
    const text = element.innerText;
    element.innerHTML = '';
    text.split('').forEach(char => {
      const span = document.createElement('span');
      span.classList.add('char');
      span.innerText = char === ' ' ? '\u00A0' : char;  // Handle spaces
      element.appendChild(span);
    });
  }

  // Apply splitText and hover animations to each button with class 'button1'
  document.querySelectorAll('.button1').forEach(button => {
    const bt1 = button.querySelector('.bt1');
    const bt2 = button.querySelector('.bt2');
    
    splitText(bt1);
    splitText(bt2);

    // Mouseenter: Animate each character individually for bt1 and bt2
    button.addEventListener("mouseenter", () => {
      gsap.to(bt1.querySelectorAll('.char'), {
        duration: 0.5,
        y: '-100%',
        stagger: 0.05,
        ease: "power2.out"
      });

      gsap.to(bt2.querySelectorAll('.char'), {
        duration: 0.5,
        y: '-100%',
        stagger: 0.05,
        ease: "power2.out"
      });
    });

    // Mouseleave: Reset characters' positions
    button.addEventListener("mouseleave", () => {
      gsap.to(bt1.querySelectorAll('.char'), {
        duration: 0.5,
        y: 0,
        stagger: 0.05,
        ease: "power2.out"
      });

      gsap.to(bt2.querySelectorAll('.char'), {
        duration: 0.5,
        y: 0,
        stagger: 0.05,
        ease: "power2.out"
      });
    });
  });


  var mySwiper = new Swiper('.reviews-slider', {
      speed: 800,
      slidesPerView: 3,
      spaceBetween: 40,
      loop:true,

      // Responsive breakpoints
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });
  });
