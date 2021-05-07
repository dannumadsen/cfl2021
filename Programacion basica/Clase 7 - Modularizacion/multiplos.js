let readlineSync=require("readline-sync");
let n1=readlineSync.questionInt("Ingrese un numero:");
let n2=readlineSync.questionInt("ingrese otro numero:");

function esMultiplo(n1, n2){
    if(n1%n2==0){
        return true
    }else{
        return false
    }
    
}
console.log(esMultiplo(n1,n2));