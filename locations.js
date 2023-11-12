let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function () {
    if (active + 1 > lengthItems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlider();
};

prev.onclick = function () {
    if (active - 1 < 0) {
        active = lengthItems;
    } else {
        active = active - 1;
    }
    reloadSlider();
};

let refreshSlider = setInterval(() => {
    next.click();
}, 3000);

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshSlider);

    refreshSlider = setInterval(() => {
        next.click();
    }, 3000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', function () {
        active = key;
        reloadSlider();
    });
});




document.addEventListener("DOMContentLoaded", function () {
    
    let controller = new ScrollMagic.Controller();

    
    let fadeInDuration = 0.5;
    let fadeOutDuration = 1.2; 

    
    let fadeInBeirut = new ScrollMagic.Scene({
        triggerElement: '.locations-lebanon.Beirut',
        duration: fadeInDuration * window.innerHeight,
        triggerHook: 'onEnter'
    })
    .setTween(TweenMax.fromTo('.locations-lebanon.Beirut', fadeInDuration, { opacity: 0 }, { opacity: 1 }))
    .addTo(controller);

    
    let fadeOutBeirut = new ScrollMagic.Scene({
        triggerElement: '.locations-lebanon.Beirut',
        duration: fadeOutDuration * window.innerHeight, // Longer duration for fade-out
        triggerHook: 'onLeave'
    })
    .setTween(TweenMax.fromTo('.locations-lebanon.Beirut', fadeOutDuration, { opacity: 1 }, { opacity: 0 }))
    .addTo(controller);

    
    let fadeInTripoli = new ScrollMagic.Scene({
        triggerElement: '.locations-lebanon.Byblos',
        duration: fadeInDuration * window.innerHeight,
        triggerHook: 'onEnter'
    })
    .setTween(TweenMax.fromTo('.locations-lebanon.Byblos', fadeInDuration, { opacity: 0 }, { opacity: 1 }))
    .addTo(controller);

    
    let fadeOutTripoli = new ScrollMagic.Scene({
        triggerElement: '.locations-lebanon.Byblos',
        duration: fadeOutDuration * window.innerHeight, // Longer duration for fade-out
        triggerHook: 'onLeave'
    })
    .setTween(TweenMax.fromTo('.locations-lebanon.Byblos', fadeOutDuration, { opacity: 1 }, { opacity: 0 }))
    .addTo(controller);

   
    let fadeInTyre = new ScrollMagic.Scene({
        triggerElement: '.locations-lebanon.Batroun',
        duration: fadeInDuration * window.innerHeight,
        triggerHook: 'onEnter'
    })
    .setTween(TweenMax.fromTo('.locations-lebanon.Batroun', fadeInDuration, { opacity: 0 }, { opacity: 1 }))
    .addTo(controller);

    
    let fadeOutTyre = new ScrollMagic.Scene({
        triggerElement: '.locations-lebanon.Batroun',
        duration: fadeOutDuration * window.innerHeight, // Longer duration for fade-out
        triggerHook: 'onLeave'
    })
    .setTween(TweenMax.fromTo('.locations-lebanon.Batroun', fadeOutDuration, { opacity: 1 }, { opacity: 0 }))
    .addTo(controller);
});
