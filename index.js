let reponseDate = document.getElementById("reponse-date");
let reponseWhile = document.getElementById("reponse-while");
let WhileInput = document.getElementById("nb-while");
let dateInput = document.getElementById("date");
const Mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];


document.getElementById("form-date").onsubmit = function(event) {
    event.preventDefault();
    reponseDate.innerText = "Le nom du mois est : ";
    let d = (new Date(dateInput.value));
    console.log(d.getMonth());
    let bonMois = Mois[d.getMonth()];
    reponseDate.innerHTML += bonMois;
}

let formWhile = document.getElementById("form-while").
    onsubmit = function(event) {
    event.preventDefault();
    reponseWhile.innerText = "Produit : ";
    let produit = 1;
    let compteur = 1;
    console.log(WhileInput.value);
    while(compteur <= WhileInput.value)
    {
        produit = produit * compteur;
        compteur++;
        console.log(produit);
    }
    reponseWhile.innerHTML += produit;
}

let formDoWhile = document.getElementById("form-do-while").
    onsubmit = function() {
    console.log("Do While");
}