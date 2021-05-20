let readlineSync=require("readline-sync");
let texto;
while(texto!=""){
    let texto=readlineSync.question("Ingrese texto:");
    texto1=convertirCamelCase(texto);
    console.log(texto1);
}

function convertirCamelCase(texto2){
    let indice=0;
    while(indice<texto2.length){
        
        if(texto2[indice]==""){
            texto2[indice+1]=texto2[indice+1].toUpperCase();
            console.log(texto2[indice +1]);
            
            indice+2;
        }else{
            indice++;
        }
    }return texto2;
}
