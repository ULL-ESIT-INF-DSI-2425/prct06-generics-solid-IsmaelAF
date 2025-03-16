import { Printable } from "./IntfPrinter.js";

export class Printer implements Printable {
    /**
     * Señal de que está imprimiendo
     */
    print():void {
        console.log('Printing...');
    }
}