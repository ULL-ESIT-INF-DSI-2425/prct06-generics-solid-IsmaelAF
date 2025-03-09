import { describe, expect, test } from "vitest";
import { Pokedex } from "../../src/pr5-ejercicio-1/pokedex"
import { tipoPokemon, datosPokemon } from "../../src/pr5-ejercicio-1/pokemon";
import { Pokemon } from "../../src/pr5-ejercicio-1/pokemon";

let pikachu = new Pokemon("pikachu", 50, 130, "electrico", 40, 40, 50, 200);
let pokedex = new Pokedex([pikachu]);
let charmander = new Pokemon("charmander", 40, 120, "fuego", 20, 30, 60, 100);


describe("Tests clase Pokedex", () => {

    test("showPokedex()", () => {
      expect(pokedex.showPokedex()).toBe(`Nombre: pikachu
        Peso: 50
        Altura: 130
        Tipo: electrico
        Ataque: 40
        Defensa: 40
        Velocidad: 50
        HP: 200`);
    });

    test("Buscar por nombre", () => {
        pokedex.addPokemon(charmander);
      expect(pokedex.buscarNombre("charmander")).toBe(charmander);
    });

    test("Buscar por campo de información: nombre", () => {
        pokedex.addPokemon(charmander);
      expect(pokedex.buscarCampo("nombre", "charmander")).toEqual([charmander]);
    });
    test("Buscar por campo de información: peso", () => {
        pokedex.addPokemon(charmander);
      expect(pokedex.buscarCampo("peso", 40)).toEqual([charmander]);
    });
    test("Buscar por campo de información: altura", () => {
        pokedex.addPokemon(charmander);
      expect(pokedex.buscarCampo("altura", 120)).toEqual([charmander]);
    });
    test("Buscar por campo de información: tipo", () => {
        pokedex.addPokemon(charmander);
      expect(pokedex.buscarCampo("tipo", "fuego")).toEqual([charmander]);
    });
    test("Buscar por campo de información: ataque", () => {
        pokedex.addPokemon(charmander);
      expect(pokedex.buscarCampo("ataque", 20)).toEqual([charmander]);
    });
    test("Buscar por campo de información: defensa", () => {
        pokedex.addPokemon(charmander);
      expect(pokedex.buscarCampo("defensa", 30)).toEqual([charmander]);
    });
    test("Buscar por campo de información: velocidad", () => {
        pokedex.addPokemon(charmander);
      expect(pokedex.buscarCampo("velocidad", 60)).toEqual([charmander]);
    });
    test("Buscar por campo de información: HP", () => {
        pokedex.addPokemon(charmander);
      expect(pokedex.buscarCampo("HP", 100)).toEqual([charmander]);
    });

    
    



  
  });