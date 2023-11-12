/*declaration*/
let form=document.forms ['feedback-form'];
let deliveryRadio = document.querySelector("#DeliveryRadio");
let inHouseRadio = document.querySelector("#InHouseRadio");
let deliveryInfo = document.querySelector(".Delivery-Active");
let inHouseInfo = document.querySelector(".InHouse-Active");
let yesAnswer = document.querySelector("#Yes");
let yesQuest = document.querySelector(".Yes-Active")
let noAnswer=document.querySelector("#No");
let frstname=document.querySelector("#firstname");
let lstname=document.querySelector("#lastname");
let contactinfo=document.querySelector("#email-phone");
let bdayInput = document.querySelector("#bday")
let orderType =document.querySelector (".service-type")

/*prevent form from submitting by default*/
form.addEventListener('submit', function(event){
    event.preventDefault();
});

/* Shows delivery or house accroding to selection */
deliveryRadio.addEventListener("change", function () {
    if (deliveryRadio.checked) {
      
        deliveryInfo.classList.remove("hidden");
        inHouseInfo.classList.add("hidden");

    } else {
       
        deliveryInfo.classList.add("hidden");
    }
});

inHouseRadio.addEventListener("change", function () {
    if (inHouseRadio.checked) {
     
        inHouseInfo.classList.remove("hidden");
        deliveryInfo.classList.add("hidden");
    } 
});

/*shows question according to choice of yes or no */
yesAnswer.addEventListener ("change", function () {
    if (yesAnswer.checked){
        yesQuest.classList.remove("hidden")
    } 

})

noAnswer.addEventListener("change", function(){
    if(noAnswer.checked){
        yesQuest.classList.add("hidden")
    }

})


/* Reset the ratings when another radio button (order type) is checked*/

// Delivery Checked
deliveryRadio.addEventListener('click', function() {
document.getElementById('waitername').value= null;
yesAnswer.checked = false;
if (yesAnswer.checked == false) {
    yesQuest.classList.add("hidden")
}
noAnswer.checked = false;
document.getElementById('improve2').value= null;
document.getElementById("Select").selectedIndex = "";



    document.getElementById('star5-service').checked = false;
    document.getElementById('star4-service').checked = false;
    document.getElementById('star3-service').checked = false;
    document.getElementById('star2-service').checked = false;
    document.getElementById('star1-service').checked = false;

    document.getElementById('star5-foodquality2').checked = false;
    document.getElementById('star4-foodquality2').checked = false;
    document.getElementById('star3-foodquality2').checked = false;
    document.getElementById('star2-foodquality2').checked = false;
    document.getElementById('star1-foodquality2').checked = false;

    document.getElementById('star5-cleanliness2').checked = false;
    document.getElementById('star4-cleanliness2').checked = false;
    document.getElementById('star3-cleanliness2').checked = false;
    document.getElementById('star2-cleanliness2').checked = false;
    document.getElementById('star1-cleanliness2').checked = false;

    document.getElementById('star5-atmosphere').checked = false;
    document.getElementById('star4-atmosphere').checked = false;
    document.getElementById('star3-atmosphere').checked = false;
    document.getElementById('star2-atmosphere').checked = false;
    document.getElementById('star1-atmosphere').checked = false;

});

