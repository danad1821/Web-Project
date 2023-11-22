$(document).ready(function () {

    /*Declarations */
    let users = ["dana", "pass"];
    let username = $("#sign-in-user");
    let pass = $("#sign-in-pass");

    /*Function to Add Error Message*/
    function setError(element, errorMessage) {
        let parentElement = element.closest('.input-field');
        parentElement.addClass('error');
        let alertMessage = parentElement.find('small');
        alertMessage.text(errorMessage);
    }

    /*Function to Remove Error Message*/
    function removeError(element) {
        let parentElement = element.closest('.input-field');
        parentElement.removeClass('error');
        let alertMessage = parentElement.find('small');
        alertMessage.text('');
    }

    /*Click event handler for the Sign In button*/
    $("#sign-in-btn-submit").click(function () {
        // Check if the entered username matches the predefined username
        if (username.val() == users[0]) {
            removeError(username);
        }
        /*Check if both username and password match the predefined credentials*/
        if (username.val() == users[0] && pass.val() == users[1]) {
            removeError(pass);
            removeError(username);
            window.sessionStorage.setItem("SignedIn", "true");
            window.history.go(-1);
        } else {
            // Check if the password length is less than 8 characters and not equal to the predefined password
            if (pass.val().length < 8 && pass.val() != users[1]) {
                setError(pass, "Invalid Password");
            }
            // Check if the entered username does not match the predefined username
            if (username.val() != users[0]) {
                setError(username, "User not found");
            }
        }
    });

    $("#togglePassword").click(function () {
        // Toggle the eye icon class to switch between open and closed eye icons
        $(this).toggleClass('far fa-eye far fa-eye-slash');
        // Get the current type of the password input field
        let type = $("#sign-in-pass").attr('type');

        // Get the current type of the password input field
        type = (type === 'password') ? 'text' : 'password';
        $("#sign-in-pass").attr('type', type);
    });
});