function trouverPartenaire(tab,cle,valeur){
if(cle=='id_personnel' && cle =='nom'){
    valeur=Number(valeur);
}
return tab.find(valeur);
} 
document.getElementById('searchForm').addEventListener('submit');
const cle = document.getElementById('id_personnel').value;
const valeur=document.getElementById('value').value;
const resultat=trouverPartenaire(nom, cle,valeur);
const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; 

    if (resultat) {
        resultDiv.innerHTML = `<p>ID: ${resultat.id}</p>
                               <p>Nom: ${resultat.nom}</p>
                               <p>Age: ${resultat.age}</p>`;
    } else {
        resultDiv.innerHTML = '<p>Aucun individu trouvé.</p>';
    }