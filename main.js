let user = ["dana", "pass"]
function displayAccountInfo() {
    let account = document.getElementsByClassName("account");
    account.className = "open-account";
    account[0].style.display = "flex"
    account[0].style.flexDirection = "column"
}
function closeAccountInfo() {
    let account = document.getElementsByClassName("account");
    account.className = "close-account";
    account[0].style.display = "none"
}
function accountHover() {
    console.log(window.sessionStorage.getItem("SignedIn"))
    let accountBtn = document.getElementById("account-icon")
    accountBtn.addEventListener("mouseover", displayAccountInfo)
    let account = document.getElementById("account")
    account.addEventListener("mouseover", displayAccountInfo)
    account.addEventListener("mouseleave", closeAccountInfo)
    document.getElementById("nav-bar").addEventListener("mouseleave", closeAccountInfo);
    if (window.sessionStorage.getItem("SignedIn") == "true") {
        console.log("signing in")
        document.getElementsByClassName("signed-out")[0].style.display = "none";
        document.getElementsByClassName("account-info")[0].style.display = "inherit";
        document.getElementById("username-text").innerText = user[0];
    }
}

let btnSignOut=document.getElementById("sign-out-btn")
btnSignOut.addEventListener("click", function(){
    window.sessionStorage.setItem("SignedIn", "false")
    document.getElementsByClassName("signed-out")[0].style.display = "block";
        document.getElementsByClassName("account-info")[0].style.display = "none";
})




