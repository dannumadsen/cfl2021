class Televisor{
    estaPrendido: boolean;
    volumenActual: number;
    canal: number;

    constructor (encendido:boolean, volumen:number, canal:number){
        this.estaPrendido = encendido;
        this.volumenActual = volumen;
        this.canal = canal;
    }

    prenderApagar(): void{
        if (this.estaPrendido)
            this.estaPrendido = false
        else
            this.estaPrendido = true;
    }

    bajarVolumen(): void{}
    subirVolumen(): void{}
    subirCanal():void{}
    bajarCanal():void{}

}