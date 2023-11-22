$(document).ready(function() {
    /*Declarations */
    let form = $("form");
    let frstname = $("#frst-name-Input");
    let lstname = $("#lst-name-Input");
    let contact = $("#ContactInput");
    let bday = $("#bday");
    let username = $("#Username");
    let pass = $("#password");
    let confirmPass = $("#confirmPassword");
    let showTerms = $("#agree");
    let Agree = $(".policy .paragraph");
    let submitBtn = $(".input-box button");

    /*Agree Checkbox */
    showTerms.change(function () {
        if (showTerms.prop("checked")) {
            Agree.removeClass("hidden");
        } else {
            Agree.addClass("hidden");
        }
    });

/* Fuction to add error to input filed */
    function setError(element, errorMessage) {
        let parentElement = element.closest('.input-field');
        parentElement.addClass('error');
        let alertMessage = parentElement.find('small');
        alertMessage.text(errorMessage);
    }

    /* Fuction to remove error */
    function removeError(element) {
        let parentElement = element.closest('.input-field');
        parentElement.removeClass('error');
        let alertMessage = parentElement.find('small');
        alertMessage.text('');
    }

    /* Input Vaalidation Functions */
    function validateFirstName(frstname) {
        return /^[a-zA-Z]{1,10}$/i.test(frstname);
    }

    function validateLastName(lstname) {
        return /^[a-zA-Z]{1,10}$/i.test(lstname);
    }

    function validateEmailOrPhoneNumber(contact) {
        let isEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(contact);
        let isPhoneNumber = /^[0-9]+$/.test(contact.trim());

        return isEmail || isPhoneNumber;
    }

    function validatePass(pass) {
        return pass.length > 8;
    }

    function validateConfPass(confirmPass) {
        return confirmPass.length > 8 && confirmPass === pass.val();
    }

    /*Validation form */
    function validateForm() {
        let isValid = true;

        if (!showTerms.prop("checked")) {
            isValid = false;
        }

        if (frstname.val().trim() === '') {
            setError(frstname, 'Name cannot be empty');
            isValid = false;
        } else if (!validateFirstName(frstname.val().trim())) {
            setError(frstname, 'Enter a valid first name (1 to 10 letters)');
            isValid = false;
        } else {
            removeError(frstname);
        }

        if (lstname.val().trim() === '') {
            setError(lstname, 'Name cannot be empty');
            isValid = false;
        } else if (!validateLastName(lstname.val().trim())) {
            setError(lstname, 'Enter a valid first name (1 to 10 letters)');
            isValid = false;
        } else {
            removeError(lstname);
        }

        if (contact.val().trim() === '') {
            setError(contact, 'Please enter either a mobile number or an email');
            isValid = false;
        } else if (!validateEmailOrPhoneNumber(contact.val().trim())) {
            setError(contact, 'Enter a valid mobile number or email');
            isValid = false;
        } else {
            removeError(contact);
        }

        if (!bday.val()) {
            setError(bday, 'Date cannot be empty');
            isValid = false;
        } else {
            removeError(bday);
        }

        if (username.val() === '') {
            setError(username, 'Username cannot be Empty');
            isValid = false;
        } else {
            removeError(username);
        }

        if (!validatePass(pass.val())) {
            setError(pass, 'Password invalid format');
            isValid = false;
        } else {
            removeError(pass);
        }

        if (!validateConfPass(confirmPass.val())) {
            setError(confirmPass, 'Does not match Password');
            isValid = false;
        } else {
            removeError(confirmPass);
        }

        let genderOptions = $('input[name="gender"]:checked');
        let genderOption = $('input[name="gender"]');
        if (genderOptions.length === 0) {
            setError(genderOption.eq(0), 'Please select an option');
            isValid = false;
        } else {
            removeError(genderOption.eq(0));
        }

        return isValid;
    }

    /* Submit Form */
    submitBtn.click(function (event) {
        event.preventDefault();
        let valid = validateForm();
        if (valid) {
            window.sessionStorage.setItem("SignedIn", "true");
            window.history.go(-1);
        }
    });
});