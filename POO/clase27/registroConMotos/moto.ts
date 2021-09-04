import Automotor from "./Auto";

class Moto extends Automotor{
    private cilindrada:number;
    constructor(patente:string, marca: string, modelo:string, año:number, cilindrada:number){
        super(patente, marca, modelo, año);
        this.cilindrada = cilindrada;
    }
}