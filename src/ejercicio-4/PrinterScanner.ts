import { Printable } from "./IntfPrinter";
import { Scannable } from "./IntfScanner";

export class PrinterScanner implements Printable, Scannable {
    /**
     * Señal de que está imprimiendo.
     */
    print(): void {
        console.log('Printing...');
    }

    /**
     * Señal de que está escaneando.
     */
    scan(): void {
        console.log('Scanning...');
    }
}
/*
// Client code
const printer = new Printer();
// Printing
printer.print();

const scanner = new Scanner();
// Scanning
scanner.scan();

const printerScanner = new PrinterScanner();
// Printing
printerScanner.print();
// Scanning
printerScanner.scan();
*/