// In House Checked
inHouseRadio.addEventListener('click', function() {
    document.getElementById('nameofserver').value= null;
    document.getElementById('improve').value= null;
    

    document.getElementById('star5-deliverytime').checked = false;
    document.getElementById('star4-deliverytime').checked = false;
    document.getElementById('star3-deliverytime').checked = false;
    document.getElementById('star2-deliverytime').checked = false;
    document.getElementById('star1-deliverytime').checked = false;

    document.getElementById('star5-foodquality').checked = false;
    document.getElementById('star4-foodquality').checked = false;
    document.getElementById('star3-foodquality').checked = false;
    document.getElementById('star2-foodquality').checked = false;
    document.getElementById('star1-foodquality').checked = false;

    document.getElementById('star5-cleanliness').checked = false;
    document.getElementById('star4-cleanliness').checked = false;
    document.getElementById('star3-cleanliness').checked = false;
    document.getElementById('star2-cleanliness').checked = false;
    document.getElementById('star1-cleanliness').checked = false;

    document.getElementById('star5-packaging').checked = false;
    document.getElementById('star4-packaging').checked = false;
    document.getElementById('star3-packaging').checked = false;
    document.getElementById('star2-packaging').checked = false;
    document.getElementById('star1-packaging').checked = false;

    document.getElementById('star5-customerservice').checked = false;
    document.getElementById('star4-customerservice').checked = false;
    document.getElementById('star3-customerservice').checked = false;
    document.getElementById('star2-customerservice').checked = false;
    document.getElementById('star1-customerservice').checked = false;
});

function resetForm() {
    document.body.classList.remove('popup-open');
    location.reload();
}

function showPopup() {
    document.body.classList.add('popup-open');
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup-container').style.display = 'block';
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    validateForm(showPopup);
});

function dismissPopup() {
    document.body.classList.remove('popup-open');
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup-container').style.display = 'none';
}

let dismissElements = document.querySelectorAll('.dismiss');

dismissElements.forEach(element => {
    element.addEventListener('click', dismissPopup);
});

function confirmPopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup-container').style.display = 'none';
    resetForm();
}


let confirmElements = document.querySelectorAll('.confirm');

confirmElements.forEach(element => {
    element.addEventListener('click', confirmPopup);
});




function setError(element, errorMessage) {
    let parentElement = element.closest('.required-feedback');
    parentElement.classList.add('error');
    let alertMessage = parentElement.querySelector('small');
    alertMessage.textContent = errorMessage;
}

function removeError(element) {
    let parentElement = element.closest('.required-feedback');
    parentElement.classList.remove('error');
    let alertMessage = parentElement.querySelector('small');
    alertMessage.textContent = ''; 
}

function validateFirstName(frstname) {
    return /^[a-zA-Z]{1,10}$/i.test(frstname);
}

function validateLastName(lstname) {
    return /^[a-zA-Z]{1,10}$/i.test(lstname);
}
function validateEmailOrPhoneNumber(inputValue) {
    const isEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(inputValue);
    const isPhoneNumber = /^[0-9]+$/.test(inputValue.trim());

    return isEmail || isPhoneNumber;
}


function validateForm(callback) {
    let isValid = true;

    if (frstname.value.trim() == '') {
        setError(frstname, 'Name cannot be empty');
        isValid = false;
    }

    else if (!validateFirstName(frstname.value.trim())) {
        setError(frstname, 'Enter a valid first name (1 to 10 letters)');
        isValid = false;
    }
    else {
        removeError(frstname);
    }

    if (lstname.value.trim() == '') {
        setError(lstname, 'Name cannot be empty');
        isValid = false;
    } 
    else if (!validateLastName(lstname.value.trim())) {
        setError(lstname, 'Enter a valid first name (1 to 10 letters)');
        isValid = false;
    }
    else {
        removeError(lstname);
    }

    if (contactinfo.value.trim() == '') {
        setError(contactinfo, 'Please enter either a mobile number or an email');
        isValid = false;
    } else if (!validateEmailOrPhoneNumber(contactinfo.value.trim())) {
        setError(contactinfo, 'Enter a valid mobile number or email');
        isValid = false;
    } else {
        removeError(contactinfo);
    }


    if (!bdayInput.value) {
        setError(bdayInput, 'Date cannot be empty');
        isValid = false;
    }
    else {
        removeError(bdayInput);
    }

    let orderTypeElements = document.querySelectorAll('input[name="type-of-order"]');


    if (!Array.from(orderTypeElements).some(elem => elem.checked)) {
        setError(orderTypeElements[0], 'Please select an order type');
        isValid = false;
    }
    else {
        orderTypeElements.forEach(removeError);
    }

    
    if (isValid && callback) {
        callback();
    }

   
            
    }
    
       
