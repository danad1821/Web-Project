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

