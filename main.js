let user = ["dana", "pass"]
function displayAccountInfo() {
    let account = document.getElementsByClassName("account");
    account.className = "open-account";
    account[0].style.display = "flex"
    account[0].style.flexDirection = "column"
    document.getElementById("nav-bar").style.width="100%"
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
    accountBtn.addEventListener("mouseleave", closeAccountInfo)
    let account = document.getElementById("account")
    account.addEventListener("mouseover", displayAccountInfo)
    account.addEventListener("mouseleave", closeAccountInfo)
    if (window.sessionStorage.getItem("SignedIn") == "true") {
        document.getElementsByClassName("signed-out")[0].style.display = "none";
        let cur=document.getElementsByClassName("account-info")[0]
        cur.style.display = "flex";
        cur.style.flexDirection = "column";
        document.getElementById("username-text").innerText = user[0];
    }
}

let btnSignOut=document.getElementById("sign-out-btn")
btnSignOut.addEventListener("click", function(){
    window.sessionStorage.setItem("SignedIn", "false")
    document.getElementsByClassName("signed-out")[0].style.display = "block";
    document.getElementsByClassName("account-info")[0].style.display = "none";
})

const swup = new Swup();

