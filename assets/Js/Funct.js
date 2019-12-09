document.getElementById("valider2").addEventListener('click',()=>{
    let num1=document.getElementById("Premier_nombre").value;
    let num2=document.getElementById("Deuxieme_nombre").value;
    let result = Math.round(num1)/num2;
    let teste =parseFloat (num1)
    console.log(teste)
    console.log(num2)
    alert (result);
})