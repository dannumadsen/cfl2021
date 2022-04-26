"use strict";

let btn = document.getElementById('button');
btn.addEventListener("click", ActualizarLista);

function ActualizarLista(){
    //Captura la tarea
    let nodoInput = document.getElementById('nodoInput');
    //Guardo en tarea lo que el usuario ingresa en el input
    let tarea = nodoInput.value;
    //creo el elemento lista
    let tareas=document.createElement('li');
    tareas.innerHTML = tarea;
    let listaTareas = document.getElementById('nuevaTarea');
    //Entro en un ciclo cada vez que se agrega una nueva tarea
    for(let i = 0; i < tarea.length;i++){
        listaTareas.appendChild (tareas);
    }
}

