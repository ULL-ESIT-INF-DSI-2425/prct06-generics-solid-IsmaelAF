import { describe, expect, test } from "vitest";
import { Pokemon } from "../../src/pr5-ejercicio-1/pokemon"
import { tipoPokemon } from "../../src/pr5-ejercicio-1/pokemon";

let pikachu = new Pokemon("pikachu", 40, 120, "electrico", 40, 30, 60, 100);

describe("Tests clase pokemon", () => {
    
    test("pikachu.nombre returns value pikachu", () => {
      expect(pikachu.nombre).toBe("pikachu");
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
