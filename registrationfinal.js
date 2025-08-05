
const form = document.getElementById('registrationForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const termsCheckbox = document.getElementById('termsCheckbox');

const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');

form.addEventListener('submit', function (event) {
    let isValid = true;

    firstNameError.textContent = '';
    lastNameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';

    if (firstName.value.trim() === '') {
        firstNameError.textContent = 'First name is required.';
        isValid = false;
    }
    if (lastName.value.trim() === '') {
        lastNameError.textContent = 'Last name is required.';
        isValid = false;
    }

    if (!isValidEmail(email.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (phoneNumber.value.trim() === '' || phoneNumber.value.length !== 10) {
        phoneError.textContent = 'Please enter a valid 10-digit phone number.';
        isValid = false;
    }

 
    if (!termsCheckbox.checked) {
        alert('You must agree to the terms and conditions.');
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
