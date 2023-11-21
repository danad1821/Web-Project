
$(document).ready(function() {




// Declarations
let list = $('.slider .list');
let items = $('.slider .list .item');
let dots = $('.slider .dots li');
let prev = $('#prev');
let next = $('#next');

let active = 0;
let lengthItems = items.length - 1;

// Next button click event
next.on('click', function () {
    active = active === lengthItems ? 0 : active + 1;
    reloadSlider();
});

// Previous button click event
prev.on('click', function () {
    active = active === 0 ? lengthItems : active - 1;
    reloadSlider();
});

// Auto-refresh the slider
let refreshSlider = setInterval(function () {
    active = active === lengthItems ? 0 : active + 1;
    reloadSlider();
}, 4000); 

// Reload the slider based on the active item
function reloadSlider() {
    let checkLeft = items.eq(active).position().left;
    list.css('left', -checkLeft + 'px');

    let lastActiveDot = $('.slider .dots li.active');
    lastActiveDot.removeClass('active');
    dots.eq(active).addClass('active');
}

// Click event for each dot in the slider
dots.each(function (key, li) {
    $(li).on('click', function () {
        active = key;
        reloadSlider();
    });
});
});

    // Create a ScrollMagic controller
    let controller = new ScrollMagic.Controller();

    // Duration and trigger settings for fade-in and fade-out animations
    let fadeInDuration = 1;
    let fadeOutDuration = 1.5;

    // Fade-in animation for Beirut location
    let fadeInBeirut = new ScrollMagic.Scene({
        triggerElement: '.locations-lebanon.Beirut',
        duration: fadeInDuration * window.innerHeight,
        triggerHook: 'onEnter'
    })
    .setTween(TweenMax.fromTo('.locations-lebanon.Beirut', fadeInDuration, { opacity: 0 }, { opacity: 1 }))
    .addTo(controller);

    // Fade-out animation for Beirut location
    let fadeOutBeirut = new ScrollMagic.Scene({
        triggerElement: '.locations-lebanon.Beirut',
        duration: fadeOutDuration * window.innerHeight,
        triggerHook: 'onLeave'
    })
    .setTween(TweenMax.fromTo('.locations-lebanon.Beirut', fadeOutDuration, { opacity: 1 }, { opacity: 0 }))
    .addTo(controller);

   // Fade-in animation for Byblos location
   let fadeInByblos = new ScrollMagic.Scene({
    triggerElement: '.locations-lebanon.Byblos',
    duration: fadeInDuration * window.innerHeight,
    triggerHook: 'onEnter'
})
.setTween(TweenMax.fromTo('.locations-lebanon.Byblos', fadeInDuration, { opacity: 0 }, { opacity: 1 }))
.addTo(controller);


    // Fade-out animation for Byblos location
    let fadeOutByblos = new ScrollMagic.Scene({
        triggerElement: '.locations-lebanon.Byblos',
        duration: fadeOutDuration * window.innerHeight,
        triggerHook: 'onLeave'
    })
    .setTween(TweenMax.fromTo('.locations-lebanon.Byblos', fadeOutDuration, { opacity: 1 }, { opacity: 0 }))
    .addTo(controller);

    // Fade-in animation for Batroun location
    let fadeInBatroun = new ScrollMagic.Scene({
        triggerElement: '.locations-lebanon.Batroun',
        duration: fadeInDuration * window.innerHeight,
        triggerHook: 'onEnter'
    })
    .setTween(TweenMax.fromTo('.locations-lebanon.Batroun', fadeInDuration, { opacity: 0 }, { opacity: 1 }))
    .addTo(controller);
// Fade-out animation for Batroun location
let fadeOutBatroun = new ScrollMagic.Scene({
    triggerElement: '.locations-lebanon.Batroun',
    duration: fadeOutDuration * window.innerHeight,
    triggerHook: 'onLeave'
})
.setTween(TweenMax.fromTo('.locations-lebanon.Batroun', fadeOutDuration, { opacity: 1 }, { opacity: 0 }))
.addTo(controller);


