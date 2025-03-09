import { describe, expect, test, vi } from "vitest";
import {Printable} from "../src/ejercicio-4/IntfPrinter"
import {Scannable} from "../src/ejercicio-4/IntfScanner"
import {Printer} from "../src/ejercicio-4/Printer"
import {Scanner} from "../src/ejercicio-4/Scanner"
import {PrinterScanner} from "../src/ejercicio-4/PrinterScanner"
//let series = new coleccionSeries()


// Client code
const printer = new Printer();
// Printing
//printer.print();

const scanner = new Scanner();
// Scanning
//scanner.scan();

const printerScanner = new PrinterScanner();
// Printing
//printerScanner.print();
// Scanning
//printerScanner.scan();




const consoleSpy = vi.spyOn(console, 'log');

describe("Tests Ejercicio-4", () => {
    
    test("Printer", () => {
        printer.print();
      
      expect(consoleSpy).toHaveBeenCalledWith('Printing...');
    });

    test("Scanner", () => {
        scanner.scan();
      
      expect(consoleSpy).toHaveBeenCalledWith('Scanning...');
    });

    test("PrinterScanner Print", () => {
        printerScanner.print();
      
      expect(consoleSpy).toHaveBeenCalledWith('Printing...');
    });

    test("PrinterScanner Scan", () => {
        printerScanner.scan();
      
      expect(consoleSpy).toHaveBeenCalledWith('Scanning...');
    });

 



  });
