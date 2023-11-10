$(document).ready(function () {
    //Go to location
    let btnLocation = $("#go-to-location")

    btnLocation.on("click", () => {
        window.location.href = "locations.html";
        console.log('done')
    })
    //toggle the FAQ's
    let questionDiv = $(".question-div");
    let active = null;
    questionDiv.click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            active = null;
        } else {
            questionDiv.removeClass("active");
            $(this).addClass("active");
            active = $(this);
        }
    });
    //Input Text clear & Toast Notification show For Both contact-us form and FAQ
    //Contact Form
    let btnSend = $(".btn-send");
    let inputName = $(".in1");
    let inputEmail = $(".in2");
    let inputPhone = $(".in3");
    let inputMsg = $(".in4");
    let toast = $(".toast-container")
    let noInput = $(".no-input")


    btnSend.on("click", () => {
        const name = inputName.val()
        const email = inputEmail.val()
        const phone = inputPhone.val()
        const msg = inputMsg.val()

        if (name === "" || msg === "" || (email === "" && phone === "")) {
            if (toast.hasClass("active")) {
                toast.removeClass("active");
            }
            noInput.addClass("active");
            setTimeout(() => { noInput.removeClass("active"); }, 5800);
        } else {
            console.log(name)
            inputName.val("");
            inputEmail.val("");
            inputPhone.val("");
            inputMsg.val("");
            if (noInput.hasClass("active")) {
                noInput.removeClass("active");
            }
            toast.addClass("active");
            setTimeout(() => { toast.removeClass("active"); }, 5800);
        }
    });


    //FAQ
    let btnSubmit = $(".submitBtn");
    let inputName2 = $("input[type=name2]");
    let inputEmail2 = $("input[type=email2]");
    let inputQuestion = $("input[type=question]");
    let toast2 = $(".toast-container2");
    let noInput2 = $(".no-input2")

    btnSubmit.on("click", () => {
        const name = inputName2.val()
        const email = inputEmail2.val()
        const ques = inputQuestion.val()

        if (name === "" || ques === "" || email === "") {
            if (toast2.hasClass("active")) {
                toast2.removeClass("active");
            }
            noInput2.addClass("active");
            setTimeout(() => { noInput2.removeClass("active"); }, 5800);
        }
        else {
            inputName2.val("");
            inputEmail2.val("");
            inputQuestion.val("")
            if (noInput2.hasClass("active")) {
                noInput2.removeClass("active");
            }
            toast2.addClass("active");
            setTimeout(() => { toast2.removeClass("active"); }, 5800);
        }
    });
    //Button to close notification
    let btnRemove = $(".close")
    btnRemove.on("click", () => {
        toast.removeClass("active")
        toast2.removeClass("active")
        noInput.removeClass("active")
        noInput2.removeClass("active")
    })
    // Hover show contact details
    if ($(window).width() < 500) {
        $(".contact-detail").on("mouseenter", function () {
            $(this).find(".detail-text").css({ "display": "block", "opacity": 1 });
            $(this).find(".detail-svg").css({ "display": "none", "opacity": 0 });
            $(".phone-num").css({ 'margin-left': '0.5em', 'margin-right': '0.5em', "min-width": "50px" })
            $(".address").css({ "min-width": "50px" })
            if ($(this).hasClass !== "email-detail") {
                $(".email-detail").css({ "min-width": "50px" })
            }
            $(this).css({ "min-width": "200px" });
        }).on("mouseleave", function () {
            console.log("hello")
            $(this).find(".detail-text").css({ "display": "none", "opacity": 0 });
            $(this).find(".detail-svg").css({ "display": "block", "opacity": 1 });
            $(".contact-detail").css({ "min-width": "90px" });
            $(".phone-num").css({ 'margin-left': '1.5em', 'margin-right': '1.5em' })
        });
    }
    if ($(window).width() < 750) {
        $(".contact-detail").on("mouseenter", function () {
            $(this).find(".detail-text").css({ "display": "block", "opacity": 1 });
            $(this).find(".detail-svg").css({ "display": "none", "opacity": 0 });
        }).on("mouseleave", function () {
            console.log("hello")
            $(this).find(".detail-text").css({ "display": "none", "opacity": 0 });
            $(this).find(".detail-svg").css({ "display": "block", "opacity": 1 });
            $(".contact-detail").css({ "min-width": "21vw" });
            $(".phone-num").css({ 'margin-left': '1.5em', 'margin-right': '1.5em' })
        });
    }
})

