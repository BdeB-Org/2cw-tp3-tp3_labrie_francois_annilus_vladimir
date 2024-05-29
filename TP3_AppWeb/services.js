function trouverCompte(tab,cle,valeur){
    if(cle=='id_compte' && cle =='id_client'){
        valeur=Number(valeur);
    }
    return tab.find(valeur);
    } 
    document.getElementById('searchForm').addEventListener('submit');
    const cle = document.getElementById('id_compte').value;
    const valeur=document.getElementById('value').value;
    const resultat=trouverCompte(id_compte, cle,valeur);
    const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = ''; 
    
        if (resultat) {
            resultDiv.innerHTML = `<p>ID: ${resultat.id}</p>
                                   <p>Nom: ${resultat.devise}</p>
                                   <p>Age: ${resultat.id_client}</p>`;
        } else {
            resultDiv.innerHTML = '<p>Aucun compte trouvé.</p>';
        }