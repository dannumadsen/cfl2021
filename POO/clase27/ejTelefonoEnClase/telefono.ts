export default class Telefono{
    private estaprendido: boolean;
    private bateria: number;

    constructor(){}

    public mandarMensaje():void{
        console.log('Este metodo es para mandar mensajes');
    };

    public hacerLlamada():void{
        console.log('Este metodo es para llamar');
    }

    public prenderApagar():void{
        if(this.estaprendido = false){
            this.estaprendido = true;
        }else{
            this.estaprendido = false;
        }
    }
}