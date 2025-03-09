import { describe, expect, test } from "vitest";
import * as fs from "fs";
import { IntfFile, FileStorage } from "../src/ejercicio-3/FileStorage";
import { DataManager } from "../src/ejercicio-3/DataManager";


//let series = new coleccionSeries()

fs.writeFileSync("example.txt", "prueba tests", "utf-8");
let fs1 = new FileStorage("example.txt");
let fs2 = new FileStorage("ejemploerror.txt");
let fs3 = new FileStorage("ejemploerror2.txt");

let dm1 = new DataManager(fs1);

describe("Tests Ejercicio-3", () => {
    
    test("READ ", () => {
      //expect(coleccionSeries.allInfo()).toEqual([serie1, serie2]);
      //fs.writeFileSync("example.txt", "prueba tests", "utf-8");
      //let fs1 = new FileStorage("example.txt");
      expect(fs1.read()).toBe("prueba tests");
    });

    //test("WRITE ERROR", () => {
        //expect(coleccionSeries.allInfo()).toEqual([serie1, serie2]);
        //fs.writeFileSync("example.txt", "prueba tests", "utf-8");
        //let fs1 = new FileStorage("example.txt");
    //    fs2.write("modificado test");
    //    expect(fs2.read()).toBe("");
    //});

    test("READ ERROR", () => {
        //expect(coleccionSeries.allInfo()).toEqual([serie1, serie2]);
        //fs.writeFileSync("example.txt", "prueba tests", "utf-8");
        //let fs1 = new FileStorage("example.txt");
        expect(fs3.read()).toBe("");
      });

    test("WRITE ", () => {
        //expect(coleccionSeries.allInfo()).toEqual([serie1, serie2]);
        //fs.writeFileSync("example.txt", "prueba tests", "utf-8");
        //let fs1 = new FileStorage("example.txt");
        fs1.write("modificado test")
        expect(fs1.read()).toBe("modificado test");
      });

      test("READ DATAMANAGER", () => {
        //expect(coleccionSeries.allInfo()).toEqual([serie1, serie2]);
        //fs.writeFileSync("example.txt", "prueba tests", "utf-8");
        //let fs1 = new FileStorage("example.txt");
        expect(dm1.read()).toBe("modificado test");
      });

      test("WRITE DATAMANAGER", () => {
        //expect(coleccionSeries.allInfo()).toEqual([serie1, serie2]);
        //fs.writeFileSync("example.txt", "prueba tests", "utf-8");
        //let fs1 = new FileStorage("example.txt");
        dm1.write("modificado2");
        expect(dm1.read()).toBe("modificado2");
      });



    



  });
