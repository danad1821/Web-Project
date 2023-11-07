const loginErrorMsg = document.getElementById("login-error-msg");
const loginErrorHolder = document.getElementById("login-error-msg-holder");

let users = ["dana", "pass"];
function signInLoad() {
    let btnSignIn = document.getElementById("sign-in-btn-submit")
    btnSignIn.addEventListener("click", function () {
        let username = document.getElementById("sign-in-user").value
        let password = document.getElementById("sign-in-pass").value
        if (username == users[0] && password == users[1]) {
            window.sessionStorage.setItem("SignedIn", "true")
            window.history.go(-1);
        }
        else{
            loginErrorMsg.style.opacity = 1;
            loginErrorHolder.style.display = 'grid';
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