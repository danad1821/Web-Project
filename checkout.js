let ordered = JSON.parse(window.sessionStorage.getItem('order'));
function showPaymentMethod() {
    let method = document.getElementsByClassName("payment-info");
    method[0].style.display = "flex";
    method[0].style.flexDirection = "column"
    let placeBtn=document.getElementById("finalizeBtn")
    placeBtn.style.display="inline-block"
    placeBtn.style.marginBottom="1.5%"
}

let placeBtn=document.getElementById("finalizeBtn")
placeBtn.addEventListener("click", function(){
    let place=true;
    let reqFields=document.getElementsByClassName("required")
    for(let i=0; i<reqFields.length; i++) {
        if (reqFields[i].value==""){
            place=false
        }
    };
    if(place==false){
        alert("an error has occured")
    }
    else{
        window.sessionStorage.removeItem('order')
        window.sessionStorage.removeItem('totalPrice')
        window.open("index.html", "_self");
    }
})
let tot=0;
for (let i = 0; i < ordered.length; i++) {
    tot+=ordered[i].price;
}
let price=document.getElementsByClassName("total-price")[0];
price.textContent="$"+tot.toFixed(2).toString();

