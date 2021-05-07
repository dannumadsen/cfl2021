function calcularAreaRectangulo(base, altura){
    return (base*altura)/2;
 };

 let i;
 for(i=1; i<=100; i++){
     console.log("El area es:", calcularAreaRectangulo(i, i*2));//Se multiplica la altura x2 porque en el ejercicio descubrimos que era el doble de la base
 }
