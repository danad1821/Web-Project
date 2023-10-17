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
let addItems=document.getElementsByClassName("add-btn");
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
// addItems.array.forEach(element => {
//     element.addEventListener("click", function(){
//         for(let i=0; i<addItems.length; i++){
//             let quantity=getElementsByClassName("menu-item-quantity")[i];
//             if(quantity>0){
//                 let name=getElementsByClassName("menu-item-name")[i];
//                 let price=getElementsByClassName("menu-item-price")[i];
//                 newItem= new menuItem(name, price, quantity);
//                 items.append(newItem);
//             }
//         }
//     })
// });
var menu = JSON.parse(menu);
let menuList=document.getElementsByClassName("menu")[0];
menu.forEach(element => {
    let sectionElement=document.createElement("div");
    sectionElement.className="menu-sections";
    let sectionTitle=document.createElement("h2");
    sectionTitle.className="section-title";
    sectionTitle.textContent=element.name;
    sectionElement.appendChild(sectionTitle);
    let content=document.createElement("div");
    content.className="menu-items";
    element.items.forEach(item=>{
        let innerContent=document.createElement("div");
        innerContent.className="menu-item";
        let image=document.createElement("img");
        image.className="img-menu-item";
        image.src=item.img;
        innerContent.appendChild(image);
        let title=document.createElement("h4");
        title.textContent=item.name;
        title.className="menu-item-name";
        innerContent.append(title);
        let description=document.createElement("p");
        description.textContent="Description: "+item.description;
        description.className="menu-item-description"
        let price=document.createElement("p")
    })
    
    
});
