let user = ["dana", "pass"]
function signInLoad() {
    let btnSignIn = document.getElementById("sign-in-btn")
    btnSignIn.addEventListener("click", function () {
        let username = document.getElementById("sign-in-user").value
        let password = document.getElementById("sign-in-pass").value
        if (username == user[0] && password == user[1]) {
            window.sessionStorage.setItem("SignedIn", "true")
            window.open("index.html", "_self");
        }
        else {
            alert("Error")
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
