/**
 * Interfaz para la clase Cancion
 */
export interface infoCancion {
    nombre: string;
    duracion: number;
    genero: string;
    single: boolean;
    reproducciones: number; 
}

export class Cancion implements infoCancion {
    /**
     * Constructor para la clase Cancion
     * @param nombre - Nombre de la cancion
     * @param duracion - Duración de la cancion
     * @param genero - Genero de la cancion
     * @param single - Cancion en solitario o duo
     * @param reproducciones - Reproducciones totales
     */
    constructor(public nombre: string, public duracion: number, public genero: string, public single: boolean, public reproducciones: number) {}

}