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

// window.addEventListener('click', function () {
//     if (count == 1) {
//         nav.style.display='none'
//         count = 0
//         return
//     }
// })

//CAROUSEL
const images = document.querySelectorAll('.carousel img');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

let currentIndex = 0;

// FONCTION IMG ACTIVE
function showImage(index) {
  for (let i = 0; i < images.length; i++) {
    if (i === index) {
      images[i].classList.add('active');
    } else {
      images[i].classList.remove('active');
    }
  }
}


// PREMIERE IMAGE
showImage(currentIndex);

// FLECHE DROITE
rightArrow.addEventListener('click', function() {
  currentIndex = currentIndex + 1;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
});

// FLECHE GAUCHE
leftArrow.addEventListener('click', function() {
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
});



