document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const modal = document.getElementById('contactModal');
    const closeButton = document.querySelector('.close-button'); 
    if (closeButton && modal) {
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none'; 
            const successMessage = document.getElementById('success-message');
            if (successMessage) {
                successMessage.style.display = 'none';
            }
            if (form) {
                form.reset();
            }
        });
    }

    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            alert('Please fill in all required fields.');
        } else {
            alert('Form submitted successfully.');

            const successMessage = document.getElementById('success-message');
            if (successMessage) {
                successMessage.style.display = 'block'; 
            }

        }
    });
});