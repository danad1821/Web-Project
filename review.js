var keys = { 37: 1, 38: 1, 39: 1, 40: 1, 33: 1, 34: 1, 35: 1, 36: 1 };

function preventDefaultt(e) {
    e.preventDefault();
}
function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefaultt(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefaultt, false); // older FF
    window.addEventListener(wheelEvent, preventDefaultt, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefaultt, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefaultt, false);
    window.removeEventListener(wheelEvent, preventDefaultt, wheelOpt);
    window.removeEventListener('touchmove', preventDefaultt, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
let popContainer = document.getElementsByClassName("pop-up-container")[0];
let popUpMsg = document.getElementsByClassName("pop-up")[0];
//pop up function
function popUp() {
    disableScroll();
    popContainer.style.display = "flex";
    popContainer.style.alignItems = "center";
    popContainer.style.justifyContent = "center";
    popUpMsg.style.display = "flex";
    popUpMsg.style.flexDirection = "column";
}

//closing pop up
let closePopUp = document.getElementById("close-btn");
closePopUp.addEventListener("click", () => {
    enableScroll();
    popContainer.style.display = "none";
    popUpMsg.style.display = "none";
});

$(document).ready(function () {
    /*declaration*/
    let form = $('form[name="feedback-form"]');
    let deliveryRadio = $("#DeliveryRadio");
    let inHouseRadio = $("#InHouseRadio");
    let deliveryInfo = $(".Delivery-Active");
    let inHouseInfo = $(".InHouse-Active");
    let yesAnswer = $("#Yes");
    let yesQuest = $(".Yes-Active");
    let noAnswer = $("#No");
    let frstname = $("#firstname");
    let lstname = $("#lastname");
    let contactinfo = $("#email-phone");
    let bdayInput = $("#bday");
    let orderType = $(".service-type");

    /*prevent form from submitting by default*/
    form.submit(function (event) {
        event.preventDefault();
        popUp();
    });

    /* Shows delivery or house accroding to selection */

    // Delivery Clicked 
    deliveryRadio.change(function () {
        if (deliveryRadio.prop('checked')) {
            deliveryInfo.removeClass("hidden");
            inHouseInfo.addClass("hidden");
        } else {
            deliveryInfo.addClass("hidden");
        }
    });

    // In house Clicked 
    inHouseRadio.change(function () {
        if (inHouseRadio.prop('checked')) {
            inHouseInfo.removeClass("hidden");
            deliveryInfo.addClass("hidden");
        }
    });

    /*shows question according to choice of yes or no */

    // Yes
    yesAnswer.change(function () {
        if (yesAnswer.prop('checked')) {
            yesQuest.removeClass("hidden");
        }
    });

    //  No 

    noAnswer.change(function () {
        if (noAnswer.prop('checked')) {
            yesQuest.addClass("hidden");
        }
    });


    /* Reset the ratings when another radio button (order type) is checked */

    // Delivery Checked
    deliveryRadio.click(function () {
        $('#waitername').val(null);
        yesAnswer.prop('checked', false);
        if (!yesAnswer.prop('checked')) {
            yesQuest.addClass("hidden");
        }
        noAnswer.prop('checked', false);
        $('#improve2').val(null);
        $('#Select').prop('selectedIndex', '');

        // Resetting the ratings
        $('[id^="star5-deliverytime"]').prop('checked', false);
        $('[id^="star4-deliverytime"]').prop('checked', false);
        $('[id^="star3-deliverytime"]').prop('checked', false);
        $('[id^="star2-deliverytime"]').prop('checked', false);
        $('[id^="star1-deliverytime"]').prop('checked', false);

        $('[id^="star5-foodquality"]').prop('checked', false);
        $('[id^="star4--foodquality]').prop('checked', false);
        $('[id^="star3-foodquality"]').prop('checked', false);
        $('[id^="star2-foodquality"]').prop('checked', false);
        $('[id^="star1-foodquality"]').prop('checked', false);


        $('[id^="star5-cleanliness"]').prop('checked', false);
        $('[id^="star4-cleanliness"]').prop('checked', false);
        $('[id^="star3-cleanliness"]').prop('checked', false);
        $('[id^="star2-cleanliness"]').prop('checked', false);
        $('[id^="star1-cleanliness"]').prop('checked', false);

        $('[id^="star5-packaging"]').prop('checked', false);
        $('[id^="star4-packaging"]').prop('checked', false);
        $('[id^="star3-packaging"]').prop('checked', false);
        $('[id^="star2-packaging"]').prop('checked', false);
        $('[id^="star1-packaging"]').prop('checked', false);

        $('[id^="star5-customerservice"]').prop('checked', false);
        $('[id^="star4-customerservice"]').prop('checked', false);
        $('[id^="star3-customerservice"]').prop('checked', false);
        $('[id^="star2-customerservice"]').prop('checked', false);
        $('[id^="star1-customerservice"]').prop('checked', false);


    });

    // In House Checked
    inHouseRadio.click(function () {
        $('#nameofserver').val(null);
        $('#improve').val(null);

        // Resetting the ratings
        $('[id^="star5-service"]').prop('checked', false);
        $('[id^="star4-service"]').prop('checked', false);
        $('[id^="star3-service"]').prop('checked', false);
        $('[id^="star2-service"]').prop('checked', false);
        $('[id^="star1-service"]').prop('checked', false);

        $('[id^="star5-foodquality2"]').prop('checked', false);
        $('[id^="star4--foodquality2]').prop('checked', false);
        $('[id^="star3-foodquality2"]').prop('checked', false);
        $('[id^="star2-foodquality2"]').prop('checked', false);
        $('[id^="star1-foodquality2"]').prop('checked', false);


        $('[id^="star5-cleanliness2"]').prop('checked', false);
        $('[id^="star4-cleanliness2"]').prop('checked', false);
        $('[id^="star3-cleanliness2"]').prop('checked', false);
        $('[id^="star2-cleanliness2"]').prop('checked', false);
        $('[id^="star1-cleanliness2"]').prop('checked', false);

        $('[id^="star5-atmosphere"]').prop('checked', false);
        $('[id^="star4-atmosphere"]').prop('checked', false);
        $('[id^="star3-atmosphere"]').prop('checked', false);
        $('[id^="star2-atmosphere"]').prop('checked', false);
        $('[id^="star1-atmosphere"]').prop('checked', false);


    });


    /* Form Validation */

    // reseting form fuction after pop-up
    function resetForm() {
        $('body').removeClass('popup-open');
        location.reload();
    }

    // Showing pop-up when form is validated
    function showPopup() {
        $('body').addClass('popup-open');
        $('#overlay, #popup-container').css('display', 'block');
    }

    $('form').submit(function (event) {
        event.preventDefault();
        validateForm(showPopup);
    });


    // dismissing pop-up
    function dismissPopup() {
        $('body').removeClass('popup-open');
        $('#overlay, #popup-container').hide();
    }

    // Adding click event to dismiss elements
    $('.dismiss').click(dismissPopup);

    // Confirming submission of form
    function confirmPopup() {
        $('#overlay, #popup-container').hide();
        resetForm();
    }

    // Adding click event to confirm elements
    $('.confirm').click(confirmPopup);



    $(document).on('click', '.confirm', confirmPopup);

    // Function to set an error message for a form element
    function setError(element, errorMessage) {
        let parentElement = element.closest('.required-feedback');
        parentElement.addClass('error');
        parentElement.find('small').text(errorMessage);
    }

    // Function to remove error messages for a form element
    function removeError(element) {
        let parentElement = element.closest('.required-feedback');
        parentElement.removeClass('error');
        parentElement.find('small').text('');
    }

    // Function to validate the first name using a regular expression
    function validateFirstName(frstname) {
        return /^[a-zA-Z]{1,10}$/i.test(frstname);
    }

    // Function to validate the last name using a regular expression
    function validateLastName(lstname) {
        return /^[a-zA-Z]{1,10}$/i.test(lstname);
    }

    // Function to validate email or phone number using regular expressions
    function validateEmailOrPhoneNumber(inputValue) {
        const isEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})|(\d{10,}))$/i.test(inputValue);
        const isPhoneNumber = /^\d{10}$/i.test(inputValue.trim());
        return isEmail || isPhoneNumber;
    }

    // Function to validate the entire form
    function validateForm(callback) {
        let isValid = true;

        // Validation checks for first name
        let frstname = $('#firstname');
        if (frstname.val().trim() === '') {
            setError(frstname, 'Name cannot be empty');
            isValid = false;
        } else if (!validateFirstName(frstname.val().trim())) {
            setError(frstname, 'Enter a valid first name (1 to 10 letters)');
            isValid = false;
        } else {
            removeError(frstname);
        }

        // Validation checks for last name
        let lstname = $('#lastname');
        if (lstname.val().trim() === '') {
            setError(lstname, 'Last Name cannot be empty');
            isValid = false;
        } else if (!validateLastName(lstname.val().trim())) {
            setError(lstname, 'Enter a valid last name (1 to 10 letters)');
            isValid = false;
        } else {
            removeError(lstname);
        }

        // Validation checks for email/phone
        let contactinfo = $('#email-phone');
        if (contactinfo.val().trim() === '') {
            setError(contactinfo, 'Please enter either a mobile number or an email');
            isValid = false;
        } else if (!validateEmailOrPhoneNumber(contactinfo.val().trim())) {
            setError(contactinfo, 'Enter a valid mobile number or email');
            isValid = false;
        } else {
            removeError(contactinfo);
        }

        // Validation checks for birthday
        let bdayInput = $('#bday');
        if (!bdayInput.val().trim()) {
            setError(bdayInput, 'Date cannot be empty');
            isValid = false;
        } else {
            removeError(bdayInput);
        }

        // Validation checks for delivery/in-house options
        let orderTypeElements = $('input[name="type-of-order"]');
        if (!orderTypeElements.is(':checked')) {
            setError(orderTypeElements.first(), 'Please select an order type');
            isValid = false;
        } else {
            orderTypeElements.each(function () {
                removeError($(this));
            });
        }

        // Execute the callback function if the form is valid
        if (isValid && callback) {
            callback();
        }
    }
})



