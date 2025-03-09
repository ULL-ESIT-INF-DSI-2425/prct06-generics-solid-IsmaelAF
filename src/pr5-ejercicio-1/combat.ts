import { Pokemon } from "./pokemon";
import { tipoPokemon } from "./pokemon";
import { Pokedex } from "./pokedex";

export const efectividadPorTipos : [tipoPokemon, tipoPokemon, number][] = [
    ['fuego', 'hierba', 2], ['fuego', 'agua', 0.5], ['fuego', 'electrico', 1], ['fuego', 'fuego', 1],
    ['agua', 'hierba', 0.5], ['agua', 'agua', 1], ['agua', 'electrico', 0.5], ['agua', 'fuego', 2],
    ['electrico', 'hierba', 1], ['electrico', 'agua', 2], ['electrico', 'electrico', 1], ['electrico', 'fuego', 1],
    ['hierba', 'hierba', 1], ['hierba', 'agua', 2], ['hierba', 'electrico', 1], ['hierba', 'fuego', 0.5] 
];

export class Combat {
    /**
     * Constructor para la clase Combat
     * @param contrincante1 - Pokemon contrincante 1
     * @param contrincante2 - Pokemon contrincante 2
     */
    constructor(private contrincante1: Pokemon, private contrincante2: Pokemon){}

    /**
     * Método que calcula el Daño del ataque
     * @param pokemonA - Pokemon atacante
     * @param pokemonD - Pokemon defensor
     * @returns - Daño del Atacante al Defensor
     */
    calcularAtaque(pokemonA: Pokemon, pokemonD: Pokemon): number {
        let ataque: number = 0;

        ataque = 50 * (pokemonA.ataque / pokemonD.defensa) * this.calcularEfectividad(pokemonA, pokemonD);

        return ataque;
    }

    /**
     * Método que calcula la efectividad de un ataque
     * @param tipoA - Tipo del Pokemon Atacante
     * @param tipoD - Tipo del Pokemon Defensor
     * @returns - Efectividad del ataque
     */
    calcularEfectividad(tipoA: Pokemon, tipoD: Pokemon): number {
        let efectivo: number = 0;

        let tipo1: string = tipoA.tipo;
        let tipo2: string = tipoD.tipo;

        efectividadPorTipos.forEach((element) => {
            if (tipoA.tipo === element[0] && tipoD.tipo === element[1]) {
                efectivo = element[2];
            }
        });


        return efectivo;
    }

    /**
     * Método que da comienzo al combate
     * @returns - Ganador del combate
     */
    start(): string {

        let ganador: string = "";

        let c1: number = this.contrincante1.HP;
        let c2: number = this.contrincante2.HP;

        let contador: number = 0;

        while(c1 > 0 && c2 > 0) {
            console.log("Turno nº", ++contador);

            if (contador % 2 !== 0) {
                console.log(this.contrincante1.nombre, " ataca a: ", this.contrincante2.nombre, this.calcularAtaque(this.contrincante1, this.contrincante2), " de ataque.");
                c2 = c2 - this.calcularAtaque(this.contrincante1, this.contrincante2);    
            } else {
                console.log(this.contrincante2.nombre, " ataca a: ", this.contrincante1.nombre, this.calcularAtaque(this.contrincante2, this.contrincante1), " de ataque.");
                c1 = c1 - this.calcularAtaque(this.contrincante2, this.contrincante1);
            }

                console.log("Vida de cada contrincante: ");
                console.log("Vida de ", this.contrincante1.nombre, ": ", c1);
                console.log("Vida de ", this.contrincante2.nombre, ": ", c2); 

            if (c1 <= 0) {
                console.log(this.contrincante1.nombre, " se ha debilitado.");
            } else if (c2 <= 0) {
                console.log(this.contrincante2.nombre, " se ha debilitado.");
            }   
        }

        if (c1 <= 0) {
            ganador = "El ganador es: " + this.contrincante2.nombre;
        } else {
            ganador = "El ganador es: " + this.contrincante1.nombre;
        }

        console.log(ganador);

        return ganador;
    }
}

//let pikachu = new Pokemon("pikachu", 40, 120, "electrico", 40, 30, 60, 100);
//let charmander = new Pokemon("charmander", 40, 120, "fuego", 20, 20, 60, 100);

//let combate = new Combat(pikachu, charmander); 

//console.log(combate.calcularAtaque(pikachu, charmander));

//let pokemon1 = new Pokemon("pokemon1", 40, 120, "hierba", 20, 40, 60, 210);
//let pokemon2 = new Pokemon("pokemon2", 30, 100, "fuego", 20, 20, 12, 200);

//let a = new Combat(pokemon1, pokemon2);

//a.start();

//console.log(a.calcularAtaque(pokemon2, pokemon3));

//a.calcularEfectividad(pokemon2, pokemon3);


// objeto de class Combat construido con dos contrincantes.
// metodo start() este método:
/*

sistema de turnos un contrincante 1 atacará a contrincante2 en cada turno
haciendo que el HP disminuya 

el primero de los contrincantes que construye el objeto de la clase combat
empieza siempre

mostrará por pantalla el combate, despues de cada ataque se mostrará
el HP de cada contrincante


DAÑO = 50 * (ataque / defensa) * efectividad

efectividad: efectivo, neutral o no efectivo
                2         1          0.5

        fuego
hierba     2
agua       0.5
electrico  1
fuego      1

        agua
hierba     0.5
agua       1
electrico  0.5
fuego      2

        electrico
hierba     1
agua       2
electrico  1
fuego      1

        hierba
hierba     1
agua       2
electrico  1
fuego      0.5



*/