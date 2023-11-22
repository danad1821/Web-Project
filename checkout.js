$(document).ready(function () {
    let valid = true
    // Function to show the pop-up
    let popContainer = $(".pop-up-container").eq(0);
    let popUpMsg = $(".pop-up").eq(0);

    // Pop up function
    function popUp() {
        popContainer.css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        });
        popUpMsg.css({
            display: "flex",
            flexDirection: "column"
        });
        $("body").css("overflow", "hidden")
    }

    // Closing pop up
    let closePopUp = $("#close-btn");
    closePopUp.on("click", () => {
        popContainer.css("display", "none");
        popUpMsg.css("display", "none");
        window.location.href = "menu.html";
        //resets the order and price
        window.sessionStorage.removeItem('totalPrice');
        window.sessionStorage.removeItem('order');
    });


    let totalP = JSON.parse(window.sessionStorage.getItem('totalPrice'))
    // Calculate the total price

    // Display the total price
    $('.total-price').first().text('$' + totalP.toFixed(2));
    // Function to validate and add red border to bottom
    function validateAndHighlight(input) {
        let isValid = true;

        if (input.attr('name') === 'fullname') {
            var parts = input.val().trim().split(' ');
            isValid = parts.length >= 2;
        } else if (input.attr('name') === 'phone') {
            isValid = /^\+\d+$/.test(input.val().trim());
        } else {
            isValid = input.val().trim() !== '';
        }

        input.css('border-bottom', isValid ? '1px solid black' : '1px solid red');
        return isValid;
    }

    // Apply validation on input change
    $('.required').change(function () {
        validateAndHighlight($(this));
    });

    // Apply validation on form submission
    $('form').submit(function (event) {
        var isValid = true;

        $('.required').each(function () {
            isValid = validateAndHighlight($(this)) && isValid;
        });
        event.preventDefault(); // Prevent the form from submitting in case of errors
        if (!isValid) {
            valid = false;
        }
        else{
            popUp()
        }
    });

    // Show the pop-up if the form is valid

    // Close the pop-up when the close button is clicked
    $('#close-btn').click(function () {
        $('#overlay').addClass('hidden');
        $('#popup-container').addClass('hidden');
        $('body').css('overflow', 'auto'); // Allow scrolling again
    });
});
