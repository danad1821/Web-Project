$(document).ready(function () {
    // Get the ordered items from session storage
    const ordered = JSON.parse(window.sessionStorage.getItem('order'));
    event.preventDefault()
    // $("input[type='tel']").keydown(()=>{
        
    // })
    
    // Place the order when the finalize button is clicked
    $('#finalizeBtn').click(function () {
        // Check if all required fields are filled in
        let place = true;
        $('.required').each(function () {
            if ($(this).val() === '') {
                place = false;
            }
        });
        // If not all required fields are filled in, show an alert
        if (!place) {
            alert("error")
        }
        else {
            // Remove the order and total price from session storage
            window.sessionStorage.removeItem('order');
            window.sessionStorage.removeItem('totalPrice');

            // Open the index page
            window.open('index.html', '_self');
        }

    });

    // Calculate the total price
    let totalPrice = 0;
    for (let i = 0; i < ordered.length; i++) {
        totalPrice += ordered[i].price;
    }

    // Display the total price
    $('.total-price').first().text('$' + totalPrice.toFixed(2));

})