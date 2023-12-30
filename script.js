function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()





var clutter = "";

document.querySelector("#page2 h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2 h1").innerHTML = clutter;
})

gsap.to("#page2 h1 span",{
    scrollTrigger: {
      trigger: "#page2 h1",
     start: `top bottom`,
      end: `bottom 70%`,
      scroller: `#main`,
      scrub: .5,
     },
     stagger: .2,
      color: `#fff`
})

var clutter = "";

document.querySelector("#about-p").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#about-p").innerHTML = clutter;
})

gsap.to("#about-p span",{
    scrollTrigger: {
      trigger: "#about-p",
     start: `top bottom`,
      end: `bottom 70%`,
      scroller: `#main`,
      scrub: .5,},
     stagger: .2,
      color: `#fff`,
})




 gsap.from("#left *",{
x:-200,
duration:1,
  stagger: .2,
})
gsap.from("#right *",{
 x: 200,
 duration: 2,
  stagger: .2,
 

})
gsap.from("header *",{
 y: -100,
 duration: .5,
  stagger: .2,
 
})






gsap.from(".hero-2 > img",{
x: -200,
  stagger: 1,
  duration: 1,
scrollTrigger: {
 trigger: ".hero-2",
 scroller: "#main",
 start: "top 80%",
 end: "top 20%",
 // markers:true,
 scrub: 2,
}
})




gsap.from("#icn-box .icn",{
x:-500,
  stagger: .7,
  duration: 1,
scrollTrigger: {
 trigger: "#icn-box",
 scroller: "#main",
 start: "top 100%",
 end: "top 40%",
 // markers:true,
 scrub: 2,
}
})

// gsap.from(".about-p",{
// opacity:0,
//   stagger: .7,
//   duration: 2,
// scrollTrigger: {
//  trigger: ".about-p",
//  scroller: "#main",
//  start: "top 80%",
//  // end: "top 40%",
//  // markers:true,
//  scrub: 2,
// }
// })

 

function loadCourse(){
  // Your Firebase config here
  const firebaseConfig = {
   apiKey: "AIzaSyD-NSuXyWJtEb03OCk55uREmBepPnvFeek",
   authDomain: "ytschool-ecb26.firebaseapp.com",
   databaseURL: "https://ytschool-ecb26-default-rtdb.firebaseio.com",
   projectId: "ytschool-ecb26",
   storageBucket: "ytschool-ecb26.appspot.com",
   messagingSenderId: "111162453586",
   appId: "1:111162453586:web:9b72ec2c1aef899c22798b",
   measurementId: "G-NYW5DTK5L1"
  };
 
  firebase.initializeApp(firebaseConfig);
 
  var database = firebase.database();
 
  // Reference to the 'course' node in the database
  const coursesRef = database.ref('course');
 
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const courseId = urlParams.get('id');
 
 
  const allContainer = document.getElementById('all');
  const loadingText = document.getElementById('loadingText');
 
 
  // Check if courseId has a value
  if (courseId) {
 
  } else {
   
  } 
   // Show loading text while fetching data
   loadingText.style.display = 'block';
 
   // Fetch and display courses
   coursesRef.once('value', function(snapshot) {
      var courses = snapshot.val();
 
      // Hide loading text
      loadingText.style.display = 'none';
 
      // Loop through each course and create HTML elements
       for (const courseId in courses) {
        const course = courses[courseId];
        const courseElement = document.createElement('div');
        courseElement.className = 'div-block';
        courseElement.innerHTML = `
                                           <img src="${course.image}" loading="lazy" alt="${course.name}" class="image-3">
                                                       <p class="paragraph-2">${course.name}</p>
                                                       <div class="div-block-2">
                                                           <p class="paragraph-3"><i class="fa-solid fa-rupee-sign"></i> :  ${course.mode === 'free' ? 'Free' : `${course.dPrice}`}</p>
                                                           <p class="paragraph-3"><i class="fa-regular fa-clock"></i> : 2 Hours/ Day</p>
                                                       </div>
                                                       <a href="${course.pLink1}" target="_blank" class="border-cta full-width w-button">Enroll Now</a>
                                         `;
      
        allContainer.appendChild(courseElement);
       }
       });
       }

loadCourse();



function cursorEffect(){
 var page1Content = document.querySelector("#hero");
 var cursor = document.querySelector("#cursor");
 page1Content.addEventListener("mousemove", function(dets) {
  gsap.to(cursor, {
   x: dets.x,
   y: dets.y,
  })
 });
 
 page1Content.addEventListener("mouseenter", function() {
  gsap.to(cursor, {
   scale: 1,
   opacity: 1
  })
 })
 page1Content.addEventListener("mouseleave", function() {
  gsap.to(cursor, {
   scale: 0,
   opacity: 0
  })
 })
};
cursorEffect();

