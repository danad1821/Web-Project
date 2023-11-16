/*Declaration*/
let form = document.getElementsByTagName("form");
let frstname = document.querySelector("#frst-name-Input");
let lstname = document.querySelector("#lst-name-Input");
let contact = document.querySelector("#ContactInput");
let bday = document.querySelector("#bday");
let username = document.querySelector("#Username");
let pass = document.querySelector("#password");
let confirmPass = document.querySelector("#confirmPassword");
let showTerms = document.querySelector("#agree");
let Agree = document.querySelector(".policy .paragraph")
let submitBtn=document.querySelector(".input-box button")

showTerms.addEventListener("change", function () {
    if (showTerms.checked) {
        Agree.classList.remove("hidden");
    } else if (showTerms.checked == false) {
        Agree.classList.add("hidden");
    }
});



function setError(element, errorMessage) {
    let parentElement = element.closest('.input-field');
    parentElement.classList.add('error');
    let alertMessage = parentElement.querySelector('small');
    alertMessage.textContent = errorMessage;
}


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
    let isEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(contact);
    let isPhoneNumber = /^[0-9]+$/.test(contact.trim());

    return isEmail || isPhoneNumber;
}

function validatePass(pass){
    return pass.length>8
}

function validateConfPass(confirmPass){
    return confirmPass.length>8 && confirmPass==pass.value
}

function validateForm() {
    let isValid = true;

    if (showTerms.checked == false){
        isValid=false
    }

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


    if (!bday.value) {
        setError(bday, 'Date cannot be empty');
        isValid = false;
    }
    else {
        removeError(bday);
    }

    if(username.value==""){
        setError(username, 'Username cannot be Empty');
        isValid = false;
    }
    else{
        removeError(username);
    }

    if(!validatePass(pass.value)){
        setError(pass, 'Password invalid format');
        isValid = false;
    }
    else{
        removeError(pass);
    }

    if(!validateConfPass(confirmPass.value)){
        setError(confirmPass, 'Does not match Password');
        isValid = false;
    }
    else{
        removeError(confirmPass);
    }

    let genderOptions = document.querySelectorAll('input[name="gender"]:checked');
    let genderOption = document.querySelectorAll('input[name="gender"]');
    if (genderOptions.length==0) {
        setError(genderOption[0], 'Please select an option');
        isValid = false;
    }
    else {
        removeError(genderOption[0])
    }
    return isValid
}


submitBtn.addEventListener("click", ()=>{
    event.preventDefault();
    let valid=validateForm()
    if(valid){
        window.sessionStorage.setItem("SignedIn", "true");
        window.history.go(-1);
    }
})


