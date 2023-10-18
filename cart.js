let back_btn = querySelector(".go-back-text")
back_btn.addEventListener("click" , function(){
    window.history.go(-1);
})
let tableBody=document.getElementById("cart-items-body");
import { oItem, orderedItems } from "./menu";
for(let i=0; i<orderedItems.length; i++){
    let row=document.createElement("tr");
    row.classList.add("tableBody-row")
    row.innerHTML=`
    <td class="row-box">${orderedItems[i].fname}</td>
    <td class="row-box"><input type="number" name="" id="" min="1" max="10" value="${orderedItems[i].quantity}"></td>
    <td class="row-box">${orderedItems[i].price}</td>
    <td class="row-box">
        <button class="remove-btn">Remove</button>
    </td>
    `
    tableBody.appendChild(row);
}
let removeBtn=document.getElementsByClassName("remove-btn");
for(let i=0; i<removeBtn.length; i++){
    
}