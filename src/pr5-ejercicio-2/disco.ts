import { Cancion } from "./cancion";

/**
 * Interfaz para la clase Disco
 */
export interface infoDisco {
    nombre: string;
    publicacion: number;
    canciones: Cancion[];
}

export class Disco implements infoDisco {

    /**
     * Constructor para la clase Disco
     * @param nombre - Nombre del disco
     * @param publicacion - Fecha de publicacion
     * @param canciones - Lista de Canciones
     */
    constructor(public nombre: string, public publicacion: number, public canciones: Cancion[]) {}



}