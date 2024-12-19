// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika hamburger menu saat diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di lain tempat hilangkan menu
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Select contact-related elements
const contactLinks = document.querySelectorAll(
  ".navbar-nav a[href$='#contact'], .links a[href$='#contact']"
);
const chatLink = document.getElementById("chat");

// Handle click events for contact links
contactLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Simulate contact form submission (if there is a form in the future)
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const name = nameInput?.value.trim();
    const email = emailInput?.value.trim();
    const message = messageInput?.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    console.log("Form submitted with:", { name, email, message });
    alert(
      "Thank you for contacting us, " + name + "! We will get back to you soon."
    );

    contactForm.reset();
  });
}

// Helper function to validate email format
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Feather icon initialization
feather.replace();
