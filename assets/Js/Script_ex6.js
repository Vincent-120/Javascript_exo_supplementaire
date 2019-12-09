document.getElementById('run').addEventListener('click',()=>{
    const tab =[-2,1,4]
    for (let i = 0; i < tab.length; i++) {
        x= tab[i]
        soustrait(x)
        
    }
    function soustrait(x){
        let result = x-2;
        if(result<0){
            alert ("Nombre négatif")
        }
        else{
            alert (result)
        }
    }
})