// import { menuItem, items } from "./menu";
// window.addEventListener("load", function(){
//     let listMenu=getElementById("menu-items-list");
//     items.forEach(elem=>{
//         let newItem=document.createElement("li");
//         newItem=elem;
//         listMenu.appendChild(newItem);
//     })
// })

function showPaymentMethod() {
    let method = document.getElementsByClassName("payment-info");
    method[0].style.display = "flex";
    method[0].style.flexDirection = "column"
    let placeBtn=document.getElementById("finalizeBtn")
    placeBtn.style.display="inline-block"
    placeBtn.style.marginBottom="1.5%"
}
function getSelectedRadio() {
    let radio = document.getElementsByName("orderType");
    if (radio[0].checked) {
        let location = document.getElementsByClassName("location-takeaway")
        let notLocation = document.getElementsByClassName("location-delivery")
        notLocation[0].style.display = "none"
        location[0].style.display = "flex"
        showPaymentMethod()
    }
    else if (radio[1].checked) {
        let location = document.getElementsByClassName("location-delivery")
        let notLocation = document.getElementsByClassName("location-takeaway")
        notLocation[0].style.display = "none"
        location[0].style.display = "flex"
        location[0].style.flexDirection = "column"
        showPaymentMethod()
    }
}

let radio1 = document.getElementById("radio1")
let radio2 = document.getElementById("radio2")
radio1.addEventListener("click", getSelectedRadio)
radio2.addEventListener("click", getSelectedRadio)
let placeBtn=document.getElementById("finalizeBtn")
placeBtn.addEventListener("click", function(){
    window.sessionStorage()
    let reqFields=document.getElementsByClassName("required")
    for(let i=0; i<reqFields.length; i++) {
        if (reqFields[i].value==""){
            place=false
        }
    };
    if(place=false){
        alert("an error has occured")
    }
    else{
        window.open("index.html", "_self");
    }
})
