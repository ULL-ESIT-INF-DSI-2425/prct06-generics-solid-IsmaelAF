import { describe, expect, test, vi } from "vitest";
import {} from "../src/ejercicio-6/IntfFly"
import {} from "../src/ejercicio-6/Bird"
import { Sparrow } from "../src/ejercicio-6/Sparrow"
import { Penguin } from "../src/ejercicio-6/Penguin"

const ping = new Penguin;
const spar = new Sparrow;

const consoleSpy = vi.spyOn(console, 'log');

describe("Tests Ejercicio-6", () => {
    
    test("Penguin", () => {
        ping.existe();
      
      expect(consoleSpy).toHaveBeenCalledWith('Existiendo...');
    });

    test("Sparrow", () => {
        spar.fly();
      
      expect(consoleSpy).toHaveBeenCalledWith('Flying...');
    });


  });
