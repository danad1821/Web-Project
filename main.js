function SignIn(username){
    document.getElementsByClassName("signed-out").style.display="none";
    let info=document.getElementsByClassName("account-info");
    info.style.display="inherit";
    document.getElementById("username").textContent=username;
}
function displayAccountInfo(){
    let account=document.getElementsByClassName("account");
    account[0].style.display="flex"
    account[0].style.flexDirection="column"
    account.className="open-account";
}
function closeAccountInfo(){
    let account=document.getElementsByClassName("account");
    account[0].style.display="none"
    account.className="close-account";
}

let user=["DabdoubD", "RamadanD", "HamdJ"]
let pass=["pass1", "pass2", "pass3"]

let accountBtn=document.getElementById("account-icon")
accountBtn.addEventListener("mouseover", displayAccountInfo)
let account=document.getElementById("account")
account.addEventListener("mouseover", displayAccountInfo)
account.addEventListener("mouseleave", closeAccountInfo)
document.getElementById("nav-bar").addEventListener("mouseleave", closeAccountInfo)
