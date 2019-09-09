const element = document.getElementById('a')

lottie.loadAnimation({
    container: document.getElementById('a'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './js/anim/datav5.json' // the path to the animation json
});

lottie.loadAnimation({
    container: document.getElementById('register__anim--desktop'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './js/anim/datav5.json' // the path to the animation json
});

lottie.loadAnimation({
    container: document.getElementById('register__anim--tablet'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './js/anim/datav5.json' // the path to the animation json
});

lottie.loadAnimation({
    container: document.getElementById('header__anim'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './js/anim/data-dance.json' // the path to the animation json
});

