// Optional: Add JavaScript for enhanced interactivity if needed
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
    this.reset(); // Clear the form
});
