let readlineSync=require("readline-sync");
let num=new Array(5);
for(i=0;num<=4;i++){
    num[i]=readlineSync.questionInt("ingrese un numero:");
}
console.log(num);