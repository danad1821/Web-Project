let bottom = document.documentElement.scrollHeight;
let upDown = document.getElementsByClassName("up-down-btns");
let upBtn = document.getElementById("up-btn");
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


