window.addEventListener('scroll', function(){
    const head = document.querySelector('header')
    head.classList.toggle('sticky', window.scrollY > 0)
})

// window.addEventListener('click', function(){
//    const menu = document.querySelector('.menuToggle')
//    const nav = document.querySelector('.navigation')
//    menu.classList.toggle('active')
//    nav.classList.toggle('active')
// })

function toggleMenu(){
    const menu = document.querySelector('.menuToggle')
    const nav = document.querySelector('.navigation')
    menu.classList.toggle('active')
    nav.classList.toggle('active')
}