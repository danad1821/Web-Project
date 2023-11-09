let totalP = JSON.parse(window.sessionStorage.getItem('totalPrice'))
let tableBody = document.getElementById("cart-items-body");
let ordered = JSON.parse(window.sessionStorage.getItem('order'))
let menuI = JSON.parse(window.sessionStorage.getItem('menu'))
let displayOfTotal = document.getElementsByClassName("price-total")[0];
let tot = 0;
for (let i = 0; i < ordered.length; i++) {
    let row = document.createElement("tr");
    row.classList.add("tableBody-row")
    row.innerHTML = `
    <td class="row-box">${ordered[i].fname}</td>
    <td class="row-box"><input type="number" name="" id="" min="0" max="10" value="${ordered[i].quantity}"></td>
    <td class="row-box price">$${ordered[i].price.toFixed(2)}</td>
    <td class="row-box">
        <button class="remove-btn">Remove</button>
    </td>
    `
    tot += parseFloat(ordered[i].price.toFixed(2))
    tableBody.appendChild(row);
}
window.sessionStorage.setItem('totalPrice', JSON.stringify(tot))
displayOfTotal.textContent = "$" + tot.toFixed(2);
let qtNum = document.querySelectorAll("td input");
let foodName = document.querySelectorAll("td:nth-child(1)")
for (let j = 0; j < qtNum.length; j++) {
    qtNum[j].addEventListener("change", () => {
        if (qtNum[j].value == 0) {
            var removeitem = confirm("Are you sure you want to remove this item?")
            if (removeitem) {
                ordered.splice(j, 1);
                window.sessionStorage.setItem('order', JSON.stringify(ordered))
                location.reload()
                j = 0
            }
            else {
                qtNum[j].value = 1;
            }
        }
        else {
            let ogPrice = 0;
            for (let x = 0; x < menuI.length; x++) {
                if (menuI[x].fname == ordered[j].fname) {
                    ogPrice = parseFloat(menuI[x].price);
                }
            }
            let tPrice = ogPrice * parseFloat(qtNum[j].value);
            document.querySelectorAll(".price")[j].textContent = "$" + tPrice.toFixed(2);
            ordered[j].price = tPrice;
            ordered[j].quantity=qtNum[j].value;
            window.sessionStorage.setItem('order', JSON.stringify(ordered))
        }
        tot = 0;
        ordered.forEach(element => {
            tot += parseFloat(element.price);
            displayOfTotal.textContent = "$" + tot.toFixed(2);
        });
        window.sessionStorage.setItem('totalPrice', JSON.stringify(tot))
    })
}

let removeBtn = document.getElementsByClassName("remove-btn");
for (let l = 0; l < removeBtn.length; l++) {
    removeBtn[l].addEventListener("click", () => {
        var removeitem = confirm("Are you sure you want to remove this item?")
        if (removeitem) {
            ordered.splice(l, 1);
            window.sessionStorage.setItem('order', JSON.stringify(ordered))
            location.reload()
        }
    })
}
window.addEventListener("load", ()=>{
    let tableBody=document.getElementById("cart-items-body");
    let emptyCart=document.getElementById("empty-cart");
    let totalDiv=document.getElementById("total-div");
    if(tableBody.childElementCount==0){
        tableBody.parentElement.style.display="none"
        totalDiv.style.display="none"
        emptyCart.style.display="block"
    }
    else{
        tableBody.parentElement.style.display="table"
        totalDiv.style.display="flex"
        totalDiv.style.flexDirection="row"
        totalDiv.style.alignItems="flex-end"
        emptyCart.style.display="none"
    }
})
let checkoutBtn=document.getElementsByClassName("checkout-btn")[0];
checkoutBtn.addEventListener("click", ()=>{
    if (window.sessionStorage.getItem("SignedIn") == "true") {
        // if (ordery.length!=0){
        window.open("checkout.html", "_self");
        // }
        // else{
        //     alert("Empty Cart")
        // }
    }
})