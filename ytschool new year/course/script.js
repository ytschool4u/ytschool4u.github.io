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
 
 const cMainContainer = document.getElementById('c-main');
 const allContainer = document.getElementById('all');
 const loadingText = document.getElementById('loadingText');
 
 // Function to load data based on ID
 function loadDataById(courseId) {
  coursesRef.orderByChild('id').equalTo(courseId).once('value', (snapshot) => {
   // The snapshot.val() contains the data
   const courseData = snapshot.val();
 
   // Process and display the data, e.g., update DOM elements
   if (courseData) {
    const course = courseData[Object.keys(courseData)[0]]; // Assuming one course per ID

 
    // Example: Update your DOM elements with details of the selected course
    document.querySelector('.image-3').src = course.image;
    document.querySelector('#c-name').innerText = course.name;
    document.querySelector('#c-price').innerHTML = `<i class="fa-solid fa-rupee-sign"></i> : ${course.mode === 'free' ? 'Free' : `${course.dPrice}`}`;
    document.querySelector('#des').innerHTML = `${course.description}`;
    document.querySelector('#enroll').innerHTML= `<a href='${course.pLink1}'>Enroll Now<\a>`;
   
    // ... Update other elements as needed
   } else {
    console.log('Course not found');
   }
 
   // Hide loading text
   loadingText.style.display = 'none';
  });
 }
 
 // Check if courseId has a value
 if (courseId) {
  // courseId has a value, hide 'all-course', show 'c-main'
  cMainContainer.style.display = 'block';
 
 
 
  // Fetch and display data for the specific course ID
  loadDataById(courseId);
 } else {
  // courseId is empty, hide 'c-main'
  cMainContainer.style.display = 'none';}
 
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
           <p class="paragraph-3"><i class="fa-solid fa-rupee-sign"></i> : ${course.mode === 'free' ? 'Free' : `${course.dPrice}`}</p>
           <p class="paragraph-3"><i class="fa-regular fa-clock"></i> : 2 Hours/ Day</p>
         </div>
         <a href="${course.pLink1}" target="_blank" class="border-cta full-width w-button">Enroll Now</a>
       `;
 
    allContainer.appendChild(courseElement);
   }
  });
 