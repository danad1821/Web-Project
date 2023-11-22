
    // // Get the ordered items from session storage
    // const ordered = JSON.parse(window.sessionStorage.getItem('order'));
    // event.preventDefault()
    // // $("input[type='tel']").keydown(()=>{
        
    // // })
    
    // // Place the order when the finalize button is clicked
    // $('#finalizeBtn').click(function () {
    //     // Check if all required fields are filled in
    //     let place = true;
    //     $('.required').each(function () {
    //         if ($(this).val() === '') {
    //             place = false;
    //         }
    //     });
    //     // If not all required fields are filled in, show an alert
    //     if (!place) {
    //         alert("error")
    //     }
    //     else {
    //         // Remove the order and total price from session storage
    //         window.sessionStorage.removeItem('order');
    //         window.sessionStorage.removeItem('totalPrice');

    //         // Open the index page
    //         window.open('index.html', '_self');
    //     }

    // });

    // // Calculate the total price
    // let totalPrice = 0;
    // for (let i = 0; i < ordered.length; i++) {
    //     totalPrice += ordered[i].price;
    // }

    // // Display the total price
    // $('.total-price').first().text('$' + totalPrice.toFixed(2));

    $(document).ready(function () {
        // Function to show the pop-up
        function showPopUp() {
            $('#overlay').removeClass('hidden');
            $('#popup-container').removeClass('hidden');
            $('body').css('overflow', 'hidden'); // Prevent scrolling
        }
    
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
    
            if (!isValid) {
                event.preventDefault(); // Prevent the form from submitting in case of errors
            }
        });
    
        // Show the pop-up if the form is valid
        if (isValid) {
            showPopUp();
        }
    
        // Close the pop-up when the close button is clicked
        $('#close-btn').click(function () {
            $('#overlay').addClass('hidden');
            $('#popup-container').addClass('hidden');
            $('body').css('overflow', 'auto'); // Allow scrolling again
        });
    });
    