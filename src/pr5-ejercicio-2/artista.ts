import { Disco } from "./disco";

/**
 * Interfaz para la clase Artista
 */
export interface infoArtista {
    nombre: string;
    oyentes: number;
    discografia: Disco[];
}

export class Artista implements infoArtista {

    /**
     * Constructor para la clase Artista
     * @param nombre - Nombre del Artista
     * @param oyentes - Oyentes mensuales
     * @param discografia - Lista de Discos
     */
    constructor(public nombre: string, public oyentes: number, public discografia: Disco[]) {}


}