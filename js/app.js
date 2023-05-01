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
// On définit la fonction qui permet de changer la couleur du background au survol des liens
function changeLinkColor() {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("mouseover", function() {
        this.style.color = "#333";
      });
      links[i].addEventListener("mouseout", function() {
        this.style.color = "#666";
      });
    }
  }
  
  // On appelle la fonction au chargement de la page
  window.onload = function() {
    changeLinkColor();
  };
  const form = document.getElementById("contact-form");

form.addEventListener("submit", e => {
  e.preventDefault();

  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const message = form.elements["message"].value;

  const data = new FormData();
  data.append("name", name);
  data.append("email", email);
  data.append("message", message);

  fetch("submit.php", {
    method: "POST",
    body: data
  })
  .then(response => {
    if (response.ok) {
      alert("Votre message a été envoyé !");
      form.reset();
    } else {
      alert("Une erreur est survenue, veuillez réessayer plus tard.");
    }
  });
});


