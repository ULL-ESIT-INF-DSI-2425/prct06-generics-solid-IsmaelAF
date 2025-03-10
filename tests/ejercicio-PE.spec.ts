import { describe, expect, test, vi } from "vitest";
import {listaMod} from "../src/ejercicio-PE/listaMod"

//const ping = new Penguin;
//const spar = new Sparrow;
let lista1 = [1,2,3,4];
let lista3 = [5,6,7,8];
let lista4 = [9,10];
let lista2 = ["rojo", "verde"];

let mod = new listaMod(lista1);
let mod3 = new listaMod(lista1);

//const consoleSpy = vi.spyOn(console, 'log');

describe("Tests Ejercicio-PE", () => {
    test("append", () => {
      expect(mod.append(lista3)).toEqual([1,2,3,4,5,6,7,8]);
    });

    test("Filter", () => {
        expect(mod.filter(num => num >= 3 === true)).toEqual([3,4]);
    });

    test("Length", () => {
        let mod2 = new listaMod(mod.append(lista3));
      expect(mod2.length()).toBe(8);
    });

    test("Map", () => {
      expect(mod.map(n => n+n)).toEqual([2,4,6,8]);
    });

    test("concatenate", () => {
        expect(mod3.concatenate(lista3,lista4)).toEqual([1,2,3,4,5,6,7,8,9,10]);
    });




});
