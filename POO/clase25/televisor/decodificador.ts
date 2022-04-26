export default  class Decodificador{
    private estaPrendido: boolean;
    private volumenActual: number;
    private canalActual: number;

    public constructor (volumen:number, canalInicial:number){
        this.volumenActual = volumen;
        this.canalActual = canalInicial;
    }

    public prenderApagar(): void{
        if (this.estaPrendido){
            this.estaPrendido = false
         } else{
            this.estaPrendido = true;
        }
    }

    public bajarVolumen(): void{
        this.volumenActual = this.volumenActual-1;
    }
    public subirVolumen(): void{
        this.volumenActual = this.volumenActual+1;
    }
    public subirCanal():void{
        this.canalActual = this.canalActual+1
    }
    public bajarCanal():void{
        this.canalActual = this.canalActual-1
    }
    public getVolumenActual():number{
        return this.volumenActual;
    }
    public getCanalActual():number{
        return this.canalActual;
    }

}