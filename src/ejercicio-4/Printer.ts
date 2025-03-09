import { Printable } from "./IntfPrinter";

export class Printer implements Printable {
    /**
     * Señal de que está imprimiendo
     */
    print():void {
        console.log('Printing...');
    }
}