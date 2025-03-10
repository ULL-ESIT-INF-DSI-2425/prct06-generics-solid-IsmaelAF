export class listaMod<T> {

    constructor(public elementos: T[]) {}

    /**
     * Añade al final de la lista los elementos de la segunda
     * @param l2 - segunda lista
     * @returns - lista
     */
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

    /**
     * Combina los elementos en una lista
     * @param listas - numero variables de listas
     * @returns - lista
     */
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

    /**
     * Dada una lista y un predicado lógico, devuelve una lista de los elementos verdaderos
     * @param predicado - predicado lógico a cumplir
     * @returns - lista 
     */
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

    /**
     * Número de elementos de la lista
     * @returns - number
     */
    length(): number {
        let resultado: number = 0;

        for (let i = 0; i < this.elementos.length; i++) {
            resultado++;
        }

        return resultado;
    }

    /**
     * Dada una lista y función, retorna la lista resultado de aplicar la función
     * en todos los elementos de la lista.
     * @param func - función que se aplicará a cada elemento
     * @returns - lista
     */
    map(func: (item: T) => T): T[] {
        let resultado: T[] = [];

        for (let i = 0; i < this.elementos.length; i++) {
            resultado[i] = func(this.elementos[i]);
        }


        return resultado;
    }

    /**
     * Dada una lista y una función, además de un valor inicial, reduce cada
     * elemento de la lista teniendo en cuenta el acumulador y la funcion.
     * @param accum - valor inicial
     * @param func - funcion
     * @returns - lista
     */
    reduce(accum: T,func:(accum: T, item: T) => T): T[] {
        let resultado: T[] = [];

        for (let i = 0; i < this.elementos.length; i++) {
            resultado[i] = func(accum, this.elementos[i]);
        }

        return resultado;
    }

    /**
     * Devuelve una lista con los elementos originales pero en orden inverso.
     * @returns - lista
     */
    reverse(): T[] {
        let resultado: T[] = [];
        let posicion: number = 0;

        for (let i = this.elementos.length-1; i >= 0; i--) {
            resultado[posicion++] = this.elementos[i];
        }

        return resultado;
    }

    /*foreach(func: (elemento: T, posicion: number) => void): T[] {
        let resultado: T[] = [];

        for (let i = 0; i< this.elementos.length; i++) {
           
        }

        return resultado;
    }*/


}
