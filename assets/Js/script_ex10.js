document.getElementById('run').addEventListener('click',()=>{
    result="";
    for (let i = 0; i < 3; i++) {
        let somme = prompt('un chiffre')
        let sommes =parseFloat(somme)
        result = sommes+sommes+sommes;
    }
    alert (result)
})