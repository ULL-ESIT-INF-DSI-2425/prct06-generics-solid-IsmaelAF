import { Artista } from "./artista.js";
import { BibliotecaMusical } from "./bibliotecaMusical.js";

export class filtradoBibliotecaMusical {
    constructor(private biblioteca: BibliotecaMusical) {}

    /**
     * Metodo para filtrar artistas por nombre
     * @param nombre - nombre del artista
     * @returns Datos del artista encontrado en formato console.table
     */
    buscarArtista(nombre: string): unknown[] {
        let table: unknown[] = [];

        this.biblioteca.artista.forEach(element => {
            if(nombre === element.nombre) {
                table.push(element);
            }
        });

        console.table(table);
        return table;
    }

    /**
     * Metodo para filtrar discos por nombre
     * @param nombre - Nombre del disco
     * @returns Datos del disco encontrado en formato console.table
     */
    buscarDisco(nombre: string): unknown[] {
        let table: unknown[] = [];

        this.biblioteca.artista.forEach(artistaP => {
            artistaP.discografia.forEach(element => {
                if(nombre === element.nombre) {
                    table.push(element);
                }
            });
        });

        console.table(table);
        return table;
    }

    /**
     * Metodo para filtrar canciones por nombre
     * @param nombre - nombre de la cancion
     * @returns - Datos de la cancion encontrada en formato console.table
     */
    buscarCancion(nombre: string): unknown[] {
        let table: unknown[] = [];

        this.biblioteca.artista.forEach(artistaP => {
            artistaP.discografia.forEach(discoP => {
                discoP.canciones.forEach(element => {
                    if(nombre === element.nombre) {
                        table.push(element);
                    }
                });
            });
        });

        console.table(table);
        return table;
    }


    /**
     * Método que devuelve el numero de canciones que hay en un disco
     * @param nombre - nombre del disco
     * @returns - numero de canciones en un disco
     */
    numCancionesDisco(nombre:string):number | undefined {
        let result: number | undefined = undefined;
        let encontrado: boolean = false;

        this.biblioteca.artista.forEach(artistaP => {
            artistaP.discografia.forEach(element => {
                if (nombre === element.nombre) {
                    encontrado = true;
                    result = element.canciones.length;
                    
                }
               
            });
        });
        return encontrado ? result : undefined;

    }

    /**
     * Metodo que devuelve la duracion total de un disco
     * @param nombre - nombre del disco
     * @returns - duración total de todas las canciones del disco
     */
    duracionDisco(nombre: string): number | undefined {
        let result: number = 0;
        let encontrado: boolean = false;
        this.biblioteca.artista.forEach(artistaP => {
            artistaP.discografia.forEach(discoP => {
                if (nombre === discoP.nombre) {
                    encontrado = true;
                    discoP.canciones.forEach(element => {
                        result += element.duracion;
                    });
                    
                }
                
            });
        });
        return encontrado ? result : undefined;

    }

    /**
     * Metodo que devuelve las reproducciones totales de un disco
     * @param nombre - nombre del disco
     * @returns - reproducciones totales de todas las canciones de un disco
     */
    reproduccionesDisco(nombre: string): number | undefined {
        let result: number = 0;
        let encontrado: boolean = false;
        this.biblioteca.artista.forEach(artistaP => {
            artistaP.discografia.forEach(discoP => {
                if (nombre === discoP.nombre) {
                    encontrado = true;
                    discoP.canciones.forEach(element => {
                        result += element.reproducciones;
                    });
                    
                }
                
            });
        });
        return encontrado ? result : undefined;

    }
}

