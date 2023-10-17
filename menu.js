// class menuItem{
//     constructor(fname, price, quantity){
//         this.fname=fname;
//         this.price=price
//         this.quantity=quantity
//     }
//     printItem() {
//         return this.fname + " x"+this.quantity+" Price:"+this.price
//     }
// }
// let items=[];
// export {menuItem, items};
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
    else if (sHeight > bottom - 1300) {
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
            sectionTitle.id=item.id;
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
                    <div class="menu-item-details">
                        <label for="quantity" class="quantity-title">Quantity:</label>
                        <input type="number" class="menu-item-quantity" min="0" max="10" placeholder="0">
                        <button class="add-btn">+</button>
                    </div>
                `
                    content.appendChild(innerContent);
                }
                else{
                    let category=document.createElement("div");
                    category.classList.add("menu-items-with-categories");
                    let subtitle=document.createElement("h3");
                    subtitle.classList.add("subsection-title");
                    subtitle.id=item.id;
                    subtitle.textContent=item.subName
                    category.appendChild(subtitle)
                    let subsection=document.createElement("div");
                    subsection.classList.add("menu-subsection");
                    item.subItems.forEach(subItem=>{
                        let innerContent = document.createElement("div");
                        innerContent.classList.add("menu-item");
                        innerContent.innerHTML =
                        `
                        <img class="img-menu-item"src="${subItem.img}"">
                        <h4 class="menu-item-name">${subItem.itemName}</h4>
                        <p class="menu-item-description"><b>Description:</b> ${subItem.description}</p>
                        <p class="menu-item-price"><b>Price:</b> $${subItem.price}</p>
                        <div class="menu-item-details">
                            <label for="quantity" class="quantity-title">Quantity:</label>
                            <input type="number" class="menu-item-quantity" min="0" max="10" placeholder="0">
                            <button class="add-btn">+</button>
                        </div>
                        `
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
    })
    .catch(error => console.log('Error:', error));