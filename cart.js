let totalP = JSON.parse(window.sessionStorage.getItem('totalPrice'))
let tableBody = document.getElementById("cart-items-body");
let ordered = JSON.parse(window.sessionStorage.getItem('order'))
let menuI = JSON.parse(window.sessionStorage.getItem('menu'))
let displayOfTotal = document.getElementsByClassName("price-total")[0];
let tot = 0;

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1, 33: 1, 34: 1, 35: 1, 36: 1 };

function preventDefaultt(e) {
    e.preventDefault();
}
function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefaultt(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefaultt, false); // older FF
    window.addEventListener(wheelEvent, preventDefaultt, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefaultt, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefaultt, false);
    window.removeEventListener(wheelEvent, preventDefaultt, wheelOpt);
    window.removeEventListener('touchmove', preventDefaultt, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
let popContainer = document.getElementsByClassName("pop-up-container")[0];
let popUpMsg = document.getElementsByClassName("pop-up")[0];

function popUp() {
    disableScroll();
    popContainer.style.display = "flex";
    popContainer.style.alignItems = "center";
    popContainer.style.justifyContent = "center";
    popUpMsg.style.display = "flex";
    popUpMsg.style.flexDirection = "column";
}

let closePopUp = document.getElementById("close-btn");
closePopUp.addEventListener("click", () => {
    enableScroll();
    popContainer.style.display = "none";
    popUpMsg.style.display = "none";
})

for (let i = 0; i < ordered.length; i++) {
    let row = document.createElement("tr");
    row.classList.add("tableBody-row")
    row.innerHTML = 
    `
    <td class="row-box img-col"><img class="food-img" src='${ordered[i].image}'></td>
    <td class="row-box middle-box">${ordered[i].fname}</td>
    <td class="row-box middle-box"><input type="number" name="" id="" min="0" max="10" value="${ordered[i].quantity}"></td>
    <td class="row-box price middle-box">$${ordered[i].price.toFixed(2)}</td>
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
            popUp()
            document.getElementById("yes").addEventListener("click", () => {
                ordered.splice(j, 1);
                window.sessionStorage.setItem('order', JSON.stringify(ordered))
                location.reload()
                j = 0
            });
            document.getElementById("no").addEventListener("click", () => {
                enableScroll();
                popContainer.style.display = "none";
                popUpMsg.style.display = "none";
                qtNum[j].value = 1;
            })
            closePopUp.addEventListener("click", () => {
                enableScroll();
                popContainer.style.display = "none";
                popUpMsg.style.display = "none";
                qtNum[j].value = 1;
            })
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
            ordered[j].quantity = qtNum[j].value;
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
        popUp()
        let yesBtn = document.getElementById("yes");
        yesBtn.addEventListener("click", () => {
            ordered.splice(l, 1);
            window.sessionStorage.setItem('order', JSON.stringify(ordered))
            location.reload()
        });
        document.getElementById("no").addEventListener("click", () => {
            enableScroll();
            popContainer.style.display = "none";
            popUpMsg.style.display = "none";
        })
    })
}
window.addEventListener("load", () => {
    let tableBody = document.getElementById("cart-items-body");
    let emptyCart = document.getElementById("empty-cart");
    let totalDiv = document.getElementById("total-div");
    if (tableBody.childElementCount == 0) {
        tableBody.parentElement.style.display = "none"
        totalDiv.style.display = "none"
        emptyCart.style.display = "flex"
        document.querySelector("body>h1").style.display="none"
    }
    else {
        tableBody.parentElement.style.display = "table"
        totalDiv.style.display = "flex"
        totalDiv.style.flexDirection = "row"
        totalDiv.style.alignItems = "flex-end"
        emptyCart.style.display = "none"
        document.querySelector("body>h1").style.display="block"
    }
})
let checkoutBtn = document.getElementsByClassName("checkout-btn")[0];
checkoutBtn.addEventListener("click", () => {
    if (window.sessionStorage.getItem("SignedIn") == "true") {
        // if (ordery.length!=0){
        window.open("checkout.html", "_self");
        // }
        // else{
        //     alert("Empty Cart")
        // }
    }
})