// Dark mode toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Contact form handling
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  message.textContent = "Message sent successfully!";
  message.style.color = "green";
  form.reset();
});
