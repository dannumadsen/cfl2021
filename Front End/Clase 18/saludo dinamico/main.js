function ActualizarSaludo(){
    //lee el nodo
    let nodoInput = document.getElementById('txtNombre');
    let nombre = nodoInput.value;
    //Lo muestra en consola (opcional)
    console.log(nombre);
    //Lo muestra en el DOM
    let nodoSaludo = document.getElementById('txtSaludo');
    nodoSaludo.innerHTML = 'hola '+ nombre;
}