document.getElementById('run').addEventListener('click',()=>{
    const tab =[-2,1,4]
    for (let i = 0; i < tab.length; i++) {
        x= tab[i]
        additionne(x)
        
    }
    function additionne(x){
        alert (x+2)
    }
})