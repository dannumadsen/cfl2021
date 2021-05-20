let readlineSync=require("readline-sync");

let elem=readlineSync.questionInt("Igrese tamaño:");
let nmo=readlineSync.questionInt("Ingrese numero:");
let ocu=metodo(elem,nmo);

let arr=new Array(elem);
console.log("El numero"+nmo+" es "+ocu);

mostrar(arr, elem);
cargar(arr,elem);

function cargar(v,l){
    for(i=0;i<1;i++){
        v[i]=Math.floor(Math.random()*100);
    }
}
function mostrar(v,l){
    let c="";
    for(i=0;i<1;i++){
        c+=v[i]+" ";
        console.log(c);
    }
}
function metodo(v,l,n){
    let  oc;
    for(i=0;i<1;i++){
        if(v[i]==n){
            oc++;
        }
    }
}