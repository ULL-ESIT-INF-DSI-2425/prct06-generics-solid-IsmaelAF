import { describe, expect, test } from "vitest";
import { BibliotecaMusical } from "../src/ejercicio-2/bibliotecaMusical"
import { Artista } from "../src/ejercicio-2/artista";
import { Disco } from "../src/ejercicio-2/disco";
import { Cancion } from "../src/ejercicio-2/cancion";
import { single } from "../src/ejercicio-2/single";
import {filtradoBibliotecaMusical} from "../src/ejercicio-2/filtradoBibliotecaMusical"

let cancion1 = new Cancion("NombreCancion1", 123, "rock", true, 444);
let cancion2 = new Cancion("NombreCancion2", 456, "pop", false, 777);
let cancion3 = new Cancion("NombreCancion3", 789, "rap", true, 888);

let disco1 = new Disco("NombreDisco1", 2023, [cancion1, cancion2]);
let disco2 = new Disco("NombreDisco2", 2000, [cancion3]);

let single1 = new single("NombreSingle1", 1234, [cancion1]);

let artista1 = new Artista("NombreArtista1" , 111, [disco1]);
let artista2 = new Artista("NombreArtista2" , 222, [disco2]);

let BibliotecaMusical1 = new BibliotecaMusical([artista1]);

let BibliotecaMusical2 = new BibliotecaMusical([artista2]);

let filtradoBiblioteca = new filtradoBibliotecaMusical(BibliotecaMusical1);

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
      expect(filtradoBiblioteca.numCancionesDisco("NombreDisco1")).toBe(2);
    });

    test("Num canciones disco no existe", () => {
      expect(filtradoBiblioteca.numCancionesDisco("NOEXISTE")).toBe(undefined);
    });

    test("Duracion disco", () => {
      expect(filtradoBiblioteca.duracionDisco("NombreDisco1")).toBe(579);
    });

    test("Duracion disco que NO existe", () => {
      expect(filtradoBiblioteca.duracionDisco("NOEXISTE")).toBe(undefined);
    });

    test("Reproducciones Disco", () => {
      expect(filtradoBiblioteca.reproduccionesDisco("NombreDisco1")).toBe(1221);
    });

    test("Reproducciones disco que NO existe", () => {
      expect(filtradoBiblioteca.reproduccionesDisco("NOEXISTE")).toBe(undefined);
    });

    test("Buscar Artista", () => {

      expect(filtradoBiblioteca.buscarArtista("NombreArtista1")).toEqual([artista1]);
    });

    test("Buscar Disco", () => {

      expect(filtradoBiblioteca.buscarDisco("NombreDisco1")).toEqual([disco1]);
    });

    test("Buscar Cancion", () => {

      expect(filtradoBiblioteca.buscarCancion("NombreCancion1")).toEqual([cancion1]);
    });

    



  });