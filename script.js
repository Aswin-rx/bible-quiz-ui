document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('form');
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('phonenumber');
    const birthdate = document.getElementById('birthdate');
    const address1 = document.getElementById('address1');
    const address2 = document.getElementById('address2');
    const country = document.querySelector('#country select');
    const city = document.getElementById('city');
    const region = document.getElementById('region');
    const postalcode = document.getElementById('postalcode');
    const createpassword = document.getElementById('createpassword');
    const confirmpassword = document.getElementById('confirmpassword');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        validateInputs();
    });

    function validateInputs() {
        // Full Name validation
        if (fullname.value.trim() === '') {
            setError(fullname, 'Full Name is required');
        } else if (!/^[A-Z\s]+$/.test(fullname.value.trim())) {
            setError(fullname, 'Full Name must be in capital letters ');
        } else {
            setSuccess(fullname);
        }

        // Email validation
        if (email.value.trim() === '') {
            setError(email, 'Email is required');
        } else if (!isValidEmail(email.value.trim())) {
            setError(email, 'Email is not valid');
        } else {
            setSuccess(email);
        }

        // Phone Number validation
        if (phoneNumber.value.trim() === '') {
            setError(phoneNumber, 'Phone Number is required');
        } else if (!/^\d{10}$/.test(phoneNumber.value.trim())) {
            setError(phoneNumber, 'Phone Number must be 10 digits');
        } else {
            setSuccess(phoneNumber);
        }

        // Birth Date validation
        if (birthdate.value.trim() === '') {
            setError(birthdate, 'Birth Date is required');
        } else {
            setSuccess(birthdate);
        }

        // Address1 validation
        if (address1.value.trim() === '') {
            setError(address1, 'Address Line 1 is required');
        } else {
            setSuccess(address1);
        }

        // Address2 validation
        if (address2.value.trim() === '') {
            setError(address2, 'Address Line 2 is required');
        } else {
            setSuccess(address2);
        }

        // Country validation
        if (country.value.trim() === 'Country' || country.value.trim() === '') {
            setError(country, 'Country is required');
        } else {
            setSuccess(country);
        }

        // City validation
        if (city.value.trim() === '') {
            setError(city, 'City is required');
        } else {
            setSuccess(city);
        }

        // Region validation
        if (region.value.trim() === '') {
            setError(region, 'Region is required');
        } else {
            setSuccess(region);
        }

        // Postal Code validation
        if (postalcode.value.trim() === '') {
            setError(postalcode, 'Postal Code is required');
        } else if (!/^\d+$/.test(postalcode.value.trim())) {
            setError(postalcode, 'Postal Code must contain only numbers');
        } else {
            setSuccess(postalcode);
        }

        // Create Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;
        if (createpassword.value.trim() === '') {
            setError(createpassword, 'Create Password is required');
        } else if (createpassword.value.trim().length < 6) {
            setError(createpassword, 'Password must be at least 6 characters long');
        } else if (!passwordRegex.test(createpassword.value.trim())) {
            setError(createpassword, 'Password must contain special characters, alphabets, numbers, and capital letters');
        } else {
            setSuccess(createpassword);
        }

        // Confirm Password validation
        if (confirmpassword.value.trim() === '') {
            setError(confirmpassword, 'Confirm Password is required');
        } else if (createpassword.value.trim() !== confirmpassword.value.trim()) {
            setError(confirmpassword, 'Passwords do not match');
        } else {
            setSuccess(confirmpassword);
        }
    }

    function setError(element, message) {
        const inputBox = element.parentElement;
        const small = inputBox.querySelector('small');
        inputBox.className = 'input-box error';
        small.innerText = message;
    }

    function setSuccess(element) {
        const inputBox = element.parentElement;
        inputBox.className = 'input-box success';
    }

    function isValidEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});
