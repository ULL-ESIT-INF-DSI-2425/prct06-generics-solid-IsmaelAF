import { describe, expect, test } from "vitest";
import { BibliotecaMusical } from "../../src/pr5-ejercicio-2/bibliotecaMusical"
import { Artista } from "../../src/pr5-ejercicio-2/artista";
import { Disco } from "../../src/pr5-ejercicio-2/disco";
import { Cancion } from "../../src/pr5-ejercicio-2/cancion";

let cancion1 = new Cancion("NombreCancion1", 123, "rock", true, 444);
let cancion2 = new Cancion("NombreCancion2", 456, "pop", false, 777);
let cancion3 = new Cancion("NombreCancion3", 789, "rap", true, 888);

let disco1 = new Disco("NombreDisco1", 2023, [cancion1, cancion2]);
let disco2 = new Disco("NombreDisco2", 2000, [cancion3]);

let artista1 = new Artista("NombreArtista1" , 111, [disco1]);
let artista2 = new Artista("NombreArtista2" , 222, [disco2]);

let BibliotecaMusical1 = new BibliotecaMusical([artista1]);

let BibliotecaMusical2 = new BibliotecaMusical([artista2]);

describe("Tests ejercicio 2", () => {

  test("Añadir artista", () => {
    expect(BibliotecaMusical1.addArtista(artista2)).toBe(false);
  });

  test("Añadir artista existente", () => {
    expect(BibliotecaMusical1.addArtista(artista2)).toBe(true);
  });

  test("Información general de la Biblioteca Musical", () => {

    expect(BibliotecaMusical2.informacion()).toEqual([
      {
        "Cancion": "NombreCancion3",
        "Disco": "NombreDisco2",
        "Duracion": 789,
        "Genero": "rap",
        "Nombre": "NombreArtista2",
        "Oyentes": 222,
        "Publicacion": 2000,
        "Reproducciones": 888,
        "Single": true,
      }
    ]);
  });
    
    test("Numero de canciones en un disco", () => {
      expect(BibliotecaMusical1.numCancionesDisco("NombreDisco1")).toBe(2);
    });

    test("Num canciones disco no existe", () => {
      expect(BibliotecaMusical1.numCancionesDisco("NOEXISTE")).toBe(undefined);
    });

    test("Duracion disco", () => {
      expect(BibliotecaMusical1.duracionDisco("NombreDisco1")).toBe(579);
    });

    test("Duracion disco que NO existe", () => {
      expect(BibliotecaMusical1.duracionDisco("NOEXISTE")).toBe(undefined);
    });

    test("Reproducciones Disco", () => {
      expect(BibliotecaMusical1.reproduccionesDisco("NombreDisco1")).toBe(1221);
    });

    test("Reproducciones disco que NO existe", () => {
      expect(BibliotecaMusical1.reproduccionesDisco("NOEXISTE")).toBe(undefined);
    });

    test("Buscar Artista", () => {

      expect(BibliotecaMusical1.buscarArtista("NombreArtista1")).toEqual([artista1]);
    });

    test("Buscar Disco", () => {

      expect(BibliotecaMusical1.buscarDisco("NombreDisco1")).toEqual([disco1]);
    });

    test("Buscar Cancion", () => {

      expect(BibliotecaMusical1.buscarCancion("NombreCancion1")).toEqual([cancion1]);
    });

    



  });
