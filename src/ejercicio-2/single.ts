import { Cancion } from "./cancion.js";

/**
 * Interfaz para la clase single
 */
export interface infoSingle {
    nombre: string;
    publicacion: number;
    canciones: Cancion[];
}

export class single implements infoSingle {

    
    constructor(public nombre: string, public publicacion: number, public canciones: Cancion[]) {}


}