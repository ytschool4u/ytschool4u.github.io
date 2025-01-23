gsap.registerPlugin(ScrollTrigger);

// DOMContentLoaded Event to ensure all elements are loaded before manipulating them
window.addEventListener("DOMContentLoaded", () => {

const blockContainer = document.querySelector("#blocks");
const blockSize= 20;
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const numCols = Math.ceil(screenWidth / blockSize);
const numRows = Math.ceil(screenHeight / blockSize);
const numBlocks = numCols * numRows;


function createBlocks() {
  for (let i = 0; i < numBlocks; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.dataset.index = i;
    block.addEventListener("mouseenter",highlightRandomNeighbors);
    blockContainer.appendChild(block);
  }
}

function highlightRandomNeighbors (){
  const index = parseInt(this.dataset.index);
  const neighbors = [
    index - 1,
    index + 1,
    index - numCols,
    index + numCols,
    index - numCols - 1,
    index - numCols + 1,
    index + numCols - 1,
    index + numCols + 1,
  ].filter((i) => i >= 0 && i < numBlocks && Math.abs((i % numCols) - (index % numCols)) <= 1);

  this.classList.add("highlight");
  setTimeout(() => {
    this.classList.remove("highlight");
  }, 1000);
  shuffleArray(neighbors).slice(0, 1).forEach(nIndex => {
    const neighbor = blockContainer.children[nIndex];
    if (neighbor) {
      neighbor.classList.add("highlight");
      setTimeout(() => {
        neighbor.classList.remove("highlight");
      }, 1000);
    }
  });
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  createBlocks();




  // Continuous text animation along the path (for "#lntxt")
  gsap.to("#lntxt", {
    duration: 20,
    ease: "linear",
    attr: { startOffset: "-110%" }, // Moves text along the path from 0% to -110%
    repeat: -1, // Infinite loop
  });

  /* === GSAP Scroll Animations === */

  // Hero section animation (h1 in #hero-center)
  gsap.from("#hero-center h1", {
    duration: 1,
    filter: "blur(2px)",
    opacity:0.2,
    y: 50,
    ease: "fade in",
  });

  // SVG animation in .svg3
  gsap.from(".svg3", {
    duration: 1,
    x: 100,
    ease: "fade in",
  });



  // Scroll-triggered animation for #ac-top
  gsap.from("#ac-top *", {
    duration: 0.5,
    stagger: 0.01,
    filter: "blur(5px)",
    y: 100,
    scrollTrigger: {
      trigger: "#ac-top",
      start: "top bottom",
    },
  });

  // Scroll-triggered CTA section animation
  gsap.from(".cta *", {
    y: 20,
    stagger: 0.01,
    duration: 0.5,
    ease: "none",
    filter: "blur(1px)",
    scrollTrigger: {
      trigger: ".cta",
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play none none none",
    },
  });


  var mySwiper = new Swiper(".reviews-slider", {
    speed: 800,
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    autoplay: {
      delay: 3000, // Delay between slides in milliseconds (3 seconds here)
      disableOnInteraction: false, // Keep autoplay running even after user interaction
    },

    // Responsive breakpoints
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  gsap.from(".acp", {
    duration: 1,
    opacity:0.5,
    stagger: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".acp",
      start: "top bottom",
    },
  });



  // ChatBot

    window.__lc = window.__lc || {};
    window.__lc.license = 19002810;
    window.__lc.integration_name = "manual_onboarding";
    window.__lc.product_name = "livechat";
    ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
});