window.addEventListener("load", ()=>{
    if (window.sessionStorage.getItem("SignedIn") == "true"){
        let signingOp=document.getElementsByClassName("signing-options");
        signingOp[0].style.display="none"
    }
    else{
        let signingOp=document.getElementsByClassName("signing-options");
        signingOp[0].style.display="block"
    }
})
