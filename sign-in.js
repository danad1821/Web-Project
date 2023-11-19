let users = ["dana", "pass"];
let username = document.getElementById("sign-in-user");
let pass = document.getElementById("sign-in-pass");
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
function signInLoad() {
    let btnSignIn = document.getElementById("sign-in-btn-submit")
    btnSignIn.addEventListener("click", function () {
        if (username.value == users[0] && pass.value == users[1]) {
            removeError(pass);
            removeError(username);
            window.sessionStorage.setItem("SignedIn", "true");
            window.history.go(-1);
        }
        else{
            if(pass.value.length<8 && pass.value != users[1]){
                setError(pass, "Invalid Password")
            }
            if(username.value != users[0]){
                setError(username, "User not found")
            }
        }
    })
}
window.addEventListener("load", signInLoad);
// Toggle password visibility code

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#sign-in-pass');

togglePassword.addEventListener("click", function() {
    // toggle the icon
    if (this.className=='far fa-eye-slash'){
        this.className='far fa-eye';
    }
    else{
        this.className='far fa-eye-slash';
    }
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
});

//go back to last page when back button is clicked