/*Roles animation*/
const roles = [
    "Undergraduate Student",
    "Frontend Developer",
    "Aspiring AI engineer"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 80;
const textElement = document.getElementById("text");

function typeEffect() {
    const current = roles[index];
    if (!isDeleting) {
        textElement.textContent = current.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === current.length) {
          isDeleting = true;
          setTimeout(typeEffect, 1500);
          return;
        }
    } else {
        textElement.textContent = current.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          index = (index + 1) % roles.length;
        }
    }
    setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}
typeEffect();

/*Contact Form*/
(function(){
      emailjs.init("7TBIT2UaXVifS8K7H"); 
    })();
    document.getElementById("contact-form")
        .addEventListener("submit", function(e) {
            e.preventDefault();

            emailjs.sendForm(
            "service_aritra69",  
            "template_985pjc8",  
            this
            )
            .then(function() {
                alert("✅ Message sent successfully!");
            }, function(error) {
                alert("❌ Failed to send message");
                console.log(error);
            });
        });

/*Changing Mode*/
const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    btn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    btn.textContent = "🌙";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }
});
