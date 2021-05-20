let readlineSync = require('readline-sync');

let texto=readlineSync.question("Ingrese texto:");
//texto=texto.toLowerCase;
let letras="";

cuantasVecesEsta=0;
for(i=0;i<texto.length;i++){
   
    
   cuantasVecesEsta=cuantasVeces(texto,texto[i]);
   console.log("La letra", texto[i], "esta", cuantasVecesEsta, "veces");
   
  
  
}

function cuantasVeces(texto1, letra){
    let ocurrencia=0;
    
    for(i=0;i<texto1.length;i++){
        
        if(texto1[i]==letra){
            ocurrencia++;
        }
    }
    return ocurrencia;
    
}