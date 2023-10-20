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
let pressedDrop=false;
let dropDown=document.getElementsByClassName("drop-nav-bar");
dropDown[0].addEventListener("click", ()=>{
    if(pressedDrop==false){
        let navItems=document.getElementsByClassName("nav-items");
        navItems[0].style.display="block";
        if (window.sessionStorage.getItem("SignedIn") == "true") {
            document.getElementsByClassName("signed-out")[1].style.display = "none";
            let cur=document.getElementsByClassName("account-info")[1]
            cur.style.display = "flex";
            cur.style.flexDirection = "column";
            document.getElementById("username-text2").innerText = user[0];
        }
        pressedDrop=true;
    }
    else{
        let navItems=document.getElementsByClassName("nav-items");
        navItems[0].style.display="none";
        pressedDrop=false;
    }
})
let btnSignOut=document.getElementById("sign-out-btn")
btnSignOut.addEventListener("click", function(){
    window.sessionStorage.setItem("SignedIn", "false")
    document.getElementsByClassName("signed-out")[0].style.display = "block";
    document.getElementsByClassName("account-info")[0].style.display = "none";
    location.reload()
})
let btnSignOut2=document.getElementById("sign-out-btn2")
btnSignOut2.addEventListener("click", function(){
    window.sessionStorage.setItem("SignedIn", "false")
    document.getElementsByClassName("signed-out")[1].style.display = "block";
    document.getElementsByClassName("account-info")[1].style.display = "none";
    location.reload()
})
const swup = new Swup();

