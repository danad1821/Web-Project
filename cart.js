let back_btn = document.querySelector(".go-back-text")
back_btn.addEventListener("click" , function(){
    window.history.go(-1);
})
let tableBody=document.getElementById("cart-items-body");
let ordered=JSON.parse(window.sessionStorage.getItem('order'))
let menuI=JSON.parse(window.sessionStorage.getItem('menu'))
for(let i=0; i<ordered.length; i++){
    let row=document.createElement("tr");
    row.classList.add("tableBody-row")
    row.innerHTML=`
    <td class="row-box">${ordered[i].fname}</td>
    <td class="row-box"><input type="number" name="" id="" min="0" max="10" value="${ordered[i].quantity}"></td>
    <td class="row-box price">$${ordered[i].price}</td>
    <td class="row-box">
        <button class="remove-btn">Remove</button>
    </td>
    `
    tableBody.appendChild(row);
}

let qtNum=document.querySelectorAll("td input");
for(let j=0; j<qtNum.length; j++){
    qtNum[j].addEventListener("change",()=>{
        console.log(qtNum[j].value)
        if(qtNum[j].value==0){
            var removeitem=confirm("Are you sure you want to remove this item?")
            if(removeitem){
                qtNum[j].parentElement.parentElement.remove();
                j=0
            }
            else{
                qtNum[j].value=1;
            }
        }
        else{
            // Fix this late since it is not taking the proper price
            let ogPrice=parseFloat(menuI[j].price);
            console.log(ogPrice)
            let tPrice=ogPrice*parseFloat(qtNum[j].value)
            console.log(tPrice)
            document.querySelectorAll(".price")[j].textContent="$"+tPrice;
        }
    })
}

let removeBtn=document.getElementsByClassName("remove-btn");
for(let i=0; i<removeBtn.length; i++){
    removeBtn[i].addEventListener("click", ()=>{
        ordered=ordered.splice(i-1, 1);
        removeBtn[i].parentElement.parentElement.remove();
        
    })
}