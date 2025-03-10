// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked (optional)
document.querySelectorAll('.nav-links li a').forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle form submission
const form = document.querySelector('.contact form');
const alertContainer = document.getElementById('alert');
const alertMessage = document.getElementById('alert-message');
const closeAlert = document.getElementById('close-alert');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            Accept: 'application/json'
        }
    });

    if (response.ok) {
        showAlert('Thank you! Your message has been sent.', 'success');
        form.reset();
    } else {
        showAlert('Oops! Something went wrong. Please try again.', 'error');
    }
});

// Show alert function
function showAlert(message, type) {
    alertMessage.textContent = message;
    alertContainer.className = `alert ${type} visible`;

    // Hide alert after 5 seconds
    setTimeout(() => {
        alertContainer.classList.remove('visible');
    }, 5000);
}

// Close alert on button click
closeAlert.addEventListener('click', () => {
    alertContainer.classList.remove('visible');
});
