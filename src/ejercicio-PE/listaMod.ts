export class listaMod<T> {

    constructor(public elementos: T[]) {}

    append(l2: T[]): T[] {
        let resultado: T[] = [];
        let posicion: number = 0;

        for (let i = 0; i < this.elementos.length; i++){
            resultado[i] = this.elementos[i];
            posicion = i;
        }

        for (let i = 1; i <= l2.length; i++){
            resultado[posicion+i] = l2[i-1];
        }

        return resultado;
    }

    concatenate(...listas: T[][]): T[] {
        let resultado: T[] = this.elementos;
        let posicion: number = this.elementos.length;

        for (let i = 0; i < listas.length; i++) {
            
            for (let j = 0; j < listas[i].length; j++) {
                resultado[posicion++] = listas[i][j];
                
            }
            
        }

        return resultado;
    }

    filter(predicado: (item: T) => boolean): T[] {
        let resultado: T[] = [];

        let posicion: number = 0;

        for (let i = 0; i < this.elementos.length; i++) {
            if(predicado(this.elementos[i])) {
                resultado[posicion++] = this.elementos[i];
            }
        }

        return resultado;
    }

    length(): number {
        let resultado: number = 0;

        for (let i = 0; i < this.elementos.length; i++) {
            resultado++;
        }

        return resultado;
    }

    map(func: (item: T) => T): T[] {
        let resultado: T[] = [];

        for (let i = 0; i < this.elementos.length; i++) {
            resultado[i] = func(this.elementos[i]);
        }


        return resultado;
    }

    /*reduce(): T[] {
        let resultado: T[] = [];

        for (let i = 0; i < this.elementos.length; i++) {
            resultado[i] = ;
        }

        return resultado;
    }*/

    /*reverse(): T[] {
        let resultado: T[] = [];
        let posicion: number = 0;

        for (let i = this.elementos.length-1; i >= 0; i--) {
            resultado[posicion++] = this.elementos[i];
        }

        return resultado;
    }*/


}
/*
let lista1 = [1,2,3,4];
let lista2 = ["rojo", "verde"];
let lista3 = [5,6,7];

let mod = new listaMod;

mod.concatenate(lista1, lista2, lista3);*/