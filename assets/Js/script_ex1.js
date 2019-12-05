document.getElementById("valider").addEventListener("click",()=>{
    //todo A = L × l
    let longeur = prompt("Longeur de votre rectangle");
    let largeur = prompt("Largeur de votre rectangle");
    let result = longeur*largeur;
    alert ("L'aire de votre rectangle est de "+result);
})
document.getElementById("'valider1").addEventListener("click",()=>{
    //todo P = (L + l) × 2.
    let longeur = prompt("Longeur de votre rectangle");
    let largeur = prompt("Largeur de votre rectangle");
    let result =(longeur*largeur)*2;
    alert ("Le périmètre de votre rectangle "+result);
})