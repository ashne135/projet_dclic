/*// Récupération des éléments du DOM
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.navbar-right');

// Ajout d'un événement click sur le bouton de menu
menuBtn.addEventListener('click', function() {
  // Si le menu est fermé, l'ouvrir, sinon le fermer
  if (sidebar.style.left === '-250px') {
    sidebar.style.right = '0';
  } else {
    sidebar.style.right = '-250px';
  }
});

const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', function() {
  sidebar.style.display = 'none';
});
*/
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".navbar-right");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
  sidebar.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  closeBtn.classList.add("hidden");
  menuBtn.classList.remove("hidden");
  sidebar.classList.remove("open");
});

