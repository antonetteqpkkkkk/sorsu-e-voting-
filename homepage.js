// ----------------------
// 3D Carousel
// ----------------------
// ----------------------
// 3D Carousel / Sidebar Animation
// ----------------------
const swiper = new Swiper('.swiper-container.one', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 5, // Display 5 slides at once
    spaceBetween: 20, // Space between icons
    autoplay: { 
        delay: 3000, 
        disableOnInteraction: false 
    },
    // REMOVED: pagination (no dots in image)
    // REMOVED: effect: 'coverflow' (using simple slide for icon look)
    speed: 500
});

const orgNameHeader = document.getElementById('org-name-display');

function updateOrgName() {
    // Get the data-name from the currently active slide
    // Swiper uses .swiper-slide-active for the main slide
    const activeSlide = document.querySelector('.swiper-slide-active');
    
    // Fallback if the index is somehow out of sync during transitions
    if (!activeSlide) return; 

    const name = activeSlide.dataset.name || '';
    if(orgNameHeader) orgNameHeader.textContent = name;
}

// Initial update
updateOrgName();

// Update name whenever the slide changes or the user clicks a slide
swiper.on('slideChangeTransitionEnd', updateOrgName);

// ----------------------
// Countdown Timer
// ----------------------
function startCountdown() {
  const endDate = new Date("2025-12-31T23:59:59").getTime();
  setInterval(() => {
    const now = Date.now();
    const distance = endDate - now;

    if(distance <= 0) return;

    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const mins = Math.floor((distance % (1000*60*60)) / (1000*60));
    const secs = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("mins").innerText = mins;
    document.getElementById("secs").innerText = secs;
  }, 1000);
}
startCountdown();
