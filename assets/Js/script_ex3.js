    let a = 3;
    let b = 2;
document.getElementById("run").addEventListener('click', ()=>{
    function triple(x){
        alert (x*3)
    }    
    function afficher(){
        triple (a);
        triple (b);
        
    }
    afficher();
})