import { Artista } from "./artista";
import { Cancion } from "./cancion";
import { Disco } from "./disco";

export class BibliotecaMusical {

    /**
     * Constructor para la clase BibliotecaMusical
     * @param artista - Lista de Artistas
     */
    constructor(public artista: Artista[]){}

    /**
     * Método para añadir un artista a la Biblioteca
     * @param artistaNuevo - Objeto de la Clase Artista
     * @returns 
     */
    addArtista(artistaNuevo: Artista): Boolean {
        let encontrado: Boolean = false;

        this.artista.forEach(element => {
            if(artistaNuevo.nombre === element.nombre) {
                encontrado = true;
            }

        });

        if(!encontrado) {
            this.artista.push(artistaNuevo);
        }

        return encontrado;

    }

    /**
     * Método para mostrar todo el contenido de la Biblioteca musical
     * @returns - Todo el contenido en formato console.table
     */
    informacion(): unknown[] {
        let table: unknown[] = [];

        this.artista.forEach(artistaP => {
            artistaP.discografia.forEach(discoP => {
                discoP.canciones.forEach(cancionP => {
                    table.push({
                        Nombre: artistaP.nombre,
                        Oyentes: artistaP.oyentes,
                        Disco: discoP.nombre,
                        Publicacion: discoP.publicacion,
                        Cancion: cancionP.nombre,
                        Duracion: cancionP.duracion,
                        Genero: cancionP.genero,
                        Single: cancionP.single,
                        Reproducciones: cancionP.reproducciones

                    })
                });
                
            });
        });


        console.table(table);
        return table;
        
    }

    /**
     * Metodo para filtrar artistas por nombre
     * @param nombre - nombre del artista
     * @returns Datos del artista encontrado en formato console.table
     */
    buscarArtista(nombre: string): unknown[] {
        let table: unknown[] = [];

        this.artista.forEach(element => {
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

        this.artista.forEach(artistaP => {
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

        this.artista.forEach(artistaP => {
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

        this.artista.forEach(artistaP => {
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
        this.artista.forEach(artistaP => {
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
        this.artista.forEach(artistaP => {
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


/*
let cancion1 = new Cancion("NombreCancion1", 123, "rock", true, 444);
let cancion2 = new Cancion("NombreCancion2", 456, "pop", false, 777);
let cancion3 = new Cancion("NombreCancion3", 789, "rap", true, 888);

let disco1 = new Disco("NombreDisco1", 2023, [cancion1, cancion2]);
let disco2 = new Disco("NombreDisco2", 2000, [cancion3]);

let artista1 = new Artista("NombreArtista1" , 111, [disco1]);
let artista2 = new Artista("NombreArtista2" , 222, [disco2]);

let BibliotecaMusical1 = new BibliotecaMusical([artista1, artista2]);

BibliotecaMusical1.buscarArtista("NombreArtista1");

//console.log(BibliotecaMusical1.reproduccionesDisco("NombreDisco3"));


*/




