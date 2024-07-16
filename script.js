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

    submitButton.disabled = true; // Disable submit button by default

    // Add event listeners to input fields
    const inputFields = [fullname, email, phoneNumber, birthdate, address1, address2, country, city, region, postalcode, createpassword, confirmpassword];
    inputFields.forEach(function(field) {
        field.addEventListener('input', function() {
            validateField(field);
            toggleSubmitButton();
        });

        // Convert full name to uppercase on blur
        if (field === fullname) {
            field.addEventListener('blur', function() {
                fullname.value = fullname.value.trim().toUpperCase();
                validateField(field);
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
        if (fullname.value.trim() === '') {
            setError(fullname, 'Full Name is required');
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
        if (birthdate.value.trim() === '') {
            setError(birthdate, 'Birth Date is required');
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
        if (country.value.trim() === 'Country' || country.value.trim() === '') {
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
            setError(createpassword, 'Create Password is required');
        } else if (createpassword.value.trim().length < 6) {
            setError(createpassword, 'Password must be at least 6 characters long');
        } else if (!passwordRegex.test(createpassword.value.trim())) {
            setError(createpassword, 'Password must contain special characters, alphabets, numbers, and capital letters');
        } else {
            setSuccess(createpassword);
        }
    }

    function validateConfirmPassword() {
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

    function isFormValid() {
        return Array.prototype.every.call(document.querySelectorAll('.input-box'), function(inputBox) {
            return inputBox.classList.contains('success');
        });
    }

    function toggleSubmitButton() {
        submitButton.disabled = !isFormValid();
    }
};
