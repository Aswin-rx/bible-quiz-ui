window.onload = function() {
    const form = document.getElementById('form');
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('phonenumber');
    const birthdate = document.getElementById('birthdate');
    const address1 = document.getElementById('address1');
    const address2 = document.getElementById('address2');
    const country = document.getElementById('country');
    const city = document.getElementById('city');
    const region = document.getElementById('region');
    const postalcode = document.getElementById('postalcode');
    const createpassword = document.getElementById('createpassword');
    const confirmpassword = document.getElementById('confirmpassword');
    const submitButton = form.querySelector('button[type="submit"]');

    submitButton.disabled = true; 


    const inputFields = [fullname, email, phoneNumber, birthdate, address1, address2, country, city, region, postalcode, createpassword, confirmpassword];
    inputFields.forEach(function(field) {
        field.addEventListener('blur', function() {
            validateField(field);
            toggleSubmitButton();
        });

        
        if (field === fullname) {
            field.addEventListener('blur', function() {
                fullname.value = fullname.value.trim().toUpperCase();
                validateFullName();
                toggleSubmitButton();
            });
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (!submitButton.disabled) {
            form.submit();
        }
    });

    function validateField(field) {
        switch (field.id) {
            case 'fullname':
                validateFullName();
                break;
            case 'email':
                validateEmail();
                break;
            case 'phonenumber':
                validatePhoneNumber();
                break;
            case 'birthdate':
                validateBirthdate();
                break;
            case 'address1':
                validateAddress1();
                break;
            case 'address2':
                validateAddress2();
                break;
            case 'country':
                validateCountry();
                break;
            case 'city':
                validateCity();
                break;
            case 'region':
                validateRegion();
                break;
            case 'postalcode':
                validatePostalCode();
                break;
            case 'createpassword':
                validateCreatePassword();
                break;
            case 'confirmpassword':
                validateConfirmPassword();
                break;
            default:
                break;
        }
    }

    function validateFullName() {
        const nameRegex = /^[A-Za-z\s]+$/;
        if (fullname.value.trim() === '') {
            setError(fullname, 'Full Name is required');
        } else if (!nameRegex.test(fullname.value.trim())) {
            setError(fullname, 'Full Name must contain only alphabets');
        } else {
            setSuccess(fullname);
        }
    }

    function validateEmail() {
        if (email.value.trim() === '') {
            setError(email, 'Email is required');
        } else if (!isValidEmail(email.value.trim())) {
            setError(email, 'Email is not valid');
        } else {
            setSuccess(email);
        }
    }

    function validatePhoneNumber() {
        if (phoneNumber.value.trim() === '') {
            setError(phoneNumber, 'Phone Number is required');
        } else if (!/^\d{10}$/.test(phoneNumber.value.trim())) {
            setError(phoneNumber, 'Phone Number must be 10 digits');
        } else {
            setSuccess(phoneNumber);
        }
    }

    function validateBirthdate() {
        const today = new Date();
        const dob = new Date(birthdate.value.trim());
        if (birthdate.value.trim() === '') {
            setError(birthdate, 'DOB is required');
        } else if (dob > today) {
            setError(birthdate, 'Enter a valid DOB');
        } else {
            setSuccess(birthdate);
        }
    }

    function validateAddress1() {
        if (address1.value.trim() === '') {
            setError(address1, 'Address Line 1 is required');
        } else {
            setSuccess(address1);
        }
    }

    function validateAddress2() {
        if (address2.value.trim() === '') {
            setError(address2, 'Address Line 2 is required');
        } else {
            setSuccess(address2);
        }
    }

    function validateCountry() {
        const countryValue = country.value.trim();
        if (countryValue === '' || countryValue === 'Country') {
            setError(country, 'Country is required');
        } else {
            setSuccess(country);
        }
    }

    function validateCity() {
        if (city.value.trim() === '') {
            setError(city, 'City is required');
        } else {
            setSuccess(city);
        }
    }

    function validateRegion() {
        if (region.value.trim() === '') {
            setError(region, 'Region is required');
        } else {
            setSuccess(region);
        }
    }

    function validatePostalCode() {
        if (postalcode.value.trim() === '') {
            setError(postalcode, 'Postal Code is required');
        } else if (!/^\d+$/.test(postalcode.value.trim())) {
            setError(postalcode, 'Postal Code must contain only numbers');
        } else {
            setSuccess(postalcode);
        }
    }

    function validateCreatePassword() {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;
        if (createpassword.value.trim() === '') {
            setError(createpassword, 'Password is required');
        } else if (!passwordRegex.test(createpassword.value.trim())) {
            setError(createpassword, 'Password must be at least 6 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character');
        } else {
            setSuccess(createpassword);
        }
    }

    function validateConfirmPassword() {
        if (confirmpassword.value.trim() === '') {
            setError(confirmpassword, 'Confirm Password is required');
        } else if (confirmpassword.value.trim() !== createpassword.value.trim()) {
            setError(confirmpassword, 'Passwords do not match');
        } else {
            setSuccess(confirmpassword);
        }
    }

    function setError(input, message) {
        const inputBox = input.parentElement;
        const small = inputBox.querySelector('small');
        small.innerText = message;
        inputBox.className = 'input-box error';
    }

    function setSuccess(input) {
        const inputBox = input.parentElement;
        inputBox.className = 'input-box success';
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function toggleSubmitButton() {
        submitButton.disabled = ![...inputFields].every(field => {
            return field.parentElement.className === 'input-box success';
        });
    }
};
