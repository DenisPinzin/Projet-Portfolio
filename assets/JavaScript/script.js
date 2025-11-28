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
// Récupère tous les éléments
const images = document.querySelectorAll('.carousel img');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

let currentIndex = 0;

// Fonction pour afficher l'image active
function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}


// Affiche la première image au départ
showImage(currentIndex);

// Flèche droite → image suivante
rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length; // boucle
  showImage(currentIndex);
});

// Flèche gauche → image précédente
leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // boucle inverse
  showImage(currentIndex);
});



