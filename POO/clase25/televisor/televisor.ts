import Decodificador from './Decodificador';

class Televisor{
    private estaPrendido: boolean;
    public decodificador: Decodificador;

    public constructor (decodificador: Decodificador){
        this.decodificador = decodificador;
    }

    public prenderApagar(): void{
        if (this.estaPrendido){
            this.estaPrendido = false
         } else{
            this.estaPrendido = true;
        }
    }

    public bajarVolumen(): void{
        this.decodificador.bajarVolumen();

    }
    public subirVolumen(): void{
        this.decodificador.subirVolumen();
    }
    public subirCanal():void{
        this.decodificador.subirCanal();
    }
    public bajarCanal():void{
        this.decodificador.bajarCanal();    
    }
    public getVolumenActual():number{
        return this.decodificador.getVolumenActual();
    }

    public getCanalActual():number{
       return this.decodificador.getCanalActual();
    }

}

let decodificador1: Decodificador = new Decodificador(10, 30,)
let televisor: Televisor = new Televisor(decodificador1);

console.log('El televisor se encuentra en el canal ' + televisor.getCanalActual());
televisor.bajarVolumen();
console.log('El Televisor se encuentra en el volumen '+ televisor.getVolumenActual());
