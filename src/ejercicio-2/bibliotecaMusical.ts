import { Artista } from "./artista.js";
import { Cancion } from "./cancion.js";
import { Disco } from "./disco.js";
import {single} from "./single.js"


export class BibliotecaMusical {

    /**
     * Constructor para la clase BibliotecaMusical
     * @param artista - Lista de Artistas
     */
    constructor(public artista: Artista<Disco | single>[]){}

    /**
     * Método para añadir un artista a la Biblioteca
     * @param artistaNuevo - Objeto de la Clase Artista
     * @returns 
     */
    addArtista(artistaNuevo: Artista<Disco | single>): Boolean {
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




