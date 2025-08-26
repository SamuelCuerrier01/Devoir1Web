let reponseDate = document.getElementById("reponse-date");
let reponseWhile = document.getElementById("reponse-while");
let reponseDoWhile = document.getElementById("reponse-do-while");
let WhileInput = document.getElementById("nb-while");
let DoWhileInput = document.getElementById("nb-do-while");
let dateInput = document.getElementById("date");
const Mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];


document.getElementById("form-date").onsubmit = function(event) {
    event.preventDefault();
    reponseDate.innerText = "Le nom du mois est : ";
    let d = (new Date(dateInput.value));
    let bonMois = Mois[d.getMonth()];
    reponseDate.innerHTML += bonMois;
}

let formWhile = document.getElementById("form-while").
    onsubmit = function(event) {
    event.preventDefault();
    reponseWhile.innerText = "Produit : ";
    let produit = 1;
    let compteur = 1;
    while(compteur <= WhileInput.value)
    {
        produit = produit * compteur;
        compteur++;
    }
    reponseWhile.innerHTML += produit;
}

let formDoWhile = document.getElementById("form-do-while").
    onsubmit = function(event) {
        event.preventDefault();
        reponseDoWhile.innerText = "Produit : ";
        let produit = 1;
        let compteur = 1;
        do
        {
            produit = produit * compteur;
            compteur++;
        }while(compteur <= DoWhileInput.value)
        reponseDoWhile.innerHTML += produit;
}