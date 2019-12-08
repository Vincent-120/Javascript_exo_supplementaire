let b =2;
let a;
document.getElementById("run").addEventListener('click',()=>{
    alert ("Début des opération")
    step()
    function step(){
        a = b++;
        alert ("a=b++ => "+a);
        reroll();
        step1();
    }
    function step1(){
        a = ++b;
        alert ("a=++b => "+a);
        reroll();
        step2();
    }
    function step2(){
        a =b--;
        alert ("a=b-- => "+a);
        reroll();
        step3();
    }
    function step3(){
        a =--b;
        alert ("a=--b => "+a);
        reroll();
        step4();
    
    }
    function step4(){
        a+=b++;
        alert ("a+=b++ => "+a);
        reroll();
        step5();
    }
    function step5(){
        a= 1;
        a+=++b;
        alert ("a=1;\na+=++b => "+a);
        reroll();
        step6();
    
    }
    function step6(){
        a=1;
        a-=b++;
        alert ("a=1:\na-=b++ =>"+a);
        reroll();
        step7();
    }
    function step7(){
        a=1;
        a-=++b;
        alert ("a=1;\na-=++b => "+a);
        reroll();
        step8();
    }
    function step8(){
        a=1;
        a+=b--;
        alert ("a=1;\na+=b-- => "+a);
        reroll();
        alert ("Fin des opération")
    
    }
    function reroll(){
        ("reset a")
        a= 0;
    }
})
//todo les operation a realiser 
/*
a=b++;1
a=++b;2
a=b--;3
a=--b;4
a+=b++;5
a=1; a+=++b;6
a=1; a-=b++;7
a=1; a-=++b;8
a=1; a+=b--;9
a=1; a+=--b;10
*/