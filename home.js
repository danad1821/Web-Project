$(document).ready(function () {
    if (sessionStorage.getItem("SignedIn") == "true") {
        $(".signing-options").hide();
    } else {
        $(".signing-options").show();
    }
    // $(window).resize(()=>{
    //     if ($(window).width() <= 950) {
    //         $("#main-logo").attr("src", "Malaz Design/Malaz---icon cropped.png")
    //     }
    //     else if ($(window).width() > 950) {
    //         $("#main-logo").attr("src", "Malaz Design/Main Logo (Picture Backgrounds) - Bold.png")
    //     }
    // })
});
