document.getElementById('run').addEventListener('click',()=>{
    let date = new Date();
    let day = date.getDay();
    switch (day) {
        case 0:
            alert ('Nous sommes dimanche')
            break;
        case 1:
            alert ('Nous sommes lundi')
            break;
        case 2:
            alert ('Nous sommes mardi')
            break;
        case 3:
            alert ('Nous sommes mercredi')
            break;
        case 4:
            alert ('Nous sommes jeudi')
            break;
        case 5:
            alert ('Nous sommes vendredi')
            break;
        case 6:
            alert ('Nous sommes samedi')
            break;
    
        default:
            break;
    }
})