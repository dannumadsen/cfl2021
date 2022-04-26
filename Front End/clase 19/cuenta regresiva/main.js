// tomo el elemento boton
let btn = document.getElementById("btn");

btn.addEventListener('click', function(e){
    //Tomo el tiempo que le dieron a la bomba
    let timerBomba =  document.getElementById("inputBomba").value;
    //aviso que en 5'' se activa
    alert("Corra en 5 segundos se activará la Bomba");
    //Cuando pasen 5'' invoco la funcion cuentaRegre con parametro de timer 
    setTimeout(function(){
        cuentaRegre(timerBomba); }, 5000); // llamado diferido 
    });

function cuentaRegre(i) {
    let intervalo = setInterval(function() {
        //tomo el div con id bomba
        document.getElementById("bomba").innerHTML = i;
        if (i === 0) {
            //el el timer ingresado por el usuario llego a cero
            clearInterval(intervalo); // limpio intervalo para detener
            alert('BOOOOOM!!');
        }
        else {
            i--;
        }
    }, 1000);
}






  