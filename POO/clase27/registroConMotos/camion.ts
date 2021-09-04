import Automotor from "./Auto";

class Camion extends Automotor{
    private categoriaPorPeso:number;
    constructor(patente:string, marca: string, modelo:string, año:number, categoriaPorPeso:number){
        super(patente, marca, modelo, año);
        this.categoriaPorPeso = categoriaPorPeso;
    }
}