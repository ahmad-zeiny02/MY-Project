// Smooth Scrolling for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Confirmation for Deletion
document.querySelectorAll('.btn-danger').forEach(button => {
    button.addEventListener('click', function () {
        return confirm('Are you sure you want to delete this?');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Ensure the reservation form exists in the DOM
    const form = document.querySelector('.reservation-form');
    if (!form) {
        console.warn('Reservation form not found. Skipping form validation.');
        return;
    }

    // Select form fields
    const nameInput = form.querySelector('input[name="Name"]');
    const phoneInput = form.querySelector('input[name="Phone"]');
    const guestsInput = form.querySelector('input[name="Guests"]');
    const dateInput = form.querySelector('input[name="ReservationDate"]');

    // Add form submit event listener
    form.addEventListener('submit', function (event) {
        let isValid = true;
        let errorMessage = '';

        // Validate Name
        if (!nameInput || nameInput.value.trim() === '') {
            errorMessage += 'Name is required.\n';
            isValid = false;
        }

        // Validate Phone
        if (!phoneInput || !/^\d{10}$/.test(phoneInput.value.trim())) {
            errorMessage += 'Enter a valid 10-digit phone number.\n';
            isValid = false;
        }

        // Validate Guests
        if (!guestsInput || guestsInput.value <= 0) {
            errorMessage += 'Number of guests must be greater than 0.\n';
            isValid = false;
        }

        // Validate Reservation Date
        const selectedDate = new Date(dateInput.value);
        const today = new Date();
        if (!dateInput || selectedDate < today) {
            errorMessage += 'Reservation date cannot be in the past.\n';
            isValid = false;
        }

        // Show error message and prevent form submission
        if (!isValid) {
            alert(errorMessage);
            event.preventDefault();
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Confirmation Dialog for Delete Actions
    const deleteButtons = document.querySelectorAll('.btn-danger');

    deleteButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            const confirmed = confirm('Are you sure you want to delete this reservation?');
            if (!confirmed) {
                event.preventDefault(); // Prevent the delete action if not confirmed
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Select the Edit Reservation form
    const form = document.querySelector('.edit-reservation-form');
    if (!form) {
        console.warn('Edit reservation form not found. Skipping validation.');
        return;
    }

    // Select form fields
    const nameInput = form.querySelector('input[name="Name"]');
    const phoneInput = form.querySelector('input[name="Phone"]');
    const guestsInput = form.querySelector('input[name="Guests"]');
    const dateInput = form.querySelector('input[name="ReservationDate"]');

    // Form submit event listener
    form.addEventListener('submit', function (event) {
        let isValid = true;
        let errorMessage = '';

        // Validate Name
        if (!nameInput || nameInput.value.trim() === '') {
            errorMessage += 'Name is required.\n';
            isValid = false;
        }

        // Validate Phone
        if (!phoneInput || !/^\d{10}$/.test(phoneInput.value.trim())) {
            errorMessage += 'Enter a valid 10-digit phone number.\n';
            isValid = false;
        }

        // Validate Guests
        if (!guestsInput || guestsInput.value <= 0) {
            errorMessage += 'Number of guests must be greater than 0.\n';
            isValid = false;
        }

        // Validate Reservation Date
        const selectedDate = new Date(dateInput.value);
        const today = new Date();
        if (!dateInput || selectedDate < today) {
            errorMessage += 'Reservation date cannot be in the past.\n';
            isValid = false;
        }

        // Show error message and prevent form submission
        if (!isValid) {
            alert(errorMessage);
            event.preventDefault();
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Select the reservation form
    const form = document.querySelector('.reservation-form');
    if (!form) {
        console.warn('Reservation form not found. Skipping validation.');
        return;
    }

    // Select form fields
    const nameInput = form.querySelector('input[name="Name"]');
    const phoneInput = form.querySelector('input[name="Phone"]');
    const guestsInput = form.querySelector('input[name="Guests"]');
    const dateInput = form.querySelector('input[name="ReservationDate"]');

    // Form submit event listener
    form.addEventListener('submit', function (event) {
        let isValid = true;
        let errorMessage = '';

        // Validate Name
        if (!nameInput || nameInput.value.trim() === '') {
            errorMessage += 'Name is required.\n';
            isValid = false;
        }

        // Validate Phone
        if (!phoneInput || !/^\d{10}$/.test(phoneInput.value.trim())) {
            errorMessage += 'Enter a valid 10-digit phone number.\n';
            isValid = false;
        }

        // Validate Guests
        if (!guestsInput || guestsInput.value <= 0) {
            errorMessage += 'Number of guests must be greater than 0.\n';
            isValid = false;
        }

        // Validate Reservation Date
        const selectedDate = new Date(dateInput.value);
        const today = new Date();
        if (!dateInput || selectedDate < today) {
            errorMessage += 'Reservation date cannot be in the past.\n';
            isValid = false;
        }

        // Show error message and prevent form submission
        if (!isValid) {
            alert(errorMessage);
            event.preventDefault();
        }
    });
});
