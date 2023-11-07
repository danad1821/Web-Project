$(document).ready(function () {
    if (sessionStorage.getItem("SignedIn") == "true") {
        $(".signing-options").hide();
    } else {
        $(".signing-options").show();
    }
});
