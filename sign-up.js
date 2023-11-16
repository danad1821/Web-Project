/*Declaration*/
let form=document.forms ['forms'];
let frstname = document.querySelector("#frst-name-Input");
let lstname = document.querySelector("#lst-name-Input");
let contact = document.querySelector("#ContactInput");
let bday= document.querySelector("#bday");
let username =document.querySelector("#Username");
let pass = document.querySelector("#password");
let confirm = document.querySelector("#confirmPassword");
let showTerms = document.querySelector("#agree");
let Agree = document.querySelector (".hidden")

showTerms.addEventListener("change", function () {
    if (showTerms.checked) {
      
        Agree.classList.remove("hidden");

    } else if(showTerms.unchecked){
       
        deliveryInfo.classList.add("hidden");
    }
});



function setError(element, errorMessage) {
    let parentElement = element.closest('.input-field');
    parentElement.classList.add('error');
    let alertMessage = parentElement.querySelector('small');
    alertMessage.textContent = errorMessage;
}


form.addEventListener('submit', function(event){
    event.preventDefault();
});

function removeError(element) {
    let parentElement = element.closest('.input-field');
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
function validateEmailOrPhoneNumber(contact) {
    let isEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(inputValue);
    let isPhoneNumber = /^[0-9]+$/.test(contact.trim());

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

    if (contact.value.trim() == '') {
        setError(contact, 'Please enter either a mobile number or an email');
        isValid = false;
    } else if (!validateEmailOrPhoneNumber(contact.value.trim())) {
        setError(contact, 'Enter a valid mobile number or email');
        isValid = false;
    } else {
        removeError(contact);
    }


    if (!bdayInput.value) {
        setError(bdayInput, 'Date cannot be empty');
        isValid = false;
    }
    else {
        removeError(bdayInput);
    }

    let genderOptions = document.querySelectorAll('input[name="gender"]');


    if (!Array.from(genderOptions).some(elem => elem.checked)) {
        setError(genderOptions[0], 'Please select an option');
        isValid = false;
    }
    else {
        genderOptions.forEach(removeError);
    }

    
    if (isValid && callback) {
        callback();
    }

   
            
    }

   
    
       
