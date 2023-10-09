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