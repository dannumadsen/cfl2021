let readlineSync=require("readline-sync");
let palabra=readlineSync.question("Ingrese palabra:");
let tamaño=palabra.length;
//mostrarInvertido(palabra, tamaño)
invertirPalabra(palabra,tamaño);
//console.log (palabra);

function mostrarInvertido(palabra, tamaño) {
     for(i=tamaño-1; i>=0;i--){
         console.log(palabra[i]);
     }
}
function invertirPalabra(texto,tamaño) {
    let indiceIzq=0;
    let indiceDer=tamaño-1;
    let aux;
    
    while(indiceIzq<indiceDer){       
        aux=texto[indiceIzq];
        
        texto[indiceIzq]=texto[indiceDer];
        texto[indiceDer]=aux;
        indiceIzq++;
        indiceDer--;
    }return texto;
    
}