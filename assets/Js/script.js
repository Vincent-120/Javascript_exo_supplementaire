//!-----EXERCICE 1
document.getElementById('run').addEventListener('click',()=>{
    let myVar ="je défini ma variable";
    alert (myVar);
});
//!-----Exercice 2
document.getElementById("run1").addEventListener('click',()=>{
    let nom = "Vissers"
    let prenom = "Vincent"
    let ville = "Chatelet"
    alert ("Nom: "+nom+"\n"+"Prénom: "+prenom+"\n"+"Votre ville: "+ville);
})
//!------Exercice 3
document.getElementById("run2").addEventListener('click',()=>{
    let name=prompt("Indiquer votre prenom: ");
    alert  ("bonjour "+name);
})
//!------Exercice 4
document.getElementById("valider").addEventListener('click',()=>{
    let nom =document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value; 
    let ville = document.getElementById("ville").value;
        alert ("Nom: "+nom+"\n"+"Prénom: "+prenom+"\n"+"Votre ville: "+ville);
})
//!------Exercice 5
document.getElementById("valider1").addEventListener("click",()=>{
    let num1=document.getElementById("premier_nombre").value;
    let num2=document.getElementById("deuxieme_nombre").value;
    let result = Math.round(num1)*num2;
    console.log(num1)
    console.log(num2)
    alert (result);
})
//todo-------Exercice 6
//?___Voir Funct.js
//!-------Exercice 7
document.getElementById("valider3").addEventListener('click',()=>{
    let pointure = document.getElementById("pointure").value;
    let annee = document.getElementById("annee").value;
    let result =(((((pointure*2)+5)*50)-annee)+1766)
    alert(result)
})
//!-------Exercice 8
document.getElementById("valider4").addEventListener('click',()=>{
    let age = document.getElementById("age").value;
    if(age < 18){
        alert ('Vous etes mineur !')
    }
    else{
        alert ('Vous etes majeur !')
    }
})

//!-------FIN---------