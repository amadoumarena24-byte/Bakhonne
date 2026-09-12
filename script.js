// ==================================================
// GALERIE BAKHONNE - DIAPORAMA
// ==================================================


// Récupération des éléments

const photos = document.querySelectorAll(".photo img");

const lightbox = document.getElementById("lightbox");

const imageLightbox = document.getElementById("imageLightbox");

const fermer = document.getElementById("fermer");

const precedent = document.getElementById("precedent");

const suivant = document.getElementById("suivant");

const compteur = document.getElementById("compteur");


// Position de l'image actuelle

let imageActuelle = 0;


// ==================================================
// OUVRIR LA LIGHTBOX
// ==================================================

function ouvrirLightbox(index) {

    imageActuelle = index;

    imageLightbox.src = photos[imageActuelle].src;

    imageLightbox.alt = photos[imageActuelle].alt;

    compteur.textContent =
        (imageActuelle + 1) + " / " + photos.length;

    lightbox.classList.add("active");

    // Empêche le défilement de la page
    document.body.style.overflow = "hidden";
}


// ==================================================
// FERMER LA LIGHTBOX
// ==================================================

function fermerLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}


// ==================================================
// IMAGE SUIVANTE
// ==================================================

function imageSuivante() {

    imageActuelle++;

    if (imageActuelle >= photos.length) {
        imageActuelle = 0;
    }

    imageLightbox.src = photos[imageActuelle].src;

    imageLightbox.alt = photos[imageActuelle].alt;

    compteur.textContent =
        (imageActuelle + 1) + " / " + photos.length;
}


// ==================================================
// IMAGE PRÉCÉDENTE
// ==================================================

function imagePrecedente() {

    imageActuelle--;

    if (imageActuelle < 0) {
        imageActuelle = photos.length - 1;
    }

    imageLightbox.src = photos[imageActuelle].src;

    imageLightbox.alt = photos[imageActuelle].alt;

    compteur.textContent =
        (imageActuelle + 1) + " / " + photos.length;
}


// ==================================================
// CLIQUER SUR UNE IMAGE
// ==================================================

photos.forEach(function(photo, index) {

    photo.addEventListener("click", function() {

        ouvrirLightbox(index);

    });

});


// ==================================================
// BOUTON FERMER
// ==================================================

fermer.addEventListener("click", function() {

    fermerLightbox();

});


// ==================================================
// BOUTON SUIVANT
// ==================================================

suivant.addEventListener("click", function() {

    imageSuivante();

});


// ==================================================
// BOUTON PRÉCÉDENT
// ==================================================

precedent.addEventListener("click", function() {

    imagePrecedente();

});


// ==================================================
// CLIQUER SUR LE FOND POUR FERMER
// ==================================================

lightbox.addEventListener("click", function(e) {

    if (e.target === lightbox) {

        fermerLightbox();

    }

});


// ==================================================
// CLAVIER
// ==================================================

document.addEventListener("keydown", function(e) {

    // Si la galerie n'est pas ouverte
    if (!lightbox.classList.contains("active")) {
        return;
    }


    // Flèche droite
    if (e.key === "ArrowRight") {

        imageSuivante();

    }


    // Flèche gauche
    if (e.key === "ArrowLeft") {

        imagePrecedente();

    }


    // Touche Échap
    if (e.key === "Escape") {

        fermerLightbox();

    }

});


// ==================================================
// GLISSEMENT SUR TÉLÉPHONE
// ==================================================

let debutTouch = 0;

let finTouch = 0;


imageLightbox.addEventListener("touchstart", function(e) {

    debutTouch = e.touches[0].clientX;

});


imageLightbox.addEventListener("touchend", function(e) {

    finTouch = e.changedTouches[0].clientX;

    let distance = finTouch - debutTouch;


    // Glisser vers la gauche
    if (distance < -50) {

        imageSuivante();

    }


    // Glisser vers la droite
    if (distance > 50) {

        imagePrecedente();

    }

});
fondateur4: {
    nom: "Prénom Nom",
    profession= "Profession",
    role= "Rôle dans Bakhonne",
    photo="images/fondateur4.jpg",
    description= "Présentation complète du fondateur..."
}
const fondateurs = {

    fondateur1: {
        nom: "Amadou Marena",
        profession: "Technicien supérieur multimédia",
        role: "Co-fondateur & Responsable digital",
        image: "images/fondateur1.jpg",

        presentation: `
            <p>
                Amadou Marena participe à la conception et au développement
                du projet Bakhonne.
            </p>

            <p>
                Son rôle est de contribuer à la création des contenus
                multimédias et à la communication digitale de Bakhonne.
            </p>

            <p>
                À travers son engagement, il souhaite contribuer à la
                préservation et à la transmission de la culture Manjak
                auprès des nouvelles générations.
            </p>
        `
    },

    fondateur2: {
        nom: "Prénom Nom",
        profession: "Spécialiste de la culture",
        role: "Co-fondateur",
        image: "images/fondateur2.jpg",
function ouvrirFondateur(id) {
    alert("Ça fonctionne ! Fondateur : " + id);
}
        presentation: `
            <p>
                Cette personne participe à la valorisation et à la
                transmission de la culture Manjak.
            </p>

            <p>
                Son expérience et ses connaissances contribuent
                au développement du projet Bakhonne.
            </p>
        `
    },

    fondateur3: {
        nom: "Prénom Nom",
        profession: "Chercheur culturel",
        role: "Co-fondateur",
        image: "images/fondateur3.jpg",

        presentation: `
            <p>
                Cette personne contribue à la recherche et à la
                documentation des traditions Manjak.
            </p>

            <p>
                Son objectif est de participer à la sauvegarde du
                patrimoine culturel et à sa transmission.
            </p>
        `
    }

};


function ouvrirFondateur(id) {

    const fondateur = fondateurs[id];

    if (!fondateur) {
        console.log("Fondateur introuvable");
        return;
    }

    document.getElementById("photo-modal").src = fondateur.image;

    document.getElementById("nom-modal").textContent =
        fondateur.nom;

    document.getElementById("profession-modal").textContent =
        fondateur.profession;

    document.getElementById("role-modal").textContent =
        fondateur.role;

    document.getElementById("presentation-modal").innerHTML =
        fondateur.presentation;

    document.getElementById("fenetre-fondateur")
        .classList.add("active");

    document.body.style.overflow = "hidden";
}


function fermerFondateur() {

    document.getElementById("fenetre-fondateur")
        .classList.remove("active");

    document.body.style.overflow = "auto";
}


// Fermer en cliquant en dehors

document.addEventListener("click", function(event) {

    const modal = document.getElementById("fenetre-fondateur");

    if (event.target === modal) {
        fermerFondateur();
    }

});


// Fermer avec Échap

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        fermerFondateur();
    }

});