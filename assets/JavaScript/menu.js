const menu = document.querySelector('.menu')
const nav = document.querySelector('nav')
let count = 0

//MENU BURGER

menu.addEventListener('click', function (menu){
    if (count == 0) {
        nav.classList.add('nav-menu')
        count = 1
        return
    } else if (count == 1) {
        nav.classList.remove('nav-menu')
        count = 0
        return
    }
})
