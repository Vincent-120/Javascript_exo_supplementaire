document.getElementById('run').addEventListener('click',()=>{
    let choose = prompt("Choisissez un chiffre entre 1 & 3");
    switch (choose) {
        case "1":
            alert ('Merci')
            break;
        case "2":
            alert ('Bonjour')
            break;
        case "3":
            alert ('Au revoir')
            break;
    
        default:
            alert ('Pardon, que voulez-vous ?')
            break;
    }
})