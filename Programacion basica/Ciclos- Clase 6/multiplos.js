let readlineSync=require("readline-sync");
let contador;
for(contador=1;contador>=100;contador++){
    if(contador%2 == 0 || contador%3==0){
        console.log(contador," Es multiplo de 2 o de 3.");
    }
}