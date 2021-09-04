import Auto from './Auto';
import * as FS from 'fs';
import * as RLS from 'readline-sync';
import Automotor from './Auto';

export default class RegistroAutomotor {
    private automotor: Automotor[];

    public constructor (){
        this.automotor = [];
    }

    public addAuto():void{
        let patente:string = RLS.question('Ingrese la pantente: ');
        let marca:string = RLS.question('Ingrese la marca: ');
        let modelo:string = RLS.question('Ingrese la modelo: ');
        let año: number = RLS.questionInt('Ingrese el año: ');
        this.automotor.push(new Auto(patente,marca,modelo,año));
    }

    public findAuto(patente:string): number{
        for (let i = 0; i < this.automotor.length; i++) {
            if(patente == this.automotor[i].getPatente()){
                return i;
            }
        }
        return -1;
    }

    public deleteAuto(patente:string): void{
        let posicion:number = this.findAuto(patente);
        if (posicion != -1) {
            this.automotor.splice(posicion,1);
        }
    }

    public updateAuto(patenteVieja: string): void{
        let patente:string = RLS.question('Ingrese la pantente nueva: ');
        let marca:string = RLS.question('Ingrese la marca nueva : ');
        let modelo:string = RLS.question('Ingrese la modelo nueva: ');
        let año: number = RLS.questionInt('Ingrese el año nueva: ');

        let posicion= this.findAuto(patenteVieja);
        if (posicion != -1) {
            this.automotor[posicion] = new Automotor(patente,marca,modelo,año);
        }else{
            console.log("el auto no existe");
        }
    }

    mostrarAutomotor(): void{
        console.log(this.automotor);
    }

    cargarAutomotor():void{
        let automotor:string[] = (FS.readFileSync('automotor.txt','utf8')).split('\n');
        let propiedadesAuto:string[] = [];
        automotor.forEach(automotortring => {
            propiedadesAuto = automotortring.split(";")
            this.automotor.push(new Auto(propiedadesAuto[0],propiedadesAuto[1],propiedadesAuto[2],parseInt(propiedadesAuto[3])))
        });
    }
} 