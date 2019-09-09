const nav = document.querySelector('.nav')

const logo = document.querySelector('.nav__logo')

const links = document.querySelector('.nav__links')
const item = document.querySelector('.nav__links--link')
const cta = document.querySelector('.nav__links--cta')

const headerScroll = () => {
    let scroll = window.pageYOffset;
    if(scroll > 60) {
        nav.classList.add('nav-scroll')
        links.classList.add('links-scroll')
        cta.classList.add('cta-scroll')
        logo.setAttribute('src', 'img/logo-bleu.png')
    }
    else {
        nav.classList.remove('nav-scroll')
        links.classList.remove('links-scroll')
        cta.classList.remove('cta-scroll')
        logo.setAttribute('src', 'img/logo-blanc.png')
    }
}
headerScroll()
document.addEventListener('scroll', headerScroll)