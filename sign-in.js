const loginErrorMsg = document.getElementById("login-error-msg");
const loginErrorHolder = document.getElementById("login-error-msg-holder");



let user = ["dana", "pass"]
function signInLoad() {
    let btnSignIn = document.getElementById("sign-in-btn")
    btnSignIn.addEventListener("click", function () {
        let username = document.getElementById("sign-in-user").value
        let password = document.getElementById("sign-in-pass").value
        if (username == user[0] && password == user[1]) {
            window.sessionStorage.setItem("SignedIn", "true")
            window.history.go(-1);
        }
        else{
            loginErrorMsg.style.opacity = 1;
            loginErrorHolder.style.display = 'grid';
        }
    })
}
// Toggle password visibility code

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#sign-in-pass');

togglePassword.addEventListener("click", function() {
    // toggle the icon
    this.classList.toggle('fa-eye-slash');
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
});

//go back to last page when back button is clicked
let back_btn = querySelector(".go-back-text")
back_btn.addEventListener("click" , function(){
    window.history.go(-1);
})