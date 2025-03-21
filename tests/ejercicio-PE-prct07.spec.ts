import { describe, expect, test, vi } from "vitest";

import { Observable } from "../src/ejercicio-PE-prct07/int_Observable.js";
import { Observer } from "../src/ejercicio-PE-prct07/int_Observer.js";
import { Movil } from "../src/ejercicio-PE-prct07/Movil.js";
import { Panel } from "../src/ejercicio-PE-prct07/Panel.js";
import { Estacion } from "../src/ejercicio-PE-prct07/Estacion.js";

const miEstacion = new Estacion(1, "Estacion Norte", 15);
const Estacion2 = new Estacion(1, "Estacion Sur", 16)

const movilPersonal = new Movil(0, "Movil Personal");
const panel = new Panel(1, "Panel");

Estacion2.subscribe(movilPersonal);


const consoleSpy = vi.spyOn(console, 'log');

describe("Tests Ejercicio-PE-prct07", () => {
    
    
    test("Subscribir", () => {
        miEstacion.subscribe(panel);
        expect(consoleSpy).toHaveBeenCalledWith("Subscrito!");
    });


    test("Subscribir", () => {
        miEstacion.subscribe(movilPersonal);
        expect(consoleSpy).toHaveBeenCalledWith("Subscrito!");
    });

    test("Unsubscribe", () => {
        miEstacion.unsubscribe(movilPersonal);
        expect(consoleSpy).toHaveBeenCalledWith("No subscrito!");
    });
  

    test("Cambio temperatura", () => {
        miEstacion.temperatura();
        expect(consoleSpy).toHaveBeenCalledWith("Notificacion desde Panel de Estacion Norte cambio de temperatura.");
    });

    test("Cambio temperatura", () => {
        Estacion2.setTemp(40);
        expect(consoleSpy).toHaveBeenCalledWith("Notificacion desde Movil Personal de Estacion Sur cambio de temperatura.");
    });

    test("Cambio temperatura", () => {
        Estacion2.tormenta();
        expect(consoleSpy).toHaveBeenCalledWith("Notificacion desde Movil Personal de Estacion Sur se acerca tormenta.");
    });

    test("Cambio temperatura", () => {
        miEstacion.tormenta();
        expect(consoleSpy).toHaveBeenCalledWith("Notificacion desde Panel de Estacion Norte se acerca tormenta.");
    });

    test("Cambio temperatura", () => {
        //miEstacion.notormenta();
        miEstacion.notormenta();
        expect(consoleSpy).toHaveBeenCalledWith("Notificacion desde Panel de Estacion Norte NO se acerca tormenta.");
    });

    test("Cambio temperatura", () => {
        //miEstacion.notormenta();
        Estacion2.setTorm(false);
        expect(consoleSpy).toHaveBeenCalledWith("Notificacion desde Movil Personal de Estacion Sur NO se acerca tormenta.");
    });

    test("Cambio temperatura", () => {
        //miEstacion.notormenta();
        Estacion2.setTorm(true);
        expect(consoleSpy).toHaveBeenCalledWith("Notificacion desde Movil Personal de Estacion Sur se acerca tormenta.");
    });

    test("Already sub", () => {
        expect(() => {Estacion2.subscribe(movilPersonal)}).toThrowError(/El observer ya está subscrito./);
    });

    test("Already unsub", () => {
        expect(() => {Estacion2.unsubscribe(panel)}).toThrowError(/El observer no está subscrito./);
    });




  });