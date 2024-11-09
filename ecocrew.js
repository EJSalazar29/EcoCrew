document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const newsletterForm = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("email");

    // Add hover effect to sections
    sections.forEach(section => {
        section.addEventListener("mouseenter", () => {
            section.style.backgroundColor = "#d0e7ff"; // Change background color on hover
        });
        section.addEventListener("mouseleave", () => {
            section.style.backgroundColor = "#e7f3fe"; // Reset background color
        });
    });

    // Handle newsletter form submission
    newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        const emailValue = emailInput.value.trim();

        // Simple email validation
        if (validateEmail(emailValue)) {
            // Simulate a successful subscription (you can replace this with actual API calls)
            alert(`Thank you for subscribing with ${emailValue}!`);
            emailInput.value = ""; // Clear the input field
        } else {
            alert("Please enter a valid email address.");
        }
    });

    // Email validation function
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
        return regex.test(email);
    }
});