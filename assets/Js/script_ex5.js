let b =2;
let a;
step();
function step(){
    a = b++;
    alert (a);
    console.log(a)
    reroll()
    console.log(a)
    step1();
}
function step1(){
    a = ++b;
    alert (a);
    console.log(a)
    reroll()
    console.log(a)
    step2();
}
function step2(){
    a =b--;
    alert (a);
    console.log(a)
    reroll()
    console.log(a)
    step3()
}
function step3(){
    a =--b;
    alert (a);
    console.log(a)
    reroll()
    console.log(a)
    step4()

}
function step4(){
    a+=b++;5
    alert (a)
}
function step5(){

}
function step6(){

}
function step7(){

}
function step8(){

}
function reroll(){
    a= 0;
}
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