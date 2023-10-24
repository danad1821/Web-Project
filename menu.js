class oItem {
    constructor(fname, quantity, price) {
        this.fname = fname;
        this.price = price;
        this.quantity = quantity;
    }
    findPrice(quantity) {
        return this.price * quantity;
    }
}
let total = 0;
let menuitems = [];
let totalAmount = document.getElementsByClassName("total-price")[0];
let orderedItems = [];
let bottom = document.documentElement.scrollHeight;
let upDown = document.getElementsByClassName("up-down-btns");
let upBtn = document.getElementById("up-btn");
let addItems = document.getElementsByClassName("add-btn");
function goUp() {
    window.scrollTo(0, 0);
}
function goDown() {
    window.scrollTo(0, bottom);
}
window.addEventListener("scroll", function () {
    let sHeight = document.documentElement.scrollTop;
    if (sHeight == 0) {
        upDown[0].style.display = "none";
        upDown[1].style.display = "block";
    }
    else if (sHeight > bottom - bottom * 0.13) {
        upDown[0].style.display = "block"
        upDown[1].style.display = "none"
    }
    else {
        upDown[0].style.display = "block"
        upDown[1].style.display = "block"
    }
})

upDown[0].addEventListener("click", goUp)
upDown[1].addEventListener("click", goDown)

var menulist = document.getElementById("menu");
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
                    <p class="menu-item-price"><b>Price:</b> $${item.price}</p>
                    <form class="menu-item-details">
                        <label for="quantity" class="quantity-title">Quantity:</label>
                        <input type="number" class="menu-item-quantity" min="0" max="10" placeholder="0">
                        <button class="add-btn">+</button>
                    </form>
                `
                    let newDish = new oItem(item.itemName, 0, item.price)
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
                        <p class="menu-item-price"><b>Price:</b> $${subItem.price}</p>
                        <form class="menu-item-details">
                            <label for="quantity" class="quantity-title">Quantity:</label>
                            <input type="number" class="menu-item-quantity" min="0" max="10" placeholder="0">
                            <button class="add-btn">+</button>
                        </form>
                        `
                        let newDish = new oItem(subItem.itemName, 0, subItem.price)
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
        // for (let i = 0; i < menuitems.length; i++) {
        //     console.log(menuitems[i])
        // }
        bottom = document.documentElement.scrollHeight;

        for (let i = 0; i < addItems.length; i++) {
            addItems[i].addEventListener("click", function () {
                event.preventDefault();
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
                        let orderedItem = new oItem(menuitems[i].fname, qt, menuitems[i].findPrice(qt));
                        orderedItems.push(orderedItem);
                    }
                    console.log(orderedItems)
                    
                    window.sessionStorage.setItem('order', JSON.stringify(orderedItems))
                    window.sessionStorage.setItem('totalPrice', JSON.stringify(total))
                    addItems[i].parentElement.reset()
                }
                
            })
        }

    })
    .catch(error => console.log('Error:', error));


