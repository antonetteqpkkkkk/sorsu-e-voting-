const form = document.getElementById("registerForm");
const overlay = document.getElementById("notification-overlay");

form.addEventListener("submit", function(e) {
  e.preventDefault(); 

  
  overlay.classList.add("show");

  
  form.reset();
});
