import Telefono from "./Telefono";

class TelefonoConCamara extends Telefono{
    constructor() {
        super();
    }
    public sacarFoto():void{
        console.log('Este metodo saca una foto');
    }
}