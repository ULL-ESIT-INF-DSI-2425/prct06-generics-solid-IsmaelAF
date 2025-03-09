import { Disco } from "./disco";
import {single} from "./single"

/**
 * Interfaz para la clase Artista
 */
export interface infoArtista<T extends Disco | single> {
    nombre: string;
    oyentes: number;
    discografia: T[];
}

export class Artista<T extends Disco | single> implements infoArtista<T> {

    /**
     * Constructor para la clase Artista
     * @param nombre - Nombre del Artista
     * @param oyentes - Oyentes mensuales
     * @param discografia - Lista de Discos
     */
    constructor(public nombre: string, public oyentes: number, public discografia: T[]) {}


}