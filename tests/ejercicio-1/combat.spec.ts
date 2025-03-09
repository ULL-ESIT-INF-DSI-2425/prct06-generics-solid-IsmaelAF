import { describe, expect, test } from "vitest";
import { Pokemon } from "../../src/pr5-ejercicio-1/pokemon"
import { Combat } from "../../src/pr5-ejercicio-1/combat"
import { tipoPokemon } from "../../src/pr5-ejercicio-1/pokemon";

let pikachu = new Pokemon("pikachu", 40, 120, "electrico", 40, 30, 60, 100);
let charmander = new Pokemon("charmander", 40, 120, "fuego", 20, 20, 60, 120);


let combate = new Combat(pikachu, charmander); 
let combate2 = new Combat(charmander, pikachu);

describe("Tests clase pokemon", () => {
    
    test("Calcular Daño", () => {
      expect(combate.calcularAtaque(pikachu, charmander)).toBe(100);
    });

    test("Test Combate, ganador Contrincante 1", () => {
        expect(combate.start()).toBe("El ganador es: pikachu");
      });

    test("Test Combate, ganador Contrincante 2", () => {
      expect(combate2.start()).toBe("El ganador es: pikachu");
    });



    test("showStats() returns all stats", () => {
      expect(pikachu.showStats()).toBe(`Nombre: pikachu
        Peso: 40
        Altura: 120
        Tipo: electrico
        Ataque: 40
        Defensa: 30
        Velocidad: 60
        HP: 100`);
    });

  
  });
