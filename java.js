function animateCounter(id, start, end, duration) {
  let element = document.getElementById(id);
  let range = end - start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let current = start;

  let timer = setInterval(() => {
    current += increment;
    element.innerText = current + "+"; // "+" ko current ke sath add karein
    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Function ko call karein
animateCounter('counter', 0, 10, 2000); // 2000 milliseconds = 2 seconds

  // Call the function to animate counter from 0 to 10 in 3 seconds
  animateCounter("counter", 0, 10, 3000);
  


        function showContent(id) {
            const contents = document.querySelectorAll('.content > div');
            contents.forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(id).classList.add('active');
          }




          // Get the button
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Show the button when the user scrolls down 100px from the top
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
};

// When the user clicks on the button, scroll to the top of the document
scrollTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};




document.getElementById('submitBtn').addEventListener('click', function (event) {
  var emailInput = document.getElementById('emailInput');
  var emailError = document.getElementById('emailError');
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
  
  if (!emailInput.value) {
    // Check if email is empty
    emailError.textContent = 'Required';
    emailError.style.display = 'block';
    event.preventDefault(); // Prevent form submission
  } else if (!emailPattern.test(emailInput.value)) {
    // Check if email is invalid
    emailError.textContent = 'Invalid email';
    emailError.style.display = 'block';
    event.preventDefault(); // Prevent form submission
  } else {
    emailError.style.display = 'none'; // Hide error message if valid
  }
});





    

const swiper = document.querySelector('.mySwiper');

swiper.swiper = new Swiper(swiper, {
  slidesPerView: 4, // Number of slides to show
  spaceBetween: 5,   // Space between slides
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});



