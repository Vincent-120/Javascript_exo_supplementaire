document.getElementById("valider").addEventListener('click',()=>{
    let rayon = prompt ("Indiquer votre rayon");
    let result =Math.round(Math.PI*(rayon*rayon)*100)/100 ;
    alert (result);
})