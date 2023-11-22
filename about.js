$(document).ready(function () {
    const lastWindowWidth = $(window).width();
    // Slider Image animation
    if (lastWindowWidth > 850) {
        let $list = $('.slider .list');
        let $items = $('.slider .list .item');
        let $dots = $('.slider .dots li');

        let active = 0;
        let lengthItems = $items.length - 1;

        let refreshSlider = setInterval(function () {
            next();
        }, 5000);

        function reloadSlider() {
            let checkLeft = $items.eq(active).position().left;
            // $list.css('left', -checkLeft + 'px');
            $list.animate({ left: -checkLeft }, 850);

            let $lastActiveDot = $('.slider .dots li.active');
            $lastActiveDot.removeClass('active');
            $dots.eq(active).addClass('active');

            clearInterval(refreshSlider);

            refreshSlider = setInterval(function () {
                next();
            }, 7000);
        }

        $dots.each(function (key) {
            $(this).on('click', function () {
                active = key;
                reloadSlider();
            });
        });

        function next() {
            if (active + 1 > lengthItems) {
                active = 0;
            } else {
                active = active + 1;
            }
            reloadSlider();
        }
    }
    // Animation of container when scrolled over
    // Function to handle intersection changes
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass("visible");
            } else {
                $(entry.target).removeClass("visible");
            }
        });
    }

    // Set up the Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    // Add elements to be observed
    $(".fade-in").each(function () {
        observer.observe(this);
    });
    // refresh windows on size
    $(window).resize(function () {
        var newWidth = $(window).width();

        if (Math.abs(newWidth - lastWindowWidth) > 850) {
            lastWindowWidth = newWidth;
            location.reload();
        }
    });
    // Function to handle image source change
    function changeImageSrc() {
        const windowWidth = $(window).width();
        const newSrc = windowWidth < 880 ? "https://www.mediastorehouse.com.au/p/747/woman-cooking-range-home-america-1900-united-24905636.jpg.webp" : "https://media.cnn.com/api/v1/images/stellar/prod/220427155301-06-julia-child.jpg?c=original&q=h_618,c_fill";
        $("#img2").attr("src", newSrc);
    }

    // Initial check on page load
    changeImageSrc();

    // Check on window resize
    $(window).resize(function () {
        changeImageSrc();
    });
    // wrap event style on 926px
    let description = $(".desc-content")
    let event_cont = $(".event-cont")
    if (windowWidth <= '926px') {
        description.css({ 'opacity': 1 })
        event_cont.removeClass(description)
    }
});