class oItem {
    constructor(fname, quantity, price, image) {
        this.fname = fname;
        this.price = price;
        this.quantity = quantity;
        this.image=image
    }
    findPrice(quantity) {
        return this.price * quantity;
    }
}
let total = 0;
let menuitems = [];
let ordery=JSON.parse(window.sessionStorage.getItem('order'));
console.log(ordery)
let orderedItems=new Array();
if(ordery!=null){
    for(let q=0; q<ordery.length; q++){
        orderedItems.push(ordery[q]);
    }
}
else{
    orderedItems=[]
}
let totalAmount = document.getElementsByClassName("total-price")[0];
if(JSON.parse(window.sessionStorage.getItem('totalPrice'))!=null){
    total+=JSON.parse(window.sessionStorage.getItem('totalPrice'));
    totalAmount.textContent="$"+JSON.parse(window.sessionStorage.getItem('totalPrice')).toFixed(2);
}
let bottom = document.documentElement.scrollHeight;
let upDown = document.getElementsByClassName("up-down-btns");
let upBtn = document.getElementById("up-btn");
let addItems = document.getElementsByClassName("add-btn");
let popContainer = document.getElementsByClassName("pop-up-container")[0];
let popUpMsg = document.getElementsByClassName("pop-up")[0];
let loginBtn=document.getElementById("login-btn");
let checkoutBtn = document.getElementsByClassName("checkout-btn")[0];

loginBtn.addEventListener("click", ()=>{
    window.location.replace("sign-in.html", "_self");
});
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1, 33: 1, 34: 1, 35: 1, 36: 1};

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

function goUp() {
    window.scrollTo(0, 0);
}
function goDown() {
    window.scrollTo(0, bottom);
}

function popUp() {
    disableScroll();
    popContainer.style.display = "flex";
    popContainer.style.alignItems = "center";
    popContainer.style.justifyContent = "center";
    popUpMsg.style.display = "flex";
    popUpMsg.style.flexDirection = "column";
}
checkoutBtn.addEventListener("click", function () {
    if (window.sessionStorage.getItem("SignedIn") == "true") {
        window.location.replace("checkout.html");
    }
    else {
        popUp()
    }
})
window.addEventListener("scroll", function () {
    bottom = document.documentElement.scrollHeight;
    let y = 0;
    if (bottom < 20000 && bottom >= 10000) {
        y = 0.12
    }
    else if (bottom < 30000 && bottom >= 20000) {
        y = 0.08
    }
    else if (bottom < 30000 && bottom >= 20000) {
        y = 0.06
    }
    else {
        y = 0.05
    }
    console.log(bottom)
    let sHeight = document.documentElement.scrollTop;
    if (sHeight == 0) {
        upDown[0].style.display = "none";
        upDown[1].style.display = "block";
    }
    else if (sHeight > bottom - bottom * y) {
        upDown[0].style.display = "block"
        upDown[1].style.display = "none"
    }
    else {
        upDown[0].style.display = "block"
        upDown[1].style.display = "block"
    }
})
let closePopUp = document.getElementById("close-btn");
closePopUp.addEventListener("click", () => {
    enableScroll();
    popContainer.style.display = "none";
    popUpMsg.style.display = "none";
})
upDown[0].addEventListener("click", goUp)
upDown[1].addEventListener("click", goDown)
var menulist = document.getElementById("menu");
$(document).ready(function(){
    $(".main-section-nav").mouseenter(function(){
        $(".main-items-list").stop().slideToggle(700);
    });
    $(".main-section-nav").mouseleave(function(){
        $(".main-items-list").stop().slideToggle(700);
    });
    $(".bev-section-nav").mouseenter(function(){
        $(".beverages-items-list").stop().slideToggle(700);
    });
    $(".bev-section-nav").mouseleave(function(){
        $(".beverages-items-list").stop().slideToggle(700);
    });
})


fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        data.menu.forEach(item => {
            let sectionElement = document.createElement("div");
            sectionElement.classList.add("menu-sections");
            let sectionTitle = document.createElement("h2");
            sectionTitle.classList.add("section-title");
            sectionTitle.id = item.id;
            sectionTitle.textContent = item.sectionName;
            sectionElement.appendChild(sectionTitle);
            let content = document.createElement("div");
            content.classList.add("menu-items");
            item.items.forEach(item => {
                if (item.subName === undefined) {
                    let innerContent = document.createElement("div");
                    innerContent.classList.add("menu-item");
                    innerContent.innerHTML =
                        `
                    <img class="img-menu-item"src="${item.img}"">
                    <h4 class="menu-item-name">${item.itemName}</h4>
                    <p class="menu-item-description"><b>Description:</b> ${item.description}</p>
                    <p class="menu-item-price">Price: $${item.price.toFixed(2)}</p>
                    <form class="menu-item-details">
                        <div>
                            <label for="quantity" class="quantity-title">Quantity:</label>
                            <input type="number" class="menu-item-quantity" min="0" max="10" placeholder="0">
                        </div>
                        <button class="add-btn">+</button>
                    </form>
                `
                    let newDish = new oItem(item.itemName, 0, item.price, item.img)
                    menuitems.push(newDish);
                    window.sessionStorage.setItem('menu', JSON.stringify(menuitems))
                    content.appendChild(innerContent);
                }
                else {
                    let category = document.createElement("div");
                    category.classList.add("menu-items-with-categories");
                    let subtitle = document.createElement("h3");
                    subtitle.classList.add("subsection-title");
                    subtitle.id = item.id;
                    subtitle.textContent = item.subName
                    category.appendChild(subtitle)
                    let subsection = document.createElement("div");
                    subsection.classList.add("menu-subsection");
                    item.subItems.forEach(subItem => {
                        let innerContent = document.createElement("div");
                        innerContent.classList.add("menu-item");
                        innerContent.innerHTML =
                            `
                        <img class="img-menu-item"src="${subItem.img}"">
                        <h4 class="menu-item-name">${subItem.itemName}</h4>
                        <p class="menu-item-description"><b>Description:</b> ${subItem.description}</p>
                        <p class="menu-item-price">Price: $${subItem.price.toFixed(2)}</p>
                        <form class="menu-item-details">
                            <div>
                                <label for="quantity" class="quantity-title">Quantity:</label>
                                <input type="number" class="menu-item-quantity" min="0" max="10" placeholder="0">
                            </div>
                            <button class="add-btn">+</button>
                        </form>
                        `
                        let newDish = new oItem(subItem.itemName, 0, subItem.price, subItem.img)
                        menuitems.push(newDish);
                        window.sessionStorage.setItem('menu', JSON.stringify(menuitems))
                        subsection.appendChild(innerContent)
                    })
                    category.appendChild(subsection)
                    content.appendChild(category)
                }
            })
            sectionElement.appendChild(content)
            menulist.appendChild(sectionElement);
        });
        bottom = document.documentElement.scrollHeight;
        for (let i = 0; i < addItems.length; i++) {

            addItems[i].addEventListener("click", function () {
                event.preventDefault();
                if (window.sessionStorage.getItem("SignedIn") == "true") {

                    let fName = document.getElementsByClassName("menu-item-name")[i].textContent;
                    let qt = document.getElementsByClassName("menu-item-quantity")[i].value;
                    let inOrder = false;
                    if (qt > 0) {
                        total += menuitems[i].findPrice(qt);
                        totalAmount.textContent = "$" + total.toFixed(2);
                        for (let j = 0; j < orderedItems.length; j++) {
                            console.log("inLoop")
                            if (orderedItems[j].fname == fName) {
                                console.log("in")
                                inOrder = true;
                                let newQt = parseInt(qt) + parseInt(orderedItems[j].quantity);
                                orderedItems[j].quantity = newQt;
                                orderedItems[j].price = menuitems[i].findPrice(newQt);
                                break
                            }
                        }
                        if (inOrder == false) {
                            let orderedItem = new oItem(menuitems[i].fname, qt, menuitems[i].findPrice(qt), menuitems[i].image);
                            orderedItems.push(orderedItem);
                        }
                        console.log(orderedItems)

                        window.sessionStorage.setItem('order', JSON.stringify(orderedItems))
                        window.sessionStorage.setItem('totalPrice', JSON.stringify(total))
                        addItems[i].parentElement.reset()
                    }
                }
                else {
                    popUp()
                }
            })
        }
    })

    .catch(error => console.log('Error:', error));


