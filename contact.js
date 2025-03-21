document.addEventListener("DOMContentLoaded", function () {
    // Toggle Menu
    function toggleMenu() {
        document.querySelector('.nav-links').classList.toggle('active');
    }

    document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);

    // Contact Form Validation
    const form = document.getElementById("contactForm");
    const submitButton = document.getElementById("submitButton");
    const inputs = form.querySelectorAll("input, textarea");

    function checkFields() {
        let allFilled = true;
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                allFilled = false;
            }
        });

        submitButton.disabled = !allFilled;
    }

    inputs.forEach(input => {
        input.addEventListener("input", checkFields);
    });

    // Form Submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Votre message a été envoyé avec succès !");
        form.reset();
        submitButton.disabled = true;
    });

    // Scroll Animation
    const sections = document.querySelectorAll(".hidden");
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});
