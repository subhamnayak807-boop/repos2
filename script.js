const BOOKING_URL = "";

document.getElementById("year").textContent = new Date().getFullYear();

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((element) => observer.observe(element));

const toast = document.getElementById("toast");
const checkoutButton = document.getElementById("checkoutButton");
let toastTimer;

function showSetupMessage() {
  clearTimeout(toastTimer);
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 5000);
}

checkoutButton.addEventListener("click", () => {
  if (BOOKING_URL) {
    window.location.href = BOOKING_URL;
    return;
  }
  showSetupMessage();
});

toast.querySelector("button").addEventListener("click", () => {
  clearTimeout(toastTimer);
  toast.classList.remove("is-visible");
});

document.querySelectorAll(".faq details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (!detail.open) return;
    document.querySelectorAll(".faq details").forEach((other) => {
      if (other !== detail) other.open = false;
    });
  });
});